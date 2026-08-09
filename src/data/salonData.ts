import heroImage from "../assets/images/pakistani_barat_bride_1786262223393.jpg";
import hairTransImage from "../assets/images/pakistani_balayage_hair_1786262265868.jpg";
import bridalImage from "../assets/images/pakistani_valima_bride_1786262247822.jpg";
import interiorImage from "../assets/images/luxury_salon_interior_1786261080607.jpg";
import hydrafacialImage from "../assets/images/pakistani_hydrafacial_1786262288487.jpg";
import cleanUp from "../assets/images/cleanUp.jpg"
import  HerbalWhitingFacial from "../assets/images/herbalWhitingFacial.jpg"
import PrecisionThreadingWaxing from  "../assets/images/PrecisionThreading&Waxing.jpg"
import partymakeup from "../assets/images/partymakeup.png"

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'makeup' | 'nails' | 'waxing';
  priceRange: string;
  duration: string;
  description: string;
  popular?: boolean;
  image: string;
  highlights: string[];
}

export interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  tag: string;
  servicesIncluded: string[];
  recommendedFor: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: 'color' | 'botox' | 'keratin' | 'bridal';
  beforeImage: string;
  afterImage: string;
  description: string;
  serviceUsed: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Hair' | 'Skincare' | 'Makeup' | 'Studio';
  image: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  service: string;
  text: string;
  date: string;
}

export const SALON_INFO = {
  name: "Linta's Beauty Salon",
  tagline: "Modern Luxury Pakistani Beauty Studio",
  googleRating: 4.7,
  totalReviews: 38,
  phone: "+92 333 0247837",
  phoneRaw: "9233330247837",
  whatsappUrl: "https://wa.me/9233330247837",
  address: "A-98, Street No.7, Block L North Nazimabad, Karachi, Pakistan",
  area: "Block L North Nazimabad, Karachi",
  instagram: {
    handle: "lintas_beauty_salon_official",
    url: "https://www.instagram.com/lintas_beauty_salon_official/",
    posts: "247",
    followers: "3,608",
    following: "1,336"
  },
  openingHours: [
    { days: "Monday - Saturday", hours: "11:00 AM - 8:00 PM" },
    { days: "Sunday", hours: "12:00 PM - 7:00 PM" },
    { days: "Bridal Appointments", hours: "Early morning slots available upon booking" }
  ],
 images: {
  hero: heroImage,
  hairTrans: hairTransImage,
  bridalLook: bridalImage,
  interior: interiorImage,
  hydrafacial: hydrafacialImage,
}
};

export const WHY_CHOOSE_US = [
  {
    icon: "Sparkles",
    title: "Affordable Luxury",
    description: "Premium, high-end beauty services at accessible prices for Karachi women."
  },
  {
    icon: "Award",
    title: "Professional Staff",
    description: "Highly qualified stylists and estheticians dedicated to delicate personal care."
  },
  {
    icon: "Scissors",
    title: "Hair Coloring Experts",
    description: "Specialists in Balayage, Highlights, Hair Botox, Keratin & Custom Color matching."
  },
  {
    icon: "Crown",
    title: "Bridal Makeup Specialists",
    description: "Bespoke Barat & Valima bridal transformations tailored to your skin tone & attire."
  },
  {
    icon: "HeartHandshake",
    title: "Friendly Owner & Team",
    description: "Warm, welcoming, and personalized hospitality where every client feels cherished."
  },
  {
    icon: "ShieldCheck",
    title: "Hygienic & Sanitized",
    description: "Strict hygiene protocols with sterilized tools and spotless treatment suites."
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "hair-cut",
    name: "Hair Cut & Styling",
    category: "hair",
    priceRange: "Inquire Rate",
    duration: "45 mins",
    description: "Custom layered haircuts, bob cuts, feather trims, and blowout styling tailored to your face structure.",
    popular: true,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    highlights: ["Face-framing layers", "Luxury wash & conditioning", "Volumizing blowout Finish"]
  },
  {
    id: "hair-spa",
    name: "Luxury Hair Spa",
    category: "hair",
    priceRange: "Inquire Rate",
    duration: "60 mins",
    description: "Deep nourishing hair therapy that restores moisture, controls frizz, and revives dry, damaged hair.",
    popular: false,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    highlights: ["Scalp massage", "Deep steam treatment", "Glossy finish serum"]
  },
  {
    id: "hair-color",
    name: "Global Hair Color",
    category: "hair",
    priceRange: "Inquire Rate",
    duration: "90 mins",
    description: "Seamless single-tone global hair coloring using premium ammonia-free formulas for intense shine.",
    popular: true,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
    highlights: ["Rich burgundy & mocha shades", "Ammonia-free formula", "100% grey coverage"]
  },
  {
    id: "hair-highlights",
    name: "Dimensional Highlights",
    category: "hair",
    priceRange: "Inquire Rate",
    duration: "120 mins",
    description: "Precision foil highlighting technique to add dimension, brightness, and texture to dark South Asian hair.",
    popular: true,
    image: SALON_INFO.images.hairTrans,
    highlights: ["Custom foil placement", "Toner & gloss treatment", "Damage-control bond protection"]
  },
  {
    id: "balayage",
    name: "Signature Balayage",
    category: "hair",
    priceRange: "Inquire Rate",
    duration: "150 mins",
    description: "Hand-painted soft ombre gradient blending warm caramel, honey, or rose gold tones into dark locks naturally.",
    popular: true,
    image: SALON_INFO.images.hairTrans,
    highlights: ["Hand-painted gradient", "Low maintenance regrowth", "Rose gold & honey tones"]
  },
  {
    id: "protein-treatment",
    name: "Protein Reconstruction",
    category: "hair",
    priceRange: "Inquire Rate",
    duration: "90 mins",
    description: "Intense protein reinforcement therapy for chemically treated hair to rebuild broken hair bonds.",
    popular: false,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800",
    highlights: ["Strengthens hair shaft", "Reduces breakage", "Silky smooth feel"]
  },
  {
    id: "keratin-treatment",
    name: "Keratin Smoothing Therapy",
    category: "hair",
    priceRange: "Inquire Rate",
    duration: "180 mins",
    description: "Long-lasting smoothing treatment that eliminates 90% frizz and gives sleek, manageable, silky hair for months.",
    popular: true,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
    highlights: ["Frizz-free for 3-5 months", "Mirror shine finish", "Cuts styling time in half"]
  },
  {
    id: "hair-botox",
    name: "Hair Botox Treatment",
    category: "hair",
    priceRange: "Inquire Rate",
    duration: "150 mins",
    description: "Non-chemical anti-aging hair treatment enriched with caviar oil, vitamins, and collagen to repair frizzy strands.",
    popular: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    highlights: ["Zero harsh chemicals", "Fills broken fibers", "Deep intense hydration"]
  },
  {
    id: "hydrafacial",
    name: "Advanced Hydrafacial",
    category: "skin",
    priceRange: "Inquire Rate",
    duration: "60 mins",
    description: "Deep cleansing, painless extraction, pore vacuuming, and hyaluronic acid infusion for instant glass skin glow.",
    popular: true,
    image: SALON_INFO.images.hydrafacial,
    highlights: ["Deep pore vacuuming", "Serum infusion", "Instant radiant skin glow"]
  },
  {
    id: "facials",
    name: "Custom Herbal & Whitening Facials",
    category: "skin",
    priceRange: "Inquire Rate",
    duration: "60 mins",
    description: "Targeted skin brightening, anti-acne, or soothing herbal facial therapies tailored to Karachi climate skin needs.",
    popular: false,
    image: HerbalWhitingFacial,
    highlights: ["Soothing face massage", "Dead skin exfoliation", "Customized mask formulation"]
  },
  {
    id: "cleanup",
    name: "Deep Skin Cleanup",
    category: "skin",
    priceRange: "Inquire Rate",
    duration: "40 mins",
    description: "Quick blackhead extraction, steam, and scrub routine to unclog pores and refresh tired skin.",
    popular: false,
    image: cleanUp,
    highlights: ["Gentle steam", "Pore clearing scrub", "Hydrating mask"]
  },
  {
    id: "threading-waxing",
    name: "Precision Threading & Waxing",
    category: "waxing",
    priceRange: "Inquire Rate",
    duration: "30 mins",
    description: "Eyebrow shaping, full face threading, and painless fruit or rica body waxing for velvety smooth skin.",
    popular: false,
    image: PrecisionThreadingWaxing,
    highlights: ["Sharp eyebrow mapping", "Soothing post-wax lotion", "Sensitive skin friendly"]
  },
  {
    id: "manicure-pedicure",
    name: "Luxury Spa Mani & Pedi",
    category: "nails",
    priceRange: "Inquire Rate",
    duration: "75 mins",
    description: "Exfoliating foot soak, heel scrubbing, massage, cuticle care, and long-wearing polish application.",
    popular: true,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    highlights: ["Aromatherapy soak", "Heel smoothing treatment", "Nail art & polish choices"]
  },
  {
    id: "bridal-makeup",
    name: "Professional Bridal Makeup",
    category: "makeup",
    priceRange: "Inquire Rate",
    duration: "180 mins",
    description: "Exquisite Barat & Valima bridal makeover including HD foundation base, eyelash extension, dupatta setting, & jewelry fixing.",
    popular: true,
    image: SALON_INFO.images.bridalLook,
    highlights: ["HD long-wear base", "Lashes & hairstyle included", "Dupatta & jewelry setting"]
  },
  {
    id: "party-makeup",
    name: "Glitter & Glam Party Makeup",
    category: "makeup",
    priceRange: "Inquire Rate",
    duration: "90 mins",
    description: "Stunning party look with soft glam or bold eye makeup, customized hair styling, and setting spray lock.",
    popular: true,
    image: partymakeup,
    highlights: ["Soft glam or smokey eyes", "Custom hair styling", "All-day transfer-proof"]
  }
];

export const SPECIAL_PACKAGES: PackageItem[] = [
  {
    id: "royal-bridal",
    title: "Royal Pakistani Bridal Suite",
    subtitle: "Complete Bridal Glamour for Barat or Valima",
    price: "Owner to provide exact package pricing",
    tag: "Most Popular Bridal",
    recommendedFor: "Brides wanting a stress-free royal treatment",
    servicesIncluded: [
      "HD Long-wear Bridal Base (Barat / Valima)",
      "Custom Bridal Hairstyling & Extensions",
      "Full Dupatta Setting & Jewelry Styling",
      "Pre-Bridal Hydrafacial Glow Treatment",
      "Luxury Hand & Feet Polish + Mani-Pedi"
    ]
  },
  {
    id: "hair-transformation-pkg",
    title: "Crown Hair Renewal Package",
    subtitle: "Ultimate Repair & Color Makeover",
    price: "Owner to provide exact package pricing",
    tag: "Best Hair Value",
    recommendedFor: "Anyone seeking a complete hair revamp",
    servicesIncluded: [
      "Choice of Balayage or Dimensional Highlights",
      "Hair Botox / Keratin Smoothing Therapy",
      "Custom Layered Haircut & Volumizing Blowout",
      "Color Locking Gloss & Bond Protection",
      "Take-home Hair Care Advice by Linta"
    ]
  },
  {
    id: "glass-skin-glow",
    title: "Signature Glass Skin Glow",
    subtitle: "Rejuvenating Skin & Spa Pampering",
    price: "Owner to provide exact package pricing",
    tag: "Best Skincare",
    recommendedFor: "Pre-party prep, engagement, or weekend refresh",
    servicesIncluded: [
      "Advanced Multi-step Hydrafacial",
      "Herbal Skin Whitening & De-tan Mask",
      "Luxury Hand & Feet Spa Treatment",
      "Face Threading & Brow Shaping",
      "Relaxing Scalp & Shoulder Massage"
    ]
  }
];

export const BEFORE_AFTER_TRANSFORMATIONS: TransformationItem[] = [
  {
    id: "trans-1",
    title: "Signature Caramel Balayage & Gloss",
    category: "color",
    beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    afterImage: SALON_INFO.images.hairTrans,
    description: "Transformed dull dark brown hair into rich multi-dimensional caramel balayage with high-shine toner.",
    serviceUsed: "Signature Balayage + Gloss"
  },
  {
    id: "trans-2",
    title: "Frizz Repair Hair Botox",
    category: "botox",
    beforeImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
    description: "Restored damaged, unmanageable humidity-frizzed hair into smooth, silky glass strands.",
    serviceUsed: "Hair Botox Therapy"
  },
  {
    id: "trans-3",
    title: "Pakistani Royal Bridal Transformation",
    category: "bridal",
    beforeImage: "https://images.unsplash.com/photo-1512290900676-26c2a4a2b5ae?auto=format&fit=crop&q=80&w=800",
    afterImage: SALON_INFO.images.bridalLook,
    description: "Flawless HD Barat bridal look tailored to match heavy maroon embroidered bridal lehenga.",
    serviceUsed: "Professional Bridal Makeup"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Barat Bridal Masterpiece",
    category: "Bridal",
    image: SALON_INFO.images.hero,
    tag: "Linta's Barat Bride"
  },
  {
    id: "g2",
    title: "Caramel Honey Balayage",
    category: "Hair",
    image: SALON_INFO.images.hairTrans,
    tag: "Linta's Balayage Work"
  },
  {
    id: "g3",
    title: "Valima Pastel Soft Glam",
    category: "Bridal",
    image: SALON_INFO.images.bridalLook,
    tag: "Linta's Valima Bride"
  },
  {
    id: "g4",
    title: "Glass Skin Hydrafacial Glow",
    category: "Skincare",
    image: SALON_INFO.images.hydrafacial,
    tag: "Linta's Hydrafacial"
  },
  {
    id: "g5",
    title: "Luxury Studio Suite",
    category: "Studio",
    image: SALON_INFO.images.interior,
    tag: "North Nazimabad Salon"
  },
  {
    id: "g6",
    title: "HD Party Makeup & Lashes",
    category: "Makeup",
    image: SALON_INFO.images.hero,
    tag: "Linta's Party Glam"
  }
];

export const CUSTOMER_REVIEWS: TestimonialItem[] = [
  {
    id: "r1",
    name: "Sobia K.",
    location: "North Nazimabad, Karachi",
    rating: 5,
    service: "Hair Coloring & Balayage",
    text: "Linta's Beauty Salon is truly a hidden gem in North Nazimabad! The hair coloring results exceeded my expectations. Very reasonable prices, polite staff, and Linta personally ensured everything was perfect.",
    date: "Google Review"
  },
  {
    id: "r2",
    name: "Fatima Noor",
    location: "Block L, North Nazimabad",
    rating: 5,
    service: "Bridal Makeup",
    text: "Got my Barat makeup done here and everyone complimented my look! The base didn't crack at all and stayed fresh all night. Very hygienic studio and warm hospitality.",
    date: "Google Review"
  },
  {
    id: "r3",
    name: "Ayesha Imran",
    location: "Karachi",
    rating: 5,
    service: "Hydrafacial & Hair Botox",
    text: "Extremely affordable for the high quality of products used. The Hydrafacial gave me instant glow and my frizzy hair is now so silky smooth. Highly recommended!",
    date: "Google Review"
  },
  {
    id: "r4",
    name: "Mariam Zahid",
    location: "North Nazimabad",
    rating: 5,
    service: "Party Makeup & Hair Styling",
    text: "Super friendly owner and cooperative staff. They listen carefully to what style you want and deliver exact perfection. Definitely my go-to salon in Karachi!",
    date: "Google Review"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Linta",
    role: "Founder & Lead Bridal Artist",
    specialty: "Bridal Makeup & Skincare Consultation",
    experience: "Master Beauty Stylist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    tag: "Owner & Lead Artist"
  },
  {
    name: "Senior Hair Stylist",
    role: "Linta's Team Member",
    specialty: "Balayage, Hair Botox & Precision Trims",
    experience: "Hair Transformation Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    tag: "Owner to provide name"
  },
  {
    name: "Skin & Spa Specialist",
    role: "Linta's Team Member",
    specialty: "Hydrafacials, Herbal Facials & Mani-Pedi",
    experience: "Certified Esthetician",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600",
    tag: "Owner to provide name"
  }
];

export const FAQS = [
  {
    question: "Where is Linta's Beauty Salon located in Karachi?",
    answer: "We are located at A-98, Street No.7, Block L North Nazimabad, Karachi, Pakistan. Easily accessible with dedicated parking space."
  },
  {
    question: "How can I book an appointment for Bridal Makeup?",
    answer: "You can book directly via WhatsApp (+92 333 0247837) or using our online booking form. We recommend reserving bridal dates at least 2-4 weeks in advance."
  },
  {
    question: "What hair color & treatment products do you use?",
    answer: "We use high quality, damage-protection professional hair color ranges and certified ammonia-free formulas to protect South Asian hair texture."
  },
  {
    question: "Are your prices affordable?",
    answer: "Yes! Linta's Beauty Salon is widely praised across North Nazimabad for combining luxury, high-end results with very accessible and reasonable prices."
  },
  {
    question: "Is prior booking required or can I walk in?",
    answer: "Walk-ins are welcome for general threading or quick haircuts, but prior appointment booking via WhatsApp is highly recommended to avoid waiting time."
  }
];
