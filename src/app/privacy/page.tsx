import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import { Shield, Lock, Eye, FileText, Users, MessageCircle, Phone, Mail } from 'lucide-react'
import { contactInfo, generateWhatsAppLink, generatePhoneLink } from '@/config/contactInfo'

export const metadata: Metadata = {
  title: 'Privacy Policy - Shriram Tech Solutions',
  description: 'Privacy Policy for Shriram Tech Solutions - Learn how we protect your data and privacy when using our AI/ML services and WhatsApp Business API solutions.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 2025"

  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: [
        {
          subtitle: "Personal & Business Data",
          text: "We collect contact details, project requirements, usage data, and WhatsApp Business API data necessary to provide our services and improve user experience."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        {
          subtitle: "Service & Support",
          text: "We use your information to deliver AI/ML services, provide technical support, communicate with you about projects, improve our offerings, and comply with legal obligations."
        }
      ]
    },
    {
      title: "Data Protection & Security",
      icon: Shield,
      content: [
        {
          subtitle: "Enterprise-Grade Security",
          text: "We protect your data with SSL/TLS encryption, strict access controls, regular security audits, and client data isolation to ensure maximum protection of your information."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: Eye,
      content: [
        {
          subtitle: "Limited Disclosure",
          text: "We never sell your data to third parties. Information is only shared with trusted service providers, for legal compliance, or during business transfers with continued privacy protection."
        }
      ]
    }
  ]

  return (
    <Layout 
      title="Privacy Policy - Shriram Tech Solutions"
      description="Privacy Policy for Shriram Tech Solutions - Learn how we protect your data and privacy when using our AI/ML services and WhatsApp Business API solutions."
    >
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your privacy and data security are fundamental to our business. This policy explains how we collect, 
              use, and protect your information when you use our AI/ML development services and WhatsApp Business API solutions.
            </p>
            <div className="bg-white rounded-lg p-6 inline-block shadow-lg">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {lastUpdated} | 
                <strong className="ml-2">Effective Date:</strong> January 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        {/* SEO copy to improve text/code ratio and keyword relevance */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-sm text-gray-600">
            Shriram Tech Solutions is committed to protecting your privacy across all our services. We implement robust data 
            security for AI implementations, WhatsApp Business solutions, and technical development projects. This policy 
            outlines our data practices for all clients and services.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
                <p className="text-sm text-gray-600">Industry-leading security measures protect your information</p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">Clear communication about how we use your data</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">User Control</h3>
                <p className="text-sm text-gray-600">You maintain control over your personal information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      {sections.map((section, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <section.icon className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.subtitle}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Rights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Rights & Choices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Access & Portability</h3>
                <p className="text-gray-700">Request access to your personal information and receive a copy of your data in a portable format.</p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Correction & Update</h3>
                <p className="text-gray-700">Update or correct any inaccurate or incomplete personal information we hold about you.</p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deletion & Opt-out</h3>
                <p className="text-gray-700">Request deletion of your personal information or opt-out of certain data processing activities.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Retention</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>All Data:</strong> Retained as required for service delivery and legal compliance, with regular reviews to minimize data storage duration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies & Tracking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies & Tracking Technologies</h2>
            
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Usage</h3>
                <p className="text-gray-700 mb-4">We use essential cookies for website functionality and security, and optional analytics/performance cookies to improve user experience. You can control optional cookies through your browser settings.</p>
                <div className="flex gap-3">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Essential: Always Active
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Analytics/Performance: Optional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Privacy Questions or Concerns?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our team is committed to protecting your privacy. Contact us anytime with questions about this policy 
            or how we handle your information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={generateWhatsAppLink("Hi! I have questions about your privacy policy and data protection measures.")}
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-base font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Privacy Team
            </a>
            <a
              href={`mailto:${contactInfo.email}?subject=Privacy Policy Question`}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              {contactInfo.email}
            </a>
            <a
              href={generatePhoneLink()}
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white text-base font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              {contactInfo.phone}
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm opacity-80">
              This privacy policy is governed by Indian data protection laws and regulations. 
              We comply with applicable international privacy standards for global clients.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
