import { Book } from "@/types/book";
import BookCard from "./BookCard";

interface BookGridProps {
  books: Book[];
  title?: string;
  subtitle?: string;
}

const BookGrid = ({ books, title, subtitle }: BookGridProps) => {
  return (
    <section className="py-12">
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && (
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <div
            key={book.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookGrid;
