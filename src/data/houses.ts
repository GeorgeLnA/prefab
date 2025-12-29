export interface HouseType {
  name: string;
  slug: string;
  imageUrl: string;
  squareFeet: number;
  squareMeters: number;
  price: number;
  type: string;
  category: string; // New field for house type categories
  description?: string;
  additionalImages?: string[];
  inStock?: boolean; // Added inStock property
  // Extended fields for detailed information
  livingArea?: { feet: number; meters: number };
  coveredTerrace?: { feet: number; meters: number };
  thermalPerformance?: string;
  assemblyTime?: string;
  keyFeatures?: string[];
  about?: string;
  whatsIncluded?: Array<{ title: string; description: string }>;
  whatsNotIncluded?: Array<{ title: string; description: string }>;
  dimensions?: {
    totalArea?: { feet: number; meters: number };
    livingArea?: { feet: number; meters: number };
    coveredTerrace?: { feet: number; meters: number };
    bedrooms?: string;
    bathrooms?: number | string;
    overallSize?: string;
    walkInWardrobes?: string;
  };
  construction?: {
    wallSystem?: string;
    insulation?: string;
    windows?: string;
    roof?: string;
    foundation?: string;
  };
  energyEnvironment?: string[];
  features?: string[];
  floorPlans?: string[]; // Array of floor plan image paths
  facades?: string[]; // Array of facade image paths
}

export const houseData: HouseType[] = [
  // Skandy Houses
  {
    name: "SKANDY 70",
    slug: "skandy-70",
    inStock: true,
    imageUrl: "/SKANDY/SKANDY 70 1.jpeg",
    squareFeet: 657,
    squareMeters: 61,
    price: 68560,
    type: "ONE-BEDROOM",
    category: "MOBILE",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 474, meters: 44 },
    coveredTerrace: { feet: 183, meters: 17 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The SKANDY 70 is a compact yet highly functional one-bedroom home, designed for comfortable year-round living. Its Scandinavian architectural language combines natural materials, clean lines and a strong connection to daylight, creating a bright, calm and welcoming interior.\n\nWith an internal living area of 474 ft² (44 m²), the layout is carefully planned to include a spacious open-plan living and kitchen area, a separate bedroom and a bathroom. The full-height front-facing glazing spans almost the entire width of the living space, allowing generous natural light to flood the interior and creating an open, airy atmosphere throughout the day. A 183 ft² (17 m²) covered patio further extends the living area outdoors, offering a sheltered space for relaxation and everyday use in all seasons.\n\nBuilt as a permanent residential home, the SKANDY 70 delivers excellent thermal comfort and energy efficiency. The highly insulated SIP construction provides stable indoor temperatures, reduced heat loss and low energy demand, ensuring a comfortable living environment all year round.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal plumbing and electrical routes (first-fix only)",
        description: "Installed internal pipework, drainage routes and electrical cabling without sanitary ware, fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Internal finishes",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes and all finished floor coverings."
      },
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Final electrical fittings, lighting, heating systems, ventilation, MVHR, ASHP and all HVAC equipment."
      },
      {
        title: "Foundations and site works",
        description: "Supply and installation of foundations, groundworks, external drainage and utility connections."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, scaffolding and fall-arrest systems."
      },
      {
        title: "Planning and regulatory fees",
        description: "Planning applications, architectural services, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 657, meters: 61 },
      livingArea: { feet: 474, meters: 44 },
      coveredTerrace: { feet: 183, meters: 17 },
      bedrooms: "1",
      bathrooms: 1,
      overallSize: "27.9 × 27.2 × 12.8 ft (8.5 × 8.3 × 3.9 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Integrated covered terrace for year-round use",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build"
    ],
    additionalImages: [
      "/SKANDY/SKANDY 70 2.jpeg",
      "/SKANDY/SK70 3.jpeg"
    ],
    floorPlans: [
      "/SKANDY/Skandy 70. Floor plan_New_page-0001.jpg"
    ],
    facades: [
      "/SKANDY/Skandy 70. Facades_New_page-0001.jpg"
    ]
  },
  {
    name: "SKANDY 80",
    slug: "skandy-80",
    inStock: true,
    imageUrl: "/SKANDY/Skandy 80_2 Large.jpeg",
    squareFeet: 834,
    squareMeters: 78,
    price: 81460,
    type: "THREE-BEDROOM",
    category: "MOBILE",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 834, meters: 78 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The SKANDY 80 is a remarkably efficient and thoughtfully designed home that offers an exceptional level of functionality within a compact footprint. With a total internal area of 834 ft² (77.5 m²), the house delivers a layout rarely found at this size.\n\nDespite its modest overall area, the SKANDY 80 accommodates three full-sized bedrooms and two bathrooms, making it a highly practical solution for families or multi-occupancy living. This intelligent space planning allows the house to remain economical to build and operate, while still providing the comfort and flexibility of a much larger home.\n\nLarge front-facing glazing runs across the main living elevation, bringing abundant natural light into the open-plan living and kitchen space and enhancing the sense of openness throughout the interior. The result is a rational, well-balanced home that maximises every square metre without compromise.\n\nBuilt as a permanent residential home, the SKANDY 80 combines excellent thermal comfort with energy-efficient SIP construction, ensuring stable indoor temperatures and low heat loss for comfortable year-round living.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal plumbing and electrical routes (first-fix only)",
        description: "Installed internal pipework, drainage routes and electrical cabling without sanitary ware, fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Internal finishes",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes and all finished floor coverings."
      },
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Final electrical fittings, lighting, heating systems, ventilation, MVHR, ASHP and all HVAC equipment."
      },
      {
        title: "Foundations and site works",
        description: "Supply and installation of foundations, groundworks, external drainage and utility connections."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, scaffolding and fall-arrest systems."
      },
      {
        title: "Planning and regulatory fees",
        description: "Planning applications, architectural services, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 834, meters: 78 },
      livingArea: { feet: 834, meters: 78 },
      bedrooms: "3",
      bathrooms: 1,
      overallSize: "35.8 × 27.2 × 12.8 ft (10.9 × 8.3 × 3.9 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build",
      "Three bedrooms in efficient space planning"
    ],
    additionalImages: [
      "/SKANDY/Skandy 80_1 Large.jpeg"
    ],
    floorPlans: [
      "/SKANDY/Skandy 80. Floor plan_New_page-0001.jpg"
    ],
    facades: [
      "/SKANDY/Skandy 80. Facades_page-0001.jpg"
    ]
  },
  {
    name: "SKANDY 96",
    slug: "skandy-96",
    inStock: true,
    imageUrl: "/SKANDY/SKANDY 96_1_4K Large.jpeg",
    squareFeet: 958,
    squareMeters: 89,
    price: 97080,
    type: "ONE-BEDROOM",
    category: "MOBILE",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 753, meters: 70 },
    coveredTerrace: { feet: 205, meters: 19 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The SKANDY 96 is a highly distinctive and spacious home, designed around an exceptionally large open-plan living, dining and kitchen area. Despite its compact bedroom arrangement, the house feels generous and open, making it ideal for social living, entertaining and relaxed gatherings.\n\nWith an internal living area of 753 ft² (70 m²), the layout is centred around a single, expansive living space that benefits from three-sided glazing, allowing daylight to enter from multiple directions throughout the day. This creates a bright, open atmosphere and a strong visual connection with the surrounding landscape.\n\nThe living area opens directly onto two separate terraces, extending the interior space outdoors and making the house particularly well suited for hosting friends, family events or informal summer living. While perfectly comfortable for a couple or two-person household, the SKANDY 96 is intentionally designed as a social home — spacious, open and ideal for countryside retreats, holiday use or weekend gatherings.\n\nBuilt as a permanent residential home, the SKANDY 96 combines excellent thermal comfort with energy-efficient SIP construction, ensuring stable indoor temperatures and a comfortable environment throughout the year.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal plumbing and electrical routes (first-fix only)",
        description: "Installed internal pipework, drainage routes and electrical cabling without sanitary ware, fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Internal finishes",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes and all finished floor coverings."
      },
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Final electrical fittings, lighting, heating systems, ventilation, MVHR, ASHP and all HVAC equipment."
      },
      {
        title: "Foundations and site works",
        description: "Supply and installation of foundations, groundworks, external drainage and utility connections."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, scaffolding and fall-arrest systems."
      },
      {
        title: "Planning and regulatory fees",
        description: "Planning applications, architectural services, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 958, meters: 89 },
      livingArea: { feet: 753, meters: 70 },
      coveredTerrace: { feet: 205, meters: 19 },
      bedrooms: "1",
      bathrooms: 1,
      overallSize: "39.7 × 27.2 × 12.8 ft (12.1 × 8.3 × 3.9 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Two separate terraces extending outdoor living",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build",
      "Three-sided glazing for maximum daylight"
    ],
    additionalImages: [
      "/SKANDY/SKANDY 96_2_2K Large.jpeg",
      "/SKANDY/SK 96 Large.jpeg"
    ],
    floorPlans: [
      "/SKANDY/Skandy 96. Floor plan_page-0001.jpg"
    ],
    facades: [
      "/SKANDY/Skandy 96. Facades_New_page-0001.jpg"
    ]
  },
  {
    name: "SKANDY 100",
    slug: "skandy-100",
    inStock: true,
    imageUrl: "/SKANDY/SKANDY 100_1Final 2k Large.jpeg",
    squareFeet: 1184,
    squareMeters: 110,
    price: 106360,
    type: "TWO-BEDROOM",
    category: "MOBILE",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 1001, meters: 93 },
    coveredTerrace: { feet: 183, meters: 17 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The SKANDY 100 is a refined and well-proportioned two-bedroom home, designed for relaxed, comfortable living with a strong emphasis on shared space and connection to the outdoors. While perfectly suited for a household of two, the house offers the scale and openness to comfortably host guests, gatherings and social occasions.\n\nWith an internal living area of 1,001 ft² (93 m²), the layout is centred around a spacious open-plan living, dining and kitchen area that forms the heart of the home. Large front-facing glazing spans the full width of the main elevation, filling the living space with natural daylight and creating a seamless visual link to the surrounding landscape.\n\nA generous 183 ft² (17 m²) terrace extends directly from the living area, providing an ideal outdoor setting for dining, entertaining or simply enjoying time with friends and family. The balance between indoor openness and outdoor space makes the SKANDY 100 an excellent choice for countryside living, holiday use or a comfortable permanent home with a strong social focus.\n\nBuilt as a permanent residential home, the SKANDY 100 combines excellent thermal comfort with energy-efficient SIP construction, ensuring stable indoor temperatures and a comfortable living environment throughout the year.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal plumbing and electrical routes (first-fix only)",
        description: "Installed internal pipework, drainage routes and electrical cabling without sanitary ware, fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Internal finishes",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes and all finished floor coverings."
      },
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Final electrical fittings, lighting, heating systems, ventilation, MVHR, ASHP and all HVAC equipment."
      },
      {
        title: "Foundations and site works",
        description: "Supply and installation of foundations, groundworks, external drainage and utility connections."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, scaffolding and fall-arrest systems."
      },
      {
        title: "Planning and regulatory fees",
        description: "Planning applications, architectural services, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 1184, meters: 110 },
      livingArea: { feet: 1001, meters: 93 },
      coveredTerrace: { feet: 183, meters: 17 },
      bedrooms: "2",
      bathrooms: 1,
      overallSize: "47.6 × 27.2 × 12.8 ft (14.5 × 8.3 × 3.9 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Integrated covered terrace for year-round use",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build"
    ],
    additionalImages: [
      "/SKANDY/SKANDY 100_2Final 2k Large.jpeg",
      "/SKANDY/SK100 3 Large.jpeg",
      "/SKANDY/SK 100 4 Large.jpeg"
    ],
    floorPlans: [
      "/SKANDY/Floor plan. Skandy 100. Version 2_page-0001.jpg"
    ],
    facades: [
      "/SKANDY/Skandy 100_New. Facades_page-0001.jpg"
    ]
  },
  {
    name: "SKANDY 120",
    slug: "skandy-120",
    inStock: true,
    imageUrl: "/SKANDY/SKANDY 120_ 1. 4K Large.jpeg",
    squareFeet: 1399,
    squareMeters: 130,
    price: 118490,
    type: "THREE-BEDROOM",
    category: "MOBILE",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 1216, meters: 113 },
    coveredTerrace: { feet: 183, meters: 17 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The SKANDY 120 is a highly flexible and well-balanced family home, designed to adapt to different lifestyles and household needs. A key feature of this model is the availability of two alternative base layouts, allowing the house to be configured either as a four-bedroom home with one bathroom or as a three-bedroom home with two bathrooms.\n\nThis flexibility significantly expands the functional possibilities of the house, making it suitable for larger families, multi-generational living or owners who value additional bathrooms and storage space. The ability to choose between layouts allows the SKANDY 120 to be tailored to individual priorities without increasing the overall footprint of the building.\n\nWith a generous internal living area, the house is organised around a spacious open-plan living, dining and kitchen zone, enhanced by large front-facing glazing. This creates a bright, open atmosphere and a strong visual connection to the outdoor terraces, supporting both everyday family life and social gatherings.\n\nBuilt as a permanent residential home, the SKANDY 120 combines excellent thermal comfort with energy-efficient SIP construction, ensuring stable indoor temperatures and comfortable year-round living.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal plumbing and electrical routes (first-fix only)",
        description: "Installed internal pipework, drainage routes and electrical cabling without sanitary ware, fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Internal finishes",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes and all finished floor coverings."
      },
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Final electrical fittings, lighting, heating systems, ventilation, MVHR, ASHP and all HVAC equipment."
      },
      {
        title: "Foundations and site works",
        description: "Supply and installation of foundations, groundworks, external drainage and utility connections."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, scaffolding and fall-arrest systems."
      },
      {
        title: "Planning and regulatory fees",
        description: "Planning applications, architectural services, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 1399, meters: 130 },
      livingArea: { feet: 1216, meters: 113 },
      coveredTerrace: { feet: 183, meters: 17 },
      bedrooms: "3-4",
      bathrooms: "1-2",
      overallSize: "57.4 × 27.2 × 12.8 ft (17.5 × 8.3 × 3.9 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Integrated covered terrace for year-round use",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build",
      "Flexible layout options: 3-bedroom/2-bathroom or 4-bedroom/1-bathroom"
    ],
    additionalImages: [
      "/SKANDY/SKANDY 120_ 2 4K Large.jpeg",
      "/SKANDY/SK 120 3 Large.jpeg",
      "/SKANDY/SK120 4 Large.jpeg",
      "/SKANDY/SK120F 5 Large.jpeg",
      "/SKANDY/SK120FR 6 Large.jpeg"
    ],
    floorPlans: [
      "/SKANDY/Skandy 120. Floor plan. Version 3_page-0001.jpg",
      "/gallery/Skandy 120. Floor plan. Version 4_page-0001.jpg"
    ],
    facades: [
      "/SKANDY/Skandy 120_New_2. Facades_page-0001.jpg"
    ]
  },
  {
    name: "SKANDY 130",
    slug: "skandy-130",
    inStock: true,
    imageUrl: "/SKANDY/SKANDY 130 1_2K Large.jpeg",
    squareFeet: 1074,
    squareMeters: 99.8,
    price: 118490,
    type: "FOUR-BEDROOM",
    category: "MOBILE",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 1074, meters: 99.8 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The SKANDY 130 is the largest home in the Scandi range, offering an exceptional level of flexibility and family accommodation within a carefully rationalised footprint. Despite its generous capacity, the house remains efficient in scale and thoughtfully planned, allowing it to comfortably accommodate larger households without unnecessary excess.\n\nA defining feature of the SKANDY 130 is the availability of multiple base configurations, enabling the home to be tailored to different family needs. It can be arranged either as a five-bedroom home with two bathrooms, or as a four-bedroom home with three bathrooms, providing a high degree of adaptability for growing families, multi-generational living or owners who value additional bathrooms and storage.\n\nThe internal layout is organised around a spacious central living, dining and kitchen area, supported by a clear separation between communal and private zones. This rational planning approach allows the SKANDY 130 to offer the comfort and functionality of a much larger house, while remaining economical to build, heat and maintain.\n\nBuilt as a permanent residential home, the SKANDY 130 combines excellent thermal comfort with energy-efficient SIP construction, ensuring stable indoor temperatures and comfortable year-round living for larger families.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal plumbing and electrical routes (first-fix only)",
        description: "Installed internal pipework, drainage routes and electrical cabling without sanitary ware, fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Internal finishes",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes and all finished floor coverings."
      },
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Final electrical fittings, lighting, heating systems, ventilation, MVHR, ASHP and all HVAC equipment."
      },
      {
        title: "Foundations and site works",
        description: "Supply and installation of foundations, groundworks, external drainage and utility connections."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, scaffolding and fall-arrest systems."
      },
      {
        title: "Planning and regulatory fees",
        description: "Planning applications, architectural services, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 1074, meters: 99.8 },
      livingArea: { feet: 1074, meters: 99.8 },
      bedrooms: "4-5",
      bathrooms: "2-3",
      overallSize: "45.9 × 27.2 × 12.8 ft (14.0 × 8.3 × 3.9 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build",
      "Flexible layout options: 4-bedroom/3-bathroom or 5-bedroom/2-bathroom"
    ],
    additionalImages: [
      "/SKANDY/SKANDY 130 2_2K Large.jpeg"
    ],
    floorPlans: [
      "/SKANDY/Skandy 130. Floor plan. Version 1_page-0001.jpg",
      "/gallery/Skandy 130. Floor plan. Version 2_page-0001.jpg"
    ],
    facades: [
      "/SKANDY/Skandy 130_New. Facades_page-0001.jpg"
    ]
  },
  
  // Bungalow Houses
  {
    name: "BUNGALOW B-60",
    slug: "bungalow-b-60",
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
    slug: "bungalow-b-75",
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
    slug: "smart-s-18",
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
    slug: "smart-s-126",
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
  
  // Nordy Houses
  {
    name: "NORDY 24",
    slug: "nordy-24",
    inStock: true,
    imageUrl: "/NORDY/Nordy 24  V2.jpg",
    squareFeet: 305,
    squareMeters: 28.45,
    price: 39960,
    type: "STUDIO",
    category: "NORDY",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 219, meters: 20.45 },
    coveredTerrace: { feet: 86, meters: 8.0 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The NORDY 24 is a compact modern studio home that offers bright, comfortable living within an efficient footprint. Large windows fill the interior with natural light, creating an open atmosphere that feels larger than its size.\n\nWith a living area of 20.45 m² and an integrated 8 m² covered terrace, the NORDY 24 provides a practical open-plan layout with a combined living and sleeping space, a functional kitchenette and a separate bathroom. Its simple 6 × 4 m form makes it ideal for small plots, guest accommodation, garden studios or holiday rental use.\n\nDesigned within the dimensional parameters of the Caravan Act, this model can qualify as a mobile home when placed under suitable conditions. In many cases, this allows for a simpler and more flexible siting approval route compared to traditional permanent structures.\n\nBuilt using high-performance SIP panels, the home delivers excellent thermal stability and low energy consumption. Each component is factory-manufactured for clean, fast and predictable on-site assembly.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal water supply and waste pipework (first-fix only)",
        description: "Installed internal piping and drainage routes without sanitary ware or final connections."
      },
      {
        title: "Internal finishing works",
        description: "Flooring, tiling, wall panelling (plywood), painting and internal joinery."
      },
      {
        title: "Electrical installation (first-fix and second-fix)",
        description: "Sockets, switches, lighting fixtures and full consumer unit (fuse board) installation."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Sanitary ware and bathroom equipment",
        description: "WC, shower, taps, boiler, cabinets and all bathroom fixtures."
      },
      {
        title: "Heating and ventilation systems",
        description: "ASHP, radiators, underfloor heating, MVHR or any HVAC equipment."
      },
      {
        title: "Fire safety systems",
        description: "Smoke detectors, heat detectors, fire alarm panels and emergency lighting."
      },
      {
        title: "Foundations",
        description: "Supply and installation of screw-pile foundations or any concrete foundation system."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, fall-arrest systems and scaffolding."
      },
      {
        title: "Planning permission and regulatory fees",
        description: "Submission, architectural fees, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 305, meters: 28.45 },
      livingArea: { feet: 219, meters: 20.45 },
      coveredTerrace: { feet: 86, meters: 8.0 },
      bedrooms: "Studio",
      bathrooms: 1,
      overallSize: "6 × 4 × 3 m"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Integrated covered terrace for year-round use",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build"
    ],
    additionalImages: ["/NORDY/Nordy 24 V1.jpg"],
    floorPlans: [
      "/NORDY/Nordy 24. Floor plan. Version_1.jpg",
      "/NORDY/Nordy 24. Floor plan. Version_2.jpg"
    ],
    facades: [
      "/NORDY/Nordy 24. Facades. Version_1.jpg",
      "/NORDY/Nordy 24. Facades. Version_2.jpg"
    ]
  },
  {
    name: "NORDY 35",
    slug: "nordy-35",
    inStock: true,
    imageUrl: "/NORDY/NORDY 35_1.2F 4K.jpg",
    squareFeet: 336,
    squareMeters: 31.2,
    price: 57980,
    type: "STUDIO",
    category: "NORDY",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 336, meters: 31.2 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The NORDY 35 is a compact studio home that combines warm natural materials with a bright, open interior. Large windows bring in generous daylight, creating an airy and comfortable living space within its efficient footprint.\n\nWith a total area of 31.2 m², the open-plan layout integrates living, sleeping and kitchen zones seamlessly, complemented by a separate bathroom. The simple 9 × 4 m form makes the NORDY 35 ideal for small plots, guest accommodation, garden living or holiday use.\n\nDesigned within the dimensional and structural parameters of the Caravan Act, this model can qualify as a mobile home when installed under suitable site conditions. In many cases, this allows for a simpler and more flexible siting approval route compared to traditional permanent buildings.\n\nBuilt with high-performance SIP panels, the home provides excellent thermal stability and energy efficiency. Each element is precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal water supply and waste pipework (first-fix only)",
        description: "Installed internal piping and drainage routes without sanitary ware or final connections."
      },
      {
        title: "Internal finishing works",
        description: "Flooring, tiling, wall panelling (plywood), painting and internal joinery."
      },
      {
        title: "Electrical installation (first-fix and second-fix)",
        description: "Sockets, switches, lighting fixtures and full consumer unit (fuse board) installation."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Sanitary ware and bathroom equipment",
        description: "WC, shower, taps, boiler, cabinets and all bathroom fixtures."
      },
      {
        title: "Heating and ventilation systems",
        description: "ASHP, radiators, underfloor heating, MVHR or any HVAC equipment."
      },
      {
        title: "Fire safety systems",
        description: "Smoke detectors, heat detectors, fire alarm panels and emergency lighting."
      },
      {
        title: "Foundations",
        description: "Supply and installation of screw-pile foundations or any concrete foundation system."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, fall-arrest systems and scaffolding."
      },
      {
        title: "Planning permission and regulatory fees",
        description: "Submission, architectural fees, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 336, meters: 31.2 },
      livingArea: { feet: 336, meters: 31.2 },
      bedrooms: "Studio",
      bathrooms: 1,
      overallSize: "9 × 4 × 3 m"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Integrated covered terrace for year-round use",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build"
    ],
    additionalImages: [
      "/NORDY/NORDY 35_2F.jpg",
      "/NORDY/real 35 1.jpeg",
      "/NORDY/ral 35 2.jpeg"
    ],
    floorPlans: [
      "/NORDY/Nordy 35. SIP. Floor plan.jpg"
    ],
    facades: [
      "/NORDY/Nordy 35_New. Facades.jpg"
    ]
  },
  {
    name: "NORDY 42",
    slug: "nordy-42",
    inStock: true,
    imageUrl: "/NORDY/NORDY 42.jpg",
    squareFeet: 461,
    squareMeters: 42.8,
    price: 63440,
    type: "1-BEDROOM",
    category: "NORDY",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 335, meters: 31.1 },
    coveredTerrace: { feet: 126, meters: 11.7 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The NORDY 42 is a modern one-bedroom home that combines warm natural materials with a bright, open interior. Large floor-to-ceiling windows bring in abundant daylight, making the living space feel airy, spacious and connected to the outdoors.\n\nAn integrated covered terrace extends the home outward, creating a comfortable place to relax or dine in any season. With a total built area of 42.8 m², NORDY 42 offers exceptional comfort in a compact footprint.\n\nDesigned within the dimensional and structural parameters of the Caravan Act, this home can qualify as a mobile home when installed under suitable site conditions. In many cases, this allows for a simpler route to siting approval compared to traditional permanent buildings.\n\nBuilt with high-performance SIP panels, the home provides excellent thermal stability and energy efficiency. Each element is precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal water supply and waste pipework (first-fix only)",
        description: "Installed internal piping and drainage routes without sanitary ware or final connections."
      },
      {
        title: "Internal finishing works",
        description: "Flooring, tiling, wall panelling (plywood), painting and internal joinery."
      },
      {
        title: "Electrical installation (first-fix and second-fix)",
        description: "Sockets, switches, lighting fixtures and full consumer unit (fuse board) installation."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Sanitary ware and bathroom equipment",
        description: "WC, shower, taps, boiler, cabinets and all bathroom fixtures."
      },
      {
        title: "Heating and ventilation systems",
        description: "ASHP, radiators, underfloor heating, MVHR or any HVAC equipment."
      },
      {
        title: "Fire safety systems",
        description: "Smoke detectors, heat detectors, fire alarm panels and emergency lighting."
      },
      {
        title: "Foundations",
        description: "Supply and installation of screw-pile foundations or any concrete foundation system."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, fall-arrest systems and scaffolding."
      },
      {
        title: "Planning permission and regulatory fees",
        description: "Submission, architectural fees, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 461, meters: 42.8 },
      livingArea: { feet: 335, meters: 31.1 },
      coveredTerrace: { feet: 126, meters: 11.7 },
      bedrooms: "1",
      bathrooms: 1,
      overallSize: "12 × 4 × 3 m"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Integrated covered terrace for year-round use",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build"
    ],
    additionalImages: ["/NORDY/nordy 42 -2.jpg"],
    floorPlans: [
      "/NORDY/Nordy 42. Floor plan.jpg"
    ],
    facades: [
      "/NORDY/Nordy 42. Facades (1).jpg"
    ]
  },
  {
    name: "NORDY 65",
    slug: "nordy-65",
    inStock: true,
    imageUrl: "/NORDY/NORDY 65_1F.jpg",
    squareFeet: 612.5,
    squareMeters: 56.9,
    price: 79650,
    type: "1-BEDROOM",
    category: "NORDY",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 487, meters: 45.25 },
    coveredTerrace: { feet: 125.5, meters: 11.66 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The NORDY 65 is a spacious one-bedroom home designed for comfortable year-round living. Warm natural materials and large panoramic windows create a bright, inviting interior with a seamless connection to the outdoors.\n\nAn integrated covered terrace expands the living space and provides a sheltered area for dining, relaxing or working in any season. With a total built area of 56.9 m², NORDY 65 offers a generous open-plan layout while maintaining a compact, efficient footprint.\n\nDesigned within the dimensional and structural parameters of the Caravan Act, this model can qualify as a mobile home when installed under suitable site conditions. For many plots, this allows for a significantly simpler siting approval process compared to traditional permanent buildings.\n\nBuilt with high-performance SIP panels, the home delivers excellent thermal stability and energy efficiency. Every component is precision-manufactured in the factory and arrives ready for clean, fast and predictable on-site assembly.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal water supply and waste pipework (first-fix only)",
        description: "Installed internal piping and drainage routes without sanitary ware or final connections."
      },
      {
        title: "Internal finishing works",
        description: "Flooring, tiling, wall panelling (plywood), painting and internal joinery."
      },
      {
        title: "Electrical installation (first-fix and second-fix)",
        description: "Sockets, switches, lighting fixtures and full consumer unit (fuse board) installation."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Sanitary ware and bathroom equipment",
        description: "WC, shower, taps, boiler, cabinets and all bathroom fixtures."
      },
      {
        title: "Heating and ventilation systems",
        description: "ASHP, radiators, underfloor heating, MVHR or any HVAC equipment."
      },
      {
        title: "Fire safety systems",
        description: "Smoke detectors, heat detectors, fire alarm panels and emergency lighting."
      },
      {
        title: "Foundations",
        description: "Supply and installation of screw-pile foundations or any concrete foundation system."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, fall-arrest systems and scaffolding."
      },
      {
        title: "Planning permission and regulatory fees",
        description: "Submission, architectural fees, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 612.5, meters: 56.9 },
      livingArea: { feet: 487, meters: 45.25 },
      coveredTerrace: { feet: 125.5, meters: 11.66 },
      bedrooms: "1",
      bathrooms: 1,
      overallSize: "9.7 × 6.7 × 3 m"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Integrated covered terrace for year-round use",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build"
    ],
    additionalImages: ["/NORDY/NORDY 65_2F.jpg"],
    floorPlans: [
      "/NORDY/Floor plan. Nordy 65 (4).jpg"
    ],
    facades: [
      "/NORDY/Nordy 65_New. Facades.jpg"
    ]
  },
  {
    name: "NORDY 80",
    slug: "nordy-80",
    inStock: true,
    imageUrl: "/NORDY/nordy 80 F1.jpg",
    squareFeet: 751,
    squareMeters: 69.75,
    price: 96390,
    type: "2-BEDROOM",
    category: "NORDY",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 631, meters: 58.63 },
    coveredTerrace: { feet: 120, meters: 11.12 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The NORDY 80 is a spacious two-bedroom home that combines warm natural materials with a bright, open interior. Large windows bring generous daylight into the living spaces, creating a calm and inviting atmosphere perfect for year-round living.\n\nWith a living area of 58.63 m² and an integrated 11.12 m² covered terrace, the layout offers a comfortable open-plan kitchen–living area, two full bedrooms and a separate bathroom. The 12 × 6.7 m footprint provides the ideal balance between generous interior space and compact overall dimensions.\n\nDesigned within the dimensional parameters of the Caravan Act, the NORDY 80 can qualify as a mobile home when placed under suitable site conditions. In many cases, this allows for a simpler and more flexible siting approval route compared to traditional permanent buildings.\n\nBuilt with high-performance SIP panels, the home delivers excellent thermal stability and energy efficiency. Each element is factory-produced for clean, fast and predictable on-site assembly.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal water supply and waste pipework (first-fix only)",
        description: "Installed internal piping and drainage routes without sanitary ware or final connections."
      },
      {
        title: "Internal finishing works",
        description: "Flooring, tiling, wall panelling (plywood), painting and internal joinery."
      },
      {
        title: "Electrical installation (first-fix and second-fix)",
        description: "Sockets, switches, lighting fixtures and full consumer unit (fuse board) installation."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Sanitary ware and bathroom equipment",
        description: "WC, shower, taps, boiler, cabinets and all bathroom fixtures."
      },
      {
        title: "Heating and ventilation systems",
        description: "ASHP, radiators, underfloor heating, MVHR or any HVAC equipment."
      },
      {
        title: "Fire safety systems",
        description: "Smoke detectors, heat detectors, fire alarm panels and emergency lighting."
      },
      {
        title: "Foundations",
        description: "Supply and installation of screw-pile foundations or any concrete foundation system."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, fall-arrest systems and scaffolding."
      },
      {
        title: "Planning permission and regulatory fees",
        description: "Submission, architectural fees, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 751, meters: 69.75 },
      livingArea: { feet: 631, meters: 58.63 },
      coveredTerrace: { feet: 120, meters: 11.12 },
      bedrooms: "2",
      bathrooms: 1,
      overallSize: "12 × 6.7 × 3 m"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Integrated covered terrace for year-round use",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build"
    ],
    additionalImages: [
      "/NORDY/nordy 80  F2.jpg",
      "/NORDY/real 80 1.jpeg",
      "/NORDY/real 80 2.jpeg",
      "/NORDY/real 80 3.jpeg"
    ],
    floorPlans: [
      "/NORDY/Nordy 80. Floor plan. Version 2.jpg"
    ],
    facades: [
      "/NORDY/Nordy 80_New. Facades.jpg"
    ]
  },
  {
    name: "NORDY 130",
    slug: "nordy-130",
    inStock: true,
    imageUrl: "/NORDY/NORDY 130_2F 2K Large.jpeg",
    squareFeet: 1109,
    squareMeters: 103.0,
    price: 156310,
    type: "3-4 BEDROOM",
    category: "NORDY",
    description: "A high-performance, energy-efficient SIP home designed for fast on-site assembly.",
    livingArea: { feet: 910, meters: 84.5 },
    coveredTerrace: { feet: 199, meters: 18.5 },
    thermalPerformance: "~0.16–0.18 W/m²·K",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "High-performance SIP envelope with outstanding insulation",
      "Factory-built precision with strict quality control",
      "Natural timber cladding and interior finish options",
      "Fast on-site assembly (4–8 weeks)",
      "Designed for efficient energy use",
      "10-year structural warranty"
    ],
    about: "The NORDY 130 is a spacious modern home designed for comfortable year-round living, offering a generous interior layout with warm natural materials and abundant natural light.\n\nWith 84.5 m² of internal space and an impressive 18.5 m² integrated covered terrace, this model provides the comfort and functionality of a full-size family home. The interior can be configured in two ways: either as a three-bedroom home with two bathrooms, or as a four-bedroom layout with a single shared bathroom. Both versions include two large walk-in wardrobe rooms, offering exceptional storage capacity and adding a premium residential feel.\n\nThe expansive terrace extends the living area outdoors, creating a spacious, sheltered zone for dining, relaxing or entertaining in any season. Combined with the elongated 19.7 × 6.7 m footprint, the NORDY 130 delivers a balanced mix of open-plan living and private bedroom space.\n\nDesigned within the dimensional parameters of the Caravan Act, the NORDY 130 can qualify as a mobile home when installed under suitable site conditions. For many plots, this provides a significantly simpler siting approval route compared to traditional permanent buildings.\n\nBuilt with high-performance SIP panels, the home ensures excellent thermal stability, energy efficiency and predictable installation. Each element is factory-manufactured for clean, fast and accurate on-site assembly.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Timber cladding or the model's selected exterior finish."
      },
      {
        title: "Roofing package",
        description: "Metal roofing sheets, fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance door",
        description: ""
      },
      {
        title: "Internal water supply and waste pipework (first-fix only)",
        description: "Installed internal piping and drainage routes without sanitary ware or final connections."
      },
      {
        title: "Internal finishing works",
        description: "Flooring, tiling, wall panelling (plywood), painting and internal joinery."
      },
      {
        title: "Electrical installation (first-fix and second-fix)",
        description: "Sockets, switches, lighting fixtures and full consumer unit (fuse board) installation."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes and windows."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Sanitary ware and bathroom equipment",
        description: "WC, shower, taps, boiler, cabinets and all bathroom fixtures."
      },
      {
        title: "Heating and ventilation systems",
        description: "ASHP, radiators, underfloor heating, MVHR or any HVAC equipment."
      },
      {
        title: "Fire safety systems",
        description: "Smoke detectors, heat detectors, fire alarm panels and emergency lighting."
      },
      {
        title: "Foundations",
        description: "Supply and installation of screw-pile foundations or any concrete foundation system."
      },
      {
        title: "Mechanical lifting equipment",
        description: "Crane hire, telehandlers, fall-arrest systems and scaffolding."
      },
      {
        title: "Planning permission and regulatory fees",
        description: "Submission, architectural fees, engineering approvals and associated documentation."
      },
      {
        title: "External utilities and site works",
        description: "Groundworks, external drainage, mains connection for water, electricity or sewage."
      }
    ],
    dimensions: {
      totalArea: { feet: 1109, meters: 103.0 },
      livingArea: { feet: 910, meters: 84.5 },
      coveredTerrace: { feet: 199, meters: 18.5 },
      bedrooms: "3 or 4 (two layout options)",
      bathrooms: "1 or 2",
      walkInWardrobes: "2",
      overallSize: "19.7 × 6.7 × 3 m"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "PVC double-glazed units, U-value ~1.1–1.3 W/m²·K",
      roof: "Standing seam clip-fixed metal roofing with integrated guttering",
      foundation: "Screw-pile foundation (optional, not included in the base price)"
    },
    energyEnvironment: [
      "High thermal performance SIP envelope",
      "Low heat loss due to airtight construction",
      "Reduced energy consumption for heating",
      "Naturally bright interior with large glazing areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with abundant natural light",
      "Large floor-to-ceiling windows",
      "Integrated covered terrace for year-round use",
      "Modern Scandinavian-inspired layout",
      "Compact footprint suitable for small plots",
      "Precision-manufactured components for a clean build"
    ],
    additionalImages: [
      "/NORDY/NORDY 130_1F 2К Large.jpeg",
      "/NORDY/real 130 1.jpeg",
      "/NORDY/rel 130 2.jpeg",
      "/NORDY/real 130 3.jpeg"
    ],
    floorPlans: [
      "/NORDY/Nordy 130-pl1.png",
      "/NORDY/Nordy 130-pl2.png"
    ],
    facades: [
      "/NORDY/Nordy 130. Facades. Version 1.jpg",
      "/NORDY/Nordy 130. Facades. Version 2.jpg"
    ]
  },
  
  // Modern-B Houses
  {
    name: "MODERN-B MB-80",
    slug: "modern-b-mb-80",
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
    slug: "modern-m-65",
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
    slug: "modern-m-85",
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
    slug: "modular-mod-40",
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
    slug: "modular-mod-55",
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
    slug: "modular-mod-70",
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

// Helper function to generate slug from name
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

// Helper function to get houses by category
export const getHousesByCategory = (category: string) => {
  if (category === 'ALL') return houseData;
  return houseData.filter(house => house.category === category);
};

// Helper function to get house by slug
export const getHouseBySlug = (slug: string) => {
  return houseData.find(house => house.slug === slug);
};

// Get unique categories
export const getCategories = () => {
  const categories = ['ALL', ...new Set(houseData.map(house => house.category))];
  return categories;
};