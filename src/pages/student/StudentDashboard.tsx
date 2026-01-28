import { BookOpen, Repeat, Library, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mockBooks } from "@/data/mockBooks";

const stats = [
  { label: "Books Listed", value: "5", icon: BookOpen, color: "bg-primary/10 text-primary" },
  { label: "Active Swaps", value: "2", icon: Repeat, color: "bg-accent/10 text-accent" },
  { label: "Borrowed", value: "3", icon: Library, color: "bg-primary/10 text-primary" },
  { label: "Messages", value: "8", icon: MessageSquare, color: "bg-accent/10 text-accent" },
];

const StudentDashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome */}
      <div className="bg-card rounded-2xl p-6 card-elevated">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
              Welcome back, Student! 👋
            </h2>
            <p className="text-muted-foreground">
              Here's what's happening with your books today.
            </p>
          </div>
          <Link to="/student/add-book">
            <Button variant="hero">Add New Book</Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl p-5 card-elevated">
            <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <p className="font-serif text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* My Listed Books */}
        <div className="bg-card rounded-2xl p-6 card-elevated">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg font-semibold">My Listed Books</h3>
            <Link to="/student/my-books" className="text-sm text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {mockBooks.slice(0, 3).map((book) => (
              <div key={book.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-12 h-16 object-cover rounded-md"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{book.title}</p>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
                {book.price && (
                  <span className="text-sm font-semibold text-primary">₹{book.price}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Swap Requests */}
        <div className="bg-card rounded-2xl p-6 card-elevated">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg font-semibold">Swap Requests</h3>
            <Link to="/student/swap-requests" className="text-sm text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {[
              { name: "Rahul S.", book: "The Great Gatsby", status: "pending", time: "2 hours ago" },
              { name: "Priya P.", book: "Atomic Habits", status: "accepted", time: "1 day ago" },
              { name: "Amit K.", book: "Harry Potter Set", status: "completed", time: "3 days ago" },
            ].map((request, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">
                    {request.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{request.name}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    Wants: {request.book}
                  </p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  request.status === "pending" 
                    ? "bg-yellow-100 text-yellow-700" 
                    : request.status === "accepted" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {request.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
