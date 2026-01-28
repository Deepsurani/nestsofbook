import { Calendar, MapPin, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const booksToReturn = [
  {
    id: "1",
    title: "Clean Code",
    author: "Robert C. Martin",
    owner: "Vikram Singh",
    ownerContact: "+91 98765 43210",
    borrowedDate: "Jan 15, 2024",
    dueDate: "Feb 15, 2024",
    status: "active",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Design Patterns",
    author: "Gang of Four",
    owner: "Priya Patel",
    ownerContact: "+91 98765 43211",
    borrowedDate: "Jan 10, 2024",
    dueDate: "Feb 10, 2024",
    status: "overdue",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
  },
];

const ReturnBook = () => {
  const { toast } = useToast();
  const [selectedBook, setSelectedBook] = useState("");

  const handleReturn = () => {
    if (!selectedBook) return;
    toast({
      title: "Return Initiated",
      description: "The book owner has been notified. Please coordinate the return.",
    });
  };

  return (
    <div className="max-w-3xl animate-fade-in">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Return a Book</h2>
        <p className="text-muted-foreground">Initiate the return process for borrowed books</p>
      </div>

      {/* Select Book to Return */}
      <div className="bg-card rounded-2xl p-6 card-elevated mb-6">
        <h3 className="font-semibold mb-4">Select Book to Return</h3>
        <Select value={selectedBook} onValueChange={setSelectedBook}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a book to return" />
          </SelectTrigger>
          <SelectContent>
            {booksToReturn.map((book) => (
              <SelectItem key={book.id} value={book.id}>
                {book.title} - {book.owner}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Books Pending Return */}
      <div className="space-y-4">
        <h3 className="font-semibold">Books Pending Return</h3>
        {booksToReturn.map((book) => (
          <div key={book.id} className={`bg-card rounded-2xl p-4 card-elevated flex gap-4 ${
            book.status === "overdue" ? "border-2 border-destructive" : ""
          }`}>
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-20 h-28 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">by {book.author}</p>
                </div>
                {book.status === "overdue" ? (
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Overdue
                  </Badge>
                ) : (
                  <Badge className="bg-accent text-accent-foreground">Active</Badge>
                )}
              </div>

              <div className="flex flex-col gap-2 text-sm mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Owner: {book.owner} ({book.ownerContact})
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Borrowed: {book.borrowedDate}
                  </div>
                  <div className={`flex items-center gap-1 ${book.status === "overdue" ? "text-destructive font-medium" : "text-muted-foreground"}`}>
                    <Calendar className="h-4 w-4" />
                    Due: {book.dueDate}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="hero" size="sm" onClick={handleReturn}>
                  <Check className="h-4 w-4 mr-1" />
                  Initiate Return
                </Button>
                <Button variant="outline" size="sm">
                  Message Owner
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReturnBook;
