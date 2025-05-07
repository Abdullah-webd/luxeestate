import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt } from 'react-icons/fa';

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
};

const PropertyCard = ({ property }) => {
  const { 
    id, 
    title, 
    price, 
    bedrooms, 
    bathrooms, 
    sqft, 
    type, 
    status,
    location,
    images 
  } = property;

  return (
    <div className="card group">
      <Link to={`/property/${id}`} className="block relative overflow-hidden">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={images[0]} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 bg-accent-500 text-white py-1 px-3 rounded-full text-xs font-semibold">
            {status}
          </div>
          <div className="absolute top-3 right-3 bg-primary-700 text-white py-1 px-3 rounded-full text-xs font-semibold">
            {type}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <FaMapMarkerAlt className="text-primary-500 mr-1" />
            <span>{location.city}, {location.state}</span>
          </div>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1">
            {title}
          </h3>
          
          <p className="text-xl font-bold text-primary-700 mb-3">
            {formatPrice(price)}
          </p>
          
          <div className="flex justify-between text-gray-600 border-t pt-3">
            <div className="flex items-center">
              <FaBed className="mr-1" />
              <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
            <div className="flex items-center">
              <FaBath className="mr-1" />
              <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            <div className="flex items-center">
              <FaRuler className="mr-1" />
              <span>{sqft} sqft</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;