// constants/index.ts
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Modern Beach Villa",
    description: "A beautiful modern villa located right on the beach with stunning ocean views. Perfect for families and groups looking for a luxurious getaway.",
    image: "/images/beach-villa.jpg",
    images: [
      "/images/beach-villa-1.jpg",
      "/images/beach-villa-2.jpg",
      "/images/beach-villa-3.jpg",
      "/images/beach-villa-4.jpg",
      "/images/beach-villa-5.jpg"
    ],
    rating: 4.8,
    address: {
      street: "123 Beach Road",
      city: "Miami",
      country: "USA"
    },
    price: 250,
    category: ["Beach", "Luxury", "Family"],
    host: {
      name: "Sarah Johnson",
      avatar: "/avatars/host-1.jpg",
      joinedDate: "2018",
      isSuperhost: true
    },
    reviews: [
      {
        id: "r1",
        name: "Michael Brown",
        avatar: "/avatars/user-1.jpg",
        rating: 5,
        comment: "Amazing location and the villa was even better than pictured! Will definitely come back.",
        date: "2024-01-15"
      },
      {
        id: "r2",
        name: "Jessica Wilson",
        avatar: "/avatars/user-2.jpg",
        rating: 4.5,
        comment: "Great stay! The host was very responsive and the amenities were excellent.",
        date: "2024-01-10"
      }
    ],
    amenities: ["WiFi", "Pool", "Air Conditioning", "Kitchen", "Parking", "Beach Access", "Hot Tub", "Gym"],
    maxGuests: 8,
    bedrooms: 4,
    beds: 6,
    bathrooms: 3
  }
];