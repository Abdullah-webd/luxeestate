import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropertySearch from '../components/PropertySearch';
import PropertyFilters from '../components/PropertyFilters';
import PropertyCard from '../components/PropertyCard';
import { getPropertiesByFilter } from '../data/properties';
import { FaSort, FaFilter } from 'react-icons/fa';

const PropertyListingsPage = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('default');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Get location from URL params if present
    const urlParams = new URLSearchParams(location.search);
    const locationParam = urlParams.get('location');
    
    if (locationParam) {
      setFilters(prev => ({ ...prev, location: locationParam }));
    }
    
    // Fetch properties based on filters
    const filteredProperties = getPropertiesByFilter(filters);
    
    // Sort properties
    let sortedProperties = [...filteredProperties];
    switch (sortBy) {
      case 'price-asc':
        sortedProperties.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedProperties.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sortedProperties.sort((a, b) => b.id - a.id);
        break;
      case 'bedrooms':
        sortedProperties.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      default:
        // Default sorting (featured first, then by id)
        sortedProperties.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.id - b.id;
        });
    }
    
    setProperties(sortedProperties);
  }, [filters, sortBy, location.search]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <div className="bg-gray-50 fade-in">
      <div className="bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6">Find Your Perfect Property</h1>
          <PropertySearch className="max-w-2xl" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Properties</h2>
          <button 
            onClick={toggleMobileFilters}
            className="btn btn-outline flex items-center gap-2"
          >
            <FaFilter /> Filters
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`md:w-1/4 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
            <PropertyFilters onFilterChange={handleFilterChange} />
          </div>
          
          {/* Property Listings */}
          <div className="md:w-3/4">
            {/* Sort and Results Count */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                <span className="font-semibold">{properties.length}</span> properties found
              </p>
              
              <div className="flex items-center">
                <span className="mr-2 text-gray-600 hidden sm:inline">Sort by:</span>
                <div className="relative">
                  <select
                    className="input pr-8 appearance-none"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="default">Featured</option>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="newest">Newest</option>
                    <option value="bedrooms">Most Bedrooms</option>
                  </select>
                  <FaSort className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Property Grid */}
            {properties.length > 0 ? (
              <div className="property-grid">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to find properties matching your criteria.
                </p>
                <button 
                  onClick={() => handleFilterChange({})} 
                  className="btn btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingsPage;