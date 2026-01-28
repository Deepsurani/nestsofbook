import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookOpen, Users, Heart, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Love of Reading",
      description: "We believe books are meant to be shared and enjoyed by as many people as possible.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building connections between book lovers in neighborhoods across India.",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Give your books a second life and reduce waste by swapping instead of buying new.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making great books accessible to everyone, regardless of budget.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About BookSwap
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Connecting book lovers across India to share, swap, and discover amazing reads.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                BookSwap was born from a simple observation: we all have books we've loved, 
                read, and are ready to pass on, while there are countless other books we're 
                eager to discover. Instead of letting these treasures gather dust on shelves, 
                why not connect readers and give every book a new adventure?
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 2024, we've grown into a vibrant community of thousands of book 
                lovers who share our passion for reading and sustainable living. Whether 
                you're looking for rare finds, textbooks, or the latest bestsellers, 
                BookSwap is your gateway to an endless library.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              What We Believe
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 card-elevated text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
