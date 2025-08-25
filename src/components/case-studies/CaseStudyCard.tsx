import type { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-200">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{study.title}</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h4 className="font-bold text-red-800 dark:text-red-400 mb-2">Problem:</h4>
          <p className="text-red-700 dark:text-red-300">{study.problem}</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-bold text-green-800 dark:text-green-400 mb-2">Solution:</h4>
          <p className="text-green-700 dark:text-green-300">{study.solution}</p>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
        <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2">Client Testimonial:</h4>
        <p className="text-blue-700 dark:text-blue-300 italic">"{study.testimonial}"</p>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {study.metrics.map((metric, idx) => (
          <div key={idx} className="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
            {metric}
          </div>
        ))}
      </div>
    </div>
  );
}