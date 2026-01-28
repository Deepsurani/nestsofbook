import { Link } from "react-router-dom";
import { MapPin, MessageCircle, Heart } from "lucide-react";
import { Book } from "@/types/book";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { conditions } from "@/data/mockBooks";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const conditionInfo = conditions.find((c) => c.value === book.condition);

  return (
    <div className="group bg-card rounded-xl overflow-hidden card-elevated animate-fade-in">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge
            variant="secondary"
            className="bg-background/90 backdrop-blur-sm text-xs"
          >
            {conditionInfo?.label || book.condition}
          </Badge>
          {book.isSwapOnly && (
            <Badge className="bg-accent text-accent-foreground text-xs">
              Swap Only
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="bg-background/90 backdrop-blur-sm hover:bg-background"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Price Tag */}
        {book.price && !book.isSwapOnly && (
          <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-lg font-semibold text-sm">
            ₹{book.price}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-1 mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">by {book.author}</p>
        
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />
          <span>{book.location}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-medium text-primary">
                {book.ownerName.charAt(0)}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">{book.ownerName}</span>
          </div>
          
          <Link to={`/book/${book.id}`}>
            <Button variant="ghost" size="sm" className="gap-1">
              <MessageCircle className="h-4 w-4" />
              Chat
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
