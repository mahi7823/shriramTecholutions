import { services } from '@/data/services';
import ServiceCard from './ServiceCard';

interface ServicesListProps {
  onDemoClick: (demo: string) => void;
}

export default function ServicesList({ onDemoClick }: ServicesListProps) {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            AI/ML Solutions with Live Interactive Demos
          </h2>
          
          <p className="text-lg mb-12">
            Don't just read about our capabilities - experience them yourself! 
            Try our interactive demos and see how our AI solutions can transform your business.
          </p>
        </div>
        
        <div className="cards">
          {services.map((service, index) => (
            <div
              key={index}
              className={`animate-fade-in-up animate-stagger-${Math.min(index + 1, 4)}`}
            >
              <ServiceCard
                service={service}
                onDemoClick={onDemoClick}
              />
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/917433000131?text=Hi! I'm interested in AI/ML solutions for my business."
            className="btn btn-primary btn-lg"
          >
            Get Custom Solution
          </a>
          <p className="text-small mt-4">
            Free consultation • Custom development • WhatsApp integration
          </p>
        </div>
      </div>
    </section>
  );
}
