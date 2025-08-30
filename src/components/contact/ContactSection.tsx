import { Clock, Zap, MapPin, Award, MessageCircle, Phone, Mail } from 'lucide-react';
import ContactCard from './ContactCard';
import ContactButton from './ContactButton';
import ContactForm from './ContactForm';
import { contactInfo as contact, generateWhatsAppLink, generateEmailLink, generatePhoneLink } from '@/config/contactInfo';

export default function ContactSection() {
  const contactCards = [
    {
      icon: Clock,
      title: "Availability",
      description: [contact.businessHours.weekdays, "Full Weekends"]
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
      href: generateWhatsAppLink(contact.whatsappMessages.consultation),
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      icon: Phone,
      text: `Call: ${contact.phone.replace('+91-', '')}`,
      href: generatePhoneLink(),
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    },
    {
      icon: Mail,
      text: "Email Us",
      href: generateEmailLink(),
      bgColor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Ready to Transform Your Business with Technology?
          </h2>
          
          <p className="text-lg mb-12">
            Get your WhatsApp Business API and AI technology solutions today, implemented by experts. Start with a free consultation and see how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactCards.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </div>

        {/* Quick Contact Buttons */}
        <div className="text-center mb-20">
          <h3 className="mb-6 text-gradient">
            Get in Touch Instantly
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {contactButtons.map((button) => (
              <ContactButton key={button.text} {...button} />
            ))}
          </div>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-8">
            <div className="card card-md">
              <h4 className="mb-4 text-gradient">
                Why Choose Us?
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted leading-relaxed">
                    <strong className="text-primary">Expert Team:</strong> Certified developers with 5+ years of experience in WhatsApp API and AI solutions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted leading-relaxed">
                    <strong className="text-primary">Proven Results:</strong> Successfully delivered 200+ projects with 98% client satisfaction rate.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted leading-relaxed">
                    <strong className="text-primary">24/7 Support:</strong> Round-the-clock technical support and maintenance for all solutions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted leading-relaxed">
                    <strong className="text-primary">Cost Effective:</strong> Competitive pricing with flexible payment options and transparent billing.
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-md">
              <h4 className="mb-4 text-gradient">
                Business Hours
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted">Monday - Friday</span>
                  <span className="text-primary font-medium">{contact.businessHours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Saturday - Sunday</span>
                  <span className="text-primary font-medium">{contact.businessHours.weekends}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Emergency Support</span>
                  <span className="text-success font-medium">24/7 Available</span>
                </div>
                <hr className="border-border my-4" />
                <div className="text-center">
                  <p className="text-xs text-muted">
                    Response guaranteed within 2 hours during business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}