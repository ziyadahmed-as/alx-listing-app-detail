// components/property/PropertyDetail.tsx
import { useState } from 'react';
import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<'offer' | 'reviews' | 'host'>('offer');

  return (
    <div className="container mx-auto p-4 lg:p-6">
      {/* Property Header */}
      <div className="mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{property.name}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold">{property.rating}</span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-600 underline">{property.reviews.length} reviews</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-gray-600">{property.address.city}, {property.address.country}</span>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 mb-8">
        <div className="md:col-span-2">
          <img 
            src={property.images[0] || property.image} 
            alt={property.name}
            className="w-full h-64 md:h-80 object-cover rounded-l-2xl md:rounded-l-2xl rounded-r-2xl md:rounded-r-none"
          />
        </div>
        <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-2">
          {property.images.slice(1, 5).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${property.name} ${index + 2}`}
              className="w-full h-40 object-cover rounded-r-2xl"
            />
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Property Details */}
        <div className="lg:col-span-2">
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('offer')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'offer'
                    ? 'border-rose-500 text-rose-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                What we offer
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reviews'
                    ? 'border-rose-500 text-rose-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reviews ({property.reviews.length})
              </button>
              <button
                onClick={() => setActiveTab('host')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'host'
                    ? 'border-rose-500 text-rose-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                About the host
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === 'offer' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">About this place</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{property.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Details</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Guests:</span>
                        <span>{property.maxGuests} guests</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bedrooms:</span>
                        <span>{property.bedrooms} bedrooms</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Beds:</span>
                        <span>{property.beds} beds</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bathrooms:</span>
                        <span>{property.bathrooms} bathrooms</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <ReviewSection reviews={property.reviews} />
            )}

            {activeTab === 'host' && (
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={property.host.avatar} 
                    alt={property.host.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Hosted by {property.host.name}</h3>
                    <p className="text-gray-600">Joined in {property.host.joinedDate}</p>
                    {property.host.isSuperhost && (
                      <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold text-rose-600 border border-rose-600 rounded-full">
                        Superhost
                      </span>
                    )}
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">During your stay</h4>
                  <p className="text-gray-700">
                    I'm available 24/7 to help make your stay comfortable. Don't hesitate to reach out if you need anything!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;