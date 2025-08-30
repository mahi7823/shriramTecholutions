import { services } from '@/data/services';
import ServiceCard from './ServiceCard';
import SEOContent from '@/components/common/SEOContent';

interface ServicesListProps {
  onDemoClick: (demo: string) => void;
}

export default function ServicesList({ onDemoClick }: ServicesListProps) {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            AI/ML Technology Solutions with Live Interactive Demos
          </h2>
          
          <p className="text-lg mb-12">
            Don't just read about our capabilities - experience them yourself! 
            Try our interactive demos and see how our AI technology solutions can transform your business.
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
        
        {/* Detailed Service Benefits */}
        <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our AI/ML Solutions?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">70%</span>
              </div>
              <h4 className="font-semibold mb-2">Cost Reduction</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Reduce operational costs by automating repetitive tasks and improving process efficiency through intelligent automation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">95%</span>
              </div>
              <h4 className="font-semibold mb-2">Accuracy Rate</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Achieve superior accuracy in data processing, document analysis, and decision-making with advanced ML algorithms.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</span>
              </div>
              <h4 className="font-semibold mb-2">Always Available</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Our AI solutions work round the clock, providing consistent service and support without human intervention.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">3-6</span>
              </div>
              <h4 className="font-semibold mb-2">Months ROI</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Most clients see positive return on investment within 3-6 months through increased efficiency and reduced costs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">∞</span>
              </div>
              <h4 className="font-semibold mb-2">Scalable Solutions</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Our AI systems scale with your business growth, handling increased workload without proportional cost increases.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">5+</span>
              </div>
              <h4 className="font-semibold mb-2">Years Experience</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Proven track record with 5+ years of experience delivering successful AI/ML projects across various industries.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/917433000131?text=Hi! I'm interested in AI/ML solutions for my business."
            title="Get a custom AI/ML solution on WhatsApp"
            className="btn btn-primary btn-lg"
          >
            Get Custom Solution
          </a>
          <p className="text-small mt-4">
            Free consultation • Custom development • WhatsApp integration
          </p>
        </div>
        
        {/* SEO Content for better text/code ratio */}
        <div className="mt-16">
          <SEOContent variant="services" className="max-w-5xl mx-auto" />
        </div>
      </div>
    </section>
  );
}
