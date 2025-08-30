import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import { Shield, Lock, Eye, FileText, Users, MessageCircle, Phone, Mail, Globe,  AlertTriangle, CheckCircle, Clock, UserCheck } from 'lucide-react'
import { contactInfo, generateWhatsAppLink, generatePhoneLink } from '@/config/contactInfo'

export const metadata: Metadata = {
  title: 'Privacy Policy | Shriram Tech Solutions',
  description: 'Comprehensive privacy policy for Shriram Tech Solutions. Learn how we protect your data and privacy for AI/ML services and WhatsApp Business API.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 2025"

  return (
    <Layout>
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
              Your privacy and data security are fundamental to our business. This comprehensive policy explains how we collect, 
              use, protect, and manage your information when you use our AI/ML development services and WhatsApp Business API solutions.
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Shriram Tech Solutions ("we," "our," or "us") is committed to protecting your privacy across all our services. 
            We implement robust data security measures for AI implementations, WhatsApp Business solutions, and technical 
            development projects. This comprehensive privacy policy outlines our data practices, security measures, and your 
            rights regarding personal information for all clients and services. We operate in compliance with Indian data 
            protection laws, including the Information Technology Act, 2000, and applicable international privacy standards 
            for our global clientele.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Privacy Commitment</h2>
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

      {/* Information We Collect Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal & Business Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect various types of information to provide our services effectively and maintain business relationships:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Contact Information:</strong> Name, email address, phone number, company name, job title, and business address</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Project Requirements:</strong> Technical specifications, business objectives, budget information, and timeline requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Communication Records:</strong> Emails, chat logs, meeting notes, and project discussions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Payment Information:</strong> Billing details, payment history, and financial transaction records</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical & Usage Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect technical information to improve our services and ensure security:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Website Analytics:</strong> IP addresses, browser type, device information, and usage patterns</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Service Performance:</strong> API usage data, response times, error logs, and system performance metrics</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>WhatsApp Business Data:</strong> Message metadata, delivery status, and integration performance data</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>AI/ML Model Data:</strong> Training data, model performance metrics, and accuracy statistics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Delivery & Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to provide and improve our services:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Project Execution:</strong> Develop AI/ML solutions, implement WhatsApp Business API integrations, and deliver technical services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Technical Support:</strong> Provide ongoing maintenance, troubleshooting, and customer support services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Communication:</strong> Send project updates, respond to inquiries, and maintain client relationships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Quality Assurance:</strong> Monitor service performance, conduct testing, and ensure delivery standards</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Operations & Improvement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use data to enhance our business operations and service quality:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Service Enhancement:</strong> Analyze usage patterns to improve our AI/ML solutions and API performance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Security Monitoring:</strong> Detect and prevent security threats, fraud, and unauthorized access</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Legal Compliance:</strong> Meet regulatory requirements, maintain records, and respond to legal requests</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Business Analytics:</strong> Generate insights for strategic planning and operational improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection & Security Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Shield className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Data Protection & Security</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise-Grade Security Measures</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement comprehensive security measures to protect your data:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Encryption:</strong> All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Access Controls:</strong> Multi-factor authentication, role-based access, and least privilege principles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Network Security:</strong> Firewalls, intrusion detection systems, and regular security audits</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Data Isolation:</strong> Client data is segregated and isolated to prevent unauthorized access</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Monitoring & Incident Response</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain proactive security monitoring and incident response capabilities:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>24/7 Monitoring:</strong> Continuous monitoring of systems, networks, and data access patterns</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Incident Response:</strong> Rapid response procedures for security incidents and data breaches</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Regular Audits:</strong> Quarterly security assessments and annual penetration testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Employee Training:</strong> Regular security awareness training for all team members</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Retention & Disposal</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Active Projects</h4>
                <p className="text-gray-700">Data retained for duration of project plus 2 years for support and legal compliance</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Completed Projects</h4>
                <p className="text-gray-700">Data archived for 7 years as required by Indian business and tax regulations</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Secure Disposal</h4>
                <p className="text-gray-700">Data permanently deleted using industry-standard secure deletion methods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Sharing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Eye className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Information Sharing & Disclosure</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limited & Controlled Sharing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We never sell your personal data to third parties. Information sharing is strictly limited to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Service Providers:</strong> Trusted partners who assist in service delivery under strict confidentiality agreements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Legal Requirements:</strong> When required by law, court orders, or government regulations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets with continued privacy protection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Safety & Security:</strong> To protect against fraud, security threats, or harm to individuals</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work with carefully selected third-party providers who maintain high security standards:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Cloud Infrastructure:</strong> AWS, Azure, or Google Cloud for secure data hosting and processing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Communication Tools:</strong> Secure email and messaging platforms for client communications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Analytics Services:</strong> Privacy-focused analytics tools with data anonymization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Payment Processors:</strong> Secure payment gateways for financial transactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Rights & Choices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Access & Portability</h3>
                <p className="text-gray-700">Request access to your personal information and receive a copy of your data in a portable, machine-readable format. We will respond to access requests within 30 days.</p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Correction & Update</h3>
                <p className="text-gray-700">Update or correct any inaccurate or incomplete personal information we hold about you. We will verify the accuracy of corrections and update our records accordingly.</p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deletion & Opt-out</h3>
                <p className="text-gray-700">Request deletion of your personal information or opt-out of certain data processing activities, subject to legal and contractual obligations that may require data retention.</p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Restriction & Objection</h3>
                <p className="text-gray-700">Request restriction of processing or object to specific data processing activities where we rely on legitimate interests as the legal basis.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Processing Rights</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Consent Withdrawal:</strong> Withdraw consent for data processing activities where consent is the legal basis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Automated Decisions:</strong> Request human review of automated decision-making processes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Complaint Rights:</strong> Lodge complaints with relevant data protection authorities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Compensation:</strong> Seek compensation for damages caused by data protection violations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Exercise Your Rights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
                <p className="text-gray-700">Email us at privacy@shritech.digital or use our contact form with "Privacy Request" in the subject line</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Verification</h4>
                <p className="text-gray-700">We may request additional information to verify your identity before processing requests</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-700">We will respond to all privacy requests within 30 days, with extensions for complex requests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies & Tracking Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies & Tracking Technologies</h2>
            
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Usage & Management</h3>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website and provide 
                  essential functionality. Our cookie usage is transparent and respects your privacy preferences.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Essential Cookies</h4>
                    <p className="text-green-700 text-sm">Always active for website functionality, security, and session management. These cannot be disabled as they are necessary for basic site operation.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Analytics Cookies</h4>
                    <p className="text-blue-700 text-sm">Optional cookies that help us understand website usage and improve user experience. You can control these through your browser settings.</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cookie Categories</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period</li>
                    <li><strong>First-Party Cookies:</strong> Cookies set by our website directly</li>
                    <li><strong>Third-Party Cookies:</strong> Cookies set by trusted service providers</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Managing Your Cookie Preferences</h3>
                <p className="text-gray-700 mb-4">
                  You have full control over your cookie preferences and can manage them through various methods:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Browser Settings:</strong> Configure cookie preferences in your web browser's privacy settings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Cookie Consent:</strong> Use our cookie consent banner to manage analytics and marketing cookies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Opt-out Tools:</strong> Use industry-standard opt-out mechanisms for advertising cookies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Data Transfers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Globe className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">International Data Transfers</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Border Data Processing</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a global technology company, we may transfer your data across international borders to provide our services. 
              All international data transfers are conducted in compliance with applicable data protection laws and regulations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Transfer Safeguards</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Standard Contractual Clauses:</strong> EU-approved data transfer agreements for international transfers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Adequacy Decisions:</strong> Transfers to countries with recognized adequate data protection standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Certification Schemes:</strong> Industry-recognized privacy certifications for data processors</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Compliance Framework</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>GDPR Compliance:</strong> European data protection standards for EU data subjects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>CCPA Compliance:</strong> California privacy rights for California residents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Indian IT Act:</strong> Compliance with Indian data protection and privacy regulations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Children's Privacy</h3>
                <p className="text-yellow-700">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13. If we become aware that we have collected personal information from 
                  a child under 13, we will take immediate steps to delete such information. If you believe we may have 
                  collected information from a child under 13, please contact us immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Privacy Policy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Clock className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this privacy policy from time to time to reflect changes in our practices, technology, 
              legal requirements, or other factors. When we make changes, we will:
            </p>
            
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span><strong>Update the "Last Updated" date</strong> at the top of this policy</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span><strong>Notify you of significant changes</strong> through email or prominent website notices</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span><strong>Provide advance notice</strong> for material changes that affect your rights</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span><strong>Maintain policy archives</strong> for your reference to previous versions</span>
              </li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-sm">
                <strong>Recommendation:</strong> We encourage you to review this privacy policy periodically to stay 
                informed about how we protect your information. Your continued use of our services after any changes 
                constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Privacy Questions or Concerns?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our dedicated privacy team is committed to protecting your data and addressing any questions about this policy 
            or how we handle your information. We take all privacy inquiries seriously and respond promptly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          
          <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Response Commitments</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center">
                <UserCheck className="w-5 h-5 text-green-400 mr-2" />
                <span>Dedicated privacy officer</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <span>Confidential handling</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm opacity-80">
              This privacy policy is governed by Indian data protection laws and regulations, including the Information 
              Technology Act, 2000, and applicable international privacy standards for our global clientele. We are 
              committed to maintaining the highest standards of data protection and privacy compliance.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
