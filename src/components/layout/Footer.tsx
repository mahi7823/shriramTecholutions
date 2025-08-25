import { Phone, Mail, MapPin, Clock } from 'lucide-react';

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

  const contactInfo = [
    { icon: Phone, text: '+91 7433000131' },
    { icon: Mail, text: 'contact@shriramtech.com' },
    { icon: MapPin, text: 'India (Remote Services)' },
    { icon: Clock, text: 'Available 6-11 PM' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold mb-4 text-blue-400">{section.title}</h3>
              <ul className="space-y-2 text-gray-300">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center">
                  <Icon className="w-4 h-4 mr-2" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2025 Shriram Tech Solutions. All rights reserved.</p>
              <p className="mt-1">Transforming businesses with AI/ML and WhatsApp Business API</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <a href="/about" className="hover:text-blue-400 transition-colors">About Us</a>
              <span className="text-gray-500">|</span>
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <span className="text-gray-500">|</span>
              <a href="/#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}