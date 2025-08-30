import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import { Award, Code, Users, Zap, CheckCircle, MessageCircle, Phone, Mail, Shield } from 'lucide-react'
import { contactInfo, generateWhatsAppLink, generateEmailLink, generatePhoneLink } from '@/config/contactInfo'

export const metadata: Metadata = {
  title: 'About - Professional AI/ML Development Services',
  description: 'Shriram Tech Solutions - 5+ years AI/ML expertise, WhatsApp Business API specialist. 98% success rate, 50+ projects delivered.',
}

export default function AboutPage() {
  const milestones = [
    {
      year: '2019',
      title: 'Foundation & Vision',
      description: 'Founded Shriram Tech Solutions with a mission to democratize AI/ML technology for Indian businesses, starting with small-scale automation projects and quickly expanding to comprehensive AI solutions'
    },
    {
      year: '2020',
      title: 'AI Expertise Development',
      description: 'Developed core competencies in machine learning, natural language processing, and computer vision, delivering our first major AI implementations for document processing and predictive analytics'
    },
    {
      year: '2021',
      title: 'WhatsApp Business API Certification',
      description: 'Became certified WhatsApp Business API partner, revolutionizing customer communication for restaurants, e-commerce, and service businesses with intelligent chatbot solutions'
    },
    {
      year: '2022',
      title: '50+ Successful Projects',
      description: 'Reached milestone of 50+ delivered AI/ML projects across diverse industries including manufacturing, healthcare, retail, and hospitality with consistent 98% success rate'
    },
    {
      year: '2023',
      title: 'Advanced AI Solutions',
      description: 'Expanded capabilities to include computer vision for quality control, advanced NLP for multilingual support, and sophisticated predictive models for business intelligence'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Established as a leading AI/ML development expert with proven ROI improvements, serving clients globally while maintaining focus on innovative solutions for the Indian market'
    }
  ]

  const expertise = [
    {
      icon: Code,
      title: 'Full-Stack AI Development',
      description: 'End-to-end AI/ML solutions from data preprocessing to production deployment'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Business API Integration',
      description: 'Certified specialist in WhatsApp Business API with proven results for businesses'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: '95%+ accuracy rates and measurable ROI improvements for all client projects'
    },
    {
      icon: Users,
      title: 'Client Success Focus',
      description: '100% client satisfaction rate with ongoing support and maintenance'
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions that give our clients competitive advantages.'
    },
    {
      title: 'Measurable Results',
      description: 'Every project is measured by tangible business outcomes - increased revenue, reduced costs, or improved efficiency.'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear, honest communication throughout the project lifecycle with regular updates and progress reports.'
    },
    {
      title: 'Long-term Partnership',
      description: 'We build lasting relationships with clients, providing ongoing support and evolving solutions as businesses grow.'
    }
  ]

  return (
    <Layout 
      title="About Us - Professional AI/ML Development Services"
      description="Learn about Shriram Tech Solutions - 5+ years of expertise in AI/ML development, WhatsApp Business API, and cutting-edge technology solutions."
    >
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-600 dark:text-blue-400">Shriram Tech</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Transforming businesses through intelligent AI/ML solutions and seamless WhatsApp Business API integration. 
              With 5+ years of expertise and a proven track record of success.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">98%</div>
                <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        {/* SEO copy to strengthen content depth and keyword coverage */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              Founded in 2019, Shriram Tech Solutions has emerged as a leading AI/ML development company specializing in 
              intelligent business automation and WhatsApp Business API integration. Our journey began with a simple yet 
              ambitious vision: to democratize artificial intelligence technology and make it accessible to businesses of all 
              sizes across India and globally.
            </p>
            <p>
              Over the past five years, we have successfully delivered 50+ AI/ML projects with a remarkable 98% success rate, 
              helping businesses achieve an average ROI improvement of 300%. Our expertise spans across multiple domains including 
              natural language processing, computer vision, predictive analytics, and conversational AI development using 
              cutting-edge technologies like Python, FastAPI, TensorFlow, and modern cloud platforms.
            </p>
            <p>
              As certified WhatsApp Business API partners, we have revolutionized how businesses communicate with their customers, 
              implementing intelligent chatbots and automated messaging systems that have helped restaurants increase orders by 
              300%, manufacturing companies improve quality control through AI-powered vision systems, and SMEs reduce operational 
              costs by up to 70% through strategic automation.
            </p>
            <p>
              Our technical excellence is built on a foundation of continuous learning and adaptation to emerging technologies. 
              We leverage modern frameworks like Next.js for responsive web applications, implement robust FastAPI backends for 
              high-performance AI services, and utilize advanced machine learning libraries including scikit-learn, spaCy, and 
              OpenCV to deliver solutions that consistently achieve 95%+ accuracy rates in real-world applications.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                To democratize artificial intelligence and machine learning technology by making it accessible, 
                practical, and profitable for businesses of all sizes. We believe that every business should have 
                the opportunity to leverage cutting-edge AI technology to improve their operations and customer experience. 
                Our mission extends beyond just delivering technical solutions – we aim to be strategic partners who 
                understand business challenges and translate them into intelligent, automated solutions that drive growth.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our specialized focus on WhatsApp Business API integration allows businesses to connect with their 
                customers in the most natural and effective way possible, while our AI/ML expertise ensures these 
                interactions are intelligent, efficient, and scalable. We have mastered the art of creating conversational 
                experiences that feel natural while being powered by sophisticated AI algorithms.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                What sets us apart is our holistic approach to AI implementation. We don't just build isolated AI models; 
                we create comprehensive ecosystems that integrate seamlessly with existing business processes, provide 
                actionable insights through advanced analytics, and scale effortlessly as businesses grow. Our solutions 
                are designed with the Indian market in mind, understanding local business practices, regulatory requirements, 
                and customer behavior patterns while meeting international quality standards.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Certified WhatsApp Business API Partner</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {expertise.map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-gray-200 text-sm">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Building expertise and delivering results since 2019</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-200">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 transition-colors duration-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Industry Experience & Specializations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Our diverse portfolio spans multiple industries, each benefiting from tailored AI solutions that address 
              specific business challenges and unlock new opportunities for growth and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Restaurant & Food Service</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Automated ordering systems, inventory management AI, and WhatsApp-based customer service that increased 
                average orders by 300% for restaurant clients.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Intelligent menu recommendations</li>
                <li>• Automated order processing</li>
                <li>• Customer feedback analysis</li>
                <li>• Inventory optimization AI</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Manufacturing & Quality Control</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Computer vision systems for defect detection, predictive maintenance AI, and production optimization 
                solutions achieving 95%+ accuracy in quality control processes.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Automated quality inspection</li>
                <li>• Predictive maintenance alerts</li>
                <li>• Production line optimization</li>
                <li>• Real-time performance monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Healthcare & Document Processing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI-powered document analysis, medical record processing, and intelligent form automation that reduced 
                processing time by 80% while maintaining high accuracy standards.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Medical document digitization</li>
                <li>• Automated data extraction</li>
                <li>• Compliance checking systems</li>
                <li>• Patient data management</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">E-commerce & Retail</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Personalized recommendation engines, customer behavior analysis, and automated customer support 
                systems that improved sales conversion rates by 250%.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Product recommendation AI</li>
                <li>• Customer segmentation</li>
                <li>• Automated chat support</li>
                <li>• Inventory demand forecasting</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Financial Services</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Risk assessment algorithms, fraud detection systems, and automated compliance monitoring that 
                enhanced security while reducing manual oversight by 60%.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Fraud detection algorithms</li>
                <li>• Credit risk assessment</li>
                <li>• Compliance automation</li>
                <li>• Customer verification AI</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education & Training</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Personalized learning platforms, automated grading systems, and intelligent content recommendation 
                engines that improved student engagement by 180%.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Adaptive learning systems</li>
                <li>• Automated assessment tools</li>
                <li>• Performance analytics</li>
                <li>• Content personalization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Core Technical Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Deep technical knowledge combined with business acumen to deliver solutions that drive real results and 
              measurable improvements in operational efficiency, customer satisfaction, and revenue growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Shriram Tech Solutions?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We don't just build AI solutions - we create business transformations that deliver measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Proven Track Record</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>98% project success rate across 50+ implementations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Average 300% ROI improvement for client businesses</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>100% client satisfaction with ongoing support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Certified WhatsApp Business API partner status</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Excellence</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>5+ years specialized in AI/ML development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Expert in FastAPI, Python, Next.js, and modern tech stack</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Advanced ML algorithms with 95%+ accuracy rates</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Scalable cloud architecture and deployment expertise</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Impact</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Helped businesses increase orders by up to 300%</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Reduced operational costs by 70% through automation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Achieved 95% accuracy in document processing systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Fast implementation with 2-4 week delivery timelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Technology Stack</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and proven frameworks to deliver robust, scalable AI/ML solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">AI/ML Technologies</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Python & TensorFlow</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">scikit-learn & pandas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">spaCy & NLTK for NLP</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">OpenCV for Computer Vision</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Backend & APIs</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">FastAPI for high-performance APIs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">WhatsApp Business API certified</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">PostgreSQL & Redis databases</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Docker & Kubernetes deployment</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Frontend & DevOps</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Next.js & React for modern UIs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">TypeScript for type safety</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Tailwind CSS for responsive design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">AWS & Azure cloud platforms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Proven Development Methodology</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Our systematic, client-focused approach ensures project success through careful planning, agile development, 
              and continuous optimization. Every project follows our proven methodology that has delivered consistent 
              results across 50+ implementations with a 98% success rate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Discovery & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive business analysis including stakeholder interviews, process mapping, data audit, and 
                competitive landscape review to identify the most impactful AI implementation opportunities aligned with your strategic goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Solution Architecture & Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed technical architecture design including AI model selection, data pipeline architecture, integration 
                specifications, security protocols, and scalability planning with clear project milestones and success metrics.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Agile Development & Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Iterative development using modern DevOps practices, continuous integration/deployment, comprehensive testing 
                including unit tests, integration tests, and performance benchmarking to ensure optimal solution quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Deployment & Ongoing Partnership</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional deployment with zero-downtime migration, comprehensive team training, detailed documentation, 
                24/7 monitoring setup, and continuous optimization support to ensure long-term success and ROI maximization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Client Success Stories & Case Studies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Real-world examples of how our AI/ML solutions and WhatsApp Business API integrations have transformed 
              businesses across various industries, delivering measurable results and significant ROI improvements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Restaurant Chain Transformation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A leading Delhi-based restaurant chain with 15 locations was struggling with order management, 
                customer communication, and operational efficiency. Their manual processes were causing delays, 
                order errors, and customer dissatisfaction.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Our Solution:</h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Intelligent WhatsApp chatbot for automated ordering</li>
                  <li>• AI-powered menu recommendation system</li>
                  <li>• Real-time inventory management integration</li>
                  <li>• Customer feedback analysis and sentiment tracking</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Results Achieved:</h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• 300% increase in average order value</li>
                  <li>• 45% reduction in order processing time</li>
                  <li>• 80% improvement in customer satisfaction scores</li>
                  <li>• 60% reduction in operational costs</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Manufacturing Quality Control Revolution</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A mid-sized manufacturing company in Pune was facing quality control challenges with their 
                production line, resulting in high defect rates, customer returns, and significant financial losses.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Our Solution:</h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Computer vision AI for automated defect detection</li>
                  <li>• Real-time quality monitoring system</li>
                  <li>• Predictive maintenance algorithms</li>
                  <li>• Production line optimization analytics</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Results Achieved:</h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• 96% accuracy in defect detection</li>
                  <li>• 85% reduction in production defects</li>
                  <li>• 70% decrease in quality control costs</li>
                  <li>• 40% improvement in production efficiency</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Healthcare Document Processing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A healthcare provider in Mumbai was overwhelmed with manual document processing, leading to 
                delays in patient care, billing errors, and compliance issues with regulatory requirements.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Our Solution:</h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• AI-powered document digitization system</li>
                  <li>• Automated data extraction from medical records</li>
                  <li>• Compliance checking and validation</li>
                  <li>• Patient data management platform</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Results Achieved:</h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• 95% accuracy in data extraction</li>
                  <li>• 80% reduction in processing time</li>
                  <li>• 90% decrease in billing errors</li>
                  <li>• 100% compliance with regulations</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">E-commerce Growth Acceleration</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                An online retail platform was struggling with low conversion rates, poor customer engagement, 
                and inefficient inventory management, limiting their growth potential in the competitive market.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Our Solution:</h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Personalized product recommendation engine</li>
                  <li>• Customer behavior analysis and segmentation</li>
                  <li>• Automated customer support chatbot</li>
                  <li>• Inventory demand forecasting system</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Results Achieved:</h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• 250% increase in conversion rates</li>
                  <li>• 180% improvement in customer engagement</li>
                  <li>• 60% reduction in customer support costs</li>
                  <li>• 40% improvement in inventory turnover</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Leadership Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Team & Leadership</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Meet the passionate professionals behind Shriram Tech Solutions - a team of experienced AI/ML engineers, 
              business strategists, and technology innovators dedicated to transforming businesses through intelligent solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Leadership & Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our leadership team brings together decades of combined experience in artificial intelligence, 
                machine learning, and business transformation. With backgrounds from leading technology companies 
                and academic institutions, they provide strategic direction and technical expertise that drives 
                innovation and ensures project success.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The founding team's vision was clear from the beginning: to democratize AI technology and make 
                it accessible to businesses of all sizes. This vision has guided our growth from a small startup 
                to a recognized leader in AI/ML development, serving clients across India and internationally.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Leadership Principles:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Innovation First:</strong> Continuously exploring emerging technologies and methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Client Success:</strong> Every decision is made with client outcomes in mind</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Team Excellence:</strong> Investing in continuous learning and skill development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Ethical AI:</strong> Ensuring responsible and transparent AI development practices</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our technical team consists of highly skilled AI/ML engineers, data scientists, software developers, 
                and DevOps specialists. Each team member brings specialized expertise in their respective domains, 
                creating a comprehensive skill set that enables us to tackle complex technical challenges.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The team's expertise spans across multiple AI/ML domains including natural language processing, 
                computer vision, predictive analytics, and conversational AI. This diverse knowledge base allows 
                us to provide holistic solutions that address various business needs and technical requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI/ML Engineers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Specialized in deep learning, model optimization, and production deployment</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Scientists</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Expert in data analysis, feature engineering, and statistical modeling</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Software Developers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Skilled in full-stack development, API integration, and system architecture</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">DevOps Specialists</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Expert in cloud deployment, CI/CD pipelines, and infrastructure management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance & Standards Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quality Assurance & Industry Standards</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              We maintain the highest standards of quality in all our deliverables, following industry best practices 
              and implementing rigorous testing and validation processes to ensure optimal performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Development Standards</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our development process follows industry best practices and standards to ensure code quality, 
                maintainability, and scalability. We implement comprehensive testing strategies and code review 
                processes that guarantee robust and reliable solutions.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Code Quality Standards</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Strict adherence to coding standards, comprehensive documentation, and regular code reviews 
                    ensure maintainable and scalable codebases that can evolve with business needs.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Testing Protocols</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Multi-level testing including unit tests, integration tests, performance tests, and user 
                    acceptance testing to validate functionality and performance under various conditions.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security Measures</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Comprehensive security testing, vulnerability assessments, and compliance with data protection 
                    regulations to ensure client data and system security.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Performance & Reliability</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We prioritize performance and reliability in all our solutions, implementing monitoring systems 
                and optimization strategies that ensure consistent, high-quality service delivery.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Performance Monitoring</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Real-time monitoring of system performance, response times, and resource utilization to 
                    identify and resolve issues before they impact users.
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reliability Engineering</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Implementation of fault-tolerant architectures, backup systems, and disaster recovery 
                    procedures to ensure continuous service availability.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Scalability Planning</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Design and implementation of scalable architectures that can handle growth and increased 
                    load without performance degradation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Certifications & Compliance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">WhatsApp Business API</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Certified partner with proven expertise in WhatsApp Business API integration and optimization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Protection</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Compliance with GDPR, CCPA, and Indian data protection regulations for secure data handling
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quality Management</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  ISO 9001 compliant quality management system ensuring consistent service delivery standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Future Vision & Roadmap</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              As technology continues to evolve, we remain committed to staying at the forefront of AI/ML innovation, 
              expanding our capabilities, and delivering even more powerful solutions that drive business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technology Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our research and development team is continuously exploring emerging technologies and methodologies 
                in artificial intelligence and machine learning. We invest significant resources in staying ahead 
                of industry trends and developing cutting-edge solutions that provide competitive advantages.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We are actively working on advanced AI capabilities including generative AI, edge computing 
                solutions, and autonomous systems. Our goal is to leverage these technologies to create more 
                intelligent, efficient, and user-friendly solutions that address complex business challenges.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Innovation Focus Areas:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Generative AI:</strong> Developing creative AI solutions for content generation and design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Edge Computing:</strong> Implementing AI solutions that run efficiently on edge devices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Autonomous Systems:</strong> Building intelligent systems that operate independently</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Quantum Computing:</strong> Exploring quantum algorithms for complex problem solving</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Market Expansion</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We are strategically expanding our market presence to serve a broader range of industries and 
                geographies. Our goal is to become a globally recognized leader in AI/ML development while 
                maintaining our focus on delivering exceptional value to our clients.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our expansion strategy includes developing specialized solutions for emerging markets, 
                establishing partnerships with technology leaders, and creating educational programs to 
                help businesses understand and leverage AI technology effectively.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Geographic Expansion</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Expanding our presence across India and internationally to serve global clients with 
                    localized solutions and support.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry Diversification</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Developing specialized AI solutions for emerging industries including renewable energy, 
                    smart cities, and sustainable agriculture.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Partnership Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Building strategic partnerships with technology providers, academic institutions, and 
                    industry leaders to enhance our capabilities and reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the businesses that have already experienced measurable growth through our AI/ML solutions 
            and WhatsApp Business API integration.
          </p>
                    
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={generateWhatsAppLink(contactInfo.whatsappMessages.consultation)}
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-base font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Start Your Transformation
            </a>
            <a
              href={generatePhoneLink()}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: {contactInfo.phone}
            </a>
            <a
              href={generateEmailLink()}
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white text-base font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
