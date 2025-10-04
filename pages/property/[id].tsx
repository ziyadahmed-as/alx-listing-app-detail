// pages/property/[id].tsx
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find property by ID or name
  const property = PROPERTYLISTINGSAMPLE.find((item: PropertyProps) => 
    item.id === id || item.name.toLowerCase().replace(/\s+/g, '-') === id
  );

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Property Not Found</h1>
          <p className="text-gray-600">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PropertyDetail property={property} />
    </div>
  );
}