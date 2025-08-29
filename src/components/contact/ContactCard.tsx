import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string[];
}

export default function ContactCard({ icon: Icon, title, description }: ContactCardProps) {
  return (
    <div className="card card-md text-center group bg-[var(--color-surface-1)] border border-[var(--color-border)]" tabIndex={0} role="article" aria-labelledby={`contact-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Icon */}
      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-cyan group-focus:scale-110 group-focus:shadow-glow-cyan">
        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
      
      <h3 id={`contact-card-${title.toLowerCase().replace(/\s+/g, '-')}`} className="mb-3 group-hover:text-gradient group-focus:text-gradient transition-all duration-300">
        {title}
      </h3>
      
      <div className="text-small text-muted space-y-1">
        {description.map((line, idx) => (
          <div key={idx} className="leading-relaxed">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
