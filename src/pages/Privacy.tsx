import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Eye, Lock, UserCheck, Database, Globe, Mail } from "lucide-react";

const Privacy = () => {
  const highlights = [
    { icon: Shield, title: "Data Protection", desc: "Your data is encrypted and secured" },
    { icon: Eye, title: "Transparency", desc: "We're clear about what we collect" },
    { icon: Lock, title: "Your Control", desc: "Manage your data anytime" },
    { icon: UserCheck, title: "Your Rights", desc: "Access, correct, or delete your data" },
  ];

  const sections = [
    {
      title: "1. Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information",
          content: "When you create an account, we collect: your name, email address, phone number (optional), location/city, profile photo (optional), and college/university details for student verification.",
        },
        {
          subtitle: "Book Listing Information",
          content: "When you list books, we collect: book details (title, author, condition), photos you upload, pricing information, and location for local exchanges.",
        },
        {
          subtitle: "Usage Information",
          content: "We automatically collect: device information, IP address, browser type, pages visited, time spent on pages, and interaction data to improve our services.",
        },
        {
          subtitle: "Communication Data",
          content: "Messages exchanged through our platform are stored to facilitate transactions and ensure community safety.",
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: `We use your information to:
      
• Provide and maintain our Platform services
• Process book listings and facilitate exchanges
• Enable communication between users
• Send important service updates and notifications
• Improve and personalize your experience
• Detect and prevent fraud or abuse
• Comply with legal obligations
• Analyze usage patterns to enhance our services`,
    },
    {
      title: "3. Information Sharing",
      subsections: [
        {
          subtitle: "With Other Users",
          content: "Your public profile information (name, location, ratings) is visible to other users. Your contact details are only shared when you initiate a swap or message another user.",
        },
        {
          subtitle: "With Service Providers",
          content: "We share data with trusted third parties who help us operate our platform, including hosting providers, analytics services, and payment processors. These providers are bound by confidentiality agreements.",
        },
        {
          subtitle: "For Legal Reasons",
          content: "We may disclose information if required by law, court order, or government request, or to protect the rights, property, or safety of BookSwap, our users, or the public.",
        },
      ],
    },
    {
      title: "4. Data Security",
      content: `We implement industry-standard security measures to protect your data:

• SSL/TLS encryption for all data transmission
• Encrypted storage for sensitive information
• Regular security audits and updates
• Access controls and authentication measures
• Secure data centers with physical security

While we strive to protect your information, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and protect your account credentials.`,
    },
    {
      title: "5. Your Rights",
      subsections: [
        {
          subtitle: "Access",
          content: "You can request a copy of all personal data we hold about you.",
        },
        {
          subtitle: "Correction",
          content: "You can update or correct your personal information through your account settings or by contacting us.",
        },
        {
          subtitle: "Deletion",
          content: "You can request deletion of your account and personal data. Some information may be retained for legal or legitimate business purposes.",
        },
        {
          subtitle: "Data Portability",
          content: "You can request your data in a structured, machine-readable format.",
        },
        {
          subtitle: "Opt-out",
          content: "You can opt out of marketing communications at any time while still receiving essential service updates.",
        },
      ],
    },
    {
      title: "6. Cookies and Tracking",
      content: `We use cookies and similar technologies to:

• Keep you signed in to your account
• Remember your preferences
• Understand how you use our platform
• Deliver relevant content

You can control cookies through your browser settings. Disabling cookies may affect some platform functionality.`,
    },
    {
      title: "7. Data Retention",
      content: `We retain your data for as long as your account is active or as needed to provide services. After account deletion:

• Profile data is deleted within 30 days
• Transaction records may be kept for 7 years for legal compliance
• Anonymized analytics data may be retained indefinitely
• Chat logs are deleted within 90 days`,
    },
    {
      title: "8. Children's Privacy",
      content: "BookSwap is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete it immediately. Users between 13-18 years must have parental consent.",
    },
    {
      title: "9. International Data Transfers",
      content: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.",
    },
    {
      title: "10. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our platform or sending you an email. Your continued use of BookSwap after changes constitutes acceptance of the updated policy.",
    },
    {
      title: "11. Contact Us",
      content: "If you have questions about this Privacy Policy or our data practices, please contact us at privacy@bookswap.in or write to us at: BookSwap Privacy Team, Mumbai, Maharashtra, India.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="hero-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl font-bold text-primary-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-primary-foreground/60 mt-4">
              Last updated: January 28, 2024
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-4 card-elevated text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-card rounded-2xl p-8 card-elevated">
              <p className="text-muted-foreground mb-8 text-lg">
                At BookSwap, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains 
                how we collect, use, share, and safeguard your data when you use our platform.
              </p>

              <div className="space-y-10">
                {sections.map((section, index) => (
                  <div 
                    key={index} 
                    className="pb-8 border-b border-border last:border-0 last:pb-0"
                  >
                    <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                      {section.title}
                    </h2>
                    
                    {section.content && (
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    )}
                    
                    {section.subsections && (
                      <div className="space-y-4">
                        {section.subsections.map((sub, subIndex) => (
                          <div key={subIndex} className="pl-4 border-l-2 border-primary/20">
                            <h3 className="font-semibold text-foreground mb-1">
                              {sub.subtitle}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {sub.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Box */}
              <div className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Have Questions?</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      If you have any questions about our Privacy Policy or how we handle your data, 
                      we're here to help.
                    </p>
                    <a 
                      href="mailto:privacy@bookswap.in" 
                      className="text-sm text-primary font-medium hover:underline"
                    >
                      privacy@bookswap.in
                    </a>
                  </div>
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

export default Privacy;
