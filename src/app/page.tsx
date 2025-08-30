'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import ServicesList from '@/components/services/ServicesList';
import CaseStudiesList from '@/components/case-studies/CaseStudiesList';
import AboutSection from '@/components/about/AboutSection';
import ContactSection from '@/components/contact/ContactSection';
import FAQSection from '@/components/faq/FAQSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import IndustriesSection from '@/components/industries/IndustriesSection';
import TechnologySection from '@/components/technology/TechnologySection';
import { DemoModal, ChatbotDemo, DocumentDemo, PredictionDemo, VisionDemo } from '@/components/demos';


export default function HomePage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [stats, setStats] = useState({ orders: 0, revenue: 0, efficiency: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        orders: prev.orders < 200 ? prev.orders + 5 : 200,
        revenue: prev.revenue < 300000 ? prev.revenue + 7500 : 300000,
        efficiency: prev.efficiency < 95 ? prev.efficiency + 2 : 95
      }));
    }, 50);

    setTimeout(() => clearInterval(timer), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
        <Hero stats={stats} />
      {/* SEO overview section with structured content */}
      <article className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Professional AI/ML Development Services in India</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Shriram Tech Solutions is a leading AI/ML developer and WhatsApp Business API expert based in India. We design and
              deliver production-grade technology solutions using FastAPI, Python, Next.js and modern cloud platforms. Our focus is
              business impact: intelligent chatbots, document processing AI, computer vision, predictive analytics and automation that
              reduce costs and increase revenue.
            </p>
          </header>
          <section className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Expert Development Team</h3>
              <p className="text-gray-700 dark:text-gray-300">
                5+ years of experience in AI/ML development, WhatsApp Business API integration, and modern web application development using cutting-edge technologies.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Proven Results</h3>
              <p className="text-gray-700 dark:text-gray-300">
                50+ successful projects delivered with 98% client satisfaction rate. Our AI solutions typically reduce costs by 70% and improve efficiency by 95%+.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">Comprehensive Support</h3>
              <p className="text-gray-700 dark:text-gray-300">
                24/7 technical support, free consultations, and ongoing maintenance to ensure your AI solutions continue delivering optimal business results.
              </p>
            </div>
          </section>
        </div>
      </article>
      <ServicesList onDemoClick={setActiveDemo} />
      <IndustriesSection />
      <CaseStudiesList />
      <TestimonialsSection />
      <AboutSection />
      <TechnologySection />
      
      {/* Frequently Asked Questions Section */}
      <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Get answers to common questions about AI/ML development, WhatsApp Business API integration, 
              pricing, implementation, and technical support. Our comprehensive FAQ covers everything you need 
              to know about transforming your business with artificial intelligence.
            </p>
          </div>
          <FAQSection />
        </div>
      </section>
      
      <ContactSection />

      <DemoModal demo={activeDemo} onClose={() => setActiveDemo(null)}>
        {activeDemo === 'chatbot' && <ChatbotDemo />}
        {activeDemo === 'document' && <DocumentDemo />}
        {activeDemo === 'prediction' && <PredictionDemo />}
        {activeDemo === 'vision' && <VisionDemo />}
      </DemoModal>
    </Layout>
  );
}
