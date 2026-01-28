import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does BookSwap work?",
    answer:
      "Simply create an account, list the books you want to swap or sell, and browse other listings. When you find a book you like, chat directly with the owner to arrange a swap or purchase. Meet up locally or arrange shipping - it's that easy!",
  },
  {
    question: "Is it free to use BookSwap?",
    answer:
      "Yes! Creating an account and listing books is completely free. We believe in making books accessible to everyone. You only pay when you purchase a book from another user or agree on shipping costs.",
  },
  {
    question: "How do I list a book?",
    answer:
      "After logging in, click 'Add Book' in the navigation. Fill in the book details including title, author, condition, and upload a photo. You can choose to sell at a price or offer it for swap only.",
  },
  {
    question: "What condition should my books be in?",
    answer:
      "We accept books in all readable conditions! Just be honest about the condition - whether it's 'New', 'Like New', 'Good', or 'Fair'. Accurate descriptions help build trust in the community.",
  },
  {
    question: "How do I arrange a swap?",
    answer:
      "Use the built-in chat feature to message the book owner. Discuss whether you want to swap, buy, or negotiate. For local swaps, arrange a safe public meeting place. For distant swaps, agree on shipping arrangements.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "We take privacy seriously. Your personal details are never shared publicly. When you're ready to meet or ship, you can share contact details directly through our secure chat feature.",
  },
  {
    question: "What if there's a problem with a swap?",
    answer:
      "We encourage users to communicate clearly before finalizing any swap. If issues arise, you can report the problem through our support system, and we'll help mediate.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes, you can delete your account at any time from your profile settings. All your listings and data will be permanently removed.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about BookSwap. Can't find an answer? 
              Contact our support team.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 card-elevated border-none"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
