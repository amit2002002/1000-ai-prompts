/**
 * PROMPTVAULT 500 - CORE APPLICATION JAVASCRIPT
 * Real-time search, filters, favorites, copy-to-clipboard, theme switcher, modal dialogs & generator studio.
 */

(function () {
  'use strict';

  // --- STATE ---
  const pageCategory = document.body ? document.body.dataset.categoryId : null;

  const state = {
    allPrompts: (window.PROMPTS_DATA && window.PROMPTS_DATA.prompts) ? window.PROMPTS_DATA.prompts : [],
    categories: (window.PROMPTS_DATA && window.PROMPTS_DATA.categories) ? window.PROMPTS_DATA.categories : [],
    activeCategory: pageCategory || 'all',
    searchQuery: '',
    selectedEngine: 'all',
    selectedDifficulty: 'all',
    sortBy: 'popular',
    onlyFavorites: false,
    favorites: JSON.parse(localStorage.getItem('promptvault_favorites') || '[]'),
    visibleCount: pageCategory ? 50 : 18,
    pageSize: 18
  };

  // --- DOM ELEMENTS ---
  const elements = {
    searchInput: document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    filterPills: document.querySelectorAll('.filter-pill'),
    promptsGrid: document.getElementById('prompts-grid'),
    promptsCount: document.getElementById('prompts-count'),
    loadMoreBtn: document.getElementById('load-more-btn'),
    noResults: document.getElementById('no-results'),
    favsNavBtn: document.getElementById('favs-nav-btn'),
    favsBadge: document.getElementById('favs-badge'),
    randomBtn: document.getElementById('random-prompt-btn'),
    // Sidebar
    sidebarToggleBtn: document.getElementById('sidebar-toggle-btn'),
    sidebarCloseBtn: document.getElementById('sidebar-close-btn'),
    sidebar: document.getElementById('app-sidebar'),
    sidebarOverlay: document.getElementById('sidebar-overlay'),
    // Modal
    modalOverlay: document.getElementById('prompt-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalCategory: document.getElementById('modal-category'),
    modalEngine: document.getElementById('modal-engine'),
    modalPrompt: document.getElementById('modal-prompt'),
    modalNegative: document.getElementById('modal-negative'),
    modalTags: document.getElementById('modal-tags'),
    modalCopyBtn: document.getElementById('modal-copy-btn'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    // Studio Builder
    studioCategory: document.getElementById('studio-category'),
    studioStyle: document.getElementById('studio-style'),
    studioRatio: document.getElementById('studio-ratio'),
    studioOutput: document.getElementById('studio-output'),
    studioCopyBtn: document.getElementById('studio-copy-btn'),
    studioRandomizeBtn: document.getElementById('studio-randomize-btn'),
    // Toast
    toastContainer: document.getElementById('toast-container')
  };

  // --- TOAST NOTIFICATIONS ---
  function showToast(message, icon = '✨') {
    if (!elements.toastContainer) {
      const container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
      elements.toastContainer = container;
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    elements.toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  }

  // --- CLIPBOARD COPY ---
  async function copyToClipboard(text, btnElement = null, customSuccessMsg = 'Prompt copied to clipboard! ✨') {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for non-secure / file protocol
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-999999px';
        textarea.style.top = '-999999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }

      showToast(customSuccessMsg);

      if (btnElement) {
        const originalHtml = btnElement.innerHTML;
        btnElement.classList.add('copied');
        btnElement.innerHTML = `<span>✓</span> <span>Copied!</span>`;
        setTimeout(() => {
          btnElement.classList.remove('copied');
          btnElement.innerHTML = originalHtml;
        }, 2200);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
      showToast('Copy failed. Please manually copy the text.', '⚠️');
    }
  }

  // --- FAVORITES ---
  function isFavorite(promptId) {
    return state.favorites.includes(promptId);
  }

  function toggleFavorite(promptId, favBtn) {
    const id = Number(promptId);
    const index = state.favorites.indexOf(id);
    if (index > -1) {
      state.favorites.splice(index, 1);
      if (favBtn) favBtn.classList.remove('favorited');
      showToast('Removed from favorites', '💔');
    } else {
      state.favorites.push(id);
      if (favBtn) favBtn.classList.add('favorited');
      showToast('Saved to your favorites! ❤️');
    }
    localStorage.setItem('promptvault_favorites', JSON.stringify(state.favorites));
    updateFavoritesBadge();

    // If active view is favorites only, re-filter
    if (state.onlyFavorites) {
      renderPrompts();
    }
  }

  function updateFavoritesBadge() {
    if (!elements.favsBadge) return;
    elements.favsBadge.textContent = state.favorites.length;
    elements.favsBadge.style.display = state.favorites.length > 0 ? 'inline-flex' : 'none';
  }

  // --- FILTERING & SEARCH ---
  function getFilteredPrompts() {
    return state.allPrompts.filter(item => {
      // Category filter
      if (state.activeCategory !== 'all' && item.categoryId !== state.activeCategory) {
        return false;
      }

      // Favorites only
      if (state.onlyFavorites && !isFavorite(item.id)) {
        return false;
      }

      // Engine filter
      if (state.selectedEngine !== 'all' && !item.engine.toLowerCase().includes(state.selectedEngine.toLowerCase())) {
        return false;
      }

      // Search query
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesPrompt = item.prompt.toLowerCase().includes(q);
        const matchesCategory = item.categoryName.toLowerCase().includes(q);
        const matchesTags = item.tags && item.tags.some(tag => tag.toLowerCase().includes(q));

        if (!matchesTitle && !matchesPrompt && !matchesCategory && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }

  // --- RENDERING PROMPT CARDS ---
  function createPromptCard(item) {
    const isFav = isFavorite(item.id);
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.dataset.id = item.id;

    card.innerHTML = `
      <div class="card-top">
        <span class="card-category-tag">
          <span>${item.categoryIcon || '🎨'}</span> ${item.categoryName}
        </span>
        <div class="card-actions-top">
          <button class="fav-btn ${isFav ? 'favorited' : ''}" data-id="${item.id}" title="${isFav ? 'Remove Favorite' : 'Save to Favorites'}">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
      
      <h3 class="prompt-title">${item.title}</h3>

      <div class="prompt-box" title="Click to view full prompt" data-id="${item.id}">
        ${item.prompt}
      </div>

      <div class="prompt-meta-pills">
        <span class="meta-pill engine">⚡ ${item.engine}</span>
        <span class="meta-pill ratio">📐 ${item.aspectRatio.split(' ')[0]}</span>
        <span class="meta-pill">🎯 ${item.difficulty.split(' ')[0]}</span>
      </div>

      <div class="card-footer">
        <button class="copy-btn" data-prompt="${encodeURIComponent(item.prompt)}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>Copy Prompt</span>
        </button>
        <button class="view-modal-btn" data-id="${item.id}" title="View details and parameters">
          Details ↗
        </button>
      </div>
    `;

    return card;
  }

  function renderPrompts() {
    if (!elements.promptsGrid) return;

    const filtered = getFilteredPrompts();

    if (elements.promptsCount) {
      elements.promptsCount.textContent = `${filtered.length} Prompt${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      elements.promptsGrid.innerHTML = '';
      if (elements.noResults) elements.noResults.style.display = 'block';
      if (elements.loadMoreBtn) elements.loadMoreBtn.style.display = 'none';
      return;
    }

    if (elements.noResults) elements.noResults.style.display = 'none';

    // Slice for visible pagination
    const visiblePrompts = filtered.slice(0, state.visibleCount);
    elements.promptsGrid.innerHTML = '';

    const fragment = document.createDocumentFragment();
    visiblePrompts.forEach(item => {
      fragment.appendChild(createPromptCard(item));
    });
    elements.promptsGrid.appendChild(fragment);

    // Show/hide Load More button
    if (elements.loadMoreBtn) {
      if (state.visibleCount < filtered.length) {
        elements.loadMoreBtn.style.display = 'inline-flex';
        elements.loadMoreBtn.textContent = `Load More Prompts (${filtered.length - state.visibleCount} remaining)`;
      } else {
        elements.loadMoreBtn.style.display = 'none';
      }
    }
  }

  // --- MODAL DIALOG ---
  function openPromptModal(promptId) {
    const item = state.allPrompts.find(p => p.id === Number(promptId));
    if (!item || !elements.modalOverlay) return;

    elements.modalTitle.textContent = item.title;
    elements.modalCategory.textContent = `${item.categoryIcon} ${item.categoryName}`;
    elements.modalEngine.textContent = `${item.engine} • ${item.aspectRatio}`;
    elements.modalPrompt.textContent = item.prompt;
    elements.modalNegative.textContent = item.negativePrompt || 'None specified';

    if (elements.modalTags) {
      elements.modalTags.innerHTML = item.tags.map(t => `<span class="meta-pill">#${t}</span>`).join(' ');
    }

    elements.modalCopyBtn.onclick = () => {
      copyToClipboard(item.prompt, elements.modalCopyBtn, 'Full Prompt Copied! ✨');
    };

    elements.modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!elements.modalOverlay) return;
    elements.modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- RANDOM PROMPT GENERATOR ---
  function triggerRandomPrompt() {
    if (state.allPrompts.length === 0) return;
    const randomIndex = Math.floor(Math.random() * state.allPrompts.length);
    const randomItem = state.allPrompts[randomIndex];

    if (elements.randomBtn) {
      elements.randomBtn.classList.add('spinning');
      setTimeout(() => elements.randomBtn.classList.remove('spinning'), 800);
    }

    showToast(`Rolled: "${randomItem.title}"! 🎲`);
    openPromptModal(randomItem.id);
  }

  // --- STUDIO / CUSTOM BUILDER ---
  function initStudio() {
    if (!elements.studioCategory || !elements.studioOutput) return;

    function updateStudioPrompt() {
      const catVal = elements.studioCategory.value;
      const styleVal = elements.studioStyle.value;
      const ratioVal = elements.studioRatio.value;

      const generated = `Artistic ${catVal}, in the style of ${styleVal}, clean continuous contour lines, pure white background, no grayscale shading, crisp vector lines, masterwork adult coloring page style, ultra-detailed line art, 8k resolution --ar ${ratioVal} --v 6.0 --no shading, color, blur, noise, watermark`;

      elements.studioOutput.textContent = generated;
    }

    elements.studioCategory.addEventListener('change', updateStudioPrompt);
    elements.studioStyle.addEventListener('change', updateStudioPrompt);
    elements.studioRatio.addEventListener('change', updateStudioPrompt);

    if (elements.studioCopyBtn) {
      elements.studioCopyBtn.addEventListener('click', () => {
        copyToClipboard(elements.studioOutput.textContent, elements.studioCopyBtn, 'Custom studio prompt copied! ✨');
      });
    }

    if (elements.studioRandomizeBtn) {
      elements.studioRandomizeBtn.addEventListener('click', () => {
        const randCat = elements.studioCategory.options[Math.floor(Math.random() * elements.studioCategory.options.length)].value;
        const randStyle = elements.studioStyle.options[Math.floor(Math.random() * elements.studioStyle.options.length)].value;
        const randRatio = elements.studioRatio.options[Math.floor(Math.random() * elements.studioRatio.options.length)].value;

        elements.studioCategory.value = randCat;
        elements.studioStyle.value = randStyle;
        elements.studioRatio.value = randRatio;

        updateStudioPrompt();
        showToast('Generated new prompt formula! 🔮');
      });
    }

    updateStudioPrompt();
  }

  // --- SIDEBAR DRAWER ---
  function openSidebar() {
    if (elements.sidebar) elements.sidebar.classList.add('open');
    if (elements.sidebarOverlay) elements.sidebarOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (elements.sidebar) elements.sidebar.classList.remove('open');
    if (elements.sidebarOverlay) elements.sidebarOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- EVENT LISTENERS ---
  function initEventListeners() {
    // Search input
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        state.visibleCount = state.pageSize;
        if (elements.searchClearBtn) {
          elements.searchClearBtn.style.display = state.searchQuery ? 'inline-flex' : 'none';
        }
        renderPrompts();
      });

      // Keyboard shortcut '/' or Ctrl+K to focus search
      window.addEventListener('keydown', (e) => {
        if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && document.activeElement !== elements.searchInput) {
          e.preventDefault();
          elements.searchInput.focus();
        } else if (e.key === 'Escape') {
          closeModal();
          closeSidebar();
        }
      });
    }

    if (elements.searchClearBtn) {
      elements.searchClearBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.searchQuery = '';
        elements.searchClearBtn.style.display = 'none';
        elements.searchInput.focus();
        renderPrompts();
      });
    }

    // Filter Pills
    elements.filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        elements.filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const cat = pill.dataset.category;
        state.activeCategory = cat;
        state.visibleCount = state.pageSize;
        state.onlyFavorites = false;
        renderPrompts();
      });
    });

    // Favorites Nav Button
    if (elements.favsNavBtn) {
      elements.favsNavBtn.addEventListener('click', (e) => {
        e.preventDefault();
        state.onlyFavorites = !state.onlyFavorites;
        elements.favsNavBtn.classList.toggle('active', state.onlyFavorites);

        // Deselect filter pills if viewing favorites
        if (state.onlyFavorites) {
          elements.filterPills.forEach(p => p.classList.remove('active'));
          showToast(`Viewing ${state.favorites.length} saved favorites ❤️`);
        } else {
          document.querySelector('.filter-pill[data-category="all"]')?.classList.add('active');
          state.activeCategory = 'all';
        }

        state.visibleCount = state.pageSize;
        renderPrompts();
      });
    }

    // Load More Button
    if (elements.loadMoreBtn) {
      elements.loadMoreBtn.addEventListener('click', () => {
        state.visibleCount += state.pageSize;
        renderPrompts();
      });
    }

    // Random Prompt Button
    if (elements.randomBtn) {
      elements.randomBtn.addEventListener('click', triggerRandomPrompt);
    }

    // Sidebar toggle events
    if (elements.sidebarToggleBtn) {
      elements.sidebarToggleBtn.addEventListener('click', openSidebar);
    }
    if (elements.sidebarCloseBtn) {
      elements.sidebarCloseBtn.addEventListener('click', closeSidebar);
    }
    if (elements.sidebarOverlay) {
      elements.sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Modal Events
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', closeModal);
    }

    if (elements.modalOverlay) {
      elements.modalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.modalOverlay) {
          closeModal();
        }
      });
    }

    // Delegated clicks for Card buttons (Copy, Favorite, Details)
    if (elements.promptsGrid) {
      elements.promptsGrid.addEventListener('click', (e) => {
        // Copy button clicked
        const copyBtn = e.target.closest('.copy-btn');
        if (copyBtn) {
          const encodedPrompt = copyBtn.dataset.prompt;
          if (encodedPrompt) {
            copyToClipboard(decodeURIComponent(encodedPrompt), copyBtn);
          }
          return;
        }

        // Favorite button clicked
        const favBtn = e.target.closest('.fav-btn');
        if (favBtn) {
          const promptId = favBtn.dataset.id;
          toggleFavorite(promptId, favBtn);
          return;
        }

        // Prompt box or Details button clicked -> open modal
        const viewBtn = e.target.closest('.view-modal-btn');
        const promptBox = e.target.closest('.prompt-box');
        if (viewBtn || promptBox) {
          const promptId = (viewBtn ? viewBtn.dataset.id : promptBox.dataset.id);
          openPromptModal(promptId);
          return;
        }
      });
    }
  }

  // --- INITIALIZATION ---
  function init() {
    updateFavoritesBadge();
    initEventListeners();
    initStudio();
    renderPrompts();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API for subpages
  window.PROMPTVAULT_APP = {
    state,
    copyToClipboard,
    toggleFavorite,
    showToast,
    openPromptModal
  };

})();
