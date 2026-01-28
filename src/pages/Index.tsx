import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import HowItWorks from "@/components/home/HowItWorks";
import BookGrid from "@/components/books/BookGrid";
import { mockBooks } from "@/data/mockBooks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        <CategorySection />
        
        {/* Featured Books */}
        <section className="container mx-auto px-4">
          <BookGrid
            books={mockBooks.slice(0, 4)}
            title="Featured Books"
            subtitle="Hand-picked selections from our community's latest listings"
          />
          <div className="text-center pb-12">
            <Link to="/browse">
              <Button variant="outline" size="lg">
                View All Books
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        
        <HowItWorks />
        
        {/* CTA Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Swapping?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join thousands of book lovers and give your books a second life. 
              It's free to get started!
            </p>
            <Link to="/register">
              <Button
                size="xl"
                className="bg-background text-primary hover:bg-background/90"
              >
                Create Free Account
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
