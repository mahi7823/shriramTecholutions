import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import { Award, Code, Users, Zap, CheckCircle, MessageCircle, Phone, Mail } from 'lucide-react'
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
