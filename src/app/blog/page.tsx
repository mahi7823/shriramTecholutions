import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI/ML Development Blog - Latest Insights & Case Studies',
  description: 'Expert insights on AI development, WhatsApp Business API, machine learning solutions, and automation strategies for Indian businesses. Read our latest case studies and technical articles.',
  keywords: [
    'AI development blog', 'ML insights India', 'WhatsApp Business API guide', 
    'automation case studies', 'AI implementation strategies', 'machine learning tutorials',
    'FastAPI best practices', 'Python AI development', 'business intelligence blog'
  ]
}

const blogPosts = [
  {
    id: 'whatsapp-api-restaurant-success',
    title: 'How WhatsApp Business API Increased Restaurant Orders by 300%',
    excerpt: 'Discover how a Delhi restaurant chain transformed their ordering process using AI-powered WhatsApp automation, reducing errors by 45% and tripling their order volume.',
    readTime: '8 min read',
    category: 'Case Study',
    publishedAt: '2024-01-15',
    slug: '/blog/whatsapp-api-restaurant-success'
  },
  {
    id: 'ai-document-processing-guide',
    title: 'Complete Guide to AI Document Processing for Indian Businesses',
    excerpt: 'Step-by-step implementation guide for automated document processing using Python, spaCy, and NLP. Achieve 95% accuracy in data extraction.',
    readTime: '12 min read',
    category: 'Technical Guide',
    publishedAt: '2024-01-10',
    slug: '/blog/ai-document-processing-guide'
  },
  {
    id: 'fastapi-vs-django-ai',
    title: 'FastAPI vs Django for AI Development: Complete Comparison 2024',
    excerpt: 'Comprehensive analysis of FastAPI and Django for AI/ML projects. Performance benchmarks, scalability, and real-world implementation examples.',
    readTime: '10 min read',
    category: 'Technical Comparison',
    publishedAt: '2024-01-05',
    slug: '/blog/fastapi-vs-django-ai'
  },
  {
    id: 'cost-effective-ai-small-business',
    title: 'Cost-Effective AI Solutions for Small Businesses in India',
    excerpt: 'Practical AI implementation strategies for SMEs with limited budgets. ROI analysis, implementation roadmap, and affordable technology stack.',
    readTime: '9 min read',
    category: 'Business Strategy',
    publishedAt: '2024-01-01',
    slug: '/blog/cost-effective-ai-small-business'
  }
]

export default function BlogPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI/ML Development Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert insights, case studies, and technical guides on AI development, 
            WhatsApp Business API, and automation strategies for Indian businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link href={post.slug}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric'
                    })}
                  </span>
                  
                  <Link 
                    href={post.slug}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Custom AI Solutions for Your Business?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Get expert consultation on AI implementation, WhatsApp Business API integration, 
              and automation strategies tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/917433000131?text=Hi! I want to discuss AI solutions for my business."
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                WhatsApp Consultation
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
