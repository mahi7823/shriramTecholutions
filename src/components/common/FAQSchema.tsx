import Script from 'next/script'

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can AI reduce customer service costs for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI customer support chatbots can reduce customer service costs by up to 70% by automating responses to common queries, handling multiple conversations simultaneously, and providing 24/7 support. The system integrates with WhatsApp Business API to reach customers on their preferred platform."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the accuracy rate of your document processing AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our document processing AI achieves 95% accuracy in data extraction and can process over 1000 documents per hour. It uses advanced NLP techniques with spaCy, NLTK, and custom machine learning models to understand document structure and extract relevant information."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to implement WhatsApp Business API?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WhatsApp Business API implementation typically takes 2-4 weeks depending on complexity. This includes account verification, integration setup, chatbot development, testing, and staff training. We provide full support throughout the process."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for AI development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use cutting-edge technologies including Python, FastAPI, Next.js, React, OpenAI GPT models, TensorFlow, OpenCV, scikit-learn, spaCy, and NLTK. Our tech stack is chosen based on project requirements to ensure optimal performance and scalability."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate AI solutions with existing business systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in seamless integration with existing business systems. Our solutions can connect with CRM systems, databases, payment gateways, inventory management, and other business tools through APIs and custom integrations."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of ROI can I expect from AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our clients typically see 200-300% ROI within the first year. Benefits include reduced operational costs (up to 70% in customer service), increased efficiency (90% reduction in manual data entry), improved accuracy rates (95%+), and revenue growth through better customer experience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support after implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive ongoing support including system monitoring, regular updates, performance optimization, bug fixes, and feature enhancements. Our support ensures your AI solutions continue to deliver optimal results."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do you serve with AI solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve diverse industries including restaurants, e-commerce, healthcare, finance, law firms, manufacturing, and service businesses. Our AI solutions are customized to meet specific industry requirements and compliance standards."
        }
      }
    ]
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }}
    />
  )
}
