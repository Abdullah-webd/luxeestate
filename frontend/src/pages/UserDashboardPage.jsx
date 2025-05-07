import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaEye, FaUser, FaBell, FaSignOutAlt, FaCog, FaHome } from 'react-icons/fa';
import { getCurrentUser, getUserProperties, deleteUserProperty } from '../data/users';

const UserDashboardPage = () => {
  const currentUser = getCurrentUser();
  const [userProperties, setUserProperties] = useState(getUserProperties(currentUser.id));
  const [activeTab, setActiveTab] = useState('properties');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [propertyToDelete, setPropertyToDelete] = useState(null);
  
  const handleDeleteClick = (property) => {
    setPropertyToDelete(property);
    setShowDeleteModal(true);
  };
  
  const confirmDelete = () => {
    if (propertyToDelete) {
      // Delete property from mock data
      deleteUserProperty(propertyToDelete.id);
      
      // Update local state
      setUserProperties(userProperties.filter(p => p.id !== propertyToDelete.id));
      
      // Close modal
      setShowDeleteModal(false);
      setPropertyToDelete(null);
    }
  };
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen fade-in">
      <div className="bg-primary-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center">
              <img 
                src={currentUser.image} 
                alt={currentUser.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white mr-4" 
              />
              <div>
                <h1 className="text-2xl font-bold">Welcome, {currentUser.name}</h1>
                <p className="text-primary-200">{currentUser.email}</p>
              </div>
            </div>
            <Link to="/add-property" className="btn bg-white text-primary-700 hover:bg-gray-100 inline-flex items-center">
              <FaPlus className="mr-2" /> Add New Property
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <nav className="divide-y divide-gray-200">
                <button
                  onClick={() => setActiveTab('properties')}
                  className={`w-full text-left px-6 py-4 flex items-center ${
                    activeTab === 'properties' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FaHome className="mr-3" />
                  <span>My Properties</span>
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-6 py-4 flex items-center ${
                    activeTab === 'profile' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FaUser className="mr-3" />
                  <span>Profile Settings</span>
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full text-left px-6 py-4 flex items-center ${
                    activeTab === 'notifications' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FaBell className="mr-3" />
                  <span>Notifications</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-6 py-4 flex items-center ${
                    activeTab === 'settings' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FaCog className="mr-3" />
                  <span>Account Settings</span>
                </button>
                <Link
                  to="/"
                  className="w-full text-left px-6 py-4 flex items-center text-gray-700 hover:bg-gray-50"
                >
                  <FaSignOutAlt className="mr-3" />
                  <span>Sign Out</span>
                </Link>
              </nav>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="md:w-3/4">
            {activeTab === 'properties' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">My Properties</h2>
                
                {userProperties.length > 0 ? (
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Property
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Location
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {userProperties.map((property) => (
                            <tr key={property.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="h-12 w-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                                    <img 
                                      src={property.images[0]} 
                                      alt={property.title} 
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900 line-clamp-1">
                                      {property.title}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {property.bedrooms} bd • {property.bathrooms} ba • {property.sqft} sqft
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{formatPrice(property.price)}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{property.location.city}, {property.location.state}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {property.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex justify-end space-x-2">
                                  <Link 
                                    to={`/property/${property.id}`} 
                                    className="text-primary-600 hover:text-primary-800"
                                    title="View"
                                  >
                                    <FaEye />
                                  </Link>
                                  <Link 
                                    to={`/edit-property/${property.id}`} 
                                    className="text-blue-600 hover:text-blue-800"
                                    title="Edit"
                                  >
                                    <FaEdit />
                                  </Link>
                                  <button
                                    onClick={() => handleDeleteClick(property)}
                                    className="text-red-600 hover:text-red-800"
                                    title="Delete"
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <h3 className="text-xl font-semibold mb-4">No Properties Listed Yet</h3>
                    <p className="text-gray-600 mb-6">
                      You haven't listed any properties yet. Start by adding your first property.
                    </p>
                    <Link to="/add-property" className="btn btn-primary">
                      Add Your First Property
                    </Link>
                  </div>
                )}
              </>
            )}
            
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>
                <p className="text-gray-600">Profile settings UI would go here.</p>
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Notifications</h2>
                <p className="text-gray-600">Notifications UI would go here.</p>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
                <p className="text-gray-600">Account settings UI would go here.</p>
              </div>
            )}
          </main>
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete "{propertyToDelete?.title}"? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="btn bg-red-600 text-white hover:bg-red-700 focus:ring-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboardPage;