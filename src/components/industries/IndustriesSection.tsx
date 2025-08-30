import { ShoppingCart, Utensils, Heart, Scale, Home, Factory, Briefcase, GraduationCap } from 'lucide-react';

interface Industry {
  icon: any;
  name: string;
  description: string;
  solutions: string[];
  benefits: string[];
  technologies: string[];
  caseExample: string;
}

const industries: Industry[] = [
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description: "Transform your online and offline retail operations with intelligent AI automation, WhatsApp Business API integration, and advanced customer analytics.",
    solutions: [
      "AI-powered product recommendation engines",
      "WhatsApp Business API for automated customer support",
      "Computer vision for inventory management",
      "Predictive analytics for demand forecasting",
      "Intelligent chatbots for order processing"
    ],
    benefits: [
      "200% increase in customer engagement",
      "75% reduction in cart abandonment",
      "90% automated customer queries",
      "60% improvement in inventory accuracy"
    ],
    technologies: ["Python", "TensorFlow", "WhatsApp Business API", "Computer Vision", "Predictive Analytics"],
    caseExample: "Helped ShopIndia Online increase sales by 300% through AI-powered product recommendations and WhatsApp integration."
  },
  {
    icon: Utensils,
    name: "Restaurants & Food Delivery",
    description: "Streamline restaurant operations with AI-driven order management, WhatsApp Business API integration, and intelligent customer service automation.",
    solutions: [
      "WhatsApp Business API for order management",
      "AI chatbots for menu recommendations",
      "Predictive analytics for inventory planning",
      "Computer vision for quality control",
      "Automated delivery tracking systems"
    ],
    benefits: [
      "90% faster order processing",
      "70% reduction in manual work",
      "95% accurate order fulfillment",
      "50% increase in repeat customers"
    ],
    technologies: ["FastAPI", "Python", "WhatsApp Business API", "Machine Learning", "Real-time Analytics"],
    caseExample: "FoodExpress Restaurants reduced operational costs by 60% and improved customer satisfaction through our AI automation."
  },
  {
    icon: Heart,
    name: "Healthcare & Medical",
    description: "Enhance patient care and medical operations with AI-powered diagnostic tools, automated appointment systems, and intelligent patient management.",
    solutions: [
      "AI-powered diagnostic assistance",
      "WhatsApp Business API for patient communication",
      "Automated appointment scheduling",
      "Medical document processing AI",
      "Predictive health analytics"
    ],
    benefits: [
      "80% reduction in administrative work",
      "95% accurate patient data processing",
      "24/7 automated patient support",
      "50% faster diagnosis processing"
    ],
    technologies: ["Python", "TensorFlow", "NLP", "WhatsApp Business API", "Healthcare APIs"],
    caseExample: "HealthCare Plus improved patient management efficiency by 85% with our AI automation solutions."
  },
  {
    icon: Scale,
    name: "Legal Services",
    description: "Revolutionize legal practice with AI-powered document analysis, contract processing, and automated case management systems.",
    solutions: [
      "AI-powered document analysis and extraction",
      "Legal contract processing automation",
      "Case management system integration",
      "WhatsApp Business API for client communication",
      "Predictive legal analytics"
    ],
    benefits: [
      "95% accuracy in document processing",
      "500+ documents processed daily",
      "₹3 lakhs monthly cost savings",
      "75% faster case preparation"
    ],
    technologies: ["Python", "spaCy", "NLTK", "Machine Learning", "Document Processing AI"],
    caseExample: "LegalDocs Solutions processes 500+ legal documents daily with 95% accuracy using our AI automation."
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Transform real estate operations with AI-powered property valuation, automated lead management, and intelligent customer engagement systems.",
    solutions: [
      "AI-powered property valuation models",
      "WhatsApp Business API for lead management",
      "Computer vision for property analysis",
      "Predictive market analytics",
      "Automated customer follow-up systems"
    ],
    benefits: [
      "90% accurate property valuations",
      "200% increase in lead conversion",
      "80% automated customer interactions",
      "60% faster property matching"
    ],
    technologies: ["Machine Learning", "Computer Vision", "WhatsApp Business API", "Predictive Analytics"],
    caseExample: "Real estate agencies using our AI solutions report 200% improvement in lead conversion rates."
  },
  {
    icon: Factory,
    name: "Manufacturing & Industry",
    description: "Optimize manufacturing processes with AI-driven quality control, predictive maintenance, and intelligent production planning systems.",
    solutions: [
      "Computer vision for quality control",
      "Predictive maintenance algorithms",
      "AI-powered production optimization",
      "Automated inventory management",
      "Real-time performance monitoring"
    ],
    benefits: [
      "96% accuracy in quality inspection",
      "70% reduction in equipment downtime",
      "85% improvement in production efficiency",
      "60% cost savings in maintenance"
    ],
    technologies: ["Computer Vision", "IoT Integration", "Predictive Analytics", "Machine Learning"],
    caseExample: "Manufacturing clients achieve 96% accuracy in quality control with our computer vision solutions."
  }
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Industry-Specific AI/ML Solutions Across India
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
            We specialize in developing custom AI/ML solutions for specific industries across India. Our expert team 
            understands the unique challenges and requirements of different sectors, delivering tailored artificial intelligence 
            solutions that drive measurable business results and operational efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {industries.slice(0, 4).map((industry, index) => {
            const Icon = industry.icon;
            return (
              <article 
                key={industry.name}
                className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up animate-stagger-${index + 1}`}
              >
                <header className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{industry.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AI/ML Solutions</p>
                  </div>
                </header>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key AI Solutions:</h4>
                  <ul className="space-y-2">
                    {industry.solutions.slice(0, 3).map((solution) => (
                      <li key={solution} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Proven Results:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.benefits.slice(0, 2).map((benefit) => (
                      <div key={benefit} className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                        <span className="text-xs text-green-700 dark:text-green-300 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2 text-sm">Success Story:</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">"{industry.caseExample}"</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {industry.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {industry.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                      +{industry.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Additional Industries */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {industries.slice(4).map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={industry.name}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-400 rounded-lg flex items-center justify-center mr-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{industry.name}</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{industry.description}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">{industry.caseExample}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Industry? We Can Help!</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Our AI/ML expertise extends beyond these industries. We create custom artificial intelligence solutions 
              for businesses across all sectors. Contact us to discuss how we can transform your specific industry challenges 
              with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917433000131?text=Hi! I'm interested in AI/ML solutions for my industry."
                title="Discuss custom AI solutions for your industry"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Discuss Your Industry Needs
              </a>
              <a
                href="#contact"
                title="View all contact options"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Custom Solution
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
