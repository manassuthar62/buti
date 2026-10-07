export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'bridal' | 'makeup' | 'nails' | 'spa';
  categoryLabel: string;
  duration: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  tag?: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  benefits: string[];
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  image: string;
  availableDays: string[];
  award?: string;
}

export interface BridalPackage {
  id: string;
  name: string;
  badge?: string;
  price: number;
  originalPrice: number;
  idealFor: string;
  duration: string;
  features: string[];
  includesTrials: boolean;
  image: string;
}

export interface Transformation {
  id: string;
  title: string;
  category: string;
  clientStory: string;
  servicesDone: string[];
  beforeImage: string;
  afterImage: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'bridal' | 'hair' | 'skin' | 'makeup' | 'jewelry' | 'transformations' | 'studio';
  categoryLabel: string;
  videoSrc: string;
  poster: string;
  duration: string;
  views: string;
  likes: string;
  tag: string;
  artist: string;
  description: string;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  verified: boolean;
}

export const PARLOUR_INFO = {
  name: "NIVI BEAUTY CARE",
  owner: "ARTI BHAVSAR",
  ownerTitle: "Celebrity Makeup Artist & Founder",
  award: "Glam Bliss Awards Winner 💅",
  tagline: "The Royal Bridal & Haute Beauty Studio",
  description: "Partapur's premier luxury bridal atelier and beauty lounge by Celebrity Makeup Artist Arti Bhavsar. Winner of Glam Bliss Awards, specializing in bespoke Royal Rajputana & Gujarati bridal makeovers, jewellery styling, and advanced skincare rituals.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "contact@nivibeautycare.com",
  address: "Main Road, Near Rajendra Talkies / College Circle, Partapur",
  city: "Partapur, Banswara, Rajasthan",
  hours: "Monday - Sunday: 9:00 AM - 8:30 PM",
  instagramHandle: "@nivi_beautycare_",
  instagramUrl: "https://www.instagram.com/nivi_beautycare_/",
  instagramFollowers: "11.3k+",
  instagramPosts: "777+",
  rating: 4.9,
  totalReviews: "1,250+",
  establishedYear: 2019,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "royal-rajputana-hd-bridal",
    name: "Arti Bhavsar Signature HD Royal Bridal Makeup",
    category: "bridal",
    categoryLabel: "Bridal Couture",
    duration: "180 mins",
    price: 15999,
    originalPrice: 21999,
    popular: true,
    tag: "Arti's Masterpiece",
    shortDesc: "Award-winning high-definition bridal glam with airbrush finish, bespoke jewelry setting & dupatta draping.",
    fullDesc: "Crafted exclusively by Celebrity Artist Arti Bhavsar. Includes skin prep, waterproof sweat-resistant HD foundation, 3D silk lashes, floral hairdo, complete jewelry architecture, and touch-up vanity kit.",
    image: "/images/1.jpeg",
    benefits: ["16-Hour Waterproof & Sweat Proof", "4K Ultra-HD Photography Ready", "Includes Designer Jewelry & Saree/Lehenga Draping", "Personal Consultation with Arti Bhavsar"]
  },
  {
    id: "hydra-gold-facial",
    name: "24K Gold Hydra-Infusion Glass Skin Facial",
    category: "skin",
    categoryLabel: "Skin & Face",
    duration: "75 mins",
    price: 2999,
    originalPrice: 4200,
    popular: true,
    tag: "Bestseller",
    shortDesc: "Deep vacuum pore cleansing, diamond exfoliation, and 24K pure gold serum infusion for instant bride glow.",
    fullDesc: "Gentle lymphatic drainage, active hyaluronic acid boost, LED phototherapy, and authentic 24-karat gold therapy to give you flawless glass skin before big events.",
    image: "/images/facial_gold.jpg",
    benefits: ["Instant Red Carpet Glow", "Removes Blackheads & Tan", "Tightens Open Pores", "Zero Downtime"]
  },
  {
    id: "keratin-botox-hair",
    name: "Caviar & Keratin Botox Hair Rejuvenation",
    category: "hair",
    categoryLabel: "Hair Couture",
    duration: "120 mins",
    price: 4499,
    originalPrice: 6500,
    popular: true,
    tag: "Trending",
    shortDesc: "Intensive anti-frizz reconstruction infused with amino acids, nano-keratin, and caviar gloss serum.",
    fullDesc: "Transform dull, chemically treated, or frizzy hair into mirror-like silky locks lasting 5-6 months. 100% Formaldehyde-free.",
    image: "/images/hair_keratin.jpg",
    benefits: ["Silky Smooth & Mirror Shine", "Repairs Split Ends & Heat Damage", "Lasts 5-6 Months", "Safe for Color-Treated Hair"]
  },
  {
    id: "reception-cocktail-glam",
    name: "Celebrity Engagement & Sangeet Party Glam",
    category: "makeup",
    categoryLabel: "Party Glam",
    duration: "75 mins",
    price: 3999,
    originalPrice: 5500,
    popular: true,
    tag: "Party Favorite",
    shortDesc: "Smokey/soft glam eyes, sculpted contour, velvet transfer-proof lips, and designer curls or sleek hair styling.",
    fullDesc: "Get event-ready with international luxury cosmetics (NARS, MAC, Huda Beauty, Charlotte Tilbury) tailored for your outfit.",
    image: "/images/6.jpeg",
    benefits: ["Long-Wear 12-Hour Stay", "False 3D Lashes Included", "Body Shimmer & Hair Styling Included", "Flawless in Studio Lighting"]
  },
  {
    id: "balayage-ombre-hair",
    name: "French Balayage & Honey Caramel Highlights",
    category: "hair",
    categoryLabel: "Hair Couture",
    duration: "150 mins",
    price: 5499,
    originalPrice: 7500,
    popular: false,
    tag: "Artisan Color",
    shortDesc: "Hand-painted dimensional hair highlights tailored with customized gloss toner and Olaplex bond builder.",
    fullDesc: "Multidimensional sun-kissed shades designed to complement Indian skin undertones seamlessly with no harsh grow-out lines.",
    image: "/images/hair_balayage.jpg",
    benefits: ["Seamless Natural Blend", "Olaplex Bond Protection", "Custom Color for Skin Undertone", "Gloss Finish"]
  },
  {
    id: "luxury-gel-nail-art",
    name: "Haute Gel Extensions & Swarovski 3D Nail Art",
    category: "nails",
    categoryLabel: "Nail Lounge",
    duration: "90 mins",
    price: 1899,
    originalPrice: 2800,
    popular: false,
    tag: "Bridal Nails",
    shortDesc: "Sculpted ombre/French gel extensions with chrome glaze, Swarovski crystals, and delicate glitter art.",
    fullDesc: "Russian manicuring followed by tip extensions, long-lasting UV LED lacquer, and hand-embellished crystal accents.",
    image: "/images/nails_art.jpg",
    benefits: ["Chip-Free For 4+ Weeks", "Swarovski Crystal Accents", "Strengthens Natural Nails", "Includes Cuticle Spa"]
  },
  {
    id: "korean-glass-skin",
    name: "Korean Glass Skin & Oxy-Detox Facial",
    category: "skin",
    categoryLabel: "Skin & Face",
    duration: "60 mins",
    price: 2499,
    originalPrice: 3500,
    popular: true,
    tag: "Instant Glow",
    shortDesc: "Hyperbaric oxygen jet infusion and peptide complex for luminous, deeply hydrated, plump skin.",
    fullDesc: "Infuses 98% pure oxygen and concentrated antioxidants deep into the skin layers. Perfect pre-party treatment.",
    image: "/images/skin_korean.jpg",
    benefits: ["Instant Dewy Hydration", "Calms Redness & Sun Tan", "Pore Tightening", "Flawless Base for Makeup"]
  },
  {
    id: "moroccan-rose-spa",
    name: "Royal Rose & Argan Full Body Spa Polish",
    category: "spa",
    categoryLabel: "Spa & Wellness",
    duration: "90 mins",
    price: 3499,
    originalPrice: 4800,
    popular: false,
    tag: "Pure Relaxation",
    shortDesc: "Full body brown sugar rose exfoliating scrub followed by relaxing deep tissue massage with warm organic Argan oil.",
    fullDesc: "Relieve pre-wedding fatigue with soothing aroma steam, essential oil reflexology, and scalp relaxation therapy.",
    image: "/images/spa_wellness.jpg",
    benefits: ["Relieves Muscle Tension & Stress", "Silky Smooth Body Polish", "Deep Hydration", "Boosts Blood Circulation"]
  }
];

export const STYLISTS_DATA: Stylist[] = [
  {
    id: "arti-bhavsar",
    name: "ARTI BHAVSAR",
    role: "Founder & Celebrity Bridal Makeup Artist",
    specialty: "Royal Rajputana Bridal Couture & Jewelry Architecture",
    experience: "10+ Years",
    rating: 5.0,
    reviewsCount: 770,
    image: "/images/1IMAGE.jpg",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    award: "Winner: Glam Bliss Awards 💅"
  },
  {
    id: "pooja-sharma",
    name: "Pooja Sharma",
    role: "Senior Hair Sculptor & Balayage Specialist",
    specialty: "Bridal Hair Couture, French Balayage & Keratin",
    experience: "8+ Years",
    rating: 4.95,
    reviewsCount: 420,
    image: "/images/stylist_pooja.jpg",
    availableDays: ["Mon", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    id: "sneha-jain",
    name: "Sneha Jain",
    role: "Senior Aesthetician & Skin Therapist",
    specialty: "24K Gold Hydra Facial & Glass Skin Detox",
    experience: "7+ Years",
    rating: 4.94,
    reviewsCount: 380,
    image: "/images/stylist_sneha.jpg",
    availableDays: ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    id: "neha-patel",
    name: "Neha Patel",
    role: "Head Nail Couturier & Draping Artist",
    specialty: "Russian Gel Extensions & Designer Lehenga Draping",
    experience: "6+ Years",
    rating: 4.92,
    reviewsCount: 310,
    image: "/images/stylist_neha.jpg",
    availableDays: ["Tue", "Wed", "Fri", "Sat", "Sun"]
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: "pre-bridal-glow",
    name: "Nivi Grace Pre-Bridal Glow Ritual",
    price: 11999,
    originalPrice: 16500,
    idealFor: "1-2 Weeks Prior to Wedding Day",
    duration: "2 Complete Dedicated Sessions",
    features: [
      "24K Gold Hydra Facial & Deep Detan Treatment",
      "Full Body Rose & Argan Exfoliating Skin Polish",
      "O3+ Luxury Pedicure & Russian Manicure",
      "Caviar Hair Gloss Spa & Deep Conditioning",
      "Full Body Rica Waxing & Eyebrow Threading Architecture"
    ],
    includesTrials: false,
    image: "/images/3.jpeg"
  },
  {
    id: "arti-signature-royal-bridal",
    name: "Arti Bhavsar Royal Kohinoor Wedding Day",
    badge: "Most Cherished by Brides",
    price: 24999,
    originalPrice: 35000,
    idealFor: "Main Wedding Ceremony & Royal Reception",
    duration: "Full Day VIP Suite Service",
    features: [
      "Signature HD Airbrush Bridal Makeover by Arti Bhavsar",
      "Bespoke Bridal Hair Couture with Fresh Roses / Orchids",
      "Royal Jewelry Styling & Dupatta / Saree Fixation",
      "Complimentary Mother / Sister HD Party Makeup",
      "Luxury 3D Mink Lashes & Crystal Jewel Accents",
      "Personalized Bridal Emergency Touch-up Kit",
      "VIP Private Dressing Lounge Access"
    ],
    includesTrials: true,
    image: "/images/1.jpeg"
  },
  {
    id: "grand-rajputana-7day",
    name: "The Grand Maharani 7-Day Complete Journey",
    badge: "Ultra Luxury VIP",
    price: 44999,
    originalPrice: 62000,
    idealFor: "Complete Wedding Week (Haldi, Mehendi, Sangeet, Wedding, Reception)",
    duration: "Complete 7-Day Bridal Care",
    features: [
      "All 3 Functions Makeup: Haldi Glow, Sangeet Glam & Reception",
      "The Main Wedding Day Masterpiece by Arti Bhavsar",
      "4-Stage Pre-Bridal Skin Rejuvenation & Detox Facial",
      "Haute Gel Nail Extensions & Swarovski Art",
      "Keratin Hair Reconstruction Treatment",
      "Artist Accompaniment at Venue in Partapur / Banswara / Udaipur",
      "2 Complimentary VIP Guest HD Makeups"
    ],
    includesTrials: true,
    image: "/images/4.jpeg"
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "trans-1",
    title: "Royal Rajputana Heritage Bridal Makeover",
    category: "Bridal Transformation",
    clientStory: "Komal from Banswara wanted a regal traditional Rajputi bridal look with flawless jewelry setting and tear-proof HD makeup.",
    servicesDone: ["Signature HD Airbrush by Arti Bhavsar", "Jewelry Fixation", "Hydra Glow Prep"],
    beforeImage: "/images/stylist_pooja.jpg",
    afterImage: "/images/1.jpeg"
  },
  {
    id: "trans-2",
    title: "Passaa & Kundan Mathapatti Setting",
    category: "Jewelry Architecture",
    clientStory: "Priya wanted to transform dry, flat hair into glossy sun-kissed bridal waves with heavy Passaa and Kundan jewelry balance.",
    servicesDone: ["Olaplex Bond Multiplier", "Royal Passaa Setting", "Caviar Botox Gloss"],
    beforeImage: "/images/hair_keratin.jpg",
    afterImage: "/images/3.jpeg"
  },
  {
    id: "trans-3",
    title: "Stubborn Tan to 24K Glass Skin Glow",
    category: "Skin Transformation",
    clientStory: "Neha had sun tan and texture issues; our 24K Gold Hydra facial gave her luminous camera-ready radiance.",
    servicesDone: ["Hydra-Infusion Facial", "Diamond Microdermabrasion", "24K Gold Collagen"],
    beforeImage: "/images/skin_korean.jpg",
    afterImage: "/images/facial_gold.jpg"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Royal Rajputi Passaa & Mathapatti Bridal Makeover",
    category: "Bridal",
    image: "/images/1.jpeg"
  },
  {
    id: "gal-2",
    title: "Arti Bhavsar Signature HD Airbrush Bridal Glam",
    category: "Bridal",
    image: "/images/2.jpeg"
  },
  {
    id: "gal-3",
    title: "Intricate Jewelry Architecture & Dupatta Draping",
    category: "Bridal",
    image: "/images/3.jpeg"
  },
  {
    id: "gal-4",
    title: "Royal Heritage Bridal Portrait - Nivi Beauty Care",
    category: "Makeup",
    image: "/images/4.jpeg"
  },
  {
    id: "gal-5",
    title: "Reception Cocktail Glam & Hollywood Curls",
    category: "Makeup",
    image: "/images/6.jpeg"
  },
  {
    id: "gal-6",
    title: "24K Gold Hydra Facial & Glass Skin Session",
    category: "Skin",
    image: "/images/facial_gold.jpg"
  },
  {
    id: "gal-7",
    title: "French Balayage Dimensional Hair Waves",
    category: "Hair",
    image: "/images/hair_balayage.jpg"
  },
  {
    id: "gal-8",
    title: "Haute Swarovski 3D Gel Nail Extensions",
    category: "Nails",
    image: "/images/nails_art.jpg"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Dr. Khushboo Joshi",
    role: "Bride • Banswara",
    service: "Arti Bhavsar Royal Kohinoor Wedding Day",
    rating: 5,
    comment: "Arti Didi did magic on my wedding day! My makeup stayed completely fresh and glowing throughout the whole 12-hour ceremony and Vidai crying. Everyone praised the jewelry draping!",
    date: "February 2026",
    avatar: "/images/3.jpeg",
    verified: true
  },
  {
    id: "rev-2",
    name: "Roshni Jain",
    role: "Bride • Partapur",
    service: "Pre-Bridal Glow + HD Airbrush",
    rating: 5,
    comment: "Nivi Beauty Care is hands-down the best salon in Partapur & Banswara district. Arti Bhavsar is a true artist and the Glam Bliss award is so well deserved!",
    date: "January 2026",
    avatar: "/images/4.jpeg",
    verified: true
  },
  {
    id: "rev-3",
    name: "Tanvi Rathore",
    role: "Fashion Model • Udaipur",
    service: "24K Gold Hydra-Infusion Facial",
    rating: 5,
    comment: "The glass skin glow is unbelievable! If you want celebrity bridal makeup or glowing skin in Banswara/Partapur, Arti Bhavsar at Nivi Beauty Care is the only choice.",
    date: "March 2026",
    avatar: "/images/5.jpeg",
    verified: true
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: "goal",
    question: "What is your primary beauty transformation goal?",
    options: [
      { label: "Breathtaking Royal Bridal or Sangeet Glam", value: "bridal" },
      { label: "Radiant, Spotless 24K Glass Skin Glow", value: "skin" },
      { label: "Silky Smooth Keratin Hair & Balayage Color", value: "hair" },
      { label: "Relaxing Full Body Spa & Detan Polish", value: "spa" }
    ]
  },
  {
    id: "timing",
    question: "When is your special event / wedding date?",
    options: [
      { label: "In the next 24 to 48 hours (Instant Glow)", value: "urgent" },
      { label: "In 2 to 4 weeks (Bridal/Party Prep)", value: "soon" },
      { label: "Regular monthly self-care ritual", value: "regular" }
    ]
  },
  {
    id: "skin_type",
    question: "How would you describe your skin / hair condition currently?",
    options: [
      { label: "Looking for glamorous wedding/party makeover", value: "glam" },
      { label: "Dry, dehydrated, or lacking natural glow", value: "dry" },
      { label: "Frizzy, damaged, or unmanageable hair", value: "damaged" },
      { label: "Dull with uneven tone or sun tan", value: "dull" }
    ]
  }
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: "reel-1",
    title: "Royal Rajputana Bridal Makeover by Arti Bhavsar",
    category: "bridal",
    categoryLabel: "Bridal Couture",
    videoSrc: "/videos/reel_1.mp4",
    poster: "/images/6.jpeg",
    duration: "0:45",
    views: "148.5K",
    likes: "14.2K",
    tag: "Arti's Signature",
    artist: "Arti Bhavsar",
    description: "Witness the regal Rajputana bridal glam featuring waterproof HD airbrush base, royal mathapatti setting, and bespoke floral hairdo.",
    accentColor: "#D97D64"
  },
  {
    id: "reel-2",
    title: "24K Gold Hydra Facial & Glass Skin Infusion",
    category: "skin",
    categoryLabel: "Skin & Facial",
    videoSrc: "/videos/reel_2.mp4",
    poster: "/images/3.jpeg",
    duration: "0:38",
    views: "92.4K",
    likes: "8.7K",
    tag: "Viral Glass Skin",
    artist: "Skin Specialist",
    description: "Deep ultrasonic pore extraction followed by pure 24K gold foil infusion and hyaluronic hydration booster for instantaneous radiance.",
    accentColor: "#C59B43"
  },
  {
    id: "reel-3",
    title: "Bridal Jewellery Setting & Kundan Mathapatti",
    category: "jewelry",
    categoryLabel: "Jewelry Architecture",
    videoSrc: "/videos/reel_3.mp4",
    poster: "/images/1.jpeg",
    duration: "0:52",
    views: "76.1K",
    likes: "6.9K",
    tag: "Bespoke Styling",
    artist: "Arti Bhavsar",
    description: "Precision architectural placement of heritage Kundan, Polki, and Borla to perfectly frame the bride's facial structure.",
    accentColor: "#E28E77"
  },
  {
    id: "reel-4",
    title: "French Balayage & Caviar Keratin Treatment",
    category: "hair",
    categoryLabel: "Hair Couture",
    videoSrc: "/videos/reel_4.mp4",
    poster: "/images/4.jpeg",
    duration: "0:40",
    views: "110.3K",
    likes: "11.5K",
    tag: "Trending Hair",
    artist: "Senior Hair Master",
    description: "Seamless sun-kissed honey caramel balayage transitions paired with intensive caviar protein restoration for mirror-like shine.",
    accentColor: "#B85F48"
  },
  {
    id: "reel-5",
    title: "Glam Bliss Award-Winning Look Unveiled",
    category: "studio",
    categoryLabel: "Awards & Moments",
    videoSrc: "/videos/reel_5.mp4",
    poster: "/images/2.jpeg",
    duration: "1:05",
    views: "215.8K",
    likes: "22.4K",
    tag: "Award Winning 🏆",
    artist: "Arti Bhavsar",
    description: "The official masterclass and award-winning bridal creation that earned Arti Bhavsar the prestigious Glam Bliss Award.",
    accentColor: "#D97D64"
  },
  {
    id: "reel-6",
    title: "Haldi & Mehendi Fresh Floral Glow",
    category: "makeup",
    categoryLabel: "Party & Festive",
    videoSrc: "/videos/reel_6.mp4",
    poster: "/images/5.jpeg",
    duration: "0:35",
    views: "64.2K",
    likes: "5.3K",
    tag: "Festive Glam",
    artist: "Arti Bhavsar",
    description: "Dewy, sunlit glass skin makeup with natural blush tones and fresh baby breath floral braids designed for Haldi and Mehendi ceremonies.",
    accentColor: "#E5C368"
  },
  {
    id: "reel-7",
    title: "Before & After Royal Bridal Transformation",
    category: "transformations",
    categoryLabel: "Makeover Magic",
    videoSrc: "/videos/reel_7.mp4",
    poster: "/images/6.jpeg",
    duration: "0:48",
    views: "189.0K",
    likes: "19.8K",
    tag: "Real Bride",
    artist: "Arti Bhavsar",
    description: "An unbelievable before-and-after bridal transition showcasing colour correction, sculpting contour, and imperial jewelry synchronization.",
    accentColor: "#C26B54"
  },
  {
    id: "reel-8",
    title: "Haute Gel Nail Art & Chrome Accents",
    category: "makeup",
    categoryLabel: "Nail Lounge",
    videoSrc: "/videos/reel_8.mp4",
    poster: "/images/1.jpeg",
    duration: "0:30",
    views: "52.7K",
    likes: "4.1K",
    tag: "Nail Lounge",
    artist: "Nail Artist",
    description: "Custom sculpted extensions with mirror rose-gold chrome finish and Swarovski crystal inlays for the modern bride.",
    accentColor: "#D97D64"
  },
  {
    id: "reel-9",
    title: "Gujarati Wedding Muhurat Bridal Look",
    category: "bridal",
    categoryLabel: "Bridal Couture",
    videoSrc: "/videos/reel_9.mp4",
    poster: "/images/2.jpeg",
    duration: "0:50",
    views: "134.6K",
    likes: "12.9K",
    tag: "Traditional Glam",
    artist: "Arti Bhavsar",
    description: "Authentic Panetar & Gharchola styling paired with classical Gujarati eye definition and crimson lip harmony.",
    accentColor: "#C59B43"
  },
  {
    id: "reel-10",
    title: "Celebrity 3D Silk Lash & Smokey Eyes",
    category: "makeup",
    categoryLabel: "Party & Festive",
    videoSrc: "/videos/reel_10.mp4",
    poster: "/images/3.jpeg",
    duration: "0:32",
    views: "88.3K",
    likes: "7.8K",
    tag: "Eye Artistry",
    artist: "Arti Bhavsar",
    description: "Dramatic gradient eyeshadow blending with hand-crafted 3D mink silk lashes and waterproof precision eyeliner.",
    accentColor: "#2A1D33"
  },
  {
    id: "reel-11",
    title: "Bridal Dupatta Draping & Silhouette Setting",
    category: "jewelry",
    categoryLabel: "Jewelry Architecture",
    videoSrc: "/videos/reel_11.mp4",
    poster: "/images/4.jpeg",
    duration: "0:44",
    views: "98.5K",
    likes: "9.4K",
    tag: "Draping Masterclass",
    artist: "Arti Bhavsar",
    description: "Flawless double-dupatta pleating and crown pinning ensuring weight distribution and effortless royal posture for 12+ hours.",
    accentColor: "#B85F48"
  },
  {
    id: "reel-12",
    title: "Pre-Bridal Rose & Pearl Skin Polish",
    category: "skin",
    categoryLabel: "Skin & Facial",
    videoSrc: "/videos/reel_12.mp4",
    poster: "/images/5.jpeg",
    duration: "0:42",
    views: "71.9K",
    likes: "6.5K",
    tag: "Bridal Glow",
    artist: "Skin Specialist",
    description: "Luxurious organic exfoliating scrub with crushed pearls and Damask rose oil for full-body bridal luminosity.",
    accentColor: "#F7B7A3"
  },
  {
    id: "reel-13",
    title: "Sangeet Night Shimmer & Hollywood Waves",
    category: "hair",
    categoryLabel: "Hair Couture",
    videoSrc: "/videos/reel_13.mp4",
    poster: "/images/6.jpeg",
    duration: "0:36",
    views: "105.2K",
    likes: "10.1K",
    tag: "Party Hair",
    artist: "Senior Hair Master",
    description: "Voluminous retro Hollywood waves paired with champagne micro-glitter lids that sparkle under stage lights.",
    accentColor: "#C59B43"
  },
  {
    id: "reel-14",
    title: "Live Salon Walkthrough & Happy Brides",
    category: "studio",
    categoryLabel: "Awards & Moments",
    videoSrc: "/videos/reel_14.mp4",
    poster: "/images/1.jpeg",
    duration: "0:55",
    views: "123.4K",
    likes: "13.2K",
    tag: "Partapur Studio",
    artist: "Arti Bhavsar Team",
    description: "Take a virtual tour inside Nivi Beauty Care's luxury bridal suite in Partapur, Banswara with real client smiles.",
    accentColor: "#D97D64"
  }
];

export const FAQS = [
  {
    q: "How can I book an appointment with Arti Bhavsar?",
    a: "You can book directly through our website by choosing your service, selecting Arti Bhavsar, and clicking 'Confirm via WhatsApp'. You can also call us or visit our studio in Partapur, Banswara."
  },
  {
    q: "Does Nivi Beauty Care provide destination bridal makeup services?",
    a: "Yes! Arti Bhavsar and her senior makeup entourage travel across Partapur, Banswara, Dungarpur, Udaipur, and all over Rajasthan & Gujarat for destination weddings."
  },
  {
    q: "Do you offer bridal jewelry with makeup packages?",
    a: "Yes! Our bridal packages include complete bridal jewelry styling and coordination with your lehenga or saree (Kundan, Polki, Mathapatti, and Nath setting)."
  },
  {
    q: "What brands of makeup cosmetics does Arti Bhavsar use?",
    a: "We only use 100% genuine, premium international brands including MAC, Huda Beauty, Charlotte Tilbury, NARS, Too Faced, Forever52, and Olaplex."
  }
];
