import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/context/FavoritesContext";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { favorites } = useFavorites();
  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg hero-gradient">
              <span className="text-lg font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Stay<span className="text-primary">Mitra</span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/hostels"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/hostels" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Hostels
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/hostels?favorites=true" className="relative">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Heart className="h-5 w-5" />
                {favorites.length > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {favorites.length}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="hidden gap-2 md:flex"
              onClick={() => setAuthOpen(true)}
            >
              <User className="h-4 w-4" />
              Login
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="animate-fade-in border-t border-border bg-card px-4 pb-4 pt-2 md:hidden">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              Home
            </Link>
            <Link
              to="/hostels"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              Hostels
            </Link>
            <button
              onClick={() => {
                setMobileOpen(false);
                setAuthOpen(true);
              }}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-foreground hover:bg-accent"
            >
              Login / Sign Up
            </button>
          </div>
        )}
      </nav>
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
};

export default Navbar;
