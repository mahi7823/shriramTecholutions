import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import FAQSection from '@/components/faq/FAQSection'

export const metadata: Metadata = {
  title: 'FAQ - AI/ML Development & WhatsApp API Questions',
  description: 'Answers to common questions about AI/ML development, WhatsApp Business API integration, pricing & services. Expert guidance.',
}

export default function FAQPage() {
  return (
    <Layout 
      title="FAQ - Frequently Asked Questions | Shriram Tech Solutions"
      description="Get answers to common questions about AI/ML development, WhatsApp Business API integration, pricing, and our services."
    >
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Get answers to common questions about our AI/ML development services, 
              WhatsApp Business API integration, and how we can help transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        {/* SEO copy to strengthen topical relevance and text/code ratio */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Shriram Tech Solutions is an experienced AI/ML developer and WhatsApp Business API expert in India, 
            specializing in cutting-edge technology solutions that drive business transformation. This comprehensive 
            FAQ covers our technology-driven services including intelligent chatbots, document processing automation, 
            computer vision applications, predictive analytics, and WhatsApp Business API integration. We provide 
            detailed information about our implementation process, pricing models, security measures, and ongoing 
            support services. If you need tailored AI solutions—chatbots, document processing AI, computer vision, 
            or predictive analytics—our expert team can help you plan a secure, scalable deployment aligned with 
            your business goals and industry requirements. Our solutions are designed to deliver measurable ROI 
            and competitive advantages through advanced AI technology implementation.
          </p>
        </div>
        <FAQSection />
      </section>
    </Layout>
  );
}
