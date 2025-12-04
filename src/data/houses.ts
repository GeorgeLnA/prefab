export interface HouseType {
  name: string;
  imageUrl: string;
  squareFeet: number;
  squareMeters: number;
  price: number;
  type: string;
  category: string; // New field for house type categories
  description?: string;
  additionalImages?: string[];
  inStock?: boolean; // Added inStock property
}

export const houseData: HouseType[] = [
  // Mobile Houses
  {
    name: "MOBILE M-30",
    inStock: true,
    imageUrl: "/prefab_homes_lounge_30_front_view.jpg",
    squareFeet: 1076,
    squareMeters: 100,
    price: 120000,
    type: "MOBILE",
    category: "MOBILE",
    description: "Compact mobile home with flexible living space and easy relocation",
    additionalImages: ["/prefab_homes_lounge_30_front_view.jpg", "/wive3.jpg"]
  },
  {
    name: "MOBILE M-45",
    inStock: true,
    imageUrl: "/wive3.jpg",
    squareFeet: 1292,
    squareMeters: 120,
    price: 145000,
    type: "MOBILE",
    category: "MOBILE",
    description: "Spacious mobile home with modern amenities and comfortable living",
    additionalImages: ["/wive3.jpg", "/prefab_homes_lounge_30_front_view.jpg"]
  },
  
  // Bungalow Houses
  {
    name: "BUNGALOW B-60",
    inStock: true,
    imageUrl: "/fasad-1.jpg",
    squareFeet: 1615,
    squareMeters: 150,
    price: 250000,
    type: "BUNGALOWS",
    category: "BUNGALOW",
    description: "Single-storey bungalow with open plan living and accessible design",
    additionalImages: ["/fasad-1.jpg", "/L-55_new.-1.jpg"]
  },
  {
    name: "BUNGALOW B-75",
    inStock: true,
    imageUrl: "/L-55_new.-1.jpg",
    squareFeet: 1830,
    squareMeters: 170,
    price: 285000,
    type: "BUNGALOWS",
    category: "BUNGALOW",
    description: "Spacious bungalow with premium finishes and modern comfort",
    additionalImages: ["/L-55_new.-1.jpg", "/fasad-1.jpg"]
  },
  
  // Smart Houses
  {
    name: "SMART S-18",
    inStock: true,
    imageUrl: "/S-18-1.jpg",
    squareFeet: 1292,
    squareMeters: 120,
    price: 320000,
    type: "BUNGALOWS",
    category: "SMART",
    description: "Intelligent home automation and energy efficiency with compact design",
    additionalImages: ["/S-18-1.jpg", "/126.jpg"]
  },
  {
    name: "SMART S-126",
    inStock: true,
    imageUrl: "/126.jpg",
    squareFeet: 1356,
    squareMeters: 126,
    price: 335000,
    type: "BUNGALOWS",
    category: "SMART",
    description: "Advanced smart home technology integration with modern aesthetics",
    additionalImages: ["/126.jpg", "/S-18-1.jpg"]
  },
  
  // Skandy-Nordy Houses
  {
    name: "SKANDY-NORDY SN-42",
    inStock: true,
    imageUrl: "/nordy-42-3d-1.jpg",
    squareFeet: 1507,
    squareMeters: 140,
    price: 295000,
    type: "BUNGALOWS",
    category: "SKANDY-NORDY",
    description: "Scandinavian-Nordic inspired minimalist design with natural materials",
    additionalImages: ["/nordy-42-3d-1.jpg", "/Nordy-65-3D-2.jpg", "/skandy-120-3d-1.jpg"]
  },
  {
    name: "SKANDY-NORDY SN-65",
    inStock: true,
    imageUrl: "/Nordy-65-3D-2.jpg",
    squareFeet: 1830,
    squareMeters: 170,
    price: 340000,
    type: "1.5-STOREY",
    category: "SKANDY-NORDY",
    description: "Nordic elegance with sustainable materials and contemporary comfort",
    additionalImages: ["/Nordy-65-3D-2.jpg", "/skandy-120-3d-1.jpg", "/nordy-42-3d-1.jpg"]
  },
  {
    name: "SKANDY-NORDY SN-120",
    imageUrl: "/Skandy%20120%20front-1%202.png",
    squareFeet: 2200,
    squareMeters: 204,
    price: 395000,
    type: "2-STOREY",
    category: "SKANDY-NORDY",
    description: "Scandinavian design with enhanced features and luxury finishes in a natural forest setting",
    additionalImages: ["/Skandy%20120%20front-1%202.png", "/Skandy%20120%20front-1%20Medium.png", "/Nordy-65-3D-2.jpg"]
  },
  
  // Modern-B Houses
  {
    name: "MODERN-B MB-80",
    imageUrl: "/prefab_homes_modern_b_80_front_perspective.jpg",
    squareFeet: 1700,
    squareMeters: 158,
    price: 340000,
    type: "1.5-STOREY",
    category: "MODERN-B",
    description: "Contemporary architecture with bold design elements and striking facades",
    additionalImages: ["/prefab_homes_modern_b_80_front_perspective.jpg"]
  },
  
  // Modern Houses
  {
    name: "MODERN M-65",
    imageUrl: "/2p.jpg",
    squareFeet: 1900,
    squareMeters: 176,
    price: 315000,
    type: "2-STOREY",
    category: "MODERN",
    description: "Sleek modern design with cutting-edge features and contemporary aesthetics",
    additionalImages: ["/2p.jpg", "/render1.jpg"]
  },
  {
    name: "MODERN M-85",
    imageUrl: "/render1.jpg",
    squareFeet: 2100,
    squareMeters: 195,
    price: 385000,
    type: "2-STOREY",
    category: "MODERN",
    description: "Premium modern home with sophisticated design and luxury finishes",
    additionalImages: ["/render1.jpg", "/2p.jpg"]
  },
  
  // Modular Houses
  {
    name: "MODULAR MOD-40",
    imageUrl: "/modular-home-1.jpg",
    squareFeet: 1400,
    squareMeters: 130,
    price: 275000,
    type: "BUNGALOWS",
    category: "MODULAR",
    description: "Flexible modular construction with contemporary design and adaptable layouts",
    additionalImages: ["/modular-home-1.jpg", "/photo_2022-10-03-12.44.26.jpeg", "/IMG_0015.jpg"]
  },
  {
    name: "MODULAR MOD-55",
    imageUrl: "/photo_2022-10-03-12.44.26.jpeg",
    squareFeet: 1615,
    squareMeters: 150,
    price: 295000,
    type: "BUNGALOWS",
    category: "MODULAR",
    description: "Advanced modular system with premium materials and flexible configurations",
    additionalImages: ["/photo_2022-10-03-12.44.26.jpeg", "/modular-home-1.jpg", "/IMG_0015.jpg"]
  },
  {
    name: "MODULAR MOD-70",
    imageUrl: "/IMG_0015.jpg",
    squareFeet: 1830,
    squareMeters: 170,
    price: 325000,
    type: "1.5-STOREY",
    category: "MODULAR",
    description: "Spacious modular home with expandable design and modern amenities",
    additionalImages: ["/IMG_0015.jpg", "/modular-home-1.jpg", "/photo_2022-10-03-12.44.26.jpeg"]
  }
];

// Helper function to get houses by category
export const getHousesByCategory = (category: string) => {
  if (category === 'ALL') return houseData;
  return houseData.filter(house => house.category === category);
};

// Get unique categories
export const getCategories = () => {
  const categories = ['ALL', ...new Set(houseData.map(house => house.category))];
  return categories;
};