export const properties = [
  {
    id: 1,
    title: "Modern Waterfront Villa",
    description: "Luxurious waterfront villa with panoramic ocean views. This spectacular property features 5 bedrooms, 6 bathrooms, a private pool, and direct beach access. The open-concept living space seamlessly connects to expansive terraces, perfect for entertaining and enjoying the sunset. High-end finishes throughout including marble floors, custom cabinetry, and smart home technology.",
    price: 2750000,
    address: "123 Oceanfront Dr, Malibu, CA 90265",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 4800,
    type: "House",
    status: "For Sale",
    featured: true,
    yearBuilt: 2020,
    parking: 3,
    location: {
      city: "Malibu",
      state: "CA",
      zipCode: "90265",
      neighborhood: "Malibu Beach"
    },
    amenities: [
      "Swimming Pool",
      "Ocean View",
      "Smart Home",
      "Home Theater",
      "Wine Cellar",
      "Gym",
      "Private Beach Access",
      "Outdoor Kitchen"
    ],
    images: [
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    agent: {
      id: 1,
      name: "Sarah Johnson",
      phone: "310-555-1234",
      email: "sarah.johnson@realestate.com",
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 2,
    title: "Downtown Luxury Penthouse",
    description: "Stunning penthouse in the heart of downtown offering breathtaking city views. This exclusive property features 3 bedrooms, 3.5 bathrooms, floor-to-ceiling windows, and a private rooftop terrace. Premium finishes include hardwood floors, designer kitchen with top-of-the-line appliances, and marble bathrooms. Building amenities include 24-hour concierge, fitness center, and rooftop pool.",
    price: 1850000,
    address: "500 Main St Unit PH5, New York, NY 10001",
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2350,
    type: "Apartment",
    status: "For Sale",
    featured: true,
    yearBuilt: 2018,
    parking: 2,
    location: {
      city: "New York",
      state: "NY",
      zipCode: "10001",
      neighborhood: "Chelsea"
    },
    amenities: [
      "Concierge",
      "Fitness Center",
      "Rooftop Pool",
      "Private Terrace",
      "Floor-to-ceiling Windows",
      "Smart Home",
      "Wine Storage",
      "Pet Friendly"
    ],
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    agent: {
      id: 2,
      name: "Michael Chen",
      phone: "212-555-6789",
      email: "michael.chen@realestate.com",
      image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 3,
    title: "Charming Suburban Family Home",
    description: "Beautiful family home in a sought-after neighborhood with excellent schools. This well-maintained property offers 4 bedrooms, 3 bathrooms, a spacious backyard, and updated interiors. The bright kitchen opens to a comfortable family room, perfect for everyday living. Additional features include a finished basement, two-car garage, and mature landscaping.",
    price: 875000,
    address: "42 Maple Avenue, Naperville, IL 60540",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: "House",
    status: "For Sale",
    featured: false,
    yearBuilt: 2005,
    parking: 2,
    location: {
      city: "Naperville",
      state: "IL",
      zipCode: "60540",
      neighborhood: "Maple Ridge"
    },
    amenities: [
      "Finished Basement",
      "Backyard",
      "Central Air",
      "Fireplace",
      "Hardwood Floors",
      "Updated Kitchen",
      "Two-car Garage",
      "Patio"
    ],
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    agent: {
      id: 3,
      name: "Jennifer Smith",
      phone: "630-555-4321",
      email: "jennifer.smith@realestate.com",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 4,
    title: "Mountain View Cabin Retreat",
    description: "Cozy mountain cabin with stunning views and modern conveniences. This charming retreat features 2 bedrooms, 2 bathrooms, and an open-concept living area with a stone fireplace. The property sits on 3 acres of wooded land, offering privacy and connection with nature. Perfect as a vacation home or year-round residence for those seeking tranquility.",
    price: 495000,
    address: "789 Pine Ridge Rd, Aspen, CO 81611",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1450,
    type: "Cabin",
    status: "For Sale",
    featured: false,
    yearBuilt: 2010,
    parking: 1,
    location: {
      city: "Aspen",
      state: "CO",
      zipCode: "81611",
      neighborhood: "Pine Ridge"
    },
    amenities: [
      "Mountain Views",
      "Fireplace",
      "Deck",
      "Wooded Property",
      "Vaulted Ceilings",
      "Wood Floors",
      "Updated Kitchen",
      "Hiking Trails Nearby"
    ],
    images: [
      "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    agent: {
      id: 4,
      name: "Robert Davis",
      phone: "970-555-8765",
      email: "robert.davis@realestate.com",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 5,
    title: "Historic Brownstone Townhouse",
    description: "Classic brownstone townhouse with preserved historic details and modern updates. This elegant property features 3 bedrooms, 2.5 bathrooms, high ceilings, original hardwood floors, and ornate fireplaces. Recent renovations include a chef's kitchen with high-end appliances and updated bathrooms. Includes a private garden and convenient location near parks, restaurants, and public transportation.",
    price: 1650000,
    address: "123 Beacon St, Boston, MA 02108",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2200,
    type: "Townhouse",
    status: "For Sale",
    featured: true,
    yearBuilt: 1890,
    parking: 0,
    location: {
      city: "Boston",
      state: "MA",
      zipCode: "02108",
      neighborhood: "Beacon Hill"
    },
    amenities: [
      "Historic Details",
      "Fireplace",
      "Garden",
      "Chef's Kitchen",
      "High Ceilings",
      "Original Hardwood",
      "Updated Bathrooms",
      "Central Location"
    ],
    images: [
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    agent: {
      id: 5,
      name: "Elizabeth Taylor",
      phone: "617-555-2345",
      email: "elizabeth.taylor@realestate.com",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 6,
    title: "Contemporary Urban Loft",
    description: "Stylish urban loft in a converted warehouse with industrial charm and contemporary design. This open-concept space features 1 bedroom, 1 bathroom, exposed brick walls, concrete floors, and large factory windows. The modern kitchen includes stainless steel appliances and a breakfast bar. Building amenities include a fitness room and shared rooftop space with city views.",
    price: 565000,
    address: "500 Loft Ave #3B, Portland, OR 97209",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 1100,
    type: "Apartment",
    status: "For Sale",
    featured: false,
    yearBuilt: 1935,
    parking: 1,
    location: {
      city: "Portland",
      state: "OR",
      zipCode: "97209",
      neighborhood: "Pearl District"
    },
    amenities: [
      "Exposed Brick",
      "High Ceilings",
      "Open Floor Plan",
      "Stainless Appliances",
      "Fitness Room",
      "Shared Rooftop",
      "In-unit Laundry",
      "Industrial Windows"
    ],
    images: [
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    agent: {
      id: 6,
      name: "Alex Rodriguez",
      phone: "503-555-9876",
      email: "alex.rodriguez@realestate.com",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 7,
    title: "Mediterranean-Style Estate",
    description: "Magnificent Mediterranean-style estate on a private lot with lush landscaping. This luxurious property features 6 bedrooms, 7 bathrooms, formal living and dining rooms, a gourmet kitchen, and multiple outdoor living spaces. Additional features include a wine cellar, home theater, gym, and guest house. The resort-style backyard offers a pool, spa, and outdoor kitchen.",
    price: 3950000,
    address: "789 Palm Drive, Palm Beach, FL 33480",
    bedrooms: 6,
    bathrooms: 7,
    sqft: 6800,
    type: "House",
    status: "For Sale",
    featured: true,
    yearBuilt: 2008,
    parking: 4,
    location: {
      city: "Palm Beach",
      state: "FL",
      zipCode: "33480",
      neighborhood: "Palm Beach Estates"
    },
    amenities: [
      "Swimming Pool",
      "Guest House",
      "Wine Cellar",
      "Home Theater",
      "Gym",
      "Outdoor Kitchen",
      "Multiple Terraces",
      "Smart Home Features"
    ],
    images: [
      "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2416932/pexels-photo-2416932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    agent: {
      id: 7,
      name: "Maria Garcia",
      phone: "561-555-7890",
      email: "maria.garcia@realestate.com",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 8,
    title: "Modern Eco-Friendly Home",
    description: "Innovative eco-friendly home combining sustainable design with modern aesthetics. This energy-efficient property features 3 bedrooms, 2.5 bathrooms, and an open-concept living space with abundant natural light. Sustainable features include solar panels, rainwater harvesting, energy-efficient appliances, and eco-friendly materials. The thoughtfully designed outdoor space includes native landscaping and a vegetable garden.",
    price: 925000,
    address: "123 Sustainable Way, Austin, TX 78704",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2200,
    type: "House",
    status: "For Sale",
    featured: false,
    yearBuilt: 2021,
    parking: 2,
    location: {
      city: "Austin",
      state: "TX",
      zipCode: "78704",
      neighborhood: "South Congress"
    },
    amenities: [
      "Solar Panels",
      "Energy Efficient",
      "Rainwater Harvesting",
      "Sustainable Materials",
      "Smart Home",
      "Native Landscaping",
      "Electric Car Charger",
      "Home Office"
    ],
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    agent: {
      id: 8,
      name: "David Wilson",
      phone: "512-555-3456",
      email: "david.wilson@realestate.com",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  }
];

export const getPropertyById = (id) => {
  return properties.find(property => property.id === parseInt(id));
};

export const getFeaturedProperties = () => {
  return properties.filter(property => property.featured);
};

export const getPropertiesByFilter = (filters) => {
  return properties.filter(property => {
    // If no filters are applied, return all properties
    if (!filters) return true;
    
    let match = true;
    
    // Check location filter
    if (filters.location && filters.location !== '') {
      const locationMatch = 
        property.location.city.toLowerCase().includes(filters.location.toLowerCase()) ||
        property.location.state.toLowerCase().includes(filters.location.toLowerCase()) ||
        property.location.zipCode.includes(filters.location) ||
        property.location.neighborhood.toLowerCase().includes(filters.location.toLowerCase());
      match = match && locationMatch;
    }
    
    // Check price range filter
    if (filters.minPrice !== undefined && filters.minPrice !== null) {
      match = match && property.price >= filters.minPrice;
    }
    
    if (filters.maxPrice !== undefined && filters.maxPrice !== null) {
      match = match && property.price <= filters.maxPrice;
    }
    
    // Check bedrooms filter
    if (filters.bedrooms !== undefined && filters.bedrooms !== null) {
      match = match && property.bedrooms >= filters.bedrooms;
    }
    
    // Check property type filter
    if (filters.type && filters.type !== 'All') {
      match = match && property.type === filters.type;
    }
    
    return match;
  });
};