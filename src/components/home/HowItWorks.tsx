import { UserPlus, BookPlus, MessageCircle, Repeat } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up for free and create your book lover profile",
  },
  {
    icon: BookPlus,
    title: "List Your Books",
    description: "Add books you want to swap or sell with photos and details",
  },
  {
    icon: MessageCircle,
    title: "Connect & Chat",
    description: "Message book owners directly to negotiate and arrange swaps",
  },
  {
    icon: Repeat,
    title: "Swap & Enjoy",
    description: "Meet up or ship books and enjoy your new reads!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            How BookSwap Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start swapping books in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              {/* Step Number */}
              <div className="relative inline-flex">
                <div className="w-24 h-24 rounded-2xl hero-gradient flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
