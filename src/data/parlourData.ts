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
    image: "/images/5.jpeg",
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
    image: "/images/4.jpeg",
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
    image: "/images/2.jpeg",
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
    image: "/images/3.jpeg",
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
    image: "/images/6.jpeg",
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
    image: "/images/5.jpeg",
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
    image: "/images/1.jpeg",
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
    image: "/images/2.jpeg",
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
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
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
    image: "/images/6.jpeg"
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "trans-1",
    title: "Royal Rajputana Heritage Bridal Makeover",
    category: "Bridal Transformation",
    clientStory: "Komal from Banswara wanted a regal traditional Rajputi bridal look with flawless jewelry setting and tear-proof HD makeup.",
    servicesDone: ["Signature HD Airbrush by Arti Bhavsar", "Jewelry Fixation", "Hydra Glow Prep"],
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    afterImage: "/images/1.jpeg"
  },
  {
    id: "trans-2",
    title: "Passaa & Kundan Mathapatti Setting",
    category: "Jewelry Architecture",
    clientStory: "Priya wanted to transform dry, flat hair into glossy sun-kissed bridal waves with heavy Passaa and Kundan jewelry balance.",
    servicesDone: ["Olaplex Bond Multiplier", "Royal Passaa Setting", "Caviar Botox Gloss"],
    beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    afterImage: "/images/3.jpeg"
  },
  {
    id: "trans-3",
    title: "Stubborn Tan to 24K Glass Skin Glow",
    category: "Skin Transformation",
    clientStory: "Neha had sun tan and texture issues; our 24K Gold Hydra facial gave her luminous camera-ready radiance.",
    servicesDone: ["Hydra-Infusion Facial", "Diamond Microdermabrasion", "24K Gold Collagen"],
    beforeImage: "https://images.unsplash.com/photo-1512290900672-1f02e6a09a56?auto=format&fit=crop&w=800&q=80",
    afterImage: "/images/5.jpeg"
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
    title: "24K Shimmer Eyes & Radiant Bridal Finish",
    category: "Makeup",
    image: "/images/5.jpeg"
  },
  {
    id: "gal-6",
    title: "The Grand Maharani Bridal Look by Arti Bhavsar",
    category: "Bridal",
    image: "/images/6.jpeg"
  },
  {
    id: "gal-7",
    title: "Romantic Bridal Hairdo & Passaa Styling",
    category: "Hair",
    image: "/images/3.jpeg"
  },
  {
    id: "gal-8",
    title: "Celebrity Bride Signature Makeover",
    category: "Bridal",
    image: "/images/2.jpeg"
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
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
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
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
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
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
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
