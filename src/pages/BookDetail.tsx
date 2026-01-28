import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  MessageCircle,
  Heart,
  Share2,
  Flag,
  Calendar,
  Send,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { mockBooks, conditions } from "@/data/mockBooks";

const BookDetail = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { text: string; isOwner: boolean; time: string }[]
  >([
    {
      text: "Hi! Is this book still available?",
      isOwner: false,
      time: "10:30 AM",
    },
    {
      text: "Yes, it is! Are you interested in swapping?",
      isOwner: true,
      time: "10:32 AM",
    },
  ]);

  const book = mockBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold mb-2">Book Not Found</h1>
            <p className="text-muted-foreground mb-4">
              The book you're looking for doesn't exist.
            </p>
            <Link to="/browse">
              <Button>Browse Books</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const conditionInfo = conditions.find((c) => c.value === book.condition);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setChatMessages([
      ...chatMessages,
      {
        text: message,
        isOwner: false,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Browse
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Book Image */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden card-elevated">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge variant="secondary" className="bg-background/90">
                    {conditionInfo?.label || book.condition}
                  </Badge>
                  {book.isSwapOnly && (
                    <Badge className="bg-accent text-accent-foreground">
                      Swap Only
                    </Badge>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="ghost" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="ghost" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="ghost" className="flex-1">
                  <Flag className="h-4 w-4 mr-2" />
                  Report
                </Button>
              </div>
            </div>

            {/* Right - Book Details & Chat */}
            <div className="space-y-6">
              {/* Book Info */}
              <div className="bg-card rounded-2xl p-6 card-elevated">
                <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
                  {book.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  by {book.author}
                </p>

                {book.price && !book.isSwapOnly && (
                  <div className="text-3xl font-bold text-primary mb-4">
                    ₹{book.price}
                  </div>
                )}

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {book.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Listed {book.createdAt.toLocaleDateString()}
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{book.description}</p>
                </div>

                <div className="border-t border-border pt-4">
                  <h3 className="font-semibold mb-2">Category</h3>
                  <Badge variant="secondary">{book.category}</Badge>
                </div>
              </div>

              {/* Owner Info */}
              <div className="bg-card rounded-2xl p-6 card-elevated">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">
                      {book.ownerName.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {book.ownerName}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Member since 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Section */}
              <div className="bg-card rounded-2xl overflow-hidden card-elevated">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Chat with Owner
                  </h3>
                </div>

                {/* Messages */}
                <div className="h-64 overflow-y-auto p-4 space-y-3">
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.isOwner ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          msg.isOwner
                            ? "bg-muted text-foreground"
                            : "hero-gradient text-primary-foreground"
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.isOwner
                              ? "text-muted-foreground"
                              : "text-primary-foreground/70"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button variant="hero" size="icon" onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;
