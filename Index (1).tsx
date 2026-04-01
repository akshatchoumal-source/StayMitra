import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Shield, Star, Users, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HostelCard from "@/components/HostelCard";
import { hostels } from "@/data/hostels";
import heroImg from "@/assets/hero-hostel.jpg";

const cities = ["Bangalore", "Mumbai", "Delhi", "Chennai", "Hyderabad", "Indore"];

const Index = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/hostels?search=${encodeURIComponent(search)}`);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Student hostel" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="container relative z-10 flex min-h-[520px] flex-col items-start justify-center py-20">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Find Your Perfect
              <br />
              <span className="text-gradient">Student Hostel</span>
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Discover verified, affordable hostels near top colleges across India. Safe stays, happy students.
            </p>
            <form
              onSubmit={handleSearch}
              className="flex w-full max-w-lg overflow-hidden rounded-xl bg-card card-shadow"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by city, college, or hostel..."
                  className="h-12 border-0 pl-11 text-sm focus-visible:ring-0"
                />
              </div>
              <Button type="submit" className="m-1.5 h-9 rounded-lg px-6">
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="container py-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Popular Cities</h2>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => navigate(`/hostels?city=${city}`)}
              className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary hover:card-shadow-hover"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition-colors group-hover:hero-gradient group-hover:text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground">{city}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Featured Hostels</h2>
            <Button
              variant="ghost"
              className="gap-1 text-primary"
              onClick={() => navigate("/hostels")}
            >
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hostels.slice(0, 3).map((h) => (
              <HostelCard key={h.id} hostel={h} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="container py-16">
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground">Why Students Trust StayMitra</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Shield, title: "Verified Listings", desc: "Every hostel is physically verified by our team for safety and quality." },
            { icon: Star, title: "Real Reviews", desc: "Genuine ratings from students who have actually stayed at these hostels." },
            { icon: Users, title: "10,000+ Students", desc: "Trusted by thousands of students across 50+ cities in India." },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 text-center card-shadow transition-all hover:card-shadow-hover"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Ready to Find Your Hostel?</h2>
          <p className="mb-6 text-primary-foreground/80">
            Browse 500+ verified hostels across India
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="font-semibold"
            onClick={() => navigate("/hostels")}
          >
            Explore Hostels
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
