import { ArrowRight, MessageCircle } from 'lucide-react';
import type { Stats } from '@/types';

interface HeroProps {
  stats: Stats;
}

export default function Hero({ stats }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with subtle particles */}
      <div className="absolute inset-0">
        <div className="particles">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: '3px',
                height: '3px',
                left: `${15 + i * 20}%`,
                top: `${25 + i * 12}%`,
                animationDelay: `${i * 1.2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Side - Value Proposition */}
          <div className="animate-fade-in-left animate-stagger-1">
            <h1 className="mb-6 text-[var(--color-text-primary)]">
              Shriram Tech Solutions: AI/ML Developer & WhatsApp API Expert
            </h1>
            
            <p className="mb-8 text-lg">
              We build intelligent chatbots, AI agents, and modern technology-driven web solutions, delivered by expert AI/ML developers and WhatsApp Business API specialists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" title="Get a free consultation - Contact" className="btn btn-primary btn-lg">
                Get Free Consultation
                <ArrowRight size={20} />
              </a>
              <a href="#services" title="Explore AI/ML Solutions" className="btn btn-secondary btn-lg">
                Explore Solutions
              </a>
            </div>
          </div>

          {/* Right Side - Simple animated illustration */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-right animate-stagger-2">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Central element */}
              <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl flex items-center justify-center animate-float shadow-2xl">
                <MessageCircle size={48} className="text-white" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400 rounded-full animate-float animation-delay-300"></div>
              <div className="absolute top-16 right-12 w-3 h-3 bg-blue-400 rounded-full animate-float animation-delay-150"></div>
              <div className="absolute bottom-12 left-16 w-5 h-5 bg-purple-400 rounded-full animate-float animation-delay-450"></div>
              <div className="absolute bottom-8 right-8 w-3 h-3 bg-green-400 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
          
        
        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card card-sm text-center animate-scale-in animate-stagger-1">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 counter-animation">{stats.orders}+</div>
              <div className="text-sm">Daily Orders</div>
            </div>
            <div className="card card-sm text-center animate-scale-in animate-stagger-2">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 counter-animation">₹{(stats.revenue / 100000).toFixed(0)}L+</div>
              <div className="text-sm">Revenue Generated</div>
            </div>
            <div className="card card-sm text-center animate-scale-in animate-stagger-3">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2 counter-animation">{stats.efficiency}%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="card card-sm text-center animate-scale-in animate-stagger-4">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

