import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  onDemoClick: (demo: string) => void;
}

export default function ServiceCard({ service, onDemoClick }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-200">
      <div className="mb-4">
        <Icon className="w-12 h-12 text-blue-500 dark:text-blue-400" />
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full mb-4 inline-block">
        {service.tech}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
      <button
        onClick={() => onDemoClick(service.demo)}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
      >
        Try Live Demo
      </button>
    </div>
  );
}