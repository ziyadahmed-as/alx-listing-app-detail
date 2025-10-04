import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const Home: React.FC = () => {
  const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Beachfront"];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-96 flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="py-6 px-4 flex gap-3 flex-wrap justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            {filter}
          </button>
        ))}
      </section>

      {/* Listing Section */}
      <section className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, idx: number) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-500">
                {property.address.city}, {property.address.country}
              </p>
              <p className="mt-2 font-bold">${property.price} / night</p>
              <p className="text-yellow-500">Rating: {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
