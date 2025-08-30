'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import ServicesList from '@/components/services/ServicesList';
import CaseStudiesList from '@/components/case-studies/CaseStudiesList';
import AboutSection from '@/components/about/AboutSection';
import ContactSection from '@/components/contact/ContactSection';
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
      {/* SEO copy to improve text/code ratio without harming design */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Shriram Tech Solutions is an AI/ML developer and WhatsApp Business API expert based in India. We design and
            deliver production-grade technology solutions using FastAPI, Python, Next.js and modern cloud platforms. Our focus is
            business impact: intelligent chatbots, document processing AI, computer vision, predictive analytics and automation that
            reduce costs and increase revenue. Speak with an expert to plan an implementation tailored to your processes and
            customers.
          </p>
        </div>
      </section>
      <ServicesList onDemoClick={setActiveDemo} />
      <CaseStudiesList />
      <AboutSection />
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
