import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { getCurrentUser } from '../data/users';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const currentUser = getCurrentUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenus}>
            <span className="text-primary-800 font-bold text-xl">Luxe<span className="text-secondary-600">Estate</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
            <Link to="/properties" className="text-gray-700 hover:text-primary-600 transition-colors">Properties</Link>
            <Link to="/add-property" className="text-gray-700 hover:text-primary-600 transition-colors">Add Property</Link>
          </div>

          {/* User & Search Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/properties" className="text-gray-700 hover:text-primary-600 transition-colors">
              <FaSearch className="text-lg" />
            </Link>
            <div className="relative">
              <button 
                onClick={toggleUserMenu} 
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
              >
                {currentUser ? (
                  <img 
                    src={currentUser.image} 
                    alt={currentUser.name} 
                    className="w-8 h-8 rounded-full object-cover border-2 border-primary-500" 
                  />
                ) : (
                  <FaUser className="text-lg" />
                )}
              </button>
              
              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {currentUser ? (
                    <>
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeMenus}
                      >
                        Dashboard
                      </Link>
                      <Link 
                        to="/profile" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeMenus}
                      >
                        Profile
                      </Link>
                      <Link 
                        to="/" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeMenus}
                      >
                        Logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/login" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeMenus}
                      >
                        Login
                      </Link>
                      <Link 
                        to="/register" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeMenus}
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-3 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary-600"
                onClick={closeMenus}
              >
                Home
              </Link>
              <Link 
                to="/properties" 
                className="text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary-600"
                onClick={closeMenus}
              >
                Properties
              </Link>
              <Link 
                to="/add-property" 
                className="text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary-600"
                onClick={closeMenus}
              >
                Add Property
              </Link>
              {currentUser ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary-600"
                    onClick={closeMenus}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/" 
                    className="text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary-600"
                    onClick={closeMenus}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary-600"
                    onClick={closeMenus}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary-600"
                    onClick={closeMenus}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;