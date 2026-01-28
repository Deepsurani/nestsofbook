import { useState } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BookCard from "@/components/books/BookCard";
import { mockBooks } from "@/data/mockBooks";

const locations = [
  "All Areas",
  "Mumbai - Andheri",
  "Mumbai - Bandra",
  "Mumbai - Colaba",
  "Delhi - South Delhi",
  "Delhi - NCR",
  "Bangalore - Koramangala",
  "Bangalore - Whitefield",
];

const SearchByArea = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Areas");

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Search by Area</h2>
        <p className="text-muted-foreground">Find books available near you</p>
      </div>

      {/* Search & Filter */}
      <div className="bg-card rounded-2xl p-6 card-elevated mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search books, authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-sm"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <Button variant="hero">
            <Filter className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* Location Quick Picks */}
      <div className="mb-6">
        <p className="text-sm font-medium text-muted-foreground mb-3">Popular Areas:</p>
        <div className="flex flex-wrap gap-2">
          {locations.slice(1).map((loc) => (
            <Button
              key={loc}
              variant={selectedLocation === loc ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLocation(loc)}
            >
              <MapPin className="h-3 w-3 mr-1" />
              {loc}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchByArea;
