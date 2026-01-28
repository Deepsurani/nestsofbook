import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Send, Check, X, Clock, BookOpen, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

// Mock swap request data
const swapRequestData = {
  id: "1",
  status: "pending",
  requester: {
    name: "Rahul Sharma",
    avatar: "R",
    location: "Andheri, Mumbai",
  },
  offeredBook: {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    condition: "Good",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  requestedBook: {
    title: "Atomic Habits",
    author: "James Clear",
    condition: "Like New",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
  },
  createdAt: "2 hours ago",
};

const initialMessages = [
  {
    id: 1,
    text: "Hi! I'm interested in swapping my Great Gatsby for your Atomic Habits. Is it still available?",
    sender: "other",
    time: "10:30 AM",
  },
  {
    id: 2,
    text: "Hello Rahul! Yes, it's still available. Your book looks great too!",
    sender: "me",
    time: "10:32 AM",
  },
  {
    id: 3,
    text: "Awesome! Where are you located? I'm in Andheri West.",
    sender: "other",
    time: "10:33 AM",
  },
  {
    id: 4,
    text: "I'm in Bandra. We could meet somewhere in between?",
    sender: "me",
    time: "10:35 AM",
  },
  {
    id: 5,
    text: "How about Linking Road? There's a nice coffee shop there.",
    sender: "other",
    time: "10:36 AM",
  },
];

const SwapRequestChat = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(swapRequestData.status);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: newMessage,
        sender: "me",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setNewMessage("");
  };

  const handleAccept = () => {
    setRequestStatus("accepted");
    toast({
      title: "Swap Accepted!",
      description: "You've accepted the swap request. Coordinate the exchange in chat.",
    });
  };

  const handleDecline = () => {
    setRequestStatus("declined");
    toast({
      title: "Swap Declined",
      description: "You've declined this swap request.",
    });
  };

  const getStatusBadge = () => {
    switch (requestStatus) {
      case "pending":
        return <Badge variant="secondary" className="bg-muted text-muted-foreground"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case "accepted":
        return <Badge variant="secondary" className="bg-accent/20 text-accent"><Check className="h-3 w-3 mr-1" />Accepted</Badge>;
      case "declined":
        return <Badge variant="destructive"><X className="h-3 w-3 mr-1" />Declined</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link to="/student/swap-requests">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h2 className="font-serif text-2xl font-bold text-foreground">Swap Request Chat</h2>
          <p className="text-muted-foreground text-sm">Negotiate and finalize your book swap</p>
        </div>
        {getStatusBadge()}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-[calc(100%-5rem)]">
        {/* Swap Details Panel */}
        <div className="lg:col-span-1 space-y-4">
          {/* Swap Overview Card */}
          <div className="bg-card rounded-2xl p-5 card-elevated">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">
                  {swapRequestData.requester.avatar}
                </span>
              </div>
              <div>
                <p className="font-semibold">{swapRequestData.requester.name}</p>
                <p className="text-xs text-muted-foreground">{swapRequestData.requester.location}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 my-4">
              <Repeat className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Swap Request</span>
            </div>

            {/* Books being swapped */}
            <div className="space-y-3">
              {/* Their Book */}
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground mb-2">They offer:</p>
                <div className="flex gap-3">
                  <img
                    src={swapRequestData.offeredBook.imageUrl}
                    alt={swapRequestData.offeredBook.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-sm">{swapRequestData.offeredBook.title}</p>
                    <p className="text-xs text-muted-foreground">{swapRequestData.offeredBook.author}</p>
                    <Badge variant="secondary" className="mt-1 text-xs">{swapRequestData.offeredBook.condition}</Badge>
                  </div>
                </div>
              </div>

              {/* Your Book */}
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs text-muted-foreground mb-2">For your:</p>
                <div className="flex gap-3">
                  <img
                    src={swapRequestData.requestedBook.imageUrl}
                    alt={swapRequestData.requestedBook.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-sm text-primary">{swapRequestData.requestedBook.title}</p>
                    <p className="text-xs text-muted-foreground">{swapRequestData.requestedBook.author}</p>
                    <Badge variant="secondary" className="mt-1 text-xs">{swapRequestData.requestedBook.condition}</Badge>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Requested {swapRequestData.createdAt}
            </p>
          </div>

          {/* Action Buttons */}
          {requestStatus === "pending" && (
            <div className="bg-card rounded-2xl p-5 card-elevated">
              <p className="text-sm font-medium mb-3">Respond to this request:</p>
              <div className="flex gap-2">
                <Button variant="hero" className="flex-1" onClick={handleAccept}>
                  <Check className="h-4 w-4 mr-1" />
                  Accept
                </Button>
                <Button variant="outline" className="flex-1" onClick={handleDecline}>
                  <X className="h-4 w-4 mr-1" />
                  Decline
                </Button>
              </div>
            </div>
          )}

          {requestStatus === "accepted" && (
            <div className="bg-accent/10 rounded-2xl p-5 border border-accent/20">
              <div className="flex items-center gap-2 text-accent mb-2">
                <Check className="h-5 w-5" />
                <p className="font-semibold">Swap Accepted!</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Coordinate the exchange details in the chat. Agree on a meeting place and time.
              </p>
            </div>
          )}
        </div>

        {/* Chat Panel */}
        <div className="lg:col-span-2 bg-card rounded-2xl card-elevated flex flex-col h-full">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
              <span className="font-bold text-primary-foreground">{swapRequestData.requester.avatar}</span>
            </div>
            <div>
              <p className="font-semibold">{swapRequestData.requester.name}</p>
              <p className="text-xs text-muted-foreground">Active now</p>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {/* System Message */}
              <div className="text-center">
                <span className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                  Swap request started {swapRequestData.createdAt}
                </span>
              </div>

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      msg.sender === "me"
                        ? "hero-gradient text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}

              {requestStatus === "accepted" && (
                <div className="text-center">
                  <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                    ✓ Swap request accepted
                  </span>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button variant="hero" size="icon" onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapRequestChat;
