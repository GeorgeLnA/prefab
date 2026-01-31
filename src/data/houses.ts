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
    name: "MODERN 20",
    slug: "modern-20",
    inStock: true,
    imageUrl: "/MODERN/Front  2K Large.jpeg",
    squareFeet: 461,
    squareMeters: 42.8,
    price: 58100,
    type: "COMPACT",
    category: "MODERN",
    description: "A compact, modern SIP home designed for comfortable year-round use with a strong connection to outdoor living.",
    livingArea: { feet: 240, meters: 22.3 },
    coveredTerrace: { feet: 221, meters: 20.5 },
    thermalPerformance: "High-performance SIP core with excellent airtightness",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "Compact modern layout with highly efficient space planning",
      "Bright open-plan living area with full-height front glazing",
      "Generous covered terrace extending the living space outdoors",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    about: "The MODERN 20 is a compact yet expressive modern home, designed around light, simplicity and everyday comfort. Despite its modest internal footprint, the house feels open and spacious thanks to its clear layout and strong visual connection to the terrace.\n\nWith an internal living area of 240 ft² (22.3 m²), the layout combines an open-plan living, dining and kitchen space with a separate shower room. Full-height front-facing glazing spans the main elevation, allowing natural light to fill the interior throughout the day and visually extending the living space towards the terrace.\n\nA defining feature of the MODERN 20 is its generous covered terrace of 221 ft² (20.5 m²), which significantly enhances the usability of the house. This outdoor space is ideal for relaxation, social gatherings or informal dining, effectively expanding the living area during warmer months.\n\nBuilt as a permanent residential structure, the MODERN 20 combines modern architectural language with energy-efficient SIP construction, delivering comfort, clarity and flexibility in a compact format.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
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
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only, without sanitary ware, electrical fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, shower units, taps, WC, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ],
    dimensions: {
      totalArea: { feet: 461, meters: 42.8 },
      livingArea: { feet: 240, meters: 22.3 },
      coveredTerrace: { feet: 221, meters: 20.5 },
      bathrooms: 1,
      overallSize: "approx. 31.4 × 16.4 × 12.8 ft (9.56 × 5.05 × 3 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels)",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "Full-height front-facing glazed elevation",
      roof: "Metal roofing system",
      foundation: "Factory-built for clean, fast on-site installation"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round use",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living space with strong indoor–outdoor connection",
      "Full-height front glazing",
      "Large covered terrace for extended living",
      "Modern minimalist architectural language",
      "Compact footprint with efficient internal layout",
      "Precision-manufactured system for predictable installation"
    ],
    additionalImages: [
      "/MODERN/Rear 2K Large.jpeg"
    ],
    floorPlans: [
      "/MODERN/Screenshot 2026-01-25 at 14.02.27.png"
    ],
    facades: [
      "/MODERN/Screenshot 2026-01-25 at 14.02.00.png",
      "/MODERN/Screenshot 2026-01-25 at 14.02.36.png"
    ]
  },
  {
    name: "MODERN 30",
    slug: "modern-30",
    inStock: true,
    imageUrl: "/MODERN/1 2K Large.jpeg",
    squareFeet: 614,
    squareMeters: 57.1,
    price: 73600,
    type: "ONE-BEDROOM",
    category: "MODERN",
    description: "A well-balanced modern SIP home offering comfortable everyday living with a strong indoor–outdoor connection.",
    livingArea: { feet: 359, meters: 33.4 },
    coveredTerrace: { feet: 255, meters: 23.7 },
    thermalPerformance: "High-performance SIP core with excellent airtightness",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "Efficient single-bedroom layout with clear zoning",
      "Bright open-plan living, dining and kitchen area",
      "Full-height front glazing for maximum natural daylight",
      "Generous covered terrace extending the living space outdoors",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    about: "The MODERN 30 is a compact yet highly functional modern home, designed for comfortable everyday living with an emphasis on light, clarity and a strong connection to outdoor space. Its well-considered layout provides a clear separation between private and shared zones, creating a calm and practical interior.\n\nWith an internal living area of 359 ft² (33.4 m²), the house features an open-plan living, dining and kitchen space, a separate bedroom and a dedicated shower room. Full-height front-facing glazing runs along the main elevation, filling the living area with natural light and visually extending the interior towards the terrace.\n\nA defining element of the MODERN 30 is its generous covered terrace of 255 ft² (23.7 m²), which functions as a natural extension of the living space. It is ideal for outdoor dining, social gatherings or quiet relaxation, making the house equally suitable as a compact permanent home, guest house or countryside retreat.\n\nBuilt as a permanent residential structure, the MODERN 30 combines modern architectural language with energy-efficient SIP construction, delivering a comfortable and rational living environment suitable for year-round use.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
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
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only, without sanitary ware, electrical fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, shower units, taps, WC, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ],
    dimensions: {
      totalArea: { feet: 614, meters: 57.1 },
      livingArea: { feet: 359, meters: 33.4 },
      coveredTerrace: { feet: 255, meters: 23.7 },
      bedrooms: "1",
      bathrooms: 1,
      overallSize: "approx. 41.9 × 16.4 × 12.8 ft (12.76 × 5.05 × 3 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels)",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "Full-height front-facing glazed elevation",
      roof: "Metal roofing system",
      foundation: "Factory-built for clean, fast on-site installation"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round use",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan living with clear functional zoning",
      "Separate bedroom for privacy and comfort",
      "Full-height front glazing",
      "Large covered terrace for extended outdoor living",
      "Modern minimalist architectural language",
      "Compact footprint with efficient internal layout"
    ],
    additionalImages: [
      "/MODERN/2 2K Large.jpeg"
    ],
    floorPlans: [
      "/MODERN/Screenshot 2026-01-25 at 14.07.44.png"
    ],
    facades: [
      "/MODERN/Screenshot 2026-01-25 at 14.07.51.png"
    ]
  },
  {
    name: "MODERN 60",
    slug: "modern-60",
    inStock: true,
    imageUrl: "/MODERN/1 2K (1) Large.jpeg",
    squareFeet: 958,
    squareMeters: 89.01,
    price: 115100,
    type: "TWO-BEDROOM",
    category: "MODERN",
    description: "A spacious modern SIP home designed for comfortable year-round living, combining clear zoning, functional planning and a strong connection to outdoor space.",
    livingArea: { feet: 630, meters: 58.51 },
    coveredTerrace: { feet: 328, meters: 30.50 },
    thermalPerformance: "High-performance SIP core with excellent airtightness",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "Well-balanced two-bedroom layout with clear separation of private and living areas",
      "Open-plan kitchen–living space with strong daylight penetration",
      "Master bedroom with a dedicated dressing room",
      "Two separate shower rooms for everyday comfort",
      "Generous covered terrace extending the living space outdoors",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    about: "The MODERN 60 is a thoughtfully designed modern home offering a high level of comfort within a compact and rational footprint. Its layout is organised to provide clear functional zoning, making it suitable for permanent living, holiday use or a high-quality guest house.\n\nWith an internal living area of 630 ft² (58.51 m²), the house features a bright open-plan kitchen–living space, two bedrooms and two shower rooms. A key feature of the layout is the master bedroom with its own dressing room, providing additional storage and everyday convenience while maintaining privacy from the main living areas.\n\nThe second bedroom is well suited for guests, children or use as a home office, while the presence of two independent shower rooms allows the house to function comfortably for families or shared use.\n\nA defining characteristic of the MODERN 60 is its generous covered terrace of 328 ft² (30.5 m²), which acts as a natural extension of the living space. This outdoor area is ideal for dining, social gatherings or quiet relaxation, enhancing the overall usability of the house throughout the year.\n\nBuilt as a permanent residential structure, the MODERN 60 combines contemporary architectural language with high-performance SIP construction, delivering comfort, efficiency and clarity in everyday living.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
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
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only, without sanitary ware, electrical fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, shower units, taps, WC, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ],
    dimensions: {
      totalArea: { feet: 958, meters: 89.01 },
      livingArea: { feet: 630, meters: 58.51 },
      coveredTerrace: { feet: 328, meters: 30.50 },
      bedrooms: "2",
      bathrooms: 2,
      overallSize: "approx. 52.3 × 20.7 × 9.8 ft (15.93 × 6.30 × 3.0 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels)",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "Large glazed openings to living areas",
      roof: "Metal roofing system",
      foundation: "Factory-built for clean, fast on-site installation"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round use",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan kitchen–living area",
      "Master bedroom with dressing room",
      "Second bedroom with flexible use",
      "Two independent shower rooms",
      "Large covered terrace for extended outdoor living",
      "Modern minimalist architectural language",
      "Efficient and rational layout"
    ],
    additionalImages: [
      "/MODERN/2 2K (1) Large.jpeg"
    ],
    floorPlans: [
      "/MODERN/Screenshot 2026-01-25 at 14.09.52.png"
    ],
    facades: [
      "/MODERN/Screenshot 2026-01-25 at 14.09.36.png",
      "/MODERN/Screenshot 2026-01-25 at 14.09.44.png"
    ]
  },
  {
    name: "MODERN 95",
    slug: "modern-95",
    inStock: true,
    imageUrl: "/MODERN/1 2K (2) Large.jpeg",
    squareFeet: 1043,
    squareMeters: 96.84,
    price: 126990,
    type: "THREE-BEDROOM",
    category: "MODERN",
    description: "A spacious modern SIP home designed for comfortable year-round living, offering a well-balanced layout for family life with clear zoning and generous shared spaces.",
    livingArea: { feet: 764, meters: 70.94 },
    coveredTerrace: { feet: 279, meters: 25.90 },
    thermalPerformance: "High-performance SIP core with excellent airtightness",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "Well-balanced three-bedroom layout suitable for family living",
      "Master bedroom with en-suite shower room",
      "Open-plan kitchen–living space with strong natural daylight",
      "Clear separation between private and shared zones",
      "Two shower rooms for everyday comfort",
      "Generous covered terrace extending the living space outdoors",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    about: "The MODERN 95 is a thoughtfully designed modern family home that combines everyday comfort with rational planning and a strong connection to outdoor space. Its layout is organised to support both private living and shared family time, making it suitable for permanent residence or high-quality countryside living.\n\nWith an internal living area of 764 ft² (70.94 m²), the house features a bright open-plan kitchen–living area, three bedrooms, a central hallway and two shower rooms. One of the bedrooms is designed as a master bedroom with its own en-suite shower room, providing privacy and comfort for the homeowners.\n\nThe remaining two bedrooms are well proportioned and can be used as children's rooms, guest bedrooms or a home office, offering flexibility as family needs evolve. The internal circulation is clear and efficient, minimising wasted space while maintaining comfortable room sizes.\n\nA defining element of the MODERN 95 is its covered terrace of 279 ft² (25.90 m²), positioned directly off the main living area. This outdoor space naturally extends the interior, creating an ideal setting for dining, relaxation or social gatherings throughout the warmer months.\n\nBuilt as a permanent residential structure, the MODERN 95 combines contemporary architectural language with high-performance SIP construction, delivering a comfortable, energy-efficient home suitable for year-round use.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
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
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only, without sanitary ware, electrical fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, shower units, taps, WC, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ],
    dimensions: {
      totalArea: { feet: 1043, meters: 96.84 },
      livingArea: { feet: 764, meters: 70.94 },
      coveredTerrace: { feet: 279, meters: 25.90 },
      bedrooms: "3",
      bathrooms: 2,
      overallSize: "approx. 52.2 × 20.7 × 9.8 ft (15.90 × 6.30 × 3.0 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels)",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "Large glazed openings to living areas",
      roof: "Metal roofing system",
      foundation: "Factory-built for clean, fast on-site installation"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round use",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Open-plan kitchen–living space",
      "Three-bedroom family layout",
      "Master bedroom with en-suite shower room",
      "Two additional flexible bedrooms",
      "Two shower rooms",
      "Covered terrace for extended outdoor living",
      "Modern minimalist architectural language",
      "Efficient and rational planning"
    ],
    additionalImages: [
      "/MODERN/2 2K (2) Large.jpeg"
    ],
    floorPlans: [
      "/MODERN/Screenshot 2026-01-25 at 14.12.42.png"
    ],
    facades: [
      "/MODERN/Screenshot 2026-01-25 at 14.12.07.png",
      "/MODERN/Screenshot 2026-01-25 at 14.12.36.png"
    ]
  },
  {
    name: "MODERN 120",
    slug: "modern-120",
    inStock: true,
    imageUrl: "/MODERN/1_2k Final Large.jpeg",
    squareFeet: 1336,
    squareMeters: 124.12,
    price: 184200,
    type: "FOUR-BEDROOM",
    category: "MODERN",
    description: "A unique modern SIP home designed around privacy, comfort and balanced family living, featuring four en-suite bedrooms and a central covered terrace.",
    livingArea: { feet: 1153, meters: 107.10 },
    coveredTerrace: { feet: 183, meters: 17.02 },
    thermalPerformance: "High-performance SIP core with excellent airtightness",
    assemblyTime: "4–8 weeks",
    keyFeatures: [
      "Rare four-bedroom layout with en-suite bathroom to every bedroom",
      "Central open-plan kitchen–living area",
      "Covered internal terrace creating a private outdoor space",
      "Excellent separation between private and shared zones",
      "Ideal solution for families, guest accommodation or co-living",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    about: "The MODERN 120 is a distinctive and highly functional modern home, designed to provide an exceptional level of privacy and comfort for all occupants. Its layout is centred around a shared living space, while each bedroom functions as a self-contained private zone.\n\nWith an internal living area of 1,153 ft² (107.10 m²), the house features a spacious open-plan kitchen–living room at its core, surrounded by four generously sized bedrooms. A defining feature of the design is that each bedroom is equipped with its own private bathroom, making the MODERN 120 particularly well suited for larger families, multi-generational living or guest-oriented use.\n\nAt the heart of the house is a covered internal terrace (patio) of 183 ft² (17.02 m²). This sheltered outdoor space enhances natural light and ventilation while providing a quiet, private area for relaxation, independent of weather conditions. The terrace also strengthens the connection between interior spaces, creating a calm and balanced atmosphere throughout the home.\n\nThe clear zoning and symmetrical planning allow the MODERN 120 to function efficiently both as a permanent family residence and as a high-quality holiday or guest accommodation property.\n\nBuilt as a permanent residential structure, the MODERN 120 combines contemporary architectural language with high-performance SIP construction, delivering comfort, energy efficiency and long-term durability.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
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
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only, without sanitary ware, electrical fittings or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and electrical systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ],
    dimensions: {
      totalArea: { feet: 1336, meters: 124.12 },
      livingArea: { feet: 1153, meters: 107.10 },
      coveredTerrace: { feet: 183, meters: 17.02 },
      bedrooms: "4",
      bathrooms: 4,
      overallSize: "approx. 36.1 × 41.7 × 9.8 ft (11.00 × 12.70 × 3.0 m)"
    },
    construction: {
      wallSystem: "SIP panels (structural insulated panels)",
      insulation: "High-performance SIP core with excellent airtightness",
      windows: "Large glazed openings to living areas and terrace",
      roof: "Metal roofing system",
      foundation: "Factory-built for clean, fast on-site installation"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round use",
      "Reduced heat loss and efficient energy demand",
      "Balanced daylight and natural ventilation via internal terrace",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Four-bedroom layout with en-suite bathrooms",
      "Private sleeping zones for all occupants",
      "Central open-plan living space",
      "Covered internal terrace (patio)",
      "Excellent functional zoning",
      "Modern minimalist architectural language",
      "Efficient and rational planning"
    ],
    additionalImages: [
      "/MODERN/2_2k Final Large.jpeg"
    ],
    floorPlans: [
      "/MODERN/Screenshot 2026-01-25 at 14.14.45.png"
    ],
    facades: [
      "/MODERN/Screenshot 2026-01-25 at 14.14.25.png"
    ]
  },
  
  // Modular Houses
  {
    name: "MODULAR HOME X1",
    slug: "modular-home-x1",
    imageUrl: "/MODULAR/x1/snapedit_1696349707941 Large.jpeg",
    squareFeet: 2939,
    squareMeters: 273.0,
    price: 391782,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A spacious 1.5-storey SIP home designed for permanent living, combining generous internal areas, a functional mansard floor and a balanced family-oriented layout.",
    additionalImages: [
      "/MODULAR/x1/snapedit_1696350174096 Large.jpeg",
      "/MODULAR/x1/fcade 1 Large.jpeg",
      "/MODULAR/x1/facad 2 (1) Large.jpeg",
      "/MODULAR/x1/facade 3 (4) Large.jpeg",
      "/MODULAR/x1/facade 4 (4) Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x1/plan1 (1) Large.jpeg",
      "/MODULAR/x1/plane 2 Large.jpeg"
    ],
    about: "The Modular Home X1 is a generously proportioned family house with a mansard second floor, designed as a full-scale permanent residence. Its architecture combines classic proportions with modern construction technology, offering a comfortable and highly functional living environment for larger families.\n\nThe ground floor is organised around a spacious open-plan kitchen and living area, forming the central hub of the home. This space is designed for everyday family life, social gatherings and relaxed living, with strong visual connections between key zones.\n\nThe private areas are carefully distributed between floors. The layout includes four bedrooms, two bathrooms and a dedicated walk-in wardrobe, ensuring comfort, privacy and practical daily use. A large technical room provides flexible storage and can be used for bicycles, motorcycles or household equipment.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large family home with a mansard second floor for permanent residence",
      "Four-bedroom layout",
      "Two bathrooms",
      "Dedicated walk-in wardrobe",
      "Large technical / utility room suitable for storage or bicycle/motorcycle use",
      "Spacious open-plan kitchen–living area",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2939, meters: 273.0 },
      livingArea: { feet: 2939, meters: 273.0 },
      bedrooms: "4",
      bathrooms: 2,
      overallSize: "approx. 59.8 × 39.4 ft (18.23 × 12.0 m)",
      walkInWardrobes: "Walk-in wardrobe included, Overall Height: approx. 25.0 ft (7.62 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Roof structure and covering suitable for mansard configuration",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious family layout with mansard floor",
      "Four bedrooms and two bathrooms",
      "Walk-in wardrobe",
      "Large technical / utility room",
      "Open-plan kitchen–living space",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Roof structure and covering suitable for mansard configuration, including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X6",
    slug: "modular-home-x6",
    imageUrl: "/MODULAR/x6/snapedit_1697141569457 Large.jpeg",
    squareFeet: 2196,
    squareMeters: 204.0,
    price: 257810,
    type: "SINGLE-STOREY",
    category: "MODULAR",
    description: "A spacious single-storey SIP home designed for permanent living, combining a generous family layout, three bedrooms, three bathrooms and an integrated two-car garage within a modern flat-roof design.",
    additionalImages: [
      "/MODULAR/x6/snapedit_1697141296722 Large.jpeg",
      "/MODULAR/x6/snapedit_1697141682937 Large.jpeg",
      "/MODULAR/x6/snapedit_1697141454923 Large.jpeg",
      "/MODULAR/x6/facade 1 (4) Large.jpeg",
      "/MODULAR/x6/facade 2 (4) Large.jpeg",
      "/MODULAR/x6/facade 3 (3) Large.jpeg",
      "/MODULAR/x6/facad 4 Large.jpeg"
    ],
    floorPlans: ["/MODULAR/x6/plan1 Large.jpeg"],
    facades: [
      "/MODULAR/x6/facade 1 (4) Large.jpeg",
      "/MODULAR/x6/facade 2 (4) Large.jpeg",
      "/MODULAR/x6/facade 3 (3) Large.jpeg",
      "/MODULAR/x6/facad 4 Large.jpeg"
    ],
    about: "The Modular Home X6 is a generously proportioned single-storey house designed as a full-scale permanent residence. Its architecture and layout are focused on comfort, privacy and everyday functionality, making it an ideal solution for family living.\n\nThe heart of the house is a large open-plan kitchen–living space that connects naturally to the outdoor areas, creating a strong indoor–outdoor relationship. This layout makes the home equally suitable for everyday family life, entertaining guests and relaxed outdoor gatherings.\n\nThe private zone includes three bedrooms, arranged to provide privacy and comfort for all occupants. With three bathrooms, the internal planning supports family living and guest accommodation without compromise, ensuring practical daily use and flexible long-term living.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large single-storey family home for permanent residence",
      "Three-bedroom layout",
      "Three bathrooms",
      "Spacious open-plan kitchen–living area",
      "Integrated two-car garage",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2196, meters: 204.0 },
      livingArea: { feet: 2196, meters: 204.0 },
      bedrooms: "3",
      bathrooms: 3,
      overallSize: "approx. 72.5 × 49.2 ft (22.11 × 15.00 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Natural or concrete roof tiles (model-dependent option)",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious single-storey family layout",
      "Three bedrooms and three bathrooms",
      "Large open-plan kitchen–living space",
      "Integrated two-car garage",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Natural or concrete roof tiles (model-dependent option), including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X10",
    slug: "modular-home-x10",
    imageUrl: "/MODULAR/x10/snapedit_1697487301153 Large.jpeg",
    squareFeet: 2777,
    squareMeters: 258.0,
    price: 411213,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A contemporary two-storey SIP home with flat roof architecture, featuring a dramatic double-height living space, panoramic glazing and a clean modern design language.",
    additionalImages: [
      "/MODULAR/x10/snapedit_1697487398392 Large.jpeg",
      "/MODULAR/x10/facade 1 (4) Large.jpeg",
      "/MODULAR/x10/facade 2 (1) Large.jpeg",
      "/MODULAR/x10/facade 3 (2) Large.jpeg",
      "/MODULAR/x10/fac ade 4 Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x10/plan 1 Large.jpeg",
      "/MODULAR/x10/plan2 Large.jpeg"
    ],
    about: "The Modular Home X10 is a striking two-storey residence designed in a contemporary architectural style, combining flat roof geometry with expansive glazing and a dramatic double-height living space.\n\nThe heart of the house is a spacious living room with a ceiling height of approximately six metres, creating a strong sense of openness and architectural expression. Large panoramic windows flood the interior with natural daylight and visually connect the indoor spaces with the surrounding environment.\n\nThe layout includes three comfortable bedrooms and two bathrooms, providing a balanced and functional arrangement for modern family living. A small integrated garage adds practical storage and convenience, while the open terrace extends the living area outdoors and offers space for relaxation and social gatherings.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Two-storey modern family home",
      "Flat roof architectural design",
      "Three-bedroom configuration",
      "Two bathrooms",
      "Double-height living room with approx. 6 m ceiling height",
      "Second-light (double-height) interior space",
      "Small integrated garage",
      "Open outdoor terrace",
      "Panoramic glazing",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2777, meters: 258.0 },
      livingArea: { feet: 2777, meters: 258.0 },
      bedrooms: "3",
      bathrooms: 2,
      overallSize: "approx. 63.3 × 42.7 ft (19.28 × 13.00 m)",
      walkInWardrobes: "Overall Height: approx. 24.3 ft (7.40 m), Ceiling Height (Living Area): approx. 19.7 ft (6.0 m), Terrace: open outdoor terrace"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Panoramic glazing for maximum daylight",
      roof: "Flat roof structure and waterproofing system",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Enhanced daylight through double-height spaces",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Contemporary flat-roof architecture",
      "Double-height living space with second light",
      "Three bedrooms and two bathrooms",
      "Integrated garage",
      "Open terrace",
      "Panoramic glazing",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Flat roof system",
        description: "Flat roof structure and waterproofing system, including parapets and drainage components."
      },
      {
        title: "PVC double-glazed panoramic windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X11",
    slug: "modular-home-x11",
    imageUrl: "/MODULAR/x11/snapedit_1697488818838 Large.jpeg",
    squareFeet: 2368,
    squareMeters: 220.0,
    price: 247830,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A compact two-storey SIP home designed for permanent living, specifically suited for narrow plots, combining an efficient linear layout with bright interior spaces and a winter garden on the upper floor.",
    additionalImages: [
      "/MODULAR/x11/snapedit_1697488696151 Large.jpeg",
      "/MODULAR/x11/snapedit_1697488093605 Large.jpeg",
      "/MODULAR/x11/snapedit_1697488942177 Large.jpeg",
      "/MODULAR/x11/facade 1 (5) Large.jpeg",
      "/MODULAR/x11/facade 2 (5) Large.jpeg",
      "/MODULAR/x11/facade 3 (4) Large.jpeg",
      "/MODULAR/x11/facade 4 (3) Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x11/plan1 (1) Large.jpeg",
      "/MODULAR/x11/plan2 Large.jpeg"
    ],
    facades: [
      "/MODULAR/x11/facade 1 (5) Large.jpeg",
      "/MODULAR/x11/facade 2 (5) Large.jpeg",
      "/MODULAR/x11/facade 3 (4) Large.jpeg",
      "/MODULAR/x11/facade 4 (3) Large.jpeg"
    ],
    about: "The Modular Home X11 is a thoughtfully designed two-storey family house created specifically for narrow or elongated plots. Its compact footprint and linear proportions allow efficient use of restricted site widths while maintaining generous internal living spaces.\n\nThe ground floor is organised around an open-plan kitchen and living area, forming the social heart of the home and providing comfortable everyday living. A dedicated home office is also located on this level, offering a practical workspace for remote work or study.\n\nPrivate areas are arranged across both floors. The layout includes three bedrooms and three bathrooms, ensuring comfort and flexibility for family living. A distinctive feature of this model is the winter garden on the first floor, which enhances natural daylight, creates an additional relaxation space and strengthens the connection between interior and exterior environments.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Two-storey family home for permanent residence",
      "Three-bedroom configuration",
      "Three bathrooms",
      "Dedicated home office",
      "Optimised layout for narrow plots",
      "Winter garden on the first floor",
      "Spacious open-plan kitchen–living area",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2368, meters: 220.0 },
      livingArea: { feet: 2368, meters: 220.0 },
      bedrooms: "3",
      bathrooms: 3,
      overallSize: "approx. 26.9 × 66.3 ft (8.20 × 20.20 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Well-balanced glazing for natural daylight",
      roof: "Roof structure and covering",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Improved daylight and comfort through winter garden",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Efficient two-storey layout for narrow plots",
      "Three bedrooms and three bathrooms",
      "Dedicated home office",
      "Winter garden on the upper floor",
      "Open-plan living spaces",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Roof structure and covering, including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X12",
    slug: "modular-home-x12",
    imageUrl: "/MODULAR/x12/snapedit_1697493296830 Large.jpeg",
    squareFeet: 2799,
    squareMeters: 260.0,
    price: 379222,
    type: "SINGLE-STOREY",
    category: "MODULAR",
    description: "A single-storey SIP home designed for permanent living, combining generous internal space, a two-car garage and a spacious open terrace, creating a balanced and comfortable family home with strong indoor–outdoor connection.",
    additionalImages: [
      "/MODULAR/x12/snapedit_1697489682470 Large.jpeg",
      "/MODULAR/x12/snapedit_1697493147110 Large.jpeg",
      "/MODULAR/x12/snapedit_1697489152901 Large.jpeg",
      "/MODULAR/x12/snapedit_1697493438355 Large.jpeg",
      "/MODULAR/x12/snapedit_1697493080621 Large.jpeg",
      "/MODULAR/x12/snapedit_1697493122334 Large.jpeg",
      "/MODULAR/x12/snapedit_1697489057682 Large.jpeg",
      "/MODULAR/x12/snapedit_1697493608982 Large.jpeg",
      "/MODULAR/x12/snapedit_1697493649713 Large.jpeg",
      "/MODULAR/x12/facad 1 Large.jpeg",
      "/MODULAR/x12/facade 2 (2) Large.jpeg",
      "/MODULAR/x12/facade 3 (3) Large.jpeg",
      "/MODULAR/x12/facade 4 (3) Large.jpeg"
    ],
    floorPlans: ["/MODULAR/x12/plan1 Large.jpeg"],
    about: "Modular Home X12 is a spacious single-storey family house designed for comfortable permanent living. The layout is based on clear functional zoning, combining a generous central living area with private bedroom spaces and direct access to a large open terrace.\n\nThe house features three well-proportioned bedrooms supported by three bathrooms, making it suitable for family life or hosting guests. The open terrace extends the living space outdoors, providing an ideal area for relaxation and social gatherings.",
    keyFeatures: [
      "Single-storey family home for permanent residence",
      "Three bedrooms and three bathrooms",
      "Spacious open-plan kitchen–living area",
      "Large open terrace for outdoor living",
      "Two-car integrated garage",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 3172, meters: 295.0 },
      livingArea: { feet: 2799, meters: 260.0 },
      coveredTerrace: { feet: 377, meters: 35.0 },
      bedrooms: "3",
      bathrooms: 3,
      overallSize: "78.2 × 55.8 ft (23.85 × 17.00 m)",
      walkInWardrobes: "Garage: 427 ft² (39.7 m²), Overall Height: 25.4 ft (7.75 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls ≈ 0.17 W/m²·K, roof ≈ 0.15 W/m²·K)",
      windows: "Large glazed openings for natural daylight",
      roof: "Natural or concrete roof tiles",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round use",
      "Reduced heat loss and efficient energy demand",
      "Balanced daylight and natural ventilation",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Single-storey family layout",
      "Three-bedroom, three-bathroom configuration",
      "Open-plan living and dining space",
      "Large open terrace",
      "Integrated two-car garage",
      "Clear functional zoning",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Natural or concrete roof tiles, including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X14",
    slug: "modular-home-x14",
    imageUrl: "/MODULAR/x14/snapedit_1697496006953 Large.jpeg",
    squareFeet: 3229,
    squareMeters: 300.0,
    price: 481965,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A spacious two-storey SIP home designed for permanent living, combining generous internal areas, a clear functional layout and strong separation between private and shared zones.",
    additionalImages: [
      "/MODULAR/x14/snapedit_1697496166065 Large.jpeg",
      "/MODULAR/x14/snapedit_1697496309511 Large.jpeg",
      "/MODULAR/x14/snapedit_1697496439197 Large.jpeg",
      "/MODULAR/x14/snapedit_1697496503138 Large.jpeg",
      "/MODULAR/x14/snapedit_1697496605443 Large.jpeg",
      "/MODULAR/x14/facade 1 (5) Large.jpeg",
      "/MODULAR/x14/facade 2 (3) Large.jpeg",
      "/MODULAR/x14/facade 3 (5) Large.jpeg",
      "/MODULAR/x14/facade 4 (5) Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x14/plan 1 (2) Large.jpeg",
      "/MODULAR/x14/plan 2 (1) Large.jpeg"
    ],
    about: "The Modular Home X14 is a generously proportioned two-storey family house designed as a full-scale permanent residence. Its architecture combines contemporary proportions with modern SIP construction technology, offering a comfortable and highly functional living environment for larger families.\n\nThe ground floor is organised around a spacious open-plan kitchen and living area, forming the central hub of the home. This space is designed for everyday family life, social gatherings and relaxed living, with strong visual connections between key zones and direct access to outdoor areas.\n\nPrivate areas are distributed across both floors. The layout includes four bedrooms, four bathrooms and a dedicated home office, ensuring comfort, privacy and flexibility for work-from-home living. Three balconies provide additional outdoor spaces and enhance natural light throughout the house.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large family home designed for permanent residence",
      "Two-storey layout",
      "Four-bedroom configuration",
      "Four bathrooms",
      "Dedicated home office / study",
      "Three balconies",
      "Spacious open-plan kitchen–living area",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 3229, meters: 300.0 },
      livingArea: { feet: 3229, meters: 300.0 },
      bedrooms: "4",
      bathrooms: 4,
      overallSize: "approx. 42.2 × 57.9 ft (12.86 × 17.66 m)",
      walkInWardrobes: "Overall Height: approx. 29.5 ft (9.0 m), Balconies: 3"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Roof structure and covering",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious two-storey family layout",
      "Four bedrooms and four bathrooms",
      "Dedicated home office",
      "Three balconies",
      "Open-plan kitchen–living space",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Roof structure and covering, including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X15",
    slug: "modular-home-x15",
    imageUrl: "/MODULAR/x15/snapedit_1697500425792 Large.jpeg",
    squareFeet: 1442,
    squareMeters: 134.0,
    price: 184400,
    type: "1.5-STOREY",
    category: "MODULAR",
    description: "A spacious 1.5-storey SIP home designed for permanent living, combining generous internal areas, a functional mansard floor and a balanced family-oriented layout.",
    additionalImages: [
      "/MODULAR/x15/snapedit_1697500581822 Large.jpeg",
      "/MODULAR/x15/snapedit_1697500731370 Large.jpeg",
      "/MODULAR/x15/snapedit_1697501015191 Large.jpeg",
      "/MODULAR/x15/facade 1 Large.jpeg",
      "/MODULAR/x15/facade 2 Large.jpeg",
      "/MODULAR/x15/facade 3 Large.jpeg",
      "/MODULAR/x15/facade 4 Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x15/plan 1 Large.jpeg",
      "/MODULAR/x15/plane 2 Large.jpeg"
    ],
    facades: [
      "/MODULAR/x15/facade 1 Large.jpeg",
      "/MODULAR/x15/facade 2 Large.jpeg",
      "/MODULAR/x15/facade 3 Large.jpeg",
      "/MODULAR/x15/facade 4 Large.jpeg"
    ],
    about: "The Modular Home X15 is a well-proportioned family house with a mansard second floor, designed as a full-scale permanent residence. Its architecture combines classic proportions with modern construction technology, offering a comfortable and highly functional living environment for family living.\n\nThe ground floor is organised around a spacious open-plan kitchen and living area, forming the central hub of the home. This space is designed for everyday family life, social gatherings and relaxed living, with direct access to the covered terrace.\n\nThe private areas are carefully distributed between floors. The layout includes four bedrooms and two bathrooms, ensuring comfort, privacy and practical daily use.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large family home with a mansard second floor for permanent residence",
      "Four-bedroom layout",
      "Two bathrooms",
      "Spacious open-plan kitchen–living area",
      "Covered terrace",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 1647, meters: 153.0 },
      livingArea: { feet: 1442, meters: 134.0 },
      coveredTerrace: { feet: 205, meters: 19.0 },
      bedrooms: "4",
      bathrooms: 2,
      overallSize: "approx. 51.2 × 41.5 ft (15.60 × 12.65 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Roof structure and covering suitable for mansard configuration",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious family layout with mansard floor",
      "Four bedrooms and two bathrooms",
      "Open-plan kitchen–living space",
      "Covered terrace",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Roof structure and covering suitable for mansard configuration, including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X16",
    slug: "modular-home-x16",
    imageUrl: "/MODULAR/X16/snapedit_1697546775415.png",
    squareFeet: 1701,
    squareMeters: 158.0,
    price: 185220,
    type: "SINGLE-STOREY",
    category: "MODULAR",
    description: "A compact single-storey SIP home designed for permanent living, combining an efficient family layout, three bedrooms, two bathrooms and a private open terrace for comfortable indoor–outdoor living.",
    additionalImages: [
      "/MODULAR/X16/snapedit_1697546964803.png",
      "/MODULAR/X16/snapedit_1697547698177.png",
      "/MODULAR/X16/snapedit_1697547882091.png",
      "/MODULAR/X16/facade1.png",
      "/MODULAR/X16/facade2.png",
      "/MODULAR/X16/facad3.png",
      "/MODULAR/X16/facad4.png"
    ],
    floorPlans: ["/MODULAR/X16/plan.png"],
    facades: [
      "/MODULAR/X16/facade1.png",
      "/MODULAR/X16/facade2.png",
      "/MODULAR/X16/facad3.png",
      "/MODULAR/X16/facad4.png"
    ],
    about: "The Modular Home X16 is a thoughtfully proportioned single-storey house designed as a full-scale permanent residence. Its architecture and layout are focused on comfort, privacy and everyday functionality, making it an ideal solution for family living on one level.\n\nThe heart of the house is a spacious open-plan kitchen–living area that connects naturally to the outdoor terrace, creating a strong indoor–outdoor relationship. This layout supports everyday family life and relaxed outdoor use.\n\nThe private zone includes three bedrooms, arranged to provide privacy and comfort for all occupants. The master bedroom features a private walk-in wardrobe, en-suite bathroom and direct access to the terrace. Two additional bedrooms and a shared bathroom complete the layout, ensuring practical daily use and efficient living.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large single-storey family home for permanent residence",
      "Three-bedroom layout",
      "Two bathrooms",
      "Spacious open-plan kitchen–living area",
      "Open terrace for outdoor living",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 1701, meters: 158.0 },
      livingArea: { feet: 1701, meters: 158.0 },
      bedrooms: "3",
      bathrooms: 2,
      overallSize: "approx. 59.4 × 53.1 ft (18.10 × 16.19 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Natural or concrete roof tiles (model-dependent option)",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious single-storey family layout",
      "Three bedrooms and two bathrooms",
      "Large open-plan kitchen–living space",
      "Open terrace for outdoor living",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Natural or concrete roof tiles (model-dependent option), including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X20",
    slug: "modular-home-x20",
    imageUrl: "/MODULAR/x20/snapedit_1697550184626 Large.jpeg",
    squareFeet: 2167,
    squareMeters: 201.3,
    price: 256860,
    type: "SINGLE-STOREY",
    category: "MODULAR",
    description: "A spacious single-storey SIP home designed for permanent living, combining generous internal areas and a private outdoor terrace.",
    additionalImages: [
      "/MODULAR/x20/snapedit_1697550003775 Large.jpeg"
    ],
    floorPlans: ["/MODULAR/x20/plan Large.jpeg"],
    about: "The Modular Home X20 is a generously proportioned single-storey house designed as a full-scale permanent residence. Its architecture and layout are focused on comfort, privacy and everyday functionality, making it an ideal solution for modern family living.\n\nThe heart of the house is a large open-plan kitchen–living space with direct access to an open rear terrace, creating a strong connection between indoor and outdoor living areas. This layout supports both everyday family life and relaxed social gatherings.\n\nThe private zone includes three bedrooms, one of which is designed as a master bedroom, offering enhanced privacy and comfort. The remaining bedrooms are well separated from the living area, ensuring a balanced and quiet internal layout.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large single-storey family home for permanent residence",
      "Three-bedroom layout, including a master bedroom",
      "Spacious open-plan kitchen–living area",
      "Open rear terrace for outdoor living",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2328, meters: 216.3 },
      livingArea: { feet: 2167, meters: 201.3 },
      coveredTerrace: { feet: 161, meters: 15.0 },
      bedrooms: "3",
      bathrooms: "Not specified",
      overallSize: "approx. 63.2 × 44.3 ft (19.25 × 13.50 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Natural or concrete roof tiles (model-dependent option)",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious single-storey family layout",
      "Three bedrooms including a master bedroom",
      "Large open-plan kitchen–living space",
      "Open rear terrace for outdoor living",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Natural or concrete roof tiles (model-dependent option), including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X20a",
    slug: "modular-home-x20a",
    imageUrl: "/MODULAR/X20A/snapedit_1697583286940 (1) Large.jpeg",
    squareFeet: 2167,
    squareMeters: 201.3,
    price: 296960,
    type: "SINGLE-STOREY",
    category: "MODULAR",
    description: "A spacious single-storey SIP home designed for permanent living, combining generous internal areas, a private covered terrace and an integrated two-car garage.",
    additionalImages: [
      "/MODULAR/X20A/snapedit_1697583630344 (1) Large.jpeg",
      "/MODULAR/X20A/snapedit_1697583468903 (1) Large.jpeg",
      "/MODULAR/X20A/snapedit_1697583792962 (1) Large.jpeg",
      "/MODULAR/X20A/Facade 4 (2) Large.jpeg",
      "/MODULAR/X20A/Fasade 3 (1) Large.jpeg",
      "/MODULAR/X20A/Facade2 (1) Large.jpeg",
      "/MODULAR/X20A/facade 1 (3) Large.jpeg"
    ],
    floorPlans: ["/MODULAR/X20A/PLAN.png"],
    about: "The Modular Home X20 is a generously proportioned single-storey house designed as a full-scale permanent residence. Its architecture and layout are focused on comfort, privacy and everyday functionality, making it an ideal solution for family living.\n\nThe heart of the house is a large open-plan kitchen–living space with direct access to a covered rear terrace, creating a strong connection between indoor and outdoor living areas. This layout makes the home equally suitable for everyday family life, entertaining guests and relaxed outdoor gatherings.\n\nThe private zone includes three bedrooms, one of which is designed as a master bedroom, offering enhanced privacy and comfort. The remaining bedrooms are well separated from the living area, ensuring a balanced and quiet internal layout.\n\nA defining feature of the Modular Home X20 is the integrated two-car garage, seamlessly incorporated into the overall volume of the building, providing both convenience and architectural coherence.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large single-storey family home for permanent residence",
      "Three-bedroom layout, including a master bedroom",
      "Integrated garage for two cars",
      "Spacious open-plan kitchen–living area",
      "Covered rear terrace for outdoor living",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2777, meters: 258.0 },
      livingArea: { feet: 2167, meters: 201.3 },
      coveredTerrace: { feet: 183, meters: 17.0 },
      bedrooms: "3",
      bathrooms: "Not specified",
      overallSize: "approx. 84.0 × 41.3 ft (25.6 × 12.6 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Natural or concrete roof tiles (model-dependent option)",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious single-storey family layout",
      "Three bedrooms including a master bedroom",
      "Integrated two-car garage",
      "Large open-plan kitchen–living space",
      "Covered rear terrace for outdoor living",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Natural or concrete roof tiles (model-dependent option), including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X21",
    slug: "modular-home-x21",
    imageUrl: "/MODULAR/x21/snapedit_1697550671220 Large.jpeg",
    squareFeet: 2874,
    squareMeters: 267.0,
    price: 440246,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A spacious two-storey SIP home designed for permanent living, combining generous internal areas, an integrated two-car garage and a balanced family-oriented layout with strong indoor–outdoor connection.",
    additionalImages: [
      "/MODULAR/x21/snapedit_1697550524516 Large.jpeg",
      "/MODULAR/x21/snapedit_1697550849136 Large.jpeg",
      "/MODULAR/x21/snapedit_1697551109180 Large.jpeg",
      "/MODULAR/x21/facade 1 (6) Large.jpeg",
      "/MODULAR/x21/facade 2 (4) Large.jpeg",
      "/MODULAR/x21/facade 3 (6) Large.jpeg",
      "/MODULAR/x21/facade 4 (6) Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x21/plan 1 (3) Large.jpeg",
      "/MODULAR/x21/plan 2 (2) Large.jpeg"
    ],
    about: "The Modular Home X21 is a well-proportioned two-storey family house designed as a full-scale permanent residence. Its architecture combines contemporary proportions with modern SIP construction technology, offering a comfortable and highly functional living environment.\n\nThe ground floor is organised around a spacious open-plan kitchen and living area, forming the social core of the home. This space is designed for everyday family life, entertaining and relaxed living, with direct access to a semi-covered outdoor terrace that extends the living area.\n\nPrivate zones are distributed across both floors. The layout includes four bedrooms, two bathrooms and a dedicated home office, ensuring comfort, privacy and flexibility for modern family living. The integrated garage provides convenient internal access and additional storage functionality.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large two-storey family home for permanent residence",
      "Four-bedroom configuration",
      "Two bathrooms",
      "Dedicated home office",
      "Integrated two-car garage",
      "Open / semi-covered terrace",
      "Spacious open-plan kitchen–living area",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 3229, meters: 300.0 },
      livingArea: { feet: 2874, meters: 267.0 },
      coveredTerrace: { feet: 323, meters: 30.0 },
      bedrooms: "4",
      bathrooms: 2,
      overallSize: "approx. 48.6 × 40.0 ft (14.80 × 12.20 m)",
      walkInWardrobes: "Garage: 355 ft² (33.0 m²), Overall Height: approx. 28.5 ft (8.70 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Roof structure and covering",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious two-storey family layout",
      "Four bedrooms and two bathrooms",
      "Dedicated home office",
      "Integrated two-car garage",
      "Open / semi-covered terrace",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Roof structure and covering, including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X22",
    slug: "modular-home-x22",
    imageUrl: "/MODULAR/x22/snapedit_1697570955831 Large.jpeg",
    squareFeet: 2906,
    squareMeters: 270.0,
    price: 492379,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A spacious two-storey SIP home designed for permanent living, combining generous internal areas, a clear functional layout and strong separation between private and shared zones.",
    additionalImages: [
      "/MODULAR/x22/snapedit_1697570736301 Large.jpeg",
      "/MODULAR/x22/snapedit_1697553543567 Large.jpeg",
      "/MODULAR/x22/snapedit_1697571452729 Large.jpeg",
      "/MODULAR/x22/snapedit_1697571637042 Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x22/plan 1 (1) Large.jpeg",
      "/MODULAR/x22/plan 2 Large.jpeg"
    ],
    about: "The Modular Home X22 is a generously proportioned two-storey family house designed as a full-scale permanent residence. Its architecture combines contemporary proportions with modern SIP construction technology, offering a comfortable and highly functional living environment for larger families.\n\nThe ground floor is organised around a spacious open-plan kitchen and living area, forming the central hub of the home. This space is designed for everyday family life, social gatherings and relaxed living, with direct access to a large terrace that significantly extends the living area.\n\nPrivate areas are distributed across both floors. The layout includes five bedrooms and three bathrooms, ensuring comfort and flexibility for family living and guests. The large terrace creates an additional outdoor living zone and enhances natural light throughout the house.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large family home designed for permanent residence",
      "Two-storey layout",
      "Five-bedroom configuration",
      "Three bathrooms",
      "Large spacious terrace",
      "Spacious open-plan kitchen–living area",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2906, meters: 270.0 },
      livingArea: { feet: 2906, meters: 270.0 },
      bedrooms: "5",
      bathrooms: 3,
      overallSize: "approx. 50.0 × 46.9 ft (15.23 × 14.28 m)",
      walkInWardrobes: "Overall Height: approx. 32.8 ft (10.0 m), Terrace: large outdoor terrace"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Roof structure and covering",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious two-storey family layout",
      "Five bedrooms and three bathrooms",
      "Large outdoor terrace",
      "Open-plan kitchen–living space",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Roof structure and covering, including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X23",
    slug: "modular-home-x23",
    imageUrl: "/MODULAR/x23/snapedit_1697571771477 Large.jpeg",
    squareFeet: 4628,
    squareMeters: 430.0,
    price: 675361,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A large two-storey SIP residence designed for permanent living, featuring expansive open spaces, double-height interiors, panoramic glazing and a strong architectural presence with flat roof design.",
    additionalImages: [
      "/MODULAR/x23/snapedit_1697572121683 Large.jpeg",
      "/MODULAR/x23/snapedit_1697572431807 Large.jpeg",
      "/MODULAR/x23/snapedit_1697572817895 Large.jpeg",
      "/MODULAR/x23/snapedit_1697572955805 Large.jpeg",
      "/MODULAR/x23/facade 1 (8) Large.jpeg",
      "/MODULAR/x23/facade 2 (7) Large.jpeg",
      "/MODULAR/x23/facade 3 (8) Large.jpeg",
      "/MODULAR/x23/facade 4 (8) Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x23/plan 1 (5) Large.jpeg",
      "/MODULAR/x23/plan 2 (4) Large.jpeg"
    ],
    about: "The Modular Home X23 is a flagship two-storey residence designed as a full-scale luxury family home. The project combines modern flat-roof architecture with expansive glazing and a dramatic double-height interior, creating a strong sense of space, light and openness.\n\nThe heart of the house is a large central hall with double-height ceiling, forming a striking architectural focal point and providing abundant natural daylight through panoramic glazing. This space connects seamlessly to the main living areas and creates a strong visual and spatial link between both floors.\n\nThe house offers six spacious bedrooms, each with its own en-suite bathroom, ensuring maximum privacy and comfort for all occupants. In addition, a dedicated home office provides a flexible workspace suitable for professional or private use.\n\nTwo large covered terraces — one on the ground floor and one on the first floor — extend the living areas outdoors and create sheltered spaces for relaxation, entertaining and year-round use.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large two-storey family residence",
      "Six-bedroom configuration",
      "Eight bathrooms (each bedroom with en-suite)",
      "Dedicated home office",
      "Double-height main hall and living space",
      "Panoramic floor-to-ceiling glazing",
      "Flat roof architectural design",
      "Two large covered terraces",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 4628, meters: 430.0 },
      livingArea: { feet: 4628, meters: 430.0 },
      bedrooms: "6",
      bathrooms: 8,
      overallSize: "approx. 80.1 × 61.7 ft (24.40 × 18.80 m)",
      walkInWardrobes: "Home Office: 1, Overall Height: approx. 26.9 ft (8.20 m), Terraces: two large covered terraces (ground and first floor)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Extensive panoramic glazing for maximum daylight",
      roof: "Flat roof structure and waterproofing system",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Enhanced daylight penetration via double-height spaces",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Luxury two-storey family residence",
      "Six en-suite bedrooms",
      "Eight bathrooms in total",
      "Double-height main hall",
      "Panoramic glazing",
      "Two large covered terraces",
      "Dedicated home office",
      "Efficient and rational planning with strong architectural expression"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Flat roof system",
        description: "Flat roof structure and waterproofing system, including parapets and drainage components."
      },
      {
        title: "PVC double-glazed panoramic windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X25",
    slug: "modular-home-x25",
    imageUrl: "/MODULAR/x25/snapedit_1697573543447 Large.jpeg",
    squareFeet: 2013,
    squareMeters: 187.0,
    price: 230100,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A contemporary two-storey SIP home designed for permanent living, offering a compact footprint with a well-balanced family layout and efficient use of space.",
    additionalImages: [
      "/MODULAR/x25/snapedit_1697573690775 Large.jpeg",
      "/MODULAR/x25/snapedit_1697573367621 Large.jpeg",
      "/MODULAR/x25/snapedit_1697573832424 Large.jpeg",
      "/MODULAR/x25/facade 1 (3) Large.jpeg",
      "/MODULAR/x25/facade 2 (3) Large.jpeg",
      "/MODULAR/x25/facade 3 (2) Large.jpeg",
      "/MODULAR/x25/facade 4 (2) Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x25/plane 1 Large.jpeg",
      "/MODULAR/x25/plan 2 Large 2.jpeg"
    ],
    facades: [
      "/MODULAR/x25/facade 1 (3) Large.jpeg",
      "/MODULAR/x25/facade 2 (3) Large.jpeg",
      "/MODULAR/x25/facade 3 (2) Large.jpeg",
      "/MODULAR/x25/facade 4 (2) Large.jpeg"
    ],
    about: "The Modular Home X25 is a modern two-storey family house designed for comfortable permanent living on a compact footprint. Its architecture combines clean contemporary lines with efficient internal planning, making it suitable for a wide range of residential plots.\n\nThe ground floor is organised around an open-plan kitchen and living area, forming the social core of the house. Large glazed openings provide strong visual connections to the outdoor space and maximise natural daylight.\n\nPrivate zones are arranged across both floors, with four bedrooms and three bathrooms ensuring comfort and flexibility for family living. The vertical layout allows for efficient separation between shared and private areas while maintaining a compact overall form.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Two-storey family home for permanent residence",
      "Four-bedroom layout",
      "Three bathrooms",
      "Efficient vertical planning with clear zoning",
      "Spacious open-plan kitchen–living area",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2013, meters: 187.0 },
      livingArea: { feet: 2013, meters: 187.0 },
      bedrooms: "4",
      bathrooms: 3,
      overallSize: "approx. 28.2 × 47.9 ft (8.6 × 14.6 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Roof structure and covering",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Two-storey family layout",
      "Four bedrooms and three bathrooms",
      "Open-plan kitchen–living space",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Roof structure and covering, including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X28",
    slug: "modular-home-x28",
    imageUrl: "/MODULAR/x28/snapedit_1697573997751 Large.jpeg",
    squareFeet: 3229,
    squareMeters: 300.0,
    price: 485848,
    type: "SINGLE-STOREY",
    category: "MODULAR",
    description: "A contemporary single-storey SIP home with flat roof architecture, featuring expansive glazing, generous internal spaces and a clean modern design language.",
    additionalImages: [
      "/MODULAR/x28/snapedit_1697574126885 Large.jpeg",
      "/MODULAR/x28/snapedit_1697574261483 Large.jpeg",
      "/MODULAR/x28/facade 1 (7) Large.jpeg",
      "/MODULAR/x28/facade 2 (5) Large.jpeg",
      "/MODULAR/x28/facade 3 (7) Large.jpeg",
      "/MODULAR/x28/facade 4 (7) Large.jpeg"
    ],
    floorPlans: ["/MODULAR/x28/plan Large.jpeg"],
    about: "The Modular Home X28 is a contemporary single-storey residence designed in a modern architectural style, combining flat roof geometry with expansive glazing and spacious internal volumes.\n\nThe heart of the house is a large living room with high glazing, creating a strong sense of openness and architectural clarity. Large glazed openings provide abundant natural daylight and establish a seamless visual connection between indoor spaces and the surrounding environment.\n\nThe layout includes three comfortable bedrooms, three bathrooms and a dedicated home office, providing a functional and flexible arrangement for modern family living. A large integrated garage for two vehicles is incorporated into the building volume, ensuring convenience and additional storage capacity. The open terrace extends the living area outdoors and offers space for relaxation and social gatherings.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Single-storey modern family home",
      "Flat roof architectural design",
      "Three-bedroom configuration",
      "Three bathrooms",
      "Dedicated home office",
      "Spacious living room with high glazing",
      "Integrated two-car garage",
      "Open outdoor terrace",
      "Panoramic glazing",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 3229, meters: 300.0 },
      livingArea: { feet: 3229, meters: 300.0 },
      bedrooms: "3",
      bathrooms: 3,
      overallSize: "approx. 92.7 × 51.7 ft (28.26 × 15.76 m)",
      walkInWardrobes: "Home Office: 1, Garage: integrated two-car garage, Overall Height: approx. 13.8 ft (4.20 m), Terrace: open outdoor terrace"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Panoramic glazing for maximum daylight",
      roof: "Flat roof structure and waterproofing system",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Excellent daylight penetration through large glazed areas",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Contemporary flat-roof architecture",
      "Spacious single-storey layout",
      "High glazing and strong indoor–outdoor connection",
      "Three bedrooms and three bathrooms",
      "Dedicated home office",
      "Integrated two-car garage",
      "Open terrace",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Flat roof system",
        description: "Flat roof structure and waterproofing system, including parapets and drainage components."
      },
      {
        title: "PVC double-glazed panoramic windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X31",
    slug: "modular-home-x31",
    imageUrl: "/MODULAR/x31/snapedit_1697575070253 Large.jpeg",
    squareFeet: 3767,
    squareMeters: 350.0,
    price: 541338,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A spacious two-storey SIP home designed for permanent living, combining generous internal areas, a functional second floor and a balanced family-oriented layout.",
    additionalImages: [
      "/MODULAR/x31/snapedit_1697575286430 Large.jpeg",
      "/MODULAR/x31/facade1 Large.jpeg",
      "/MODULAR/x31/facade 2 (6) Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x31/plan 1 (4) Large.jpeg",
      "/MODULAR/x31/plan 2 (3) Large.jpeg"
    ],
    about: "The Modular Home X31 is a generously proportioned two-storey family house designed as a full-scale permanent residence. Its architecture combines contemporary proportions with modern construction technology, offering a comfortable and highly functional living environment for large families.\n\nThe ground floor is organised around a spacious open-plan kitchen and living area, forming the central hub of the home. This space is designed for everyday family life, entertaining and social gatherings, with clear visual connections between the main living zones.\n\nThe private areas are carefully distributed across both floors. The layout includes five bedrooms, three bathrooms and a dedicated home office, ensuring comfort, privacy and flexible use of space. A large terrace on the second floor extends the living area outdoors and creates an additional private relaxation zone.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large two-storey family home for permanent residence",
      "Five-bedroom layout",
      "Three bathrooms",
      "Dedicated home office",
      "Large open-plan kitchen–living area",
      "Second-floor terrace of approx. 215 ft² (20.0 m²)",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 3767, meters: 350.0 },
      livingArea: { feet: 3767, meters: 350.0 },
      bedrooms: "5",
      bathrooms: 3,
      overallSize: "approx. 59.1 × 52.5 ft (18.0 × 16.0 m)",
      walkInWardrobes: "Home Office: 1, Second-floor terrace: approx. 215 ft² (20.0 m²), Overall Height: approx. 29.1 ft (8.86 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Roof structure and covering suitable for a two-storey configuration",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious two-storey family layout",
      "Five bedrooms and three bathrooms",
      "Dedicated home office",
      "Large open-plan kitchen–living space",
      "Second-floor terrace",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Roof structure and covering suitable for a two-storey configuration, including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X35",
    slug: "modular-home-x35",
    imageUrl: "/MODULAR/x35/snapedit_1697581800505 Large.jpeg",
    squareFeet: 1722,
    squareMeters: 160.0,
    price: 188800,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A distinctive two-storey Scandinavian-style modular home with panoramic glazing and a large open terrace, designed for permanent living and strong visual connection with the surrounding landscape.",
    additionalImages: [
      "/MODULAR/x35/snapedit_1697581964194 Large.jpeg",
      "/MODULAR/x35/12c092ca34edcd8a2cb368f1d2d2bfaaf31ac3f3 Large.jpeg",
      "/MODULAR/x35/bfd90956f32536448d94a89a40c75ab1b1ae0917 Large.jpeg",
      "/MODULAR/x35/d388666329c02aaa2283c0b08df6fffccd8fb34d Large.jpeg",
      "/MODULAR/x35/facade 1 (1) Large.jpeg",
      "/MODULAR/x35/facade 2 (1) Large.jpeg",
      "/MODULAR/x35/facade 3 (1) Large.jpeg",
      "/MODULAR/x35/facade 4 (1) Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x35/plan 1 (1) Large.jpeg",
      "/MODULAR/x35/plan 2 Large.jpeg"
    ],
    facades: [
      "/MODULAR/x35/facade 1 (1) Large.jpeg",
      "/MODULAR/x35/facade 2 (1) Large.jpeg",
      "/MODULAR/x35/facade 3 (1) Large.jpeg",
      "/MODULAR/x35/facade 4 (1) Large.jpeg"
    ],
    about: "The Modular Home X35 is a thoughtfully designed single-storey residence in a Scandinavian architectural style, developed around a clear modular composition and strong functional zoning. Its design is defined by clean lines, balanced proportions and a calm, contemporary character typical of modern Scandinavian homes.\n\nThe house is composed of three distinct modules. Two parallel residential blocks are connected by a transverse central module, which forms the functional heart of the home. This central element accommodates the kitchen and dining area, acting as a natural link between the main living and private zones.\n\nThe left module is dedicated to the living room — a comfortable, light-filled space designed for everyday relaxation and social interaction. The right module forms the private sleeping wing, housing the bedrooms and ensuring a clear separation between shared and private areas.\n\nThis modular arrangement provides a high level of comfort and privacy while maintaining an intuitive internal flow. By distributing functions across clearly defined volumes, the X35 offers a rational and flexible layout ideally suited to single-storey living.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Two-storey modular home for permanent residence",
      "Scandinavian architectural style with panoramic glazed walls",
      "Two-bedroom layout",
      "Two bathrooms",
      "Large open-plan living and dining area",
      "House composed of three interconnected blocks",
      "Central block linking private and living zones",
      "Spacious open terrace for outdoor living",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2228, meters: 207.0 },
      livingArea: { feet: 1722, meters: 160.0 },
      coveredTerrace: { feet: 506, meters: 47.0 },
      bedrooms: "2",
      bathrooms: 2,
      overallSize: "approx. 44.6 × 44.6 ft (13.60 × 13.60 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation",
      windows: "Large panoramic glazing for abundant natural daylight",
      roof: "Model-specific roofing solution",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Strong indoor–outdoor connection through glazing and terrace",
      "Durable Scandinavian exterior materials"
    ],
    features: [
      "Two-storey Scandinavian-style modular home",
      "Three-block architectural composition",
      "Panoramic glazed living spaces",
      "Large open terrace (47 m²)",
      "Clear zoning between living and private areas",
      "Efficient, design-led spatial planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific Scandinavian-style exterior finish."
      },
      {
        title: "Roofing package",
        description: "Model-specific roofing solution including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X37",
    slug: "modular-home-x37",
    imageUrl: "/MODULAR/x37/snapedit_1697582381469 Large.jpeg",
    squareFeet: 2756,
    squareMeters: 256.0,
    price: 326140,
    type: "SINGLE-STOREY",
    category: "MODULAR",
    description: "A spacious single-storey SIP home designed for permanent living, combining a generous family layout, four bedrooms, three bathrooms and a covered terrace for comfortable indoor–outdoor living.",
    additionalImages: [
      "/MODULAR/x37/snapedit_1697582512672 Large.jpeg",
      "/MODULAR/x37/facade 1 (1) Large.jpeg",
      "/MODULAR/x37/Facad 2 Large.jpeg",
      "/MODULAR/x37/facade 3 (1) Large.jpeg",
      "/MODULAR/x37/facad 4 Large.jpeg"
    ],
    floorPlans: ["/MODULAR/x37/plan  Large.jpeg"],
    facades: [
      "/MODULAR/x37/facade 1 (1) Large.jpeg",
      "/MODULAR/x37/Facad 2 Large.jpeg",
      "/MODULAR/x37/facade 3 (1) Large.jpeg",
      "/MODULAR/x37/facad 4 Large.jpeg"
    ],
    about: "The Modular Home X37 is a generously proportioned single-storey house designed as a full-scale permanent residence. Its architecture and layout are focused on comfort, privacy and everyday functionality, making it an ideal solution for family living.\n\nThe heart of the house is a large open-plan kitchen–living space that connects naturally to the outdoor areas, creating a strong indoor–outdoor relationship. This layout makes the home equally suitable for everyday family life, entertaining guests and relaxed outdoor gatherings.\n\nThe private zone includes four bedrooms, arranged to provide privacy and comfort for all occupants. With three bathrooms, the internal planning supports family living and guest accommodation without compromise, ensuring practical daily use and flexible long-term living.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Large single-storey family home for permanent residence",
      "Four-bedroom layout",
      "Three bathrooms",
      "Spacious open-plan kitchen–living area",
      "Covered terrace for outdoor living",
      "Additional outdoor terrace",
      "Clear separation between private and shared zones",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2756, meters: 255.0 },
      livingArea: { feet: 2756, meters: 256.0 },
      coveredTerrace: { feet: 269, meters: 25.0 },
      bedrooms: "4",
      bathrooms: 3,
      overallSize: "approx. 66.0 × 54.9 ft (20.12 × 16.72 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)",
      windows: "Large glazed openings for abundant natural daylight",
      roof: "Natural or concrete roof tiles (model-dependent option)",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through large glazed openings",
      "Durable, low-maintenance external materials"
    ],
    features: [
      "Spacious single-storey family layout",
      "Four bedrooms and three bathrooms",
      "Large open-plan kitchen–living space",
      "Covered terrace for outdoor living",
      "Additional outdoor terrace",
      "Clear separation between private and shared zones",
      "Efficient and rational planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific exterior finish."
      },
      {
        title: "Roofing package",
        description: "Natural or concrete roof tiles (model-dependent option), including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X39",
    slug: "modular-home-x39",
    imageUrl: "/MODULAR/x39/front Large.jpeg",
    squareFeet: 2368,
    squareMeters: 220.0,
    price: 266200,
    type: "TWO-STOREY",
    category: "MODULAR",
    description: "A distinctive two-storey Scandinavian-style modular home with double-height living space, panoramic glazing and a generous open terrace, designed for permanent living and a strong visual connection with the surrounding landscape.",
    additionalImages: [
      "/MODULAR/x39/back Large.jpeg",
      "/MODULAR/x39/photo_2024-07-17 10.20.19 Large.jpeg",
      "/MODULAR/x39/photo_2024-07-17 10.20.26 Large.jpeg",
      "/MODULAR/x39/photo_2024-07-17 10.20.32 Large.jpeg",
      "/MODULAR/x39/photo_2024-07-17 10.20.37 Large.jpeg",
      "/MODULAR/x39/photo_2024-07-17 10.20.41 Large.jpeg",
      "/MODULAR/x39/house kit2 Large.jpeg",
      "/MODULAR/x39/facade 1 Large.jpeg",
      "/MODULAR/x39/facade 2 Large.jpeg",
      "/MODULAR/x39/facade 3 Large.jpeg",
      "/MODULAR/x39/facade 4 Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x39/plan 1.  Large.jpeg",
      "/MODULAR/x39/plan2.  Large.jpeg"
    ],
    facades: [
      "/MODULAR/x39/facade 1 Large.jpeg",
      "/MODULAR/x39/facade 2 Large.jpeg",
      "/MODULAR/x39/facade 3 Large.jpeg",
      "/MODULAR/x39/facade 4 Large.jpeg"
    ],
    about: "The Modular Home X39 is a refined two-storey residence designed in a contemporary Scandinavian architectural style, combining clean geometry, natural materials and strong spatial expression. The house is conceived for comfortable permanent living, with an emphasis on daylight, openness and visual connection to the surrounding environment.\n\nThe architectural focal point of the X39 is its impressive double-height living room, featuring full-height panoramic glazing that extends to the ceiling. This space creates a strong sense of vertical openness and brings abundant natural light deep into the interior, while visually connecting both floors of the house.\n\nThe ground floor is organised around the main living zone, combining the living room, dining area and kitchen into a generous open-plan space, ideal for family life and entertaining. A dedicated home office is also located on this level, providing a quiet and functional workspace.\n\nThe private zones are arranged across both floors and include four bedrooms in total, offering comfortable accommodation for a family. Two bathrooms are positioned to serve the sleeping areas efficiently, ensuring practical everyday use.\n\nAn open terrace of 20 m² extends the living space outdoors, supporting a seamless indoor–outdoor lifestyle typical of Scandinavian residential design.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Two-storey modular home for permanent residence",
      "Scandinavian architectural style",
      "Four-bedroom layout",
      "Two bathrooms",
      "Dedicated home office",
      "Large open-plan living and dining area",
      "Double-height living space with full-height glazing",
      "Ceiling-height panoramic glazing in the living room (approx. 6.0 m)",
      "Spacious open terrace for outdoor living",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2583, meters: 240.0 },
      livingArea: { feet: 2368, meters: 220.0 },
      coveredTerrace: { feet: 215, meters: 20.0 },
      bedrooms: "4",
      bathrooms: 2,
      overallSize: "approx. 47.5 × 36.5 ft (14.48 × 11.12 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation",
      windows: "Double-height living space with panoramic glazing",
      roof: "Model-specific roofing solution",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Stable indoor comfort suitable for year-round living",
      "Reduced heat loss and efficient energy demand",
      "Abundant natural daylight through full-height glazing",
      "Strong indoor–outdoor connection via terrace"
    ],
    features: [
      "Two-storey Scandinavian-style modular home",
      "Double-height living space with ceiling-height glazing",
      "Four-bedroom family layout with home office",
      "Open terrace (20 m²)",
      "Clear zoning between living, working and private areas",
      "Efficient, design-led spatial planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific Scandinavian-style exterior finish."
      },
      {
        title: "Roofing package",
        description: "Model-specific roofing solution including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  },
  {
    name: "MODULAR HOME X40",
    slug: "modular-home-x40",
    imageUrl: "/MODULAR/x40/back Large.jpeg",
    squareFeet: 1938,
    squareMeters: 180.0,
    price: 221400,
    type: "MEZZANINE",
    category: "MODULAR",
    description: "A Scandinavian-style modular home with a mezzanine level, double-height living space and panoramic glazing, designed to maximise natural light and create a strong spatial experience within a compact footprint.",
    additionalImages: [
      "/MODULAR/x40/front Large.jpeg",
      "/MODULAR/x40/MAIN PHOTO fasad Large.jpeg",
      "/MODULAR/x40/fasad 1 Large.jpeg",
      "/MODULAR/x40/fasad 3 Large.jpeg",
      "/MODULAR/x40/facade 1 (2) Large.jpeg",
      "/MODULAR/x40/facade 2 (2) Large.jpeg",
      "/MODULAR/x40/facade3 Large.jpeg",
      "/MODULAR/x40/favcade 4 Large.jpeg"
    ],
    floorPlans: [
      "/MODULAR/x40/paln.png",
      "/MODULAR/x40/oplan 2.png"
    ],
    facades: [
      "/MODULAR/x40/fasad 1 Large.jpeg",
      "/MODULAR/x40/fasad 3 Large.jpeg",
      "/MODULAR/x40/facade 1 (2) Large.jpeg",
      "/MODULAR/x40/facade 2 (2) Large.jpeg",
      "/MODULAR/x40/facade3 Large.jpeg",
      "/MODULAR/x40/favcade 4 Large.jpeg"
    ],
    about: "The Modular Home X40 is a contemporary Scandinavian-style residence that combines compact external dimensions with a striking internal spatial concept. The design focuses on openness, daylight and vertical volume, creating a bright and expressive living environment suitable for permanent living.\n\nThe architectural centre of the house is the large double-height living space with ceilings reaching up to 6.0 metres. Full-height panoramic glazing floods the interior with natural light and visually connects the living area with the surrounding landscape, reinforcing the calm and open character typical of Scandinavian architecture.\n\nThe house is organised across two levels.\n\nOn the ground floor, the layout includes one bedroom, two bathrooms and a dedicated home office, alongside the main living, dining and kitchen area. This level is designed for everyday living, comfort and functionality.\n\nAn upper mezzanine level accommodates two additional bedrooms and a separate lounge area, overlooking the double-height living space below. This arrangement creates a clear distinction between social and private zones while maintaining visual continuity and a strong sense of openness throughout the house.\n\nA covered terrace of 25 m² extends the living area outdoors, providing a sheltered space for relaxation and outdoor use throughout the year.\n\nAll structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.",
    keyFeatures: [
      "Scandinavian-style modular home for permanent living",
      "One main level with mezzanine floor",
      "Three-bedroom layout",
      "Dedicated home office",
      "Two bathrooms",
      "Large open-plan living area",
      "Double-height living room with ceilings up to 6.0 m",
      "Panoramic floor-to-ceiling glazing",
      "Mezzanine level overlooking the living space",
      "Covered outdoor terrace (25 m²)",
      "Energy-efficient SIP construction",
      "Internal finishes and internal doors included",
      "Factory-manufactured system for fast and predictable assembly"
    ],
    dimensions: {
      totalArea: { feet: 2207, meters: 205.0 },
      livingArea: { feet: 1938, meters: 180.0 },
      coveredTerrace: { feet: 269, meters: 25.0 },
      bedrooms: "3",
      bathrooms: 2,
      overallSize: "approx. 31.5 × 68.9 ft (9.6 × 21.0 m)"
    },
    construction: {
      wallSystem: "SIP wall, floor and roof system",
      insulation: "High-performance insulation",
      windows: "Double-height living space with panoramic glazing",
      roof: "Model-specific roofing solution",
      foundation: "Not included"
    },
    energyEnvironment: [
      "High thermal performance insulated SIP envelope",
      "Comfortable year-round indoor climate",
      "Reduced heat loss and efficient energy demand",
      "Extensive daylight through full-height glazing",
      "Strong indoor–outdoor connection via covered terrace"
    ],
    features: [
      "Scandinavian-style modular home with mezzanine",
      "Double-height living room (6.0 m ceilings)",
      "Panoramic floor-to-ceiling glazing",
      "Three bedrooms and home office",
      "Covered terrace (25 m²)",
      "Clear separation of living and private zones",
      "Efficient, design-led spatial planning"
    ],
    whatsIncluded: [
      {
        title: "Complete SIP structural shell",
        description: "External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory."
      },
      {
        title: "Exterior cladding system",
        description: "Model-specific Scandinavian-style exterior finish."
      },
      {
        title: "Roofing package",
        description: "Model-specific roofing solution including fascias, soffits, guttering and downpipes."
      },
      {
        title: "PVC double-glazed windows and exterior entrance doors",
        description: ""
      },
      {
        title: "Internal finishes and internal doors",
        description: "Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors."
      },
      {
        title: "Internal plumbing and electrical cabling (first-fix only)",
        description: "Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections."
      },
      {
        title: "On-site assembly of the structural shell",
        description: "Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors."
      },
      {
        title: "Assembly drawings and technical documentation",
        description: ""
      }
    ],
    whatsNotIncluded: [
      {
        title: "Bathrooms and sanitary installations",
        description: "Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works."
      },
      {
        title: "Kitchen furniture and fittings",
        description: "Kitchen units, worktops, appliances and built-in kitchen furniture."
      },
      {
        title: "Electrical fittings and fixtures",
        description: "Sockets, switches, light fittings, decorative lighting and any electrical devices."
      },
      {
        title: "Mechanical and engineering systems",
        description: "Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment."
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
      }
    ]
  }
];

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