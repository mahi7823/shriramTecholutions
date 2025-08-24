import { caseStudies } from '@/data/case-studies';
import CaseStudyCard from './CaseStudyCard';

export default function CaseStudiesList() {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Success Stories
          </h2>
          <p className="text-lg text-gray-600">Real businesses, measurable results</p>
        </div>
        
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
