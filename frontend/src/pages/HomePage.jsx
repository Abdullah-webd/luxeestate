import { Link } from 'react-router-dom';
import { FaHome, FaMoneyBillWave, FaSearchLocation, FaBriefcase } from 'react-icons/fa';
import PropertySearch from '../components/PropertySearch';
import PropertyCard from '../components/PropertyCard';
import { getFeaturedProperties } from '../data/properties';

const HomePage = () => {
  const featuredProperties = getFeaturedProperties();

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-hero">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        ></div>
        <div className="container mx-auto h-full relative z-20 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Perfect Home
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover the finest properties in the most desirable locations with LuxeEstate
          </p>
          <PropertySearch variant="hero" className="w-full" />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties from around the world
            </p>
          </div>
          
          <div className="property-grid">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/properties" className="btn btn-primary">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose LuxeEstate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and a seamless real estate experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHome className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Properties</h3>
              <p className="text-gray-600">
                Carefully curated selection of high-quality properties in prime locations
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMoneyBillWave className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Value</h3>
              <p className="text-gray-600">
                Competitive pricing and expert negotiation to ensure you get the best deal
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearchLocation className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
              <p className="text-gray-600">
                Intuitive search tools to help you find exactly what you're looking for
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBriefcase className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Agents</h3>
              <p className="text-gray-600">
                Professional agents with deep local knowledge and years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Start your search today and discover properties perfectly matched to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/properties" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Browse Properties
              </Link>
              <Link to="/register" className="btn border-2 border-white text-white hover:bg-primary-600">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;