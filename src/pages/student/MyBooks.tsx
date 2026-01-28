import { Edit2, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockBooks, conditions } from "@/data/mockBooks";

const MyBooks = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground">My Books</h2>
          <p className="text-muted-foreground">Manage your listed books</p>
        </div>
        <Link to="/student/add-book">
          <Button variant="hero">Add New Book</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {mockBooks.slice(0, 4).map((book) => {
          const conditionInfo = conditions.find((c) => c.value === book.condition);
          return (
            <div key={book.id} className="bg-card rounded-2xl p-4 card-elevated flex gap-4">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-20 h-28 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{conditionInfo?.label}</Badge>
                    {book.isSwapOnly ? (
                      <Badge className="bg-accent text-accent-foreground">Swap Only</Badge>
                    ) : (
                      <Badge className="bg-primary text-primary-foreground">₹{book.price}</Badge>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {book.description}
                </p>

                <div className="flex items-center gap-2">
                  <Link to={`/book/${book.id}`}>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm">
                    <Edit2 className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBooks;
