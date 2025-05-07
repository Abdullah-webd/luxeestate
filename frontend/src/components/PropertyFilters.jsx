import { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';

const PropertyFilters = ({ onFilterChange, className }) => {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [propertyType, setPropertyType] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  
  const propertyTypes = ['All', 'House', 'Apartment', 'Townhouse', 'Cabin'];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const filters = {
      location,
      minPrice: minPrice !== '' ? parseInt(minPrice) : undefined,
      maxPrice: maxPrice !== '' ? parseInt(maxPrice) : undefined,
      bedrooms: bedrooms !== '' ? parseInt(bedrooms) : undefined,
      type: propertyType
    };
    
    onFilterChange(filters);
  };
  
  const handleReset = () => {
    setLocation('');
    setMinPrice('');
    setMaxPrice('');
    setBedrooms('');
    setPropertyType('All');
    
    onFilterChange({});
  };
  
  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Handle initial URL parameters if any
    const urlParams = new URLSearchParams(window.location.search);
    const locationParam = urlParams.get('location');
    
    if (locationParam) {
      setLocation(locationParam);
    }
  }, []);
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        <button 
          onClick={toggleFilters} 
          className="md:hidden text-gray-500 hover:text-primary-600"
        >
          <FaFilter />
        </button>
      </div>
      
      <form 
        onSubmit={handleSubmit} 
        className={`${isOpen || 'md:block hidden'} space-y-4`}
      >
        {/* Location */}
        <div>
          <label htmlFor="filter-location" className="label">Location</label>
          <input
            id="filter-location"
            type="text"
            className="input"
            placeholder="City, neighborhood, or ZIP"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        {/* Price Range */}
        <div>
          <label htmlFor="filter-min-price" className="label">Price Range</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              id="filter-min-price"
              type="number"
              className="input"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              id="filter-max-price"
              type="number"
              className="input"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
        
        {/* Bedrooms */}
        <div>
          <label htmlFor="filter-bedrooms" className="label">Bedrooms</label>
          <select
            id="filter-bedrooms"
            className="input"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
        
        {/* Property Type */}
        <div>
          <label htmlFor="filter-type" className="label">Property Type</label>
          <select
            id="filter-type"
            className="input"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-2">
          <button 
            type="submit" 
            className="btn btn-primary flex-1"
          >
            Apply Filters
          </button>
          <button 
            type="button" 
            onClick={handleReset} 
            className="btn btn-outline flex-1"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFilters;