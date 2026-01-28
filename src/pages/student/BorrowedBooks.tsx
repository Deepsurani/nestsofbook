import { Calendar, MapPin, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const borrowedBooks = [
  {
    id: "1",
    title: "Clean Code",
    author: "Robert C. Martin",
    owner: "Vikram Singh",
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
    borrowedDate: "Jan 10, 2024",
    dueDate: "Feb 10, 2024",
    status: "overdue",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
  },
  {
    id: "3",
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    owner: "Amit Kumar",
    borrowedDate: "Dec 20, 2023",
    dueDate: "Jan 20, 2024",
    status: "returned",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
  },
];

const BorrowedBooks = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-accent text-accent-foreground">Active</Badge>;
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
        <p className="text-muted-foreground">Track books you've borrowed from others</p>
      </div>

      <div className="space-y-4">
        {borrowedBooks.map((book) => (
          <div key={book.id} className="bg-card rounded-2xl p-4 card-elevated flex gap-4">
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
                {getStatusBadge(book.status)}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  From: {book.owner}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Borrowed: {book.borrowedDate}
                </div>
                <div className={`flex items-center gap-1 ${book.status === "overdue" ? "text-destructive" : "text-muted-foreground"}`}>
                  <Calendar className="h-4 w-4" />
                  Due: {book.dueDate}
                </div>
              </div>

              {book.status !== "returned" && (
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Mark as Returned
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
