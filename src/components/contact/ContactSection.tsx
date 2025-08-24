import { Clock, Zap, MapPin, Award, MessageCircle, Phone, Mail } from 'lucide-react';
import ContactCard from './ContactCard';
import ContactButton from './ContactButton';

export default function ContactSection() {
  const contactCards = [
    {
      icon: Clock,
      title: "Availability",
      description: ["Evenings 6-11 PM", "Full Weekends"]
    },
    {
      icon: Zap,
      title: "Response Time",
      description: ["Within 2 hours", "(Usually faster)"]
    },
    {
      icon: MapPin,
      title: "Service Areas",
      description: ["All India", "Remote worldwide"]
    },
    {
      icon: Award,
      title: "Success Rate",
      description: ["98% Project Success", "100% Client Satisfaction"]
    }
  ];

  const contactButtons = [
    {
      icon: MessageCircle,
      text: "Chat on WhatsApp",
      href: "https://wa.me/917433000131?text=Hi Shriram! I'm interested in WhatsApp Business API and AI solutions for my business. Can we discuss the requirements?",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      icon: Phone,
      text: "Call: 7433000131",
      href: "tel:+917433000131",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    },
    {
      icon: Mail,
      text: "Email Us",
      href: "mailto:contact@shriramtech.com",
      bgColor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg opacity-90">Get your WhatsApp Business API and AI solutions today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactCards.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {contactButtons.map((button) => (
              <ContactButton key={button.text} {...button} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}