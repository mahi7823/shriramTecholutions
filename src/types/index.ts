export interface Stats {
  orders: number;
  revenue: number;
  efficiency: number;
}

import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  tech: string;
  description: string;
  demo: 'chatbot' | 'document' | 'prediction' | 'vision';
}

export interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  testimonial: string;
  metrics: string[];
}

export interface ChatMessage {
  type: 'bot' | 'user';
  message: string;
}

export interface DemoModalProps {
  demo: string | null;
  onClose: () => void;
  children: React.ReactNode;
}