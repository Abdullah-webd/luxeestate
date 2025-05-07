import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FaBed, 
  FaBath, 
  FaRuler, 
  FaCar, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaShare,
  FaHeart,
  FaPrint
} from 'react-icons/fa';
import ImageCarousel from '../components/ImageCarousel';
import { getPropertyById } from '../data/properties';

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
};

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    // Fetch property details
    const fetchPropertyDetails = () => {
      try {
        setIsLoading(true);
        const propertyData = getPropertyById(id);
        
        if (propertyData) {
          setProperty(propertyData);
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-300 rounded-lg w-full max-w-4xl mb-8"></div>
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-32 bg-gray-300 rounded w-full mb-8"></div>
        </div>
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
        <p className="mb-8">The property you're looking for does not exist or has been removed.</p>
        <Link to="/properties" className="btn btn-primary">
          Browse Properties
        </Link>
      </div>
    );
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  return (
    <div className="bg-gray-50 pb-16 fade-in">
      <div className="bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-primary-300 mr-2" />
                <span className="text-white text-sm">
                  {property.location.city}, {property.location.state} {property.location.zipCode}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white">{property.title}</h1>
            </div>
            <div className="text-3xl font-bold text-white">
              {formatPrice(property.price)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Carousel */}
          <ImageCarousel images={property.images} />
          
          {/* Action Buttons */}
          <div className="flex justify-end p-4 border-b">
            <button
              onClick={toggleFavorite}
              className={`mr-4 flex items-center ${
                isFavorite ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <FaHeart className="mr-1" />
              <span>{isFavorite ? 'Saved' : 'Save'}</span>
            </button>
            <button className="mr-4 flex items-center text-gray-500 hover:text-primary-600">
              <FaShare className="mr-1" />
              <span>Share</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-primary-600">
              <FaPrint className="mr-1" />
              <span>Print</span>
            </button>
          </div>
          
          <div className="p-6">
            {/* Property Overview */}
            <div className="flex flex-wrap gap-y-4 border-b pb-6 mb-6">
              <div className="w-full md:w-1/2 lg:w-1/4 flex items-center">
                <FaBed className="text-primary-600 text-xl mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Bedrooms</div>
                  <div className="font-semibold">{property.bedrooms}</div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 flex items-center">
                <FaBath className="text-primary-600 text-xl mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Bathrooms</div>
                  <div className="font-semibold">{property.bathrooms}</div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 flex items-center">
                <FaRuler className="text-primary-600 text-xl mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Square Feet</div>
                  <div className="font-semibold">{property.sqft.toLocaleString()}</div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 flex items-center">
                <FaCalendarAlt className="text-primary-600 text-xl mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Year Built</div>
                  <div className="font-semibold">{property.yearBuilt}</div>
                </div>
              </div>
              {property.parking && (
                <div className="w-full md:w-1/2 lg:w-1/4 flex items-center">
                  <FaCar className="text-primary-600 text-xl mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Parking</div>
                    <div className="font-semibold">{property.parking} {property.parking === 1 ? 'space' : 'spaces'}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Agent Contact */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img 
                      src={property.agent.image} 
                      alt={property.agent.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Contact {property.agent.name}</h3>
                  <div className="flex flex-col mb-4">
                    <div className="flex items-center mb-2">
                      <FaPhone className="text-primary-600 mr-2" />
                      <span>{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-primary-600 mr-2" />
                      <span>{property.agent.email}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="btn btn-primary w-full">
                    Contact Agent
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;