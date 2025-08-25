import { ArrowRight, MessageCircle } from 'lucide-react';
import type { Stats } from '@/types';

interface HeroProps {
  stats: Stats;
}

export default function Hero({ stats }: HeroProps) {
  return (
    <section id="home" className="relative pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #3B82F6 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center min-h-screen">
        <div className="text-center w-full">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
              🚀 AI-Powered Business Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Shriram Tech</span>
            <br className="hidden sm:block" />
            <span className="text-4xl md:text-6xl">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            Professional AI/ML Developer specializing in
            <br className="hidden sm:block" />
            <span className="font-semibold text-blue-600 dark:text-blue-400">WhatsApp Business API</span> • 
            <span className="font-semibold text-green-600 dark:text-green-400">FastAPI</span> • 
            <span className="font-semibold text-purple-600 dark:text-purple-400">Next.js</span> • 
            <span className="font-semibold text-orange-600 dark:text-orange-400">Python</span>
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 font-medium">
            5+ Years Experience • Don't just read about capabilities - 
            <span className="text-blue-600 dark:text-blue-400 font-semibold">experience them yourself!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a
              href="#services"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Try Live Demos 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/917433000131?text=Hi! I want to discuss WhatsApp Business API integration for my business."
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp Business API
            </a>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ⚡ Get instant quote • 💬 Free consultation • 🚀 Fast deployment
          </p>
        </div>
        
        {/* Stats */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">
            Real Impact, Real Results
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatItem
              value={`${stats.orders}+`}
              label="Daily Orders"
              color="text-blue-600 dark:text-blue-400"
              bgColor="bg-blue-50 dark:bg-blue-900/20"
              borderColor="border-blue-200 dark:border-blue-800"
            />
            <StatItem
              value={`₹${(stats.revenue / 100000).toFixed(0)}L+`}
              label="Revenue Generated"
              color="text-green-600 dark:text-green-400"
              bgColor="bg-green-50 dark:bg-green-900/20"
              borderColor="border-green-200 dark:border-green-800"
            />
            <StatItem
              value={`${stats.efficiency}%`}
              label="Accuracy Rate"
              color="text-purple-600 dark:text-purple-400"
              bgColor="bg-purple-50 dark:bg-purple-900/20"
              borderColor="border-purple-200 dark:border-purple-800"
            />
            <StatItem
              value="24/7"
              label="AI Support"
              color="text-orange-600 dark:text-orange-400"
              bgColor="bg-orange-50 dark:bg-orange-900/20"
              borderColor="border-orange-200 dark:border-orange-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  value: string;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

function StatItem({ value, label, color, bgColor, borderColor }: StatItemProps) {
  return (
    <div className={`text-center p-6 rounded-xl border ${bgColor} ${borderColor} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
      <div className={`text-3xl md:text-4xl font-bold ${color} mb-2`}>{value}</div>
      <div className="text-gray-600 dark:text-gray-400 font-medium">{label}</div>
    </div>
  );
}
