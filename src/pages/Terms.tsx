import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using BookSwap ("the Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of the Platform constitutes acceptance of any changes.`,
    },
    {
      title: "2. User Accounts",
      content: `To use certain features of BookSwap, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information during registration and keep your account information updated. You must be at least 13 years old to create an account. Users under 18 must have parental consent.`,
    },
    {
      title: "3. Book Listings",
      content: `When listing books on BookSwap, you agree to: provide accurate descriptions of the book's condition; upload genuine photos of the actual book you're offering; set fair and honest prices; only list books you legally own or have the right to sell/swap; not list prohibited items including pirated copies, stolen books, or inappropriate content.`,
    },
    {
      title: "4. Swapping and Transactions",
      content: `BookSwap facilitates connections between users for book exchanges. We are not a party to any transaction between users. Users are solely responsible for: negotiating terms of swaps or sales; arranging safe meeting locations or shipping; verifying the condition of books before completing exchanges; resolving any disputes directly with other users.`,
    },
    {
      title: "5. User Conduct",
      content: `Users agree not to: harass, threaten, or abuse other users; post false, misleading, or fraudulent content; attempt to manipulate the Platform or its features; use the Platform for any illegal purposes; create multiple accounts to circumvent restrictions; collect personal information of other users without consent.`,
    },
    {
      title: "6. Intellectual Property",
      content: `All content on BookSwap, including logos, design, text, and graphics, is owned by BookSwap or its licensors and is protected by intellectual property laws. Users retain ownership of content they submit but grant BookSwap a non-exclusive license to use, display, and distribute such content on the Platform.`,
    },
    {
      title: "7. Privacy",
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using BookSwap, you consent to our data practices as described in the Privacy Policy.`,
    },
    {
      title: "8. Disclaimers",
      content: `BookSwap is provided "as is" without warranties of any kind. We do not guarantee: the accuracy of book listings; the quality or condition of books; the reliability of other users; uninterrupted or error-free service. Users engage in transactions at their own risk.`,
    },
    {
      title: "9. Limitation of Liability",
      content: `To the maximum extent permitted by law, BookSwap shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform, including but not limited to loss of profits, data, or other intangible losses.`,
    },
    {
      title: "10. Account Termination",
      content: `We reserve the right to suspend or terminate your account at any time for violations of these Terms, fraudulent activity, or any other reason at our discretion. Upon termination, your right to use the Platform ceases immediately, and we may delete your account data.`,
    },
    {
      title: "11. Dispute Resolution",
      content: `Any disputes arising from these Terms or your use of BookSwap shall be resolved through binding arbitration in accordance with the rules of the Indian Arbitration and Conciliation Act. The arbitration shall take place in Mumbai, India, and the language shall be English.`,
    },
    {
      title: "12. Contact Information",
      content: `If you have any questions about these Terms and Conditions, please contact us at legal@bookswap.in or through our Contact page. We aim to respond to all inquiries within 48 business hours.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Please read these terms carefully before using BookSwap
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 28, 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-card rounded-2xl p-8 card-elevated">
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-8 text-lg">
                  Welcome to BookSwap. These Terms and Conditions govern your use of our 
                  platform and services. By using BookSwap, you agree to comply with and 
                  be bound by the following terms.
                </p>

                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <div 
                      key={index} 
                      className="pb-6 border-b border-border last:border-0 last:pb-0"
                    >
                      <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-xl bg-muted/50 text-center">
                  <p className="text-sm text-muted-foreground">
                    By using BookSwap, you acknowledge that you have read, understood, 
                    and agree to be bound by these Terms and Conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
