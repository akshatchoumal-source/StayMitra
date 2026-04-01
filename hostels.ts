import hostel1 from "@/assets/hostel-1.jpg";
import hostel2 from "@/assets/hostel-2.jpg";
import hostel3 from "@/assets/hostel-3.jpg";
import hostel4 from "@/assets/hostel-4.jpg";
import hostel5 from "@/assets/hostel-5.jpg";
import hostel6 from "@/assets/hostel-6.jpg";

export interface Hostel {
  id: string;
  name: string;
  location: string;
  city: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  type: "boys" | "girls" | "co-ed";
  amenities: string[];
  description: string;
  rules: string[];
  contactPhone: string;
  contactEmail: string;
  mapUrl: string;
}

export const hostels: Hostel[] = [
  {
    id: "1",
    name: "Sunrise Student Hostel",
    location: "Koramangala, Bangalore",
    city: "Bangalore",
    price: 8500,
    rating: 4.7,
    reviews: 234,
    image: hostel1,
    images: [hostel1, hostel2, hostel3],
    type: "co-ed",
    amenities: ["Wi-Fi", "AC", "Laundry", "Gym", "Study Room", "Mess"],
    description: "A premium co-ed hostel near top colleges in Koramangala. Modern facilities, 24/7 security, and a vibrant student community.",
    rules: ["No smoking", "Visitors till 8 PM", "Quiet hours 10 PM - 7 AM", "ID required"],
    contactPhone: "+91 98765 43210",
    contactEmail: "info@sunrisehostel.in",
    mapUrl: "https://maps.google.com/?q=Koramangala,Bangalore",
  },
  {
    id: "2",
    name: "Green Valley PG",
    location: "Andheri West, Mumbai",
    city: "Mumbai",
    price: 12000,
    rating: 4.5,
    reviews: 189,
    image: hostel4,
    images: [hostel4, hostel5, hostel6],
    type: "girls",
    amenities: ["Wi-Fi", "AC", "Laundry", "CCTV", "Power Backup", "Mess"],
    description: "Safe and comfortable girls PG in the heart of Andheri. Walking distance to metro station and major offices.",
    rules: ["No male visitors", "Gate closes at 10 PM", "No pets", "Mess timings fixed"],
    contactPhone: "+91 98765 43211",
    contactEmail: "info@greenvalleypg.in",
    mapUrl: "https://maps.google.com/?q=Andheri+West,Mumbai",
  },
  {
    id: "3",
    name: "Scholar's Den",
    location: "Vijay Nagar, Indore",
    city: "Indore",
    price: 5500,
    rating: 4.8,
    reviews: 312,
    image: hostel2,
    images: [hostel2, hostel1, hostel5],
    type: "boys",
    amenities: ["Wi-Fi", "Mess", "Study Room", "Parking", "Power Backup"],
    description: "Budget-friendly boys hostel near IIT Indore. Best food, dedicated study areas, and a supportive academic environment.",
    rules: ["No alcohol", "Visitors in common area only", "Laundry schedule", "No noise after 11 PM"],
    contactPhone: "+91 98765 43212",
    contactEmail: "info@scholarsden.in",
    mapUrl: "https://maps.google.com/?q=Vijay+Nagar,Indore",
  },
  {
    id: "4",
    name: "Metro Living Spaces",
    location: "Hauz Khas, Delhi",
    city: "Delhi",
    price: 11000,
    rating: 4.3,
    reviews: 156,
    image: hostel3,
    images: [hostel3, hostel6, hostel4],
    type: "co-ed",
    amenities: ["Wi-Fi", "AC", "Gym", "Rooftop", "Laundry", "Kitchen"],
    description: "Trendy co-living space in Hauz Khas Village. Perfect for students and young professionals who love city life.",
    rules: ["No smoking indoors", "Guests allowed till 9 PM", "Keep common areas clean"],
    contactPhone: "+91 98765 43213",
    contactEmail: "info@metroliving.in",
    mapUrl: "https://maps.google.com/?q=Hauz+Khas,Delhi",
  },
  {
    id: "5",
    name: "Campus Edge Hostel",
    location: "Adyar, Chennai",
    city: "Chennai",
    price: 7000,
    rating: 4.6,
    reviews: 201,
    image: hostel5,
    images: [hostel5, hostel1, hostel2],
    type: "boys",
    amenities: ["Wi-Fi", "Mess", "Library", "Sports", "Power Backup"],
    description: "Located right next to Anna University. Home-cooked meals, sports facilities, and a tight-knit student community.",
    rules: ["Mess timings strict", "No outside food", "Gate closes 10:30 PM"],
    contactPhone: "+91 98765 43214",
    contactEmail: "info@campusedge.in",
    mapUrl: "https://maps.google.com/?q=Adyar,Chennai",
  },
  {
    id: "6",
    name: "Lakshmi Girls Hostel",
    location: "Banjara Hills, Hyderabad",
    city: "Hyderabad",
    price: 9000,
    rating: 4.9,
    reviews: 278,
    image: hostel6,
    images: [hostel6, hostel3, hostel4],
    type: "girls",
    amenities: ["Wi-Fi", "AC", "CCTV", "Mess", "Laundry", "Yoga Room"],
    description: "Top-rated girls hostel in Hyderabad with homely atmosphere, nutritious meals, and 24/7 warden on premises.",
    rules: ["Strict curfew 9:30 PM", "No male visitors", "Weekly room inspection"],
    contactPhone: "+91 98765 43215",
    contactEmail: "info@lakshmihostel.in",
    mapUrl: "https://maps.google.com/?q=Banjara+Hills,Hyderabad",
  },
];
