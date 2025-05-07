export const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    properties: [2, 6]
  }
];

export const userProperties = [
  {
    id: 1,
    userId: 1,
    title: "Downtown Luxury Penthouse",
    description: "Stunning penthouse in the heart of downtown offering breathtaking city views.",
    price: 1850000,
    address: "500 Main St Unit PH5, New York, NY 10001",
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2350,
    type: "Apartment",
    status: "For Sale",
    featured: true,
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    location: {
      city: "New York",
      state: "NY",
      zipCode: "10001",
      neighborhood: "Chelsea"
    }
  },
  {
    id: 2,
    userId: 1,
    title: "Contemporary Urban Loft",
    description: "Stylish urban loft in a converted warehouse with industrial charm and contemporary design.",
    price: 565000,
    address: "500 Loft Ave #3B, Portland, OR 97209",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 1100,
    type: "Apartment",
    status: "For Sale",
    featured: false,
    images: [
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    location: {
      city: "Portland",
      state: "OR",
      zipCode: "97209",
      neighborhood: "Pearl District"
    }
  }
];

export const getUserProperties = (userId) => {
  return userProperties.filter(property => property.userId === userId);
};

export const deleteUserProperty = (propertyId) => {
  const index = userProperties.findIndex(property => property.id === propertyId);
  if (index !== -1) {
    userProperties.splice(index, 1);
    return true;
  }
  return false;
};

export const getCurrentUser = () => {
  // Simulate getting the current logged-in user
  return users[0];
};