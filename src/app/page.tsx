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
