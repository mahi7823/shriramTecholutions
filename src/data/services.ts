import { Bot, FileText, Eye, TrendingUp, Database, BarChart3 } from 'lucide-react';
import type { Service } from '@/types';

export const services: Service[] = [
  {
    icon: Bot,
    title: "AI Customer Support Chatbot",
    tech: "FastAPI + OpenAI + React + WebSocket",
    description: "Reduce customer service costs by 70% with intelligent WhatsApp chatbots",
    demo: "chatbot"
  },
  {
    icon: FileText,
    title: "Document Processing AI",
    tech: "Python + spaCy + NLTK + TextBlob + FastAPI",
    description: "Process 1000+ documents hourly with 95% accuracy using advanced NLP",
    demo: "document"
  },
  {
    icon: Eye,
    title: "Computer Vision Solutions",
    tech: "OpenCV + TensorFlow + YOLO + Tesseract",
    description: "Automate visual inspection and quality control with 96% accuracy",
    demo: "vision"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    tech: "Scikit-learn + Pandas + Prophet + Chart.js",
    description: "Improve prediction accuracy by 45% with ML forecasting models",
    demo: "prediction"
  },
  {
    icon: Database,
    title: "Data Extraction Automation",
    tech: "Python + PyPDF2 + Tabula + spaCy",
    description: "Reduce manual data entry by 90% with automated processing",
    demo: "document"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence Dashboard",
    tech: "Next.js + D3.js + Chart.js + PostgreSQL",
    description: "Make data-driven decisions 3x faster with real-time analytics",
    demo: "prediction"
  }
];
