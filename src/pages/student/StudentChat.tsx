import { useState } from "react";
import { Send, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const conversations = [
  {
    id: "1",
    user: "Rahul Sharma",
    lastMessage: "Sure, let's meet at the coffee shop!",
    time: "2m ago",
    unread: 2,
    avatar: "R",
  },
  {
    id: "2",
    user: "Priya Patel",
    lastMessage: "Is the book still available?",
    time: "1h ago",
    unread: 0,
    avatar: "P",
  },
  {
    id: "3",
    user: "Amit Kumar",
    lastMessage: "Thanks for the swap!",
    time: "2d ago",
    unread: 0,
    avatar: "A",
  },
];

const messages = [
  { id: 1, text: "Hi! I'm interested in your Atomic Habits book", sender: "other", time: "10:30 AM" },
  { id: 2, text: "Hello! Yes, it's still available. Are you looking to swap?", sender: "me", time: "10:32 AM" },
  { id: 3, text: "Yes! I have The Great Gatsby in excellent condition", sender: "other", time: "10:33 AM" },
  { id: 4, text: "That sounds great! Where are you located?", sender: "me", time: "10:35 AM" },
  { id: 5, text: "I'm in Andheri West. How about you?", sender: "other", time: "10:36 AM" },
  { id: 6, text: "I'm in Bandra. We could meet at Linking Road?", sender: "me", time: "10:38 AM" },
  { id: 7, text: "Sure, let's meet at the coffee shop!", sender: "other", time: "10:40 AM" },
];

const StudentChat = () => {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setChatMessages([
      ...chatMessages,
      {
        id: chatMessages.length + 1,
        text: newMessage,
        sender: "me",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Messages</h2>
        <p className="text-muted-foreground">Chat with book owners and swappers</p>
      </div>

      <div className="bg-card rounded-2xl overflow-hidden card-elevated h-[600px] flex">
        {/* Conversations List */}
        <div className="w-80 border-r border-border flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedChat(conv)}
                className={`w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left ${
                  selectedChat.id === conv.id ? "bg-muted" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-primary-foreground">{conv.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">{conv.user}</p>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
              </button>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
              <span className="font-bold text-primary-foreground">{selectedChat.avatar}</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">{selectedChat.user}</p>
              <p className="text-xs text-muted-foreground">Active now</p>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-2 ${
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

export default StudentChat;
