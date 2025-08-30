import { Phone, Mail, MapPin, Clock, Github, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { contactInfo as contact, generateWhatsAppLink, generateEmailLink, generatePhoneLink } from '@/config/contactInfo';

export default function Footer() {
  const sections = [
    {
      title: 'Services',
      items: [
        'WhatsApp Business API',
        'AI Chatbot Development',
        'Machine Learning Solutions',
        'Document Processing AI',
        'Computer Vision Systems',
        'Predictive Analytics'
      ]
    },
    {
      title: 'Industries',
      items: [
        'E-commerce & Retail',
        'Restaurants & Food',
        'Healthcare & Medical',
        'Legal Services',
        'Real Estate',
        'Manufacturing'
      ]
    },
    {
      title: 'Technologies',
      items: [
        'Python & FastAPI',
        'React & Next.js',
        'TensorFlow & OpenAI',
        'WhatsApp Business API',
        'AWS & Cloud Services',
        'PostgreSQL & MongoDB'
      ]
    }
  ];

  const contactDetails = [
    { icon: Phone, text: contact.phone, href: generatePhoneLink() },
    { icon: Mail, text: contact.email, href: generateEmailLink() },
    { icon: MapPin, text: contact.location },
    { icon: Clock, text: contact.availability }
  ];

  const socialLinks = [
    { icon: Linkedin, href: contact.socialMedia.linkedin, label: 'LinkedIn' },
    { icon: Github, href: contact.socialMedia.github, label: 'GitHub' },
    { icon: Twitter, href: contact.socialMedia.twitter, label: 'Twitter' },
    { icon: Facebook, href: contact.socialMedia.facebook, label: 'Facebook' },
    { icon: Instagram, href: contact.socialMedia.instagram, label: 'Instagram' },
    { icon: Youtube, href: contact.socialMedia.youtube, label: 'YouTube' }
  ].filter(link => link.href && link.href !== 'null'); // Only show links that are set

  return (
    <footer className="py-20 bg-[var(--color-surface-1)] dark:bg-gray-900 border-t border-[var(--color-border)] dark:border-gray-800">
      <div className="container">
        {/* Main Footer Content - 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shriram Tech Solutions</h3>
            <p className="mb-6 leading-relaxed">
              Transforming businesses with cutting-edge AI/ML technology solutions, expert WhatsApp Business API integrations, and modern web applications.
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200"
                    title={label}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {sections[0].items.slice(0, 4).map((item) => (
                  <li key={item}>
                    <span className="text-sm hover:text-cyan-400 transition-colors cursor-pointer">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-3">
                {sections[2].items.slice(0, 4).map((item) => (
                  <li key={item}>
                    <span className="text-sm hover:text-cyan-400 transition-colors cursor-pointer">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-4 mb-8">
              {contactDetails.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center mr-3">
                    <Icon size={16} className="text-white" />
                  </div>
                  {href ? (
                    <a href={href} title={text} className="text-sm hover:text-cyan-400 transition-colors">
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm">{text}</span>
                  )}
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <a
              href={generateWhatsAppLink()}
              title="Start your project on WhatsApp"
              className="btn btn-primary"
            >
              Start Your Project
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--color-border)] dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">
                &copy; 2025 Shriram Tech Solutions. All rights reserved.
              </p>
              <p className="text-xs mt-1 opacity-60">
                Built with ❤️ using Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/about" title="About - Shriram Tech Solutions" className="text-sm hover:text-cyan-400 transition-colors">About</a>
              <a href="/privacy" title="Privacy Policy - Shriram Tech Solutions" className="text-sm hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="/#contact" title="Contact - Shriram Tech Solutions" className="text-sm hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}