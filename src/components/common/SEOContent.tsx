import React from 'react';

interface SEOContentProps {
  className?: string;
  variant?: 'hero' | 'services' | 'about' | 'contact' | 'footer';
}

export default function SEOContent({ className = '', variant = 'hero' }: SEOContentProps) {
  const content = {
    hero: {
      title: "Professional AI/ML Development Services in India",
      content: `Shriram Tech Solutions is a leading AI/ML development company specializing in intelligent automation, 
      WhatsApp Business API integration, and custom machine learning solutions. Based in India, we serve businesses 
      globally with cutting-edge artificial intelligence technologies including FastAPI development, Python automation, 
      Next.js web applications, and advanced chatbot development. Our AI solutions have helped businesses reduce 
      operational costs by up to 70%, improve accuracy rates to 95%+, and achieve ROI within 3-6 months of implementation.`
    },
    services: {
      title: "Comprehensive AI/ML Technology Stack and Solutions",
      content: `Our technology stack includes Python for backend development, FastAPI for high-performance API creation, 
      TensorFlow and OpenAI for machine learning models, React and Next.js for modern web interfaces, PostgreSQL and 
      MongoDB for data management, and AWS cloud services for scalable deployment. We specialize in natural language 
      processing using spaCy and NLTK, computer vision with OpenCV and YOLO, predictive analytics with scikit-learn, 
      and real-time data visualization with Chart.js and D3.js. Every solution is custom-built to meet specific 
      business requirements and integrate seamlessly with existing systems.`
    },
    about: {
      title: "Expert AI/ML Developer with Proven Track Record",
      content: `With 5+ years of professional experience in artificial intelligence and machine learning development, 
      we have successfully delivered 50+ projects across various industries including e-commerce, healthcare, finance, 
      and manufacturing. Our expertise encompasses the complete AI development lifecycle from initial consultation and 
      requirement analysis to deployment, maintenance, and ongoing optimization. We maintain a 98% project success rate 
      and provide 24/7 technical support to ensure continuous operation of all AI systems.`
    },
    contact: {
      title: "Get Started with Professional AI/ML Development",
      content: `Ready to transform your business with artificial intelligence? Contact our expert AI/ML development team 
      for a free consultation. We provide detailed project estimates, technical feasibility analysis, and custom 
      solution recommendations based on your specific business needs. Available via WhatsApp (+91 7433000131), 
      email (hello@shritech.digital), or phone for immediate assistance. Our consultation process includes business 
      process analysis, AI opportunity identification, ROI projections, and implementation timeline planning.`
    },
    footer: {
      title: "Shriram Tech Solutions - Premier AI/ML Development Services",
      content: `Shriram Tech Solutions is a premier AI/ML development company based in India, providing comprehensive 
      artificial intelligence solutions to businesses worldwide. We specialize in WhatsApp Business API integration, 
      intelligent chatbot development, document processing automation, computer vision applications, predictive analytics, 
      and custom machine learning model development. Our mission is to help businesses leverage AI technology for 
      improved efficiency, reduced costs, and accelerated growth through innovative automation solutions.`
    }
  };

  const { title, content: textContent } = content[variant];

  return (
    <div className={`seo-content ${className}`}>
      {/* Hidden SEO content - visible to search engines but not prominent to users */}
      <div className="sr-only">
        <h2>{title}</h2>
        <p>{textContent}</p>
      </div>
      
      {/* Visible structured content for users */}
      <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed opacity-75">
        {variant === 'hero' && (
          <p>
            Professional AI/ML development services including WhatsApp Business API, chatbot development, 
            document processing, computer vision, and predictive analytics. Serving businesses across India 
            with custom artificial intelligence solutions that deliver measurable ROI and business growth.
          </p>
        )}
        {variant === 'services' && (
          <p>
            Advanced technology stack: Python, FastAPI, TensorFlow, OpenAI, React, Next.js, PostgreSQL, 
            MongoDB, AWS cloud services. Specialized in NLP, computer vision, machine learning, and real-time analytics.
          </p>
        )}
        {variant === 'about' && (
          <p>
            5+ years experience • 50+ successful projects • 98% success rate • 24/7 support • 
            AI/ML expertise across multiple industries including e-commerce, healthcare, and finance.
          </p>
        )}
        {variant === 'contact' && (
          <p>
            Free consultation available • Technical feasibility analysis • Custom solution recommendations • 
            WhatsApp: +91 7433000131 • Email: hello@shritech.digital • Business process analysis included.
          </p>
        )}
        {variant === 'footer' && (
          <p>
            AI/ML development company India • WhatsApp Business API expert • Intelligent automation solutions • 
            Custom chatbot development • Document processing AI • Computer vision • Predictive analytics.
          </p>
        )}
      </div>
    </div>
  );
}
