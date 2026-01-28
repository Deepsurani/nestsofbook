import { useState } from "react";
import { Check, X, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const swapRequests = [
  {
    id: "1",
    type: "incoming",
    user: "Rahul Sharma",
    userBook: "The Great Gatsby",
    myBook: "Atomic Habits",
    status: "pending",
    date: "2 hours ago",
    message: "Hi! I'd love to swap my copy of The Great Gatsby for your Atomic Habits. Is it still available?",
  },
  {
    id: "2",
    type: "incoming",
    user: "Priya Patel",
    userBook: "Sapiens",
    myBook: "The Psychology of Money",
    status: "pending",
    date: "5 hours ago",
    message: "Interested in swapping! My Sapiens is in great condition.",
  },
  {
    id: "3",
    type: "outgoing",
    user: "Amit Kumar",
    userBook: "Harry Potter Set",
    myBook: "Intro to Algorithms",
    status: "accepted",
    date: "1 day ago",
    message: "",
  },
  {
    id: "4",
    type: "outgoing",
    user: "Sneha Reddy",
    userBook: "Clean Code",
    myBook: "Design Patterns",
    status: "declined",
    date: "3 days ago",
    message: "",
  },
];

const SwapRequests = () => {
  const [activeTab, setActiveTab] = useState("incoming");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-700"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case "accepted":
        return <Badge variant="secondary" className="bg-green-100 text-green-700"><Check className="h-3 w-3 mr-1" />Accepted</Badge>;
      case "declined":
        return <Badge variant="secondary" className="bg-red-100 text-red-700"><X className="h-3 w-3 mr-1" />Declined</Badge>;
      default:
        return null;
    }
  };

  const filteredRequests = swapRequests.filter((r) => r.type === activeTab);

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Swap Requests</h2>
        <p className="text-muted-foreground">Manage your book swap requests</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="incoming">
            Incoming
            <Badge variant="secondary" className="ml-2">
              {swapRequests.filter(r => r.type === "incoming" && r.status === "pending").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="space-y-4">
            {filteredRequests.length === 0 ? (
              <div className="bg-card rounded-2xl p-12 text-center card-elevated">
                <p className="text-muted-foreground">No {activeTab} swap requests</p>
              </div>
            ) : (
              filteredRequests.map((request) => (
                <div key={request.id} className="bg-card rounded-2xl p-6 card-elevated">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-foreground">
                          {request.user.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{request.user}</p>
                        <p className="text-sm text-muted-foreground">{request.date}</p>
                      </div>
                    </div>
                    {getStatusBadge(request.status)}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground mb-1">
                        {activeTab === "incoming" ? "They offer" : "You want"}
                      </p>
                      <p className="font-medium text-foreground">{request.userBook}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-xs text-muted-foreground mb-1">
                        {activeTab === "incoming" ? "For your" : "In exchange for"}
                      </p>
                      <p className="font-medium text-primary">{request.myBook}</p>
                    </div>
                  </div>

                  {request.message && (
                    <p className="text-sm text-muted-foreground mb-4 p-3 rounded-lg bg-muted/30 italic">
                      "{request.message}"
                    </p>
                  )}

                  {activeTab === "incoming" && request.status === "pending" && (
                    <div className="flex gap-3">
                      <Button variant="hero" className="flex-1">
                        <Check className="h-4 w-4 mr-2" />
                        Accept
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <X className="h-4 w-4 mr-2" />
                        Decline
                      </Button>
                      <Button variant="ghost">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {request.status === "accepted" && (
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message {request.user}
                    </Button>
                  )}
                </div>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SwapRequests;
