// 500 AI Prompt Library Data
const CATEGORIES = [
  {
    id: 'cute-animals-pets',
    name: 'Cute Animals & Pets',
    slug: 'cute-animals-pets',
    icon: '🐾',
    count: 75,
    tagline: '75 Designs • 150 Prompts (Black & White + Colored References)',
    description: 'Heartwarming coloring & digital art prompts featuring kittens, puppies, otters, pandas, bunnies, and pocket pets with paired black-and-white line art and colored reference images.',
    gradient: 'linear-gradient(135deg, #FF6B8B 0%, #FFA07A 100%)',
    accentColor: '#FF6B8B',
    bgTint: 'rgba(255, 107, 139, 0.12)',
    page: 'pages/cute-animals-pets.html'
  },
  {
    id: 'ocean-sea-animals',
    name: 'Ocean & Sea Animals',
    slug: 'ocean-sea-animals',
    icon: '🐋',
    count: 40,
    tagline: '40 Designs • 80 Prompts (Black & White + Colored References)',
    description: 'Playful baby dolphins, cute whales, sea turtles, clownfish, seahorses, and coral reef scenes with paired black-and-white line art and colored reference images.',
    gradient: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
    accentColor: '#00C6FF',
    bgTint: 'rgba(0, 198, 255, 0.12)',
    page: 'pages/ocean-sea-animals.html'
  },
  {
    id: 'kawaii-food-desserts',
    name: 'Kawaii Food & Desserts',
    slug: 'kawaii-food-desserts',
    icon: '🧁',
    count: 50,
    tagline: '50 Designs • 100 Prompts (Black & White + Colored References)',
    description: 'Smiling strawberries, cute cupcakes, boba tea cups, ramen bowls, and kawaii sushi with paired black-and-white line art and colored reference images.',
    gradient: 'linear-gradient(135deg, #F355A2 0%, #FFB6C1 100%)',
    accentColor: '#F355A2',
    bgTint: 'rgba(243, 85, 162, 0.12)',
    page: 'pages/kawaii-food-desserts.html'
  },
  {
    id: 'flowers-gardens',
    name: 'Flowers & Gardens',
    slug: 'flowers-gardens',
    icon: '🌸',
    count: 50,
    tagline: '50 Designs • 100 Prompts (Black & White + Colored References)',
    description: 'Sunflowers, roses, daisies, wildflower bouquets, greenhouse carts, and garden benches with paired black-and-white line art and colored reference images.',
    gradient: 'linear-gradient(135deg, #10B981 0%, #84CC16 100%)',
    accentColor: '#10B981',
    bgTint: 'rgba(16, 185, 129, 0.12)',
    page: 'pages/flowers-gardens.html'
  },
  {
    id: 'fantasy-magical-creatures',
    name: 'Fantasy & Magical Creatures',
    slug: 'fantasy-magical-creatures',
    icon: '✨',
    count: 40,
    tagline: '40 Designs • 80 Prompts (Black & White + Colored References)',
    description: 'Cute unicorns, baby dragons, playful fairies, gentle mermaids, baby phoenixes, and enchanted castles with paired black-and-white line art and colored reference images.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)',
    accentColor: '#8B5CF6',
    bgTint: 'rgba(139, 92, 246, 0.12)',
    page: 'pages/fantasy-magical-creatures.html'
  },
  {
    id: 'dinosaurs-prehistoric',
    name: 'Dinosaurs & Prehistoric',
    slug: 'dinosaurs-prehistoric',
    icon: '🦖',
    count: 50,
    tagline: '50 Designs • 100 Prompts (Black & White + Colored References)',
    description: 'Baby T-Rex, Triceratops, Stegosaurus, ancient marine flyers, and Ice Age creatures with paired black-and-white line art and colored reference images.',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    accentColor: '#F59E0B',
    bgTint: 'rgba(245, 158, 11, 0.12)',
    page: 'pages/dinosaurs-prehistoric.html'
  },
  {
    id: 'vehicles-transportation',
    name: 'Vehicles & Transportation',
    slug: 'vehicles-transportation',
    icon: '🚀',
    count: 35,
    tagline: '35 Designs • 70 Prompts (Black & White + Colored References)',
    description: 'Happy cars, fire trucks, steam locomotives, bicycles, airplanes, rockets, and sailboats with paired black-and-white line art and colored reference images.',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #EF4444 100%)',
    accentColor: '#EC4899',
    bgTint: 'rgba(236, 72, 153, 0.12)',
    page: 'pages/vehicles-transportation.html'
  },
  {
    id: 'cozy-bold-easy',
    name: 'Cozy, Bold & Easy',
    slug: 'cozy-bold-easy',
    icon: '☕',
    count: 75,
    tagline: '75 Designs • 150 Prompts (Black & White + Colored References)',
    description: 'Hygge reading nooks, hot cocoa mugs, baking treats, relaxing hobbies, and mushroom cottages with paired black-and-white line art and colored reference images.',
    gradient: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
    accentColor: '#F97316',
    bgTint: 'rgba(249, 115, 22, 0.12)',
    page: 'pages/cozy-bold-easy.html'
  },
  {
    id: 'relaxation-mindfulness',
    name: 'Relaxation & Mindfulness',
    slug: 'relaxation-mindfulness',
    icon: '🧘',
    count: 35,
    tagline: '35 Designs • 70 Prompts (Black & White + Colored References)',
    description: 'Mindful meditation poses, calming mountain landscapes, tranquil garden ponds, cozy reading corners, and floral mandalas with paired black-and-white line art and colored reference images.',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
    accentColor: '#06B6D4',
    bgTint: 'rgba(6, 182, 212, 0.12)',
    page: 'pages/relaxation-mindfulness.html'
  },
  {
    id: 'seasonal-holiday',
    name: 'Seasonal & Holiday',
    slug: 'seasonal-holiday',
    icon: '🎄',
    count: 50,
    tagline: '50 Designs • 100 Prompts (Black & White + Colored References)',
    description: 'Easter bunnies, spring gardens, summer beach scenes, autumn pumpkins, spooky-cute ghosts, Thanksgiving turkeys, Christmas trees, and holiday celebrations with paired black-and-white line art and colored reference images.',
    gradient: 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)',
    accentColor: '#E11D48',
    bgTint: 'rgba(225, 29, 72, 0.12)',
    page: 'pages/seasonal-holiday.html'
  }
];

// Helper to assemble 50 unique, production-ready prompts per category (Total = 500)
function generate500Prompts() {
  const seedData = {
    'cute-animals-pets': {
      subjects: [
        'Golden Retriever puppy wrapped in a knitted scarf', 'Fluffy ginger kitten sleeping inside an oversized teacup',
        'Baby river otter floating on its back holding a sea star', 'Curious baby red panda peeking from behind bamboo shoots',
        'Corgi wearing round retro sunglasses on a summer beach', 'Tiny dwarf hamster nibbling a sunflower seed in a miniature room',
        'Playful french bulldog wearing a rain slicker and boots', 'Fluffy Holland lop bunny sitting amid spring clover',
        'Baby hedgehog curled up peacefully in human hands', 'Sleepy baby sloth hanging from a blooming flowering branch',
        'Chubby baby penguin waddling on snowy ice floes', 'Pair of affectionate red foxes nuzzling in autumn leaves',
        'Friendly alpaca wearing a colorful Peruvian pompom halter', 'Baby capybara relaxing with a yuzu fruit balanced on its head',
        'Siamese cat with sapphire eyes sitting on an antique bookshelf', 'Border collie chasing floating soap bubbles in an open field',
        'Baby raccoon eating watermelon on a picnic checkered blanket', 'Pomeranian dog shaped like a fluffy cloud with a pink bow',
        'Little woodland chipmunk stuffing cheeks with acorns', 'Baby seal with glossy black eyes on smooth shore pebbles',
        'Curious ferret peeking out of a wool sweater pocket', 'Maine Coon kitten with oversized lynx-tipped ears',
        'Playful baby badger digging in a mossy woodland glen', 'Chinchilla taking a sand bath in a miniature ceramic dish',
        'Baby koala clinging snugly to its mother’s back on eucalyptus'
      ],
      styles: ['Clean bold line art coloring page, no shading, high contrast vector lines', 'Delicate watercolor storybook illustration with pastel undertones', 'Chibi animated character portrait, soft studio lighting', 'Vibrant comic book illustration with crisp ink outlines']
    },
    'ocean-sea-animals': {
      subjects: [
        'Graceful sea turtle gliding through sun-dappled coral reef', 'Luminescent moon jellyfish pulsating in deep oceanic trenches',
        'Majestic humpback whale breaching beneath golden sunset rays', 'Playful pod of spinner dolphins leaping over turquoise waves',
        'Tiny striped seahorse anchored around purple sea lavender', 'Giant Pacific octopus weaving through sunken galleon treasure',
        'Manta ray soaring gracefully like a bird over sandy seafloor', 'Clownfish sheltering within waving tentacles of sea anemone',
        'Great white shark swimming calmly along underwater kelp forest', 'Whale shark accompanied by a school of shimmering pilot fish',
        'Curious sea otter diving for clams in rich kelp canopy', 'Bioluminescent anglerfish illuminating the abyssal midnight zone',
        'Family of playful sea lions doing underwater acrobatics', 'Vibrant harlequin shrimp perching on textured sea sponge',
        'Spotted eagle ray gliding across shallow crystal-clear lagoon', 'Crown of thorns starfish crawling over ancient brain coral',
        'Sperm whale encountering a giant squid in oceanic depths', 'School of gleaming silver barracudas in a cyclone formation',
        'Nautilus shell spiraling through twilight ocean currents', 'Hammerhead shark silhouette against sunbeams breaking through surf',
        'Beluga whale smiling kindly near Arctic glacier wall', 'Moray eel peeking from a limestone coral cave nook',
        'Deep-sea dumbo octopus flapping ear-like fins in dark water', 'Narwhal with shimmering ivory tusk in icy blue waters',
        'Basking shark with wide open filter-feeding mouth in morning mist'
      ],
      styles: ['Detailed marine coloring page, sharp black line work, clean white background', 'Bioluminescent digital painting, glowing neon accents on midnight blue', 'Ethereal Japanese ukiyo-e woodblock style ocean wave art', 'Hyper-detailed scientific botanical and zoological plate illustration']
    },
    'kawaii-food-desserts': {
      subjects: [
        'Smiling boba milk tea cup with tapioca pearls winking', 'Happy stack of buttermilk pancakes dripping maple syrup with butter cube',
        'Kawaii salmon nigiri and avocado maki rolls smiling together', 'Cute strawberry shortcake slice topped with whipped cream and cherry',
        'Steaming bowl of tonkotsu ramen with smiling boiled egg halves', 'Chubby cat-shaped mochi pastries dusting in powdered sugar',
        'Double-scoop waffle ice cream cone with rainbow sprinkle confetti', 'Adorable glazed ring donut with cute blush cheeks and sprinkles',
        'Crispy taco character wearing a tiny sombrero holding hot sauce', 'Smiling box of french fries with heart-shaped ketchup dip',
        'Cute burger with sesame seed bun, melted cheese, and waving lettuce', 'Kawaii matcha iced latte with whipped cream and bear straw',
        'Trio of smiling French macarons stacked with pastel filling', 'Cute pizza slice stretching gooey melted mozzarella string',
        'Happy cupcake with swirl frosting and star candy topper', 'Kawaii onigiri rice ball wrapped in seaweed sheet with happy face',
        'Little strawberry milk carton with retro Japanese typography', 'Fluffy Japanese soufflé pancakes wobbling happily on ceramic plate',
        'Cute marshmallow buddies floating in a hot cocoa mug', 'Smiling crepe cone filled with kiwi, banana, and strawberry slices',
        'Kawaii cinnamon roll with cream cheese frosting glaze and cute smile', 'Smiling bento box filled with animal-shaped rice and veggies',
        'Little smiling dumpling sitting inside a bamboo steamer', 'Cute watermelon slice smiling with shiny black seed freckles',
        'Adorable honey jar with wooden dipper and buzzing cartoon bee'
      ],
      styles: ['Thick line kawaii coloring book page, bold simple outlines, minimal detail', 'Pastel anime vector graphic, soft gradient blush, clean sticker aesthetic', '3D claymation miniature render, cute matte plastic textures, soft lighting', 'Hand-drawn marker doodle illustration, playful sticker sheet style']
    },
    'flowers-gardens': {
      subjects: [
        'Enchanted glass Victorian greenhouse filled with exotic tropical palms', 'Lush English cottage garden bursting with foxgloves, peonies, and bees',
        'Arched trellis overflowing with blooming climbing David Austin roses', 'Japanese zen garden with cherry blossom petals floating on reflecting pool',
        'Endless field of golden sunflowers facing a dramatic morning sunrise', 'Intricate succulent terrarium with geometric glass facets and moss',
        'Whispering meadow of wild lavender and poppies under lilac skies', 'Cottage window box filled with bright red geraniums and trailing ivy',
        'Ornate wrought iron garden gate draped in wisteria blossoms', 'Secret courtyard garden centered around a carved stone water fountain',
        'Botanical arrangement of rare orchids and monstera deliciosa leaves', 'Wildflower spiral labyrinth nestled in a misty forest clearing',
        'Cozy potting shed bench with ceramic clay pots, shears, and seedlings', 'Grand botanical conservatory atrium with spiral staircase and ferns',
        'Field of multicolored Dutch tulips blooming beneath vintage windmill', 'Bonsai juniper tree growing atop a weathered mossy boulder',
        'Magical night garden with night-blooming jasmine and glowing fireflies', 'Botanical mandala made of pressed pressed daisies, ferns, and rose petals',
        'Ancient gnarled olive tree surrounded by wild rosemary and poppies', 'Stunning water lily pond inspired by Monet with wooden footbridge',
        'Rustic flower cart loaded with wrapped bouquets of eucalyptus and dahlias', 'Pergola shaded by heavy sweet grape vines and blooming climbing roses',
        'Lush moss terrarium with tiny mushrooms, miniature ferns, and river pebbles', 'Dahlia blossom in macro extreme close-up showing spiral petal geometry',
        'Sunlit forest floor carpeted with bluebell flowers and soft morning mist'
      ],
      styles: ['Intricate floral coloring book design, ultra-clean contour lines, high detail', 'Romantic vintage botanical lithograph with aged sepia ink tones', 'Impressionistic oil painting with vibrant impasto brushstrokes', 'Modern minimalist flat-vector botanical art, organic earthy palette']
    },
    'fantasy-magical-creatures': {
      subjects: [
        'Majestic celestial dragon wrapped around a glowing crescent moon', 'Ethereal baby unicorn drinking from an enchanted crystalline spring',
        'Fiery golden phoenix rising from smoldering ashes with ember feathers', 'Nine-tailed celestial kitsune fox floating in starry stardust nebula',
        'Tiny fairy with iridescent dragonfly wings sleeping in a bluebell flower', 'Ancient forest treant guardian entwined with ivy and glowing runes',
        'Majestic winged pegasus soaring above cloud-shrouded mountain peaks', 'Whimsical baby griffin playing with a gleaming golden orb',
        'Mermaid with shimmering iridescent scales perched on sea rock at twilight', 'Cozy gnome cottage carved into the trunk of an ancient hollow oak',
        'Crystal dragon whose scales refract rainbow prism lights', 'Majestic lunar moth spirit with swirling ethereal dust wings',
        'Enchanted library with floating spellbooks and candle wisps', 'Gentle sea serpent emerging playfully beside an ancient lighthouse',
        'Golden horned kirin trotting across blooming cloud meadows', 'Shadow panther with glowing violet eyes in enchanted bioluminescent woods',
        'Fairy queen sitting upon a throne of intertwined willow boughs', 'Baby hydra with three cheerful curious heads exploring a mushroom circle',
        'Astral wolf howling at a celestial constellation of stars', 'Clockwork mechanical owl with intricate brass cogs and gemstone eyes',
        'Enchanted cottage with smoking chimney perched on a floating sky island', 'Forest dryad morphing gracefully from birch bark into female form',
        'Mystical sphinx guarding an ancient illuminated desert temple portal', 'Playful goblin alchemist brewing colorful sparkling potions in flasks',
        'Valkyrie with gleaming feather wings and spear standing atop mountain crest'
      ],
      styles: ['Fantasy adult coloring book page, hyper-detailed pen and ink line art', 'Epic concept art, cinematic rim lighting, volumetric atmospheric fog', 'Luminous fantasy storybook digital painting, ethereal magical glow', 'Dark fantasy etching style with cross-hatching and fine ornamental borders']
    },
    'dinosaurs-prehistoric': {
      subjects: [
        'Gentle baby Brachiosaurus reaching its long neck toward tender canopy leaves', 'Friendly flower-crowned Tyrannosaurus Rex sharing a gentle moment with butterflies',
        'Triceratops family grazing peacefully by a sunlit prehistoric riverbank', 'Flock of Pterodactyls soaring over steaming volcanic mountain ridges',
        'Stegosaurus with diamond-shaped dorsal plates basking on mossy sandstone', 'Baby Velociraptor hatching curiously from a textured stone egg',
        'Ankylosaurus with heavy armored shell and club tail drinking at waterhole', 'Parasaurolophus with majestic curved crest calling across misty red canyon',
        'Mother Spinosaurus swimming gracefully through prehistoric brackish marsh', 'Dimetrodon with vibrant sun-sail warming up on ancient volcanic rocks',
        'Baby dinosaurs having a playful mud bath in primitive fern wetlands', 'Giant prehistoric dragonfly Meganeura resting on giant horsetail reed',
        'Pachycephalosaurus ramming display amidst primitive cycad tree groves', 'Gentle woolly mammoth trudging through prehistoric snowdrift landscape',
        'Smilodon saber-toothed cat perched gracefully on cliff overhang', 'Plesiosaur gliding through primordial warm ocean surrounded by ammonites',
        'Iguanodon foraging through lush Cretaceous flowering plant undergrowth', 'Carnotaurus with distinctive brow horns surveying Jurassic horizon',
        'Therizinosaurus with enormous gentle scythe claws harvesting tree bark', 'Prehistoric cave paintings depicting ancient hunts on stone wall',
        'Baby T-Rex running gleefully after prehistoric lizards', 'Deinonychus pack hunting through dense ancient coniferous forest',
        'Archaeopteryx bird-dinosaur perched on a prehistoric blooming magnolia branch', 'Gigantic Titanosaur herd migrating across vast prehistoric plains at dusk',
        'Cute cartoon baby dinos playing peekaboo behind ancient dinosaur bones'
      ],
      styles: ['Clean bold line art coloring page, sharp contours, easy-to-color zones', 'Cretaceous wildlife paleo-art illustration, realistic textured scales', 'Cute vintage golden-age cartoon dinosaur style, friendly rounded features', 'Dramatic scientific anatomical fossil and skeleton museum lithograph']
    },
    'vehicles-transportation': {
      subjects: [
        'Classic 1960s Volkswagen camper van parked on a coastal cliff with surfboards', 'Majestic vintage steam locomotive puffing white smoke across curved viaduct',
        'Spectacular hot air balloon festival filling morning sky over Cappadocia', 'Rustic vintage bicycle with wicker basket loaded with fresh baguettes and blooms',
        'Futuristic solar-sail spacecraft traveling through colorful nebulae ring', 'Cozy wooden canal narrowboat cruising through tranquil willow-lined locks',
        'Classic cherry red 1957 convertible cruising down desert Route 66', 'Vintage seaplane moored beside an emerald green remote alpine lake',
        'Charming European cable car tram climbing a steep cobbled historic hill', 'Steampunk flying airship with brass propellers floating through clouds',
        'Sleek high-speed Japanese bullet train slicing through cherry blossom countryside', 'Traditional Venetian gondola gliding under moonlit stone bridge of sighs',
        'Rugged 4x4 expedition vehicle crossing a shallow mountain stream bed', 'Classic Vespa scooter parked in front of colorful Italian cafe patio',
        'Old fashioned paddle steamer riverboat navigating the Mississippi at twilight', 'Cozy camper trailer decorated with fairy string lights in pine woods',
        'Sleek modern electric supercar glowing in neon cyberpunk city rain', 'Classic sailing clipper ship with full white canvas rigging on rolling ocean',
        'Helicopter flying low over lush tropical Hawaiian waterfalls', 'Vintage agricultural tractor resting in a golden wheat harvest field',
        'Submersible research submarine exploring coral wall with headlamps', 'Classic London double decker red bus crossing historic bridge in autumn',
        'Sleek monorail train gliding above a lush futuristic solarpunk city', 'Vintage racing motorbike with polished chrome and leather saddlebag',
        'Space exploration rover traversing the crimson dunes of Mars under starry sky'
      ],
      styles: ['Technical line drawing coloring page, blueprint precision, clean vector paths', 'Retro travel poster style with bold gouache colors and vintage typography', 'Cyberpunk neon concept art, high-tech reflections and dynamic motion blur', 'Crisp architectural and industrial ink sketch with watercolor wash']
    },
    'cozy-bold-easy': {
      subjects: [
        'Hygge reading corner with overstuffed armchair, knit blanket, and steaming tea', 'Rainy afternoon windowsill with sleeping cat, succulent pots, and raindrop glass',
        'Stacks of antique hardbound books topped with vintage round reading glasses', 'Warm fireplace mantle decorated with pinecones, dried oranges, and stockings',
        'Cozy breakfast in bed tray with croissant, coffee mug, and miniature flower vase', 'Rustic wooden kitchen shelf filled with ceramic jars, spice tins, and dried herbs',
        'Fluffy oversized sweater draped over a wooden rocker beside a basket of yarn', 'Cozy camper van interior with fairy lights, pillows, and map pinned to corkboard',
        'Autumn front porch vignette with carved pumpkins, corn stalks, and plaid mat', 'Little neighborhood bakery storefront with striped awning and chalkboard menu',
        'Cozy bathtub surrounded by glowing candles, eucalyptus leaves, and bath tray', 'Rustic cabin breakfast nook with waffle maker, maple syrup, and ceramic mugs',
        'Vintage record player spinning vinyl LP beside stack of classic record jackets', 'Comfortable hammock suspended between two birch trees on a breezy afternoon',
        'Cozy artist work desk with paintbrushes, watercolor tins, and sketchbook', 'Warm bowl of homemade chicken noodle soup with crusty artisan sourdough bread',
        'Quaint wooden garden bench under weeping willow with open journal and fountain pen', 'Sleepy corgi curled inside a giant wool sock by the radiator',
        'Rustic greenhouse potting bench with terracotta pots and brass watering can', 'Comfortable tent campsite at twilight with warm campfire and roasted marshmallows',
        'Cozy kitchen counter with freshly baked loaf of crusty sourdough on wooden board', 'Chunky knit scarf being knitted on wooden circular needles with skeins of wool',
        'Vintage typewriter with parchment paper and a freshly typed poetic stanza', 'Cozy coffee shop corner booth with stained glass pendant lamp and warm wood',
        'Peaceful wooden mountain cabin enveloped in gentle, silent snowfall'
      ],
      styles: ['Bold and easy thick black line art, cozy coloring book style, no small details', 'Scandinavian hygge lifestyle vector graphic, warm minimalist palette', 'Charming cottagecore ink sketch with gentle organic hatching', 'Lofi cozy anime background art, warm ambient lighting, peaceful mood']
    },
    'relaxation-mindfulness': {
      subjects: [
        'Tranquil Japanese dry rock zen garden with raked concentric sand ripples', 'Intricate balanced stone cairn perched beside calm, reflective mountain lake',
        'Sacred geometric mandala with lotus petals and harmonious radial symmetry', 'Serene outdoor meditation pavilion surrounded by bamboo forest and wind chimes',
        'Golden koi fish swimming in serene circular pond with floating lotus pads', 'Calm morning yoga silhouette on wooden dock facing a glass-like sunrise lake',
        'Whispering bamboo grove with warm morning sunbeams piercing through misty canopy', 'Handmade singing bowls, burning sage stick, and raw amethyst crystal cluster',
        'Peaceful forest waterfall cascading into crystal clear turquoise pool', 'Intricate labyrinth walking path surrounded by fragrant wild lavender bushes',
        'Ancient cedar bonsai tree with twisting trunk and delicate needle clouds', 'Symmetrical hamsa hand talisman adorned with intricate floral and eye patterns',
        'Tranquil mountain peak rising above a silent ocean of rolling morning clouds', 'Gentle incense smoke curling gracefully into air beside polished river pebbles',
        'Serene wooden footbridge arching across quiet water lily garden', 'Intricate lotus flower blooming from calm dark water under silver moonlight',
        'Minimalist zen circle Ensō brushstroke with delicate ink splatter droplets', 'Peaceful hammock retreat swinging beside gentle babbling forest brook',
        'Lush moss garden path with ancient carved stone Toro lantern', 'Deep meditation cavern with hanging glowing crystals and subterranean pool',
        'Warm cup of ceremonial matcha tea with traditional bamboo whisk and bowl', 'Abstract calming fluid waves with smooth flowing organic curves',
        'Quiet forest reading spot shaded by spreading canopy of weeping willow', 'Peaceful desert twilight with silhouetted Joshua trees and starry cosmos',
        'Ethereal tree of life with deep roots and sprawling branches touching constellations'
      ],
      styles: ['Intricate meditative mandala coloring page, balanced sacred geometry', 'Calming minimalist Japanese sumi-e black ink brush painting on rice paper', 'Soft pastel tranquil landscape, gentle gradients and peaceful atmospheric haze', 'Fluid abstract continuous line art, harmonious flowing modern aesthetic']
    },
    'seasonal-holiday': {
      subjects: [
        'Spooky cute Halloween jack-o-lanterns glowing on porch steps with candy corn', 'Snow-dusted gingerbread village with peppermint roofs and royal icing trim',
        'Delightful spring Easter bunny in pasture decorating patterned pastel eggs', 'Warm Thanksgiving harvest table overflowing with pumpkins, corn, and gourds',
        'Cozy Christmas living room with decorated pine tree, stockings, and wood stove', 'Festive Chinese New Year dragon dance with red silk lanterns and firecrackers',
        'Joyful summer beach barbecue with tiki torches, watermelon slices, and surfboards', 'Whimsical autumn harvest wagon filled with heirloom apples and sunflower bouquets',
        'Valentine’s day bakery display with heart-shaped frosted sugar cookies and bows', 'Enchanted winter forest where animals gather around evergreen lit by fireflies',
        'Cheerful snowman with carrot nose, top hat, and knitted scarf waving to birds', 'Festive Day of the Dead sugar skull ornate with marigolds and folk patterns',
        'St. Patrick’s day leprechaun pot of gold at the end of vibrant rainbow arch', 'Midsummer solstice flower crown of daisies, poppies, and wheat grass',
        'Spooky cute ghost drinking hot cocoa under autumn full moon', 'Christmas Eve rooftop with reindeer silhouettes flying across illuminated moon',
        'Spring blossom festival with fluttering paper lanterns along riverbank', 'New Year’s Eve champagne toast with sparkling golden confetti and clock countdown',
        'Winter bird feeder covered in snow visited by bright red cardinals and chickadees', 'Harvest scarecrow with friendly smile in golden pumpkin patch under starry sky',
        'Cozy Hanukkah menorah glowing with eight candles beside golden chocolate gelt', 'Festive holiday wreath made of fragrant pine, cinnamon sticks, and red berries',
        'Summer campfire with friends roasting s’mores beneath Milky Way sky', 'Autumn forest path carpeted with vibrant red maple leaves and acorns',
        'Whimsical Santa’s toy workshop with busy friendly elves crafting wooden toys'
      ],
      styles: ['Detailed holiday celebration coloring page, crisp festive outlines', 'Classic vintage holiday greeting card lithograph, warm nostalgic tones', 'Vibrant festive digital vector art, playful holiday cheer, clean shapes', 'Magical storybook watercolor illustration, glowing fairy lights and snowy glitter']
    }
  };

  const engines = ['Midjourney v6.0', 'DALL-E 3', 'Stable Diffusion XL', 'Flux.1 Dev'];
  const aspectRatios = ['3:4 (Coloring Book)', '1:1 (Square Art)', '4:5 (Portrait Print)', '16:9 (Landscape)'];
  const difficulties = ['Easy (Bold)', 'Medium', 'Intricate Detail'];

  const prompts = [];
  let globalId = 1;

  CATEGORIES.forEach(category => {
    const data = seedData[category.id];
    const catSubjects = data.subjects;
    const catStyles = data.styles;

    // Generate exactly 50 prompts per category
    for (let i = 0; i < 50; i++) {
      const subjectIndex = i % catSubjects.length;
      const styleIndex = (i + Math.floor(i / catSubjects.length)) % catStyles.length;
      const baseSubject = catSubjects[subjectIndex];
      const baseStyle = catStyles[styleIndex];

      // Create variation for second cycle of 25 to ensure all 50 are unique and rich
      let finalSubject = baseSubject;
      let titleModifier = '';
      if (i >= 25) {
        const modifiers = [
          'whimsical storybook edition',
          'delicate ornamental edition',
          'close-up expressive portrait',
          'lush panoramic composition',
          'hand-crafted artisan edition',
          'dreamy pastel fantasy version',
          'bold graphic sticker style'
        ];
        const mod = modifiers[i % modifiers.length];
        finalSubject = `${baseSubject}, ${mod}`;
        titleModifier = ` (${mod.charAt(0).toUpperCase() + mod.slice(1)})`;
      }

      // Title creation
      let shortTitle = baseSubject.split(',')[0].replace(/^(A |An |The |Pair of |Flock of |Family of )/i, '');
      if (shortTitle.length > 38) {
        shortTitle = shortTitle.substring(0, 35) + '...';
      }
      const title = `${shortTitle}${titleModifier}`;

      // Detailed prompt text formatted for Midjourney / AI image generators
      const promptText = `${finalSubject}, ${baseStyle}, clean continuous black contour outlines, pure white background, no grayscale shading, crisp vector lines, masterwork adult coloring page style, ultra-detailed line art, 8k resolution --ar 3:4 --v 6.0 --no shading, gradients, color, blur, watermark`;

      // Negative prompt
      const negativePrompt = 'color, shading, gray gradients, blurry lines, messy linework, noise, watermark, signature, photorealistic background, dark background';

      // Specific tags
      const tags = [
        category.name.split(' ')[0].toLowerCase(),
        'coloring page',
        'clean line art',
        i % 2 === 0 ? 'printable' : 'art prompt',
        i % 3 === 0 ? 'kids & adults' : 'relaxing'
      ];

      prompts.push({
        id: globalId++,
        categoryId: category.id,
        categoryName: category.name,
        categoryIcon: category.icon,
        title: title,
        prompt: promptText,
        negativePrompt: negativePrompt,
        style: baseStyle.split(',')[0],
        engine: engines[i % engines.length],
        aspectRatio: aspectRatios[i % aspectRatios.length],
        difficulty: difficulties[i % difficulties.length],
        tags: tags,
        copyCount: 140 + (i * 17) % 350,
        isFeatured: i === 0 || i === 7 || i === 18,
        rating: (4.7 + ((i * 3) % 4) * 0.1).toFixed(1)
      });
    }
  });

  return prompts;
}

const ALL_PROMPTS = generate500Prompts();

// Expose globally for browser usage
if (typeof window !== 'undefined') {
  window.PROMPTS_DATA = {
    categories: CATEGORIES,
    prompts: ALL_PROMPTS
  };
}
