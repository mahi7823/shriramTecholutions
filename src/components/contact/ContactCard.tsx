import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string[];
}

export default function ContactCard({ icon: Icon, title, description }: ContactCardProps) {
  return (
    <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <Icon className="w-8 h-8 mx-auto mb-3" />
      <h3 className="font-bold mb-2">{title}</h3>
      <p>
        {description.map((line, idx) => (
          <span key={idx}>
            {line}
            {idx < description.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
}
