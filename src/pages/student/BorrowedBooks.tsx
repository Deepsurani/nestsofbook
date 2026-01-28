import { useState } from "react";
import { Calendar, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const borrowedBooks = [
  {
    id: "1",
    title: "Clean Code",
    author: "Robert C. Martin",
    owner: "Vikram Singh",
    ownerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    dueDate: "Feb 15, 2024",
    status: "active",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Design Patterns",
    author: "Gang of Four",
    owner: "Priya Patel",
    ownerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    dueDate: "Feb 10, 2024",
    status: "overdue",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
  },
  {
    id: "3",
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    owner: "Amit Kumar",
    ownerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    dueDate: "Jan 20, 2024",
    status: "returned",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
  },
  {
    id: "4",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    owner: "Sneha Gupta",
    ownerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    dueDate: "Feb 28, 2024",
    status: "active",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
  },
];

const BorrowedBooks = () => {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = borrowedBooks.filter((book) => {
    const matchesStatus = statusFilter === "all" || book.status === statusFilter;
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">Active</Badge>;
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>;
      case "returned":
        return <Badge variant="secondary">Returned</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Borrowed Books</h2>
        <p className="text-muted-foreground">Books you have borrowed from others</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
            <SelectItem value="returned">Returned</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-card rounded-2xl overflow-hidden card-elevated">
            <div className="aspect-[3/4] relative">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4">
              <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-1">
                {book.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">by {book.author}</p>
              
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={book.ownerAvatar}
                  alt={book.owner}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm text-muted-foreground">Owner: {book.owner}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4" />
                <span>Due: {book.dueDate}</span>
              </div>
              
              <div className="flex items-center justify-between">
                {getStatusBadge(book.status)}
                {book.status !== "returned" && (
                  <Button variant="outline" size="sm">
                    Return Book
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No borrowed books found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
