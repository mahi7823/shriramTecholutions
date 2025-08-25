import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import { Award, Code, Users, Zap, CheckCircle, MessageCircle, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Professional AI/ML Development Services',
  description: 'Learn about Shriram Tech Solutions - 5+ years of expertise in AI/ML development, WhatsApp Business API, and cutting-edge technology solutions.',
}

export default function AboutPage() {
  const milestones = [
    {
      year: '2019',
      title: 'Founded',
      description: 'Started with a vision to democratize AI/ML technology for businesses of all sizes'
    },
    {
      year: '2021',
      title: 'WhatsApp Business API Specialist',
      description: 'Became certified WhatsApp Business API partner, helping businesses automate customer communication'
    },
    {
      year: '2022',
      title: '50+ Projects Delivered',
      description: 'Successfully delivered AI/ML solutions across diverse industries with 98% success rate'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Recognized as a leading AI/ML development expert with proven ROI for clients'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                To democratize artificial intelligence and machine learning technology by making it accessible, 
                practical, and profitable for businesses of all sizes. We believe that every business should have 
                the opportunity to leverage cutting-edge AI technology to improve their operations and customer experience.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Our specialized focus on WhatsApp Business API integration allows businesses to connect with their 
                customers in the most natural and effective way possible, while our AI/ML expertise ensures these 
                interactions are intelligent, efficient, and scalable.
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
              href="https://wa.me/917433000131?text=Hi! I'm interested in learning more about your AI/ML services and how they can transform my business."
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-base font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Start Your Transformation
            </a>
            <a
              href="tel:+917433000131"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: +91 7433000131
            </a>
            <a
              href="mailto:contact@shriramtech.com"
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
