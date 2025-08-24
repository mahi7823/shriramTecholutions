import { services } from '@/data/services';
import ServiceCard from './ServiceCard';

interface ServicesListProps {
  onDemoClick: (demo: string) => void;
}

export default function ServicesList({ onDemoClick }: ServicesListProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI/ML Solutions with Live Demos
          </h2>
          <p className="text-lg text-gray-600">Experience our technology in action</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onDemoClick={onDemoClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}