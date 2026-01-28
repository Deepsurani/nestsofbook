import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Lightbulb, 
  Wand2, 
  TrendingUp, 
  GraduationCap, 
  History, 
  Rocket, 
  Search as SearchIcon,
  Heart
} from "lucide-react";

const categories = [
  { name: "Fiction", icon: BookOpen, color: "bg-primary/10 text-primary" },
  { name: "Self-Help", icon: Lightbulb, color: "bg-accent/10 text-accent" },
  { name: "Fantasy", icon: Wand2, color: "bg-primary/10 text-primary" },
  { name: "Business", icon: TrendingUp, color: "bg-accent/10 text-accent" },
  { name: "Education", icon: GraduationCap, color: "bg-primary/10 text-primary" },
  { name: "History", icon: History, color: "bg-accent/10 text-accent" },
  { name: "Sci-Fi", icon: Rocket, color: "bg-primary/10 text-primary" },
  { name: "Romance", icon: Heart, color: "bg-accent/10 text-accent" },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find your next read from our diverse collection of genres
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/browse?category=${category.name}`}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center p-6 bg-card rounded-xl card-elevated text-center transition-all group-hover:bg-hover group-hover:text-white">
                <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-3 group-hover:bg-white/20`}>
                  <category.icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
