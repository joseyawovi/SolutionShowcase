export const CATEGORIES = {
  AGRICULTURE: 'agriculture',
  CONSTRUCTION: 'construction',
  INDUSTRY: 'industry',
} as const;

export const EQUIPMENT_DATA = [
  {
    id: '1',
    name: 'Pelle Excavatrice 20T',
    category: CATEGORIES.CONSTRUCTION,
    subcategory: 'Excavators',
    description: 'Pelle hydraulique sur chenilles, idéale pour travaux de terrassement et démolition.',
    specifications: JSON.stringify({
      weight: '20 tonnes',
      power: '180 HP',
      depth: '6.8 m',
      reach: '9.8 m',
      width: '2.8 m'
    }),
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    condition: 'used',
    availability: 'available',
    year: 2019,
    hours: 3250,
    weight: 20000,
    power: 180,
    featured: true
  },
  {
    id: '2',
    name: 'Tracteur Agricole 150HP',
    category: CATEGORIES.AGRICULTURE,
    subcategory: 'Tractors',
    description: 'Tracteur polyvalent pour tous travaux agricoles, équipé des dernières technologies.',
    specifications: JSON.stringify({
      power: '150 HP',
      speed: '40 km/h',
      transmission: 'PowerShift',
      hydraulics: '110 L/min'
    }),
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    condition: 'new',
    availability: 'available',
    year: 2024,
    hours: 0,
    weight: 8500,
    power: 150,
    featured: true
  },
  {
    id: '3',
    name: 'Chariot Élévateur 3T',
    category: CATEGORIES.INDUSTRY,
    subcategory: 'Forklifts',
    description: 'Chariot élévateur diesel pour manutention intensive en entrepôt et extérieur.',
    specifications: JSON.stringify({
      capacity: '3000 kg',
      lift: '4.5m levée',
      fuel: 'Diesel',
      mast: 'Triplex'
    }),
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    condition: 'used',
    availability: 'available',
    year: 2020,
    hours: 2800,
    weight: 4200,
    power: 75,
    featured: true
  },
  {
    id: '4',
    name: 'Bulldozer D6',
    category: CATEGORIES.CONSTRUCTION,
    subcategory: 'Bulldozers',
    description: 'Bulldozer sur chenilles pour travaux de terrassement et nivellement.',
    specifications: JSON.stringify({
      weight: '18 tonnes',
      power: '170 HP',
      blade: '3.4m largeur',
      ground_pressure: '0.7 kg/cm²'
    }),
    images: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    condition: 'new',
    availability: 'available',
    year: 2024,
    hours: 0,
    weight: 18000,
    power: 170,
    featured: false
  },
  {
    id: '5',
    name: 'Moissonneuse-Batteuse',
    category: CATEGORIES.AGRICULTURE,
    subcategory: 'Harvesters',
    description: 'Moissonneuse haute performance pour récolte de céréales et oléagineux.',
    specifications: JSON.stringify({
      cutting_width: '6.20m coupe',
      power: '340 HP',
      tank: '9000L trémie',
      unloading_rate: '120 L/s'
    }),
    images: [
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    condition: 'used',
    availability: 'available',
    year: 2021,
    hours: 1850,
    weight: 15500,
    power: 340,
    featured: false
  },
  {
    id: '6',
    name: 'Grue Mobile 50T',
    category: CATEGORIES.CONSTRUCTION,
    subcategory: 'Cranes',
    description: 'Grue mobile tout terrain pour levage et manutention sur chantiers.',
    specifications: JSON.stringify({
      capacity: '50 tonnes',
      boom: '40m flèche',
      height: '56m hauteur max',
      outriggers: '7.2m empattement'
    }),
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    condition: 'new',
    availability: 'available',
    year: 2024,
    hours: 0,
    weight: 36000,
    power: 350,
    featured: false
  }
];

export const PARTS_DATA = [
  {
    id: 'p1',
    name: 'Filtre à huile',
    reference: 'FO-2847',
    category: 'engine',
    compatibility: ['CAT 320', 'JCB 8080', 'Komatsu PC200'],
    description: 'Filtre à huile haute performance pour moteurs diesel industriels',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    ],
    availability: 'in_stock',
    featured: true
  },
  {
    id: 'p2',
    name: 'Pompe hydraulique',
    reference: 'PH-1234',
    category: 'hydraulic',
    compatibility: ['Liebherr', 'Volvo', 'Hitachi'],
    description: 'Pompe hydraulique principale pour excavatrice',
    images: [
      'https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    ],
    availability: 'on_order',
    featured: true
  },
  {
    id: 'p3',
    name: 'Chaîne de chenille',
    reference: 'CH-5678',
    category: 'chassis',
    compatibility: ['Komatsu PC200', 'CAT 320'],
    description: 'Chaîne de chenille renforcée pour excavatrice',
    images: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    ],
    availability: 'in_stock',
    featured: true
  },
  {
    id: 'p4',
    name: 'Siège opérateur',
    reference: 'SO-9012',
    category: 'cabin',
    compatibility: ['Universel'],
    description: 'Siège opérateur ergonomique avec suspension pneumatique',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    ],
    availability: 'in_stock',
    featured: true
  }
];

export const LANGUAGES = {
  FR: 'fr',
  EN: 'en',
} as const;

export const TRANSLATIONS = {
  [LANGUAGES.FR]: {
    nav: {
      home: 'Accueil',
      equipment: 'Engins',
      parts: 'Pièces',
      contact: 'Contact'
    },
    hero: {
      title: 'Spécialistes en Équipements Industriels',
      subtitle: 'Solution 88 vous accompagne dans vos projets avec une large gamme d\'engins et pièces détachées pour l\'agriculture, le BTP et l\'industrie.',
      cta1: 'Découvrir nos Équipements',
      cta2: 'Demander un Devis'
    },
    categories: {
      agriculture: 'Agriculture',
      construction: 'BTP',
      industry: 'Industrie'
    }
  },
  [LANGUAGES.EN]: {
    nav: {
      home: 'Home',
      equipment: 'Equipment',
      parts: 'Parts',
      contact: 'Contact'
    },
    hero: {
      title: 'Industrial Equipment Specialists',
      subtitle: 'Solution 88 supports your projects with a wide range of machinery and spare parts for agriculture, construction and industry.',
      cta1: 'Discover our Equipment',
      cta2: 'Request a Quote'
    },
    categories: {
      agriculture: 'Agriculture',
      construction: 'Construction',
      industry: 'Industry'
    }
  }
};
