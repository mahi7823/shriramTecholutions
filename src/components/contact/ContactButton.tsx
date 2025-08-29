import { LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  icon: LucideIcon;
  text: string;
  href: string;
  bgColor?: string; // Keep for backward compatibility but not used
  hoverColor?: string; // Keep for backward compatibility but not used
}

export default function ContactButton({ 
  icon: Icon, 
  text, 
  href 
}: ContactButtonProps) {
  const getButtonStyle = () => {
    if (text.includes('WhatsApp')) {
      return 'btn btn-lg text-white font-medium transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg hover:shadow-xl focus:shadow-xl';
    } else if (text.includes('Call')) {
      return 'btn btn-secondary btn-lg font-medium';
    } else {
      return 'btn btn-lg text-white font-medium transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg hover:shadow-xl focus:shadow-xl';
    }
  };

  const getButtonBackground = () => {
    if (text.includes('WhatsApp')) {
      return {
        background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
        boxShadow: '0 4px 15px rgba(22, 163, 74, 0.3)'
      };
    } else if (text.includes('Email')) {
      return {
        background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
        boxShadow: '0 4px 15px rgba(147, 51, 234, 0.3)'
      };
    }
    return {};
  };

  const getAriaLabel = () => {
    if (text.includes('WhatsApp')) {
      return 'Chat with us on WhatsApp (opens in new window)';
    } else if (text.includes('Call')) {
      return 'Call us at 7433000131';
    } else {
      return 'Send us an email (opens email client)';
    }
  };

  return (
    <a
      href={href}
      className={getButtonStyle()}
      style={getButtonBackground()}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={getAriaLabel()}
    >
      <Icon size={20} aria-hidden="true" />
      <span>{text}</span>
    </a>
  );
}
