import { ArrowRight, MessageCircle } from 'lucide-react';
import type { Stats } from '@/types';

interface HeroProps {
  stats: Stats;
}

export default function Hero({ stats }: HeroProps) {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Shriram Tech</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Professional AI/ML Developer | WhatsApp Business API • FastAPI • Next.js • Python • 5+ Years
          </p>
          <p className="text-base text-gray-700 mb-8 font-semibold">
            Don't just read about capabilities - experience them yourself!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Live Demos <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="https://wa.me/917433000131?text=Hi! I want to discuss WhatsApp Business API integration for my business."
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-base font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              WhatsApp Business API
            </a>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem
            value={`${stats.orders}+`}
            label="Daily Orders"
            color="text-blue-600"
          />
          <StatItem
            value={`₹${stats.revenue.toLocaleString()}`}
            label="Revenue Generated"
            color="text-green-600"
          />
          <StatItem
            value={`${stats.efficiency}%`}
            label="Accuracy Rate"
            color="text-purple-600"
          />
          <StatItem
            value="24/7"
            label="AI Support"
            color="text-orange-600"
          />
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  value: string;
  label: string;
  color: string;
}

function StatItem({ value, label, color }: StatItemProps) {
  return (
    <div className="text-center">
      <div className={`text-3xl font-bold ${color}`}>{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}