import { LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  icon: LucideIcon;
  text: string;
  href: string;
  bgColor: string;
  hoverColor: string;
}

export default function ContactButton({ 
  icon: Icon, 
  text, 
  href, 
  bgColor, 
  hoverColor 
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center px-6 py-3 ${bgColor} text-white text-base font-semibold rounded-lg ${hoverColor} transition-colors`}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <Icon className="mr-2 w-5 h-5" />
      {text}
    </a>
  );
}
