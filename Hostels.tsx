import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import HostelCard from "@/components/HostelCard";
import { hostels } from "@/data/hostels";
import { useFavorites } from "@/context/FavoritesContext";

const cities = ["All", "Bangalore", "Mumbai", "Delhi", "Chennai", "Hyderabad", "Indore"];
const types = ["All", "boys", "girls", "co-ed"];
const priceRanges = [
  { label: "All Prices", value: "all" },
  { label: "Under ₹6,000", value: "0-6000" },
  { label: "₹6,000 - ₹9,000", value: "6000-9000" },
  { label: "₹9,000 - ₹12,000", value: "9000-12000" },
  { label: "Above ₹12,000", value: "12000-99999" },
];

const Hostels = () => {
  const [searchParams] = useSearchParams();
  const { isFavorite } = useFavorites();
  const initialCity = searchParams.get("city") || "All";
  const initialSearch = searchParams.get("search") || "";
  const showFavs = searchParams.get("favorites") === "true";

  const [search, setSearch] = useState(initialSearch);
  const [city, setCity] = useState(initialCity);
  const [type, setType] = useState("All");
  const [price, setPrice] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = hostels;
    if (showFavs) list = list.filter((h) => isFavorite(h.id));
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.location.toLowerCase().includes(q) ||
          h.city.toLowerCase().includes(q)
      );
    }
    if (city !== "All") list = list.filter((h) => h.city === city);
    if (type !== "All") list = list.filter((h) => h.type === type);
    if (price !== "all") {
      const [min, max] = price.split("-").map(Number);
      list = list.filter((h) => h.price >= min && h.price <= max);
    }
    return list;
  }, [search, city, type, price, showFavs, isFavorite]);

  const clearFilters = () => {
    setSearch("");
    setCity("All");
    setType("All");
    setPrice("all");
  };

  const hasFilters = search || city !== "All" || type !== "All" || price !== "all";

  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">
          {showFavs ? "Saved Hostels" : "Find Hostels"}
        </h1>
        <p className="text-muted-foreground">
          {showFavs
            ? `${filtered.length} saved hostel${filtered.length !== 1 ? "s" : ""}`
            : `${filtered.length} hostel${filtered.length !== 1 ? "s" : ""} found`}
        </p>
      </div>

      {/* Search + Filter Toggle */}
      <div className="mb-6 flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hostels..."
            className="pl-9"
          />
        </div>
        <Button
          variant="outline"
          className="gap-2 md:hidden"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="flex gap-6">
        {/* Filters sidebar */}
        <aside
          className={`${
            filtersOpen ? "block" : "hidden"
          } w-full shrink-0 space-y-4 md:block md:w-56`}
        >
          <div className="rounded-xl border border-border bg-card p-4 card-shadow">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Filters</h3>
              {hasFilters && (
                <button onClick={clearFilters} className="text-xs text-primary hover:underline">
                  Clear all
                </button>
              )}
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">City</label>
                <Select value={city} onValueChange={setCity}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {cities.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Type</label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {types.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t === "All" ? "All Types" : t === "co-ed" ? "Co-ed" : t.charAt(0).toUpperCase() + t.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Price Range</label>
                <Select value={price} onValueChange={setPrice}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((p) => (
                      <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </aside>

        {/* Results */}
        <div className="flex-1">
          {/* Active filter chips */}
          {hasFilters && (
            <div className="mb-4 flex flex-wrap gap-2">
              {city !== "All" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {city}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setCity("All")} />
                </span>
              )}
              {type !== "All" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {type}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setType("All")} />
                </span>
              )}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-16 text-center card-shadow">
              <Search className="mb-4 h-12 w-12 text-muted-foreground/50" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">No hostels found</h3>
              <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((h) => (
                <HostelCard key={h.id} hostel={h} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hostels;
