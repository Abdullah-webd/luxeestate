import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload, FaTrash } from 'react-icons/fa';

const AddPropertyPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    neighborhood: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    yearBuilt: '',
    parking: '',
    type: '',
    status: 'For Sale',
    amenities: []
  });
  const [images, setImages] = useState([]);
  const [amenity, setAmenity] = useState('');
  
  const propertyTypes = ['House', 'Apartment', 'Townhouse', 'Cabin', 'Commercial'];
  const statuses = ['For Sale', 'For Rent', 'Sold', 'Pending'];
  const commonAmenities = [
    'Swimming Pool',
    'Garden',
    'Garage',
    'Fireplace',
    'Air Conditioning',
    'Heating',
    'Balcony',
    'Gym',
    'Elevator',
    'Security System',
    'Pet Friendly',
    'Furnished'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length > 0) {
      // For demo purposes, we'll just store file names
      // In a real app, you would upload these to a server
      const newImages = files.map(file => ({
        name: file.name,
        url: URL.createObjectURL(file)
      }));
      
      setImages([...images, ...newImages]);
    }
  };
  
  const removeImage = (index) => {
    const updatedImages = [...images];
    URL.revokeObjectURL(updatedImages[index].url);
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };
  
  const addAmenity = () => {
    if (amenity && !formData.amenities.includes(amenity)) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, amenity]
      });
      setAmenity('');
    }
  };
  
  const selectAmenity = (selectedAmenity) => {
    if (!formData.amenities.includes(selectedAmenity)) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, selectedAmenity]
      });
    }
  };
  
  const removeAmenity = (index) => {
    const updatedAmenities = [...formData.amenities];
    updatedAmenities.splice(index, 1);
    setFormData({
      ...formData,
      amenities: updatedAmenities
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to a backend API
    // For this demo, we'll just navigate to the properties page
    console.log('Form submitted:', { ...formData, images });
    
    navigate('/dashboard');
  };
  
  return (
    <div className="bg-gray-50 py-10 fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Add New Property</h1>
          
          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b text-gray-800">Basic Information</h2>
              
              <div className="mb-4">
                <label htmlFor="title" className="label">Property Title*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="input"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="description" className="label">Description*</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="input"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="price" className="label">Price*</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="input"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="status" className="label">Status*</label>
                  <select
                    id="status"
                    name="status"
                    className="input"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="type" className="label">Property Type*</label>
                <select
                  id="type"
                  name="type"
                  className="input"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Location */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b text-gray-800">Location</h2>
              
              <div className="mb-4">
                <label htmlFor="address" className="label">Street Address*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="input"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="label">City*</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="input"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="label">State*</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="input"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="label">ZIP Code*</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="input"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="neighborhood" className="label">Neighborhood</label>
                <input
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  className="input"
                  value={formData.neighborhood}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            {/* Property Details */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b text-gray-800">Property Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="bedrooms" className="label">Bedrooms*</label>
                  <input
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    className="input"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="bathrooms" className="label">Bathrooms*</label>
                  <input
                    type="number"
                    id="bathrooms"
                    name="bathrooms"
                    className="input"
                    step="0.5"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="sqft" className="label">Square Feet*</label>
                  <input
                    type="number"
                    id="sqft"
                    name="sqft"
                    className="input"
                    value={formData.sqft}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="yearBuilt" className="label">Year Built</label>
                  <input
                    type="number"
                    id="yearBuilt"
                    name="yearBuilt"
                    className="input"
                    value={formData.yearBuilt}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="parking" className="label">Parking Spaces</label>
                  <input
                    type="number"
                    id="parking"
                    name="parking"
                    className="input"
                    value={formData.parking}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b text-gray-800">Amenities</h2>
              
              <div className="mb-4">
                <label className="label">Add Amenities</label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {commonAmenities.map((item) => (
                    <span
                      key={item}
                      onClick={() => selectAmenity(item)}
                      className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                        formData.amenities.includes(item)
                          ? 'bg-primary-100 text-primary-700 border border-primary-300'
                          : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                <div className="flex">
                  <input
                    type="text"
                    value={amenity}
                    onChange={(e) => setAmenity(e.target.value)}
                    className="input rounded-r-none"
                    placeholder="Custom amenity"
                  />
                  <button
                    type="button"
                    onClick={addAmenity}
                    className="btn btn-primary rounded-l-none"
                  >
                    Add
                  </button>
                </div>
              </div>
              
              {formData.amenities.length > 0 && (
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h3 className="font-medium mb-2">Selected Amenities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.amenities.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white px-3 py-1 rounded-full text-sm border flex items-center"
                      >
                        <span>{item}</span>
                        <button
                          type="button"
                          onClick={() => removeAmenity(index)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Images */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b text-gray-800">Images</h2>
              
              <div className="mb-4">
                <label className="label">Property Images</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    id="images"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="images" className="cursor-pointer">
                    <FaUpload className="mx-auto text-3xl text-gray-400 mb-2" />
                    <p className="text-gray-700 mb-1">Drag & drop images here or click to browse</p>
                    <p className="text-sm text-gray-500">Supported formats: JPG, PNG, GIF</p>
                  </label>
                </div>
              </div>
              
              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image.url}
                        alt={`Property ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-white bg-opacity-75 text-red-500 p-1 rounded-full hover:bg-opacity-100"
                      >
                        <FaTrash size={14} />
                      </button>
                      <p className="text-xs text-gray-500 mt-1 truncate">{image.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-end mt-8">
              <button 
                type="button"
                onClick={() => navigate('/properties')}
                className="btn btn-outline mr-4"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyPage;