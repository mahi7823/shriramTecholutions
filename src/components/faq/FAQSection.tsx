'use client'

import { ChevronDown, ChevronUp, MessageCircle, Code, Zap, Shield, DollarSign, Clock, Users, Award } from 'lucide-react'
import { useState } from 'react'
import { contactInfo, generateWhatsAppLink, generateEmailLink } from '@/config/contactInfo'

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  icon: any;
}

const faqData: FAQItem[] = [
  // AI/ML Services
  {
    question: "What AI/ML services do you offer?",
    answer: "We offer comprehensive AI/ML solutions including intelligent chatbots, document processing automation, computer vision applications, predictive analytics, and custom machine learning models. Our services are tailored for businesses looking to automate processes and improve efficiency.",
    category: "AI/ML Services",
    icon: Code
  },
  {
    question: "How accurate are your AI solutions?",
    answer: "Our AI solutions achieve 95%+ accuracy rates. For document processing, we achieve 95% accuracy in data extraction. Chatbots handle 80% of customer queries automatically. Computer vision solutions achieve 96% accuracy in visual inspection tasks.",
    category: "AI/ML Services",
    icon: Award
  },
  {
    question: "What technologies do you use for AI development?",
    answer: "We use cutting-edge technologies including Python, FastAPI, TensorFlow, OpenAI GPT models, spaCy for NLP, OpenCV for computer vision, and custom machine learning algorithms. Our tech stack is chosen based on project requirements for optimal performance.",
    category: "AI/ML Services",
    icon: Zap
  },
  
  // WhatsApp Business API
  {
    question: "What is WhatsApp Business API and how can it help my business?",
    answer: "WhatsApp Business API allows businesses to send automated messages, handle customer inquiries, and manage orders at scale. It can reduce customer service costs by 70%, provide 24/7 support, and improve customer engagement through the world's most popular messaging platform.",
    category: "WhatsApp Business API",
    icon: MessageCircle
  },
  {
    question: "How long does WhatsApp Business API implementation take?",
    answer: "Implementation typically takes 2-4 weeks depending on complexity. This includes account verification, integration setup, chatbot development, testing, and staff training. We provide full support throughout the process and ensure smooth deployment.",
    category: "WhatsApp Business API",
    icon: Clock
  },
  {
    question: "Is WhatsApp Business API suitable for small businesses?",
    answer: "Absolutely! WhatsApp Business API is perfect for businesses of all sizes. Small businesses can start with basic automation and scale up as they grow. We offer cost-effective solutions starting from ₹25,000 with monthly costs as low as ₹5,000.",
    category: "WhatsApp Business API",
    icon: Users
  },
  
  // Pricing & Costs
  {
    question: "What are your pricing models?",
    answer: "We offer flexible pricing models: project-based pricing for custom solutions, monthly subscription for ongoing services, and pay-per-use for API-based solutions. Initial investments range from ₹25,000 to ₹2,00,000 depending on complexity. Contact us for a custom quote.",
    category: "Pricing & Costs",
    icon: DollarSign
  },
  {
    question: "What ROI can I expect from AI automation?",
    answer: "Our clients typically see 200-400% ROI within 6-12 months. Benefits include 70% reduction in customer service costs, 90% faster processing times, 95%+ accuracy improvements, and increased revenue through better customer experience. Most projects pay for themselves within 3-6 months.",
    category: "Pricing & Costs",
    icon: Award
  },
  {
    question: "Do you offer payment plans or financing?",
    answer: "Yes, we offer flexible payment plans including monthly installments, milestone-based payments, and deferred payment options. We also help clients explore government schemes and financing options for digital transformation projects.",
    category: "Pricing & Costs",
    icon: DollarSign
  },
  
  // Implementation & Support
  {
    question: "How do you ensure data security and privacy?",
    answer: "We implement enterprise-grade security measures including end-to-end encryption, secure API endpoints, data anonymization, and compliance with Indian data protection regulations. All client data is isolated and protected with strict access controls.",
    category: "Implementation & Support",
    icon: Shield
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we provide comprehensive ongoing support including 24/7 system monitoring, regular updates, performance optimization, bug fixes, and feature enhancements. Our support ensures your AI solutions continue to deliver optimal results.",
    category: "Implementation & Support",
    icon: Users
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely! We specialize in seamless integration with existing business systems including CRM platforms, databases, payment gateways, inventory management, and other business tools. We ensure minimal disruption to your current operations.",
    category: "Implementation & Support",
    icon: Code
  },
  
  // Technical Questions
  {
    question: "What if I need custom features or modifications?",
    answer: "We offer full customization services. Our team can develop custom features, modify existing solutions, and create tailored AI models for your specific business requirements. We work closely with you to understand your needs and deliver exactly what you need.",
    category: "Technical Questions",
    icon: Code
  },
  {
    question: "How do you handle updates and new features?",
    answer: "We regularly update our solutions with the latest AI/ML advancements and new features. Updates are deployed seamlessly with zero downtime. We also provide training sessions to help your team utilize new features effectively.",
    category: "Technical Questions",
    icon: Zap
  },
  {
    question: "What happens if there are technical issues?",
    answer: "We provide 24/7 technical support with guaranteed response times. Our team monitors systems proactively and resolves issues quickly. We also offer backup solutions and disaster recovery plans to ensure business continuity.",
    category: "Technical Questions",
    icon: Shield
  }
];

const categories = [
  { name: "AI/ML Services", icon: Code, color: "blue" },
  { name: "WhatsApp Business API", icon: MessageCircle, color: "green" },
  { name: "Pricing & Costs", icon: DollarSign, color: "purple" },
  { name: "Implementation & Support", icon: Users, color: "orange" },
  { name: "Technical Questions", icon: Zap, color: "cyan" }
];

function FAQItem({ item, isOpen, toggleOpen }: { item: FAQItem; isOpen: boolean; toggleOpen: () => void }) {
  const Icon = item.icon;
  
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
      <button
        onClick={toggleOpen}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex items-center">
          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
          <span className="font-semibold text-gray-900 dark:text-white">{item.question}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "All"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                selectedCategory === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isOpen={openItems.includes(index)}
            toggleOpen={() => toggleItem(index)}
          />
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
        <p className="text-lg opacity-90 mb-6">
          Can't find the answer you're looking for? Our team is here to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={generateWhatsAppLink(contactInfo.whatsappMessages.faq)}
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href={generateEmailLink("FAQ Question - Shriram Tech Solutions", "Hi, I have a question that wasn't answered in your FAQ.")}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Email Us
          </a>
          <a
            href="tel:+917433000131"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call: +91 7433000131
          </a>
        </div>
      </div>
    </div>
  );
}
