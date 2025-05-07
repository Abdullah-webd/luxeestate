import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PropertySearch = ({ className, variant = "default" }) => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/properties?location=${encodeURIComponent(location)}`);
  };

  if (variant === "hero") {
    return (
      <div className={`${className} max-w-2xl mx-auto`}>
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-4 md:p-6 rounded-lg shadow-lg relative z-10"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Find Your Dream Home</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="location" className="label">Location</label>
              <div className="relative">
                <input 
                  id="location"
                  type="text" 
                  className="input pr-10" 
                  placeholder="City, neighborhood, or ZIP" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="md:self-end">
              <button 
                type="submit" 
                className="btn btn-primary w-full h-[42px] md:mt-[22px]"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex w-full">
        <input 
          type="text" 
          className="flex-grow input rounded-r-none" 
          placeholder="Search by city, neighborhood, or ZIP" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button 
          type="submit" 
          className="bg-primary-600 text-white px-4 flex items-center justify-center rounded-r-lg hover:bg-primary-700 transition-colors"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default PropertySearch;