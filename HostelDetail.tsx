import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft, Heart, Star, MapPin, Phone, Mail, ExternalLink,
  Wifi, Wind, Shield, BookOpen, Dumbbell, UtensilsCrossed, Car, Zap, Camera, Flower2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { hostels } from "@/data/hostels";
import { useFavorites } from "@/context/FavoritesContext";
import { toast } from "sonner";

const amenityIcons: Record<string, React.ElementType> = {
  "Wi-Fi": Wifi, AC: Wind, CCTV: Camera, "Study Room": BookOpen, Library: BookOpen,
  Gym: Dumbbell, Mess: UtensilsCrossed, Kitchen: UtensilsCrossed, Parking: Car,
  "Power Backup": Zap, Laundry: Flower2, "Yoga Room": Flower2, Rooftop: ExternalLink,
  Sports: Dumbbell,
};

const HostelDetail = () => {
  const { id } = useParams();
  const hostel = hostels.find((h) => h.id === id);
  const { toggleFavorite, isFavorite } = useFavorites();
  const [selectedImg, setSelectedImg] = useState(0);

  if (!hostel) {
    return (
      <div className="container flex min-h-[50vh] flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Hostel not found</h2>
        <Link to="/hostels">
          <Button variant="outline">Browse Hostels</Button>
        </Link>
      </div>
    );
  }

  const fav = isFavorite(hostel.id);
  const typeLabel = hostel.type === "boys" ? "Boys" : hostel.type === "girls" ? "Girls" : "Co-ed";

  return (
    <div className="container py-6">
      {/* Back */}
      <Link
        to="/hostels"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Back to listings
      </Link>

      {/* Gallery */}
      <div className="mb-8 grid gap-3 md:grid-cols-[2fr_1fr]">
        <div className="overflow-hidden rounded-xl">
          <img
            src={hostel.images[selectedImg]}
            alt={hostel.name}
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
          {hostel.images.slice(0, 3).map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImg(i)}
              className={`overflow-hidden rounded-xl border-2 transition-all ${
                selectedImg === i ? "border-primary" : "border-transparent"
              }`}
            >
              <img
                src={img}
                alt={`${hostel.name} ${i + 1}`}
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Main content */}
        <div className="space-y-8">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <Badge className="bg-accent text-accent-foreground border-0">{typeLabel}</Badge>
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-semibold text-foreground">{hostel.rating}</span>
                <span className="text-muted-foreground">({hostel.reviews} reviews)</span>
              </div>
            </div>
            <h1 className="mb-2 text-3xl font-bold text-foreground">{hostel.name}</h1>
            <p className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {hostel.location}
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-foreground">About</h2>
            <p className="leading-relaxed text-muted-foreground">{hostel.description}</p>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">Amenities</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {hostel.amenities.map((a) => {
                const Icon = amenityIcons[a] || Shield;
                return (
                  <div
                    key={a}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{a}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Hostel Rules</h2>
            <ul className="space-y-2">
              {hostel.rules.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Map placeholder */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Location</h2>
            <div className="flex h-48 items-center justify-center rounded-xl border border-border bg-muted">
              <a
                href={hostel.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <MapPin className="h-5 w-5" />
                View on Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="h-fit space-y-4 lg:sticky lg:top-20">
          <div className="rounded-xl border border-border bg-card p-6 card-shadow">
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-foreground">₹{hostel.price.toLocaleString()}</span>
              <span className="text-muted-foreground">/ month</span>
            </div>
            <Button
              className="mb-3 w-full"
              onClick={() => toast.success("Enquiry sent! The hostel will contact you soon.")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Enquire Now
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                toggleFavorite(hostel.id);
                toast(fav ? "Removed from saved" : "Saved to favorites");
              }}
            >
              <Heart className={`mr-2 h-4 w-4 ${fav ? "fill-primary text-primary" : ""}`} />
              {fav ? "Saved" : "Save Hostel"}
            </Button>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 card-shadow">
            <h3 className="mb-3 text-sm font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${hostel.contactPhone}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {hostel.contactPhone}
              </a>
              <a
                href={`mailto:${hostel.contactEmail}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {hostel.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetail;
