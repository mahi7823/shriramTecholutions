import React, { useState, useEffect } from 'react';
import { MessageCircle, Bot, FileText, Eye, TrendingUp, Database, BarChart3, Phone, Mail, MapPin, Clock, Star, CheckCircle, ArrowRight, Menu, X, Send, User, Zap, Shield, Award } from 'lucide-react';

export default function ShriramTechSolutions() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! Welcome to our AI chatbot demo. How can I help you today?' }
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [documentText, setDocumentText] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [predictionData, setPredictionData] = useState([]);
  const [imageAnalysis, setImageAnalysis] = useState('');
  const [stats, setStats] = useState({ orders: 0, revenue: 0, efficiency: 0 });

  // Animate stats on mount
  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        orders: prev.orders < 200 ? prev.orders + 5 : 200,
        revenue: prev.revenue < 300000 ? prev.revenue + 7500 : 300000,
        efficiency: prev.efficiency < 95 ? prev.efficiency + 2 : 95
      }));
    }, 50);

    setTimeout(() => clearInterval(timer), 2000);
    return () => clearInterval(timer);
  }, []);

  // Demo handlers
  const handleChatSend = () => {
    if (!userMessage.trim()) return;
    
    setChatMessages(prev => [...prev, { type: 'user', message: userMessage }]);
    
    setTimeout(() => {
      const responses = [
        "I can help you with order placement, tracking, and product information. What would you like to know?",
        "Our AI system can process your request instantly. Let me check our database for you.",
        "Based on your query, I recommend checking our latest products. Would you like me to show them?",
        "I've found relevant information for you. Our system shows 98% accuracy in handling similar queries."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { type: 'bot', message: randomResponse }]);
    }, 1000);
    
    setUserMessage('');
  };

  const handleDocumentAnalysis = () => {
    if (!documentText.trim()) return;
    
    setAnalysisResult('Analyzing document...');
    
    setTimeout(() => {
      const analysis = {
        sentiment: 'Positive (85%)',
        keyEntities: ['Company Name', 'Product Details', 'Pricing Information'],
        summary: 'This document contains business proposal with positive sentiment. Key metrics extracted successfully.',
        confidence: '94%'
      };
      
      setAnalysisResult(`📊 Analysis Complete:
• Sentiment: ${analysis.sentiment}
• Key Entities: ${analysis.keyEntities.join(', ')}
• Summary: ${analysis.summary}
• Confidence: ${analysis.confidence}`);
    }, 2000);
  };

  const generatePrediction = () => {
    const data = [];
    const baseValue = 100;
    for (let i = 0; i < 12; i++) {
      data.push({
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
        actual: Math.floor(baseValue + Math.random() * 50 + i * 10),
        predicted: Math.floor(baseValue + Math.random() * 40 + i * 12)
      });
    }
    setPredictionData(data);
  };

  const analyzeImage = () => {
    setImageAnalysis('Analyzing image...');
    
    setTimeout(() => {
      setImageAnalysis(`🔍 Computer Vision Analysis:
• Objects Detected: 3 items
• Quality Score: 96.5%
• Defects Found: None
• Classification: Product A (Confidence: 98.2%)
• Recommendation: Approved for shipping`);
    }, 1500);
  };

  const DemoModal = ({ demo, onClose, children }) => {
    if (activeDemo !== demo) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Live Demo</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  };

  const ChatbotDemo = () => (
    <div className="space-y-4">
      <div className="h-64 border border-gray-200 rounded-lg p-4 overflow-y-auto bg-gray-50">
        {chatMessages.map((msg, idx) => (
          <div key={idx} className={`mb-3 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
              msg.type === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-800 border'
            }`}>
              {msg.message}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
        />
        <button
          onClick={handleChatSend}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );

  const DocumentDemo = () => (
    <div className="space-y-4">
      <textarea
        value={documentText}
        onChange={(e) => setDocumentText(e.target.value)}
        placeholder="Paste your document text here for AI analysis..."
        className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleDocumentAnalysis}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Analyze Document
      </button>
      {analysisResult && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <pre className="whitespace-pre-wrap text-sm text-green-800">{analysisResult}</pre>
        </div>
      )}
    </div>
  );

  const PredictionDemo = () => (
    <div className="space-y-4">
      <button
        onClick={generatePrediction}
        className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
      >
        Generate Prediction
      </button>
      {predictionData.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-bold mb-3">Sales Prediction Chart</h4>
          <div className="space-y-2">
            {predictionData.slice(0, 6).map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 bg-white rounded">
                <span className="font-medium">{item.month}</span>
                <div className="flex gap-4">
                  <span className="text-blue-600">Actual: {item.actual}</span>
                  <span className="text-purple-600">Predicted: {item.predicted}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const VisionDemo = () => (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Eye size={48} className="mx-auto mb-4 text-gray-400" />
        <p className="text-gray-600 mb-4">Upload an image for AI analysis</p>
        <button
          onClick={analyzeImage}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          Simulate Image Analysis
        </button>
      </div>
      {imageAnalysis && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <pre className="whitespace-pre-wrap text-sm text-orange-800">{imageAnalysis}</pre>
        </div>
      )}
    </div>
  );

  const services = [
    {
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      title: "AI Customer Support Chatbot",
      tech: "FastAPI + OpenAI + React + WebSocket",
      description: "Reduce customer service costs by 70% with intelligent WhatsApp chatbots",
      demo: "chatbot"
    },
    {
      icon: <FileText className="w-12 h-12 text-green-500" />,
      title: "Document Processing AI",
      tech: "Python + spaCy + NLTK + TextBlob + FastAPI",
      description: "Process 1000+ documents hourly with 95% accuracy using advanced NLP",
      demo: "document"
    },
    {
      icon: <Eye className="w-12 h-12 text-orange-500" />,
      title: "Computer Vision Solutions",
      tech: "OpenCV + TensorFlow + YOLO + Tesseract",
      description: "Automate visual inspection and quality control with 96% accuracy",
      demo: "vision"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
      title: "Predictive Analytics",
      tech: "Scikit-learn + Pandas + Prophet + Chart.js",
      description: "Improve prediction accuracy by 45% with ML forecasting models",
      demo: "prediction"
    },
    {
      icon: <Database className="w-12 h-12 text-red-500" />,
      title: "Data Extraction Automation",
      tech: "Python + PyPDF2 + Tabula + spaCy",
      description: "Reduce manual data entry by 90% with automated processing",
      demo: "document"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-indigo-500" />,
      title: "Business Intelligence Dashboard",
      tech: "Next.js + D3.js + Chart.js + PostgreSQL",
      description: "Make data-driven decisions 3x faster with real-time analytics",
      demo: "prediction"
    }
  ];

  const caseStudies = [
    {
      title: "🍕 Delhi Restaurant Chain (20 locations)",
      problem: "Phone order congestion, 45% order errors, staff overload during peak hours",
      solution: "AI-powered WhatsApp ordering system with payment integration and inventory management",
      testimonial: "Best investment we ever made! Orders tripled in first month. Our staff is happier and customers love the convenience. ROI achieved in just 2 weeks!",
      metrics: ["300% order increase", "45% error reduction", "2 weeks ROI"]
    },
    {
      title: "👗 Fashion E-commerce (₹5Cr annual revenue)",
      problem: "Low conversion rates (1.8%), poor product discovery, high cart abandonment",
      solution: "Personalized ML recommendation engine with behavioral analysis and WhatsApp notifications",
      testimonial: "Incredible results! Conversion rates doubled, revenue up 35% year-over-year. The AI recommendations are spot-on!",
      metrics: ["100% conversion increase", "35% revenue growth", "60% cart recovery"]
    },
    {
      title: "⚖️ Corporate Law Firm (100+ lawyers)",
      problem: "6 hours daily on document processing, high error rates, client delays",
      solution: "Automated contract analysis, data extraction, and client communication via WhatsApp Business API",
      testimonial: "Transformed our entire practice! Now handling 4x more clients with same staff. Productivity increased by 300%!",
      metrics: ["400% client capacity", "6 hours saved daily", "300% productivity boost"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">Shriram Tech Solutions</div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'services', 'case-studies', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </a>
                ))}
                <a
                  href="https://wa.me/917433000131?text=Hi! I'm interested in WhatsApp Business API and AI solutions."
                  className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600"
                >
                  Get Quote
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {['home', 'services', 'case-studies', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Shriram Tech</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Professional AI/ML Developer | WhatsApp Business API • FastAPI • Next.js • Python • 5+ Years
            </p>
            <p className="text-base text-gray-700 mb-8 font-semibold">
              Don't just read about capabilities - experience them yourself!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Live Demos <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917433000131?text=Hi! I want to discuss WhatsApp Business API integration for my business."
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-base font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp Business API
              </a>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stats.orders}+</div>
              <div className="text-gray-600">Daily Orders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">₹{stats.revenue.toLocaleString()}</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{stats.efficiency}%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI/ML Solutions with Live Demos
            </h2>
            <p className="text-lg text-gray-600">Experience our technology in action</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <div className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mb-4 inline-block">
                  {service.tech}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button
                  onClick={() => setActiveDemo(service.demo)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
                >
                  Try Live Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">Problem:</h4>
                    <p className="text-red-700">{study.problem}</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">Solution:</h4>
                    <p className="text-green-700">{study.solution}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-blue-800 mb-2">Client Testimonial:</h4>
                  <p className="text-blue-700 italic">"{study.testimonial}"</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg opacity-90">Get your WhatsApp Business API and AI solutions today</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Availability</h3>
              <p>Evenings 6-11 PM<br />Full Weekends</p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Zap className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Response Time</h3>
              <p>Within 2 hours<br />(Usually faster)</p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Service Areas</h3>
              <p>All India<br />Remote worldwide</p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Award className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Success Rate</h3>
              <p>98% Project Success<br />100% Client Satisfaction</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917433000131?text=Hi Shriram! I'm interested in WhatsApp Business API and AI solutions for my business. Can we discuss the requirements?"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-base font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+917433000131"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white text-base font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call: 7433000131
              </a>
              <a
                href="mailto:contact@shriramtech.com"
                className="inline-flex items-center px-6 py-3 bg-purple-500 text-white text-base font-semibold rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modals */}
      <DemoModal demo="chatbot" onClose={() => setActiveDemo(null)}>
        <ChatbotDemo />
      </DemoModal>
      
      <DemoModal demo="document" onClose={() => setActiveDemo(null)}>
        <DocumentDemo />
      </DemoModal>
      
      <DemoModal demo="prediction" onClose={() => setActiveDemo(null)}>
        <PredictionDemo />
      </DemoModal>
      
      <DemoModal demo="vision" onClose={() => setActiveDemo(null)}>
        <VisionDemo />
      </DemoModal>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>WhatsApp Business API</li>
                <li>AI Chatbot Development</li>
                <li>Machine Learning Solutions</li>
                <li>Document Processing AI</li>
                <li>Computer Vision Systems</li>
                <li>Predictive Analytics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Industries</h3>
              <ul className="space-y-2 text-gray-300">
                <li>E-commerce & Retail</li>
                <li>Restaurants & Food</li>
                <li>Healthcare & Medical</li>
                <li>Legal Services</li>
                <li>Real Estate</li>
                <li>Manufacturing</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Technologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python & FastAPI</li>
                <li>React & Next.js</li>
                <li>TensorFlow & OpenAI</li>
                <li>WhatsApp Business API</li>
                <li>AWS & Cloud Services</li>
                <li>PostgreSQL & MongoDB</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" /> +91 7433000131
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> contact@shriramtech.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" /> India (Remote Services)
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" /> Available 6-11 PM
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="text-center text-gray-300">
              <p>&copy; 2025 Shriram Tech Solutions. All rights reserved.</p>
              <p className="mt-2">Transforming businesses with AI/ML and WhatsApp Business API</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
                