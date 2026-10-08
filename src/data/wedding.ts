/**
 * WEDDING INVITATION CONFIGURATION & DATA SOURCE
 * 
 * All wedding details are centralized here.
 * You can edit the Year, Dates, Times, Venue, Family Members, Owner details,
 * and audio settings without touching any component code.
 */

// ==========================================
// 1. PRIMARY WEDDING YEAR & COUNTDOWN TARGET
// ==========================================

/**
 * WEDDING YEAR:
 * Keep the year as a single easily editable constant.
 * Replace '2026' with your target year when final.
 */
export const WEDDING_YEAR = 2026;

/**
 * COUNTDOWN TARGET DATE & TIME:
 * Enter the exact wedding date and time here.
 * Format: 'YYYY-MM-DDTHH:mm:ss'
 * Example: `${WEDDING_YEAR}-11-02T18:00:00` (2 November at 6:00 PM)
 * 
 * IMPORTANT: If the exact time is not yet determined, this default is 6:00 PM.
 * Update this single line when the exact wedding time is confirmed!
 */
export const WEDDING_COUNTDOWN_TARGET = `${WEDDING_YEAR}-11-02T00:00:00`;

/**
 * HOME HERO COUPLE IMAGE:
 * Configurable hero photo URL. Replace this single URL with the actual Kausar & Najiya photo!
 */
export const WEDDING_HERO_IMAGE = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80";

// ==========================================
// 2. MAIN COUPLE INFORMATION
// ==========================================
export interface Person {
  name: string;
  fullName?: string;
  fatherName?: string;
  motherName?: string;
  tagline?: string;
}

export interface WeddingData {
  bismillah: {
    arabic: string;
    english: string;
    urdu?: string;
  };
  welcome: {
    subtitle: string;
    title: string;
    invitationNote: string;
    openButtonText: string;
  };
  groom: Person;
  bride: Person;
  year: number;
  datesSummary: string;
  venue: {
    name: string;
    subLocation: string;
    city: string;
    fullAddress: string;
    googleMapsUrl: string;
    mapEmbedQuery: string;
    directionsNote: string;
    /**
     * Venue Owner / Location Contact:
     * Keep separate from application owner.
     * Set 'show' to true only if actual owner information is provided.
     */
    ownerInfo?: {
      show: boolean;
      name?: string;
      title?: string;
      phone?: string;
      note?: string;
    };
  };
  events: WeddingEvent[];
  familyMembers: FamilyMember[];
  gallery: GalleryItem[];
  rsvpConfig: {
    whatsappNumber: string; // for direct WhatsApp RSVP sharing if guest wants
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    supportNote: string;
  };
  appOwner: AppOwnerProfile;
  music: {
    title: string;
    artist: string;
    src?: string;
    youtubeVideoId: string;
    youtubeUrl?: string;
  };
}

export interface WeddingEvent {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  date: string;
  fullDateText: string;
  /**
   * Time placeholder:
   * Do not invent event times. Edit this placeholder when exact time is finalized.
   */
  timePlaceholder: string;
  venue: string;
  locationDetails: string;
  description: string;
  details: string[];
  themeColor: string;
  tag: string;
  image: string;
  galleryImages: string[];
}

export interface FamilyMember {
  id: string;
  relation: string;
  name: string; // Placeholder until provided
  note?: string;
  image: string;
  photoPlaceholder?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "pre-wedding" | "haldi" | "mehndi" | "wedding" | "reception" | "family" | "venue";
  imageUrl: string;
  caption: string;
}

export interface AppOwnerProfile {
  name: string;
  role: string;
  headline: string;
  about: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  avatarUrl: string;
}

// ==========================================
// 3. MASTER WEDDING DATA OBJECT
// ==========================================
export const WEDDING_DATA: WeddingData = {
  bismillah: {
    arabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    english: "In the name of Allah, the Most Gracious, the Most Merciful",
    urdu: "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے",
  },
  welcome: {
    subtitle: "Wedding Invitation",
    title: "Kausar & Najiya",
    invitationNote: "Together with their families, you are cordially invited to celebrate the joyful wedding union.",
    openButtonText: "Open Invitation",
  },
  groom: {
    name: "Kausar",
    fullName: "Kausar",
    tagline: "Groom",
  },
  bride: {
    name: "Najiya",
    fullName: "Najiya",
    tagline: "Bride",
  },
  year: WEDDING_YEAR,
  datesSummary: `31 October – 3 November ${WEDDING_YEAR}`,
  venue: {
    name: "Shekhpura",
    subLocation: "Near Shekhpura Jama Masjid",
    city: "Shekhpura",
    fullAddress: "Shekhpura, Near Shekhpura Jama Masjid",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shekhpura+Near+Shekhpura+Jama+Masjid",
    mapEmbedQuery: "Shekhpura, Near Shekhpura Jama Masjid",
    directionsNote: "Conveniently located near Shekhpura Jama Masjid with ample guest parking and warm hospitality.",
    ownerInfo: {
      show: false, // Set to true only if actual venue owner info is provided
      name: "[Venue Owner / Management Name]",
      title: "Venue Coordinator",
      phone: "[Venue Phone Number]",
      note: "For venue-specific inquiries or hall logistics.",
    },
  },

  // 5 Wedding Events: Haldi, Madwa, Mehndi, Wedding, Reception
  events: [
    {
      id: "haldi",
      slug: "haldi",
      name: "Haldi Ceremony",
      subtitle: "Auspicious turmeric blessings & morning joy",
      date: "31 October",
      fullDateText: `31 October ${WEDDING_YEAR}`,
      timePlaceholder: "7:30 pm saturday",
      venue: "Shekhpura, Near Shekhpura Jama Masjid",
      locationDetails: "Ceremonial Courtyard, Shekhpura",
      description: "An auspicious ceremony filled with laughter, vibrant yellow hues, and blessings of love as turmeric paste is lovingly applied to prepare for the sacred union.",
      details: [
        "Traditional Haldi rituals with family & close friends",
        "Dress Code: Radiant Yellows & Traditional Attire",
        "Refreshing beverages and customary sweets",
      ],
      themeColor: "from-amber-500/20 to-yellow-500/30",
      tag: "Day 1",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "madwa",
      slug: "madwa",
      name: "Madwa Ceremony",
      subtitle: "Mandap Ceremony 🌸",
      date: "1 November",
      fullDateText: `1 November ${WEDDING_YEAR}`,
      timePlaceholder: "7 pm sunday",
      venue: "Shekhpura, Near Shekhpura Jama Masjid",
      locationDetails: "Mandap Pavilion, Shekhpura",
      description: "The traditional Madwa (Mandap) ceremony invokes divine blessings for peace, prosperity, and harmony for the couple and the family.",
      details: [
        "Sacred canopy setup and family prayers",
        "Dress Code: Pastel shades & festive ethnic",
        "Cherished rituals celebrating ancestral blessings",
      ],
      themeColor: "from-rose-500/20 to-pink-500/30",
      tag: "Day 2 • Morning",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "mehndi",
      slug: "mehndi",
      name: "Mehndi",
      subtitle: "Intricate henna designs, songs & evening celebrations",
      date: "1 November",
      fullDateText: `1 November ${WEDDING_YEAR}`,
      timePlaceholder: "6 pm sunday",
      venue: "Shekhpura, Near Shekhpura Jama Masjid",
      locationDetails: "Garden Lawn, Shekhpura",
      description: "An evening adorned with intricate henna art, rhythmic wedding songs, fragrant blossoms, and lively joyous memories.",
      details: [
        "Exquisite bridal & guest henna application",
        "Dress Code: Festive Greens, Teal & Florals",
        "Live traditional folk tunes and gourmet treats",
      ],
      themeColor: "from-emerald-600/20 to-teal-500/30",
      tag: "Day 2 • Evening",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "wedding",
      slug: "wedding",
      name: "Wedding",
      subtitle: "The Sacred Nikah Ceremony & Grand Celebration",
      date: "2 November",
      fullDateText: `2 November ${WEDDING_YEAR}`,
      timePlaceholder: "7 pm monday",
      venue: "BIhar rohtas Sukralli bigha",
      locationDetails: "Grand Royal Banquet, Shekhpura",
      description: "With the grace of Almighty Allah, Kausar & Najiya unite in the holy bond of marriage. We request the pleasure of your company and heartfelt prayers.",
      details: [
        "Solemn Nikah Ceremony and heartfelt du’a",
        "Dress Code: Royal Traditional / Formals",
        "Sumptuous celebratory wedding feast",
      ],
      themeColor: "from-red-700/20 to-amber-600/30",
      tag: "Day 3 • Main Day",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "reception",
      slug: "reception",
      name: "Reception",
      subtitle: "Walima Feast & Welcoming the Newlyweds",
      date: "3 November",
      fullDateText: `3 November ${WEDDING_YEAR}`,
      timePlaceholder: "start 7 pm Tuesday",
      venue: "Shekhpura, Near Shekhpura Jama Masjid",
      locationDetails: "Grand Banquet Hall, Shekhpura",
      description: "Join us in greeting the newlyweds at the Walima reception. An evening filled with blessings, culinary delicacies, and joyous interactions.",
      details: [
        "Meet and bless the newly married couple",
        "Dress Code: Elegant Evening Formal / Sherwani / Suit",
        "Lavish dinner banquet and photography",
      ],
      themeColor: "from-purple-800/20 to-rose-700/30",
      tag: "Day 4 • Grand Finale",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],

  // 7. GROOM'S FAMILY MEMBERS ONLY (Centralized configuration with real images)
  familyMembers: [
    {
      id: "grandfather-nijam",
      relation: "Grand-Father",
      name: "Nijam Ansari",
      // note: "Pillar of strength and guidance",
      image: "",
      photoPlaceholder: "father",
    },
    {
      id: "father-akrar",
      relation: "Father",
      name: "Akrar Ansari",
      // note: "Pillar of strength and guidance",
      image: "",
      photoPlaceholder: "father",
    },
    {
      id: "uncle-amir",
      relation: "Uncle",
      name: "Amir hussain",
      // note: "Heart of wisdom and boundless blessings",
      image: "",
      photoPlaceholder: "uncle",
    },
    {
      id: "uncle-amir",
      relation: "Uncle",
      name: "syed Ali",
      // note: "Heart of wisdom and boundless blessings",
      image: "",
      photoPlaceholder: "uncle",
    },
    {
      id: "uncle-amir",
      relation: "Uncle",
      name: "sarafat Ansari",
      // note: "Heart of wisdom and boundless blessings",
      image: "",
      photoPlaceholder: "uncle",
    },
    {
      id: "brother-faizan",
      relation: "Brother",
      name: "faizan",
      // note: "Loving brother standing by our side",
      image: "/images/family/d.jpeg",
      photoPlaceholder: "brother",
    },
    {
      id: "brother-lal",
      relation: "Brother",
      name: "Lal mohammad",
      // note: "Loving brother standing by our side",
      image: "/images/family/bbrother.jpeg",
      photoPlaceholder: "brother",
    },
    {
      id: "brother-belal",
      relation: "Brother",
      name: "Belal",
      // note: "Loving brother standing by our side",
      image: "/images/family/s.jpeg",
      photoPlaceholder: "brother",
    },
    {
      id: "brother-jaid",
      relation: "Brother",
      name: "Jaid",
      // note: "Loving brother standing by our side",
      image: "/images/family/brother.png",
      photoPlaceholder: "brother",
    },
    {
      id: "brother-taj",
      relation: "Brother",
      name: "taj",
      // note: "Loving brother standing by our side",
      image: "/images/family/ta.jpeg",
      photoPlaceholder: "brother",
    },
    {
      id: "sister-joya",
      relation: "Sister",
      name: "Joya",
      note: "Cherished sister spreading smiles and joy",
      image: "/images/family/j.jpeg",
      photoPlaceholder: "sister",
    },
    {
      id: "brother-taj-alt",
      relation: "Brother",
      name: "hadi",
      // note: "Loving brother standing by our side",
      image: "/images/family/sbrother.jpeg",
      photoPlaceholder: "brother",
    },
  ],

  // 10. GALLERY ITEMS
  gallery: [
    {
      id: "g1",
      title: "Golden Floral Mandap",
      category: "venue",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      caption: "Ornate venue decorations lit under warm ambient lanterns",
    },
    {
      id: "g2",
      title: "Sacred Wedding Rings",
      category: "wedding",
      imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
      caption: "Eternal symbol of promise, love and companionship",
    },
    {
      id: "g3",
      title: "Intricate Henna Motifs",
      category: "mehndi",
      imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      caption: "Deep rich henna art prepared with love and blessings",
    },
    {
      id: "g4",
      title: "Sunlit Haldi Blessings",
      category: "haldi",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
      caption: "Vibrant yellow marigold and auspicious turmeric paste",
    },
    {
      id: "g5",
      title: "Grand Evening Banquet",
      category: "reception",
      imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80",
      caption: "A magical celebratory atmosphere to welcome the newlyweds",
    },
    {
      id: "g6",
      title: "Romantic Candlelight & Roses",
      category: "pre-wedding",
      imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      caption: "Atmospheric evening glow and floral centerpieces",
    },
    {
      id: "g7",
      title: "Traditional Groom Sherwani Accent",
      category: "wedding",
      imageUrl: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80",
      caption: "Royal royal velvet textures and gold embroidery",
    },
    {
      id: "g8",
      title: "Warm Family Welcoming",
      category: "family",
      imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80",
      caption: "Joyous laughter, embraces, and welcoming smiles",
    },
  ],

  // 12. RSVP CONFIGURATION
  rsvpConfig: {
    whatsappNumber: "919876543210", // Configurable WhatsApp receiver
  },

  // 13. CONTACT CONFIGURATION (Placeholders)
  contact: {
    phone: "+91 7857811740",
    whatsapp: "https://wa.me/919876543210",
    email: "wedding.inquiry@example.com",
    address: "Shekhpura, Near Shekhpura Jama Masjid",
    supportNote: "For any assistance regarding directions, stay or event schedules, please feel free to reach out.",
  },

  // 14. OWNER OF APPLICATION (Configurable developer profile)
  appOwner: {
    name: "Jaid",
    role: "Full-Stack Web Developer & UI Designer",
    headline: "Crafting digital experiences with precision, elegance, and soul.",
    about: "Specialized in creating modern, responsive, high-performance web applications and digital invitation experiences. Built with Next.js, TypeScript, and modern animation technologies.",
    email: "",
    phone: "7857811740",
    whatsappUrl: "https://wa.me/917857811740?text=Hi,%20I%20loved%20the%20Wedding%20Invitation%20App!",
    instagramUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    avatarUrl: "/images/developer.jpg",
  },

  // 15. BACKGROUND MUSIC (YouTube Video ID: wluOl69d-Qg)
  music: {
    title: "Instrumental Wedding Melody",
    artist: "YouTube Background Music",
    src: "/audio/wedding-melody.mp3",
    youtubeVideoId: "wluOl69d-Qg",
    youtubeUrl: "https://youtu.be/wluOl69d-Qg?si=MpDUEgMKBzkUAfDb",
  },
};
