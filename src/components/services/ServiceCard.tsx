import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  onDemoClick: (demo: string) => void;
}

export default function ServiceCard({ service, onDemoClick }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="card card-md group cursor-pointer bg-[var(--color-surface-1)] border border-[var(--color-border)]" onClick={() => onDemoClick(service.demo)}>
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Tech badge */}
        <div className="inline-block px-3 py-1 text-xs bg-gray-100 text-cyan-700 rounded-full border border-gray-200 dark:bg-gray-800 dark:text-cyan-400 dark:border-gray-700">
          {service.tech}
        </div>
      </div>
      
      <h3 className="mb-4">
        {service.title}
      </h3>
      
      <p className="mb-6 leading-relaxed">
        {service.description}
      </p>
      
      {/* Demo button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDemoClick(service.demo);
        }}
        className="w-full btn btn-primary"
      >
        Try Live Demo →
      </button>
    </div>
  );
}
