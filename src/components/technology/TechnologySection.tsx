import { Code, Database, Cloud, Smartphone, Brain, Eye, BarChart3, Shield } from 'lucide-react';

interface Technology {
  icon: any;
  category: string;
  description: string;
  technologies: {
    name: string;
    purpose: string;
    benefits: string;
  }[];
}

const techStack: Technology[] = [
  {
    icon: Brain,
    category: "AI/ML Frameworks",
    description: "Advanced artificial intelligence and machine learning frameworks for building intelligent, scalable solutions.",
    technologies: [
      {
        name: "TensorFlow & Keras",
        purpose: "Deep learning model development and neural network training",
        benefits: "Enables complex AI model creation with high accuracy and performance optimization"
      },
      {
        name: "OpenAI GPT Models",
        purpose: "Natural language processing and conversational AI development",
        benefits: "Provides advanced language understanding and generation capabilities for chatbots"
      },
      {
        name: "scikit-learn",
        purpose: "Traditional machine learning algorithms and data analysis",
        benefits: "Delivers predictive analytics and classification models with proven reliability"
      }
    ]
  },
  {
    icon: Code,
    category: "Backend Development",
    description: "Robust backend technologies for high-performance API development and business logic implementation.",
    technologies: [
      {
        name: "Python & FastAPI",
        purpose: "High-performance API development and backend services",
        benefits: "Provides fast, scalable APIs with automatic documentation and type safety"
      },
      {
        name: "Node.js & Express",
        purpose: "Real-time applications and WebSocket connections",
        benefits: "Enables real-time data processing and live chat functionality"
      },
      {
        name: "Docker & Kubernetes",
        purpose: "Application containerization and orchestration",
        benefits: "Ensures consistent deployment and automatic scaling across environments"
      }
    ]
  },
  {
    icon: Smartphone,
    category: "Frontend & Mobile",
    description: "Modern frontend technologies for creating responsive, interactive user interfaces and mobile applications.",
    technologies: [
      {
        name: "React & Next.js",
        purpose: "Modern web application development with server-side rendering",
        benefits: "Delivers fast, SEO-optimized web applications with excellent user experience"
      },
      {
        name: "TypeScript",
        purpose: "Type-safe JavaScript development with enhanced code quality",
        benefits: "Reduces bugs and improves maintainability through static type checking"
      },
      {
        name: "Tailwind CSS",
        purpose: "Utility-first CSS framework for rapid UI development",
        benefits: "Enables consistent, responsive design with faster development cycles"
      }
    ]
  },
  {
    icon: Database,
    category: "Data Management",
    description: "Comprehensive data storage and management solutions for handling structured and unstructured data efficiently.",
    technologies: [
      {
        name: "PostgreSQL",
        purpose: "Relational database for structured data and complex queries",
        benefits: "Provides ACID compliance, advanced indexing, and excellent performance for business data"
      },
      {
        name: "MongoDB",
        purpose: "NoSQL database for flexible document storage and real-time data",
        benefits: "Handles unstructured data efficiently with horizontal scaling capabilities"
      },
      {
        name: "Redis",
        purpose: "In-memory caching and session management",
        benefits: "Improves application performance through fast data retrieval and caching"
      }
    ]
  },
  {
    icon: Cloud,
    category: "Cloud & Infrastructure",
    description: "Scalable cloud infrastructure and deployment solutions for reliable, high-availability AI applications.",
    technologies: [
      {
        name: "AWS Services",
        purpose: "Cloud infrastructure, AI services, and scalable deployment",
        benefits: "Provides reliable, scalable infrastructure with built-in AI/ML services"
      },
      {
        name: "Digital Ocean",
        purpose: "Cost-effective cloud hosting and database solutions",
        benefits: "Offers simple, affordable cloud infrastructure for small to medium projects"
      },
      {
        name: "Vercel & Netlify",
        purpose: "Frontend deployment and edge computing",
        benefits: "Ensures fast global content delivery with automatic scaling"
      }
    ]
  },
  {
    icon: Smartphone,
    category: "Communication APIs",
    description: "Advanced messaging and communication APIs for seamless customer engagement and business automation.",
    technologies: [
      {
        name: "WhatsApp Business API",
        purpose: "Automated messaging, customer support, and business communication",
        benefits: "Enables 24/7 customer engagement through the world's most popular messaging platform"
      },
      {
        name: "Twilio",
        purpose: "SMS, voice, and multi-channel communication",
        benefits: "Provides reliable communication infrastructure with global reach"
      },
      {
        name: "SendGrid",
        purpose: "Email automation and transactional messaging",
        benefits: "Ensures reliable email delivery with advanced analytics and automation"
      }
    ]
  }
];

export default function TechnologySection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Advanced Technology Stack for AI/ML Development
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
            Our comprehensive technology stack combines cutting-edge AI/ML frameworks, modern web development tools, 
            and reliable cloud infrastructure to deliver robust, scalable artificial intelligence solutions. We carefully 
            select technologies based on project requirements, performance needs, and long-term maintainability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {techStack.map((category, index) => {
            const Icon = category.icon;
            return (
              <article 
                key={category.category}
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 animate-fade-in-up animate-stagger-${index + 1}`}
              >
                <header className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Technology Stack</p>
                  </div>
                </header>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-4">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{tech.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{tech.purpose}</p>
                      <p className="text-xs text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-950 p-2 rounded">
                        <strong>Benefits:</strong> {tech.benefits}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Why Our Technology Stack Matters */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Our Technology Stack Delivers Superior Results</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We don't just follow trends - we carefully select proven technologies that deliver measurable business value. 
              Our technology choices are based on performance, scalability, security, and long-term maintainability.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Enterprise Security</h4>
              <p className="text-sm opacity-90">End-to-end encryption, secure APIs, and compliance with data protection regulations</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">High Performance</h4>
              <p className="text-sm opacity-90">Optimized algorithms and infrastructure for fast response times and high throughput</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Cloud Scalability</h4>
              <p className="text-sm opacity-90">Auto-scaling infrastructure that grows with your business needs</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Future-Proof</h4>
              <p className="text-sm opacity-90">Technologies chosen for long-term viability and continuous updates</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Leverage Advanced AI Technology?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how our proven technology stack can solve your specific business challenges. 
            Get a free technical consultation and custom solution architecture for your AI/ML project.
          </p>
          <a
            href="https://wa.me/917433000131?text=Hi! I'd like to discuss the technology stack for my AI/ML project."
            title="Discuss technology requirements on WhatsApp"
            className="btn btn-primary btn-lg"
          >
            Discuss Technology Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
