import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { contactInfo, generateWhatsAppLink } from '@/config/contactInfo';

export default function AboutSection() {
  const achievements = [
    {
      icon: CheckCircle,
      title: "98% Success Rate",
      description: "Project completion rate with client satisfaction"
    },
    {
      icon: Users,
      title: "5+ Years Experience",
      description: "Professional AI/ML development expertise"
    },
    {
      icon: Award,
      title: "50+ Projects",
      description: "Delivered successful AI solutions"
    },
    {
      icon: TrendingUp,
      title: "24/7 Support",
      description: "Continuous support and maintenance"
    }
  ];

  const skills = [
    'Python & FastAPI',
    'React & Next.js', 
    'WhatsApp Business API',
    'Machine Learning',
    'TensorFlow & OpenAI',
    'Cloud Services (AWS)',
    'PostgreSQL & MongoDB',
    'Computer Vision'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in-left">
            <h2 className="mb-6">
              About Shriram Tech Solutions
            </h2>
            
            <p className="text-lg mb-8">
              I'm a professional AI/ML developer with 5+ years of experience specializing in 
              WhatsApp Business API integrations, intelligent chatbots, and modern web solutions.
            </p>
            
            <p className="mb-8">
              My focus is on transforming businesses through cutting-edge technology that delivers 
              measurable results. From automated customer service to predictive analytics, I help 
              companies leverage AI to improve efficiency and drive growth.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Start Your Project
              </a>
              <a
                href={generateWhatsAppLink()}
                className="btn btn-secondary"
              >
                Let's Chat
              </a>
            </div>
          </div>

          {/* Right Side - Achievements */}
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={achievement.title}
                    className={`card card-md text-center animate-scale-in animate-stagger-${index + 1}`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="mb-2 text-lg">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-sm">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Call to action */}
            <div className="mt-8 text-center">
              <h4 className="mb-4">Ready to Transform Your Business?</h4>
              <p className="text-sm mb-6">
                Get a free consultation and see how AI can help your business grow.
              </p>
              <a
                href={generateWhatsAppLink(contactInfo.whatsappMessages.consultation)}
                className="btn btn-primary btn-sm"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
