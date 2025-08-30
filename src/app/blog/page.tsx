import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import blogs from '@/data/blogs.json'

export const metadata: Metadata = {
  title: 'AI/ML Blog - Expert Insights & Case Studies',
  description: 'Expert insights on AI development, WhatsApp Business API & automation for Indian businesses. Latest case studies & tutorials.',
  keywords: [
    'AI development blog', 'ML insights India', 'WhatsApp Business API guide', 
    'automation case studies', 'AI implementation strategies', 'machine learning tutorials',
    'FastAPI best practices', 'Python AI development', 'business intelligence blog'
  ]
}

const blogPosts = blogs

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
          {/* SEO copy to strengthen topical coverage and text/code ratio */}
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Shriram Tech Solutions publishes technology-focused articles by experienced AI/ML developers and WhatsApp Business API experts.
            Learn practical implementation patterns with FastAPI, Python, Next.js and modern cloud services, from document processing AI
            and computer vision to predictive analytics and enterprise automation.
          </p>
          
          {/* Blog Introduction */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 text-left max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Follow Our AI/ML Blog?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Real-World Experience</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our blog shares insights from 5+ years of hands-on AI/ML development experience. 
                  Every article is based on real implementations, actual results, and proven strategies 
                  that have delivered measurable business value.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Indian Business Focus</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We understand the unique challenges and opportunities in the Indian market. 
                  Our content addresses local business needs, regulatory requirements, and 
                  cost-effective solutions tailored for Indian enterprises.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technical Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  From FastAPI performance optimization to WhatsApp Business API integration, 
                  we provide detailed technical guides that you can implement immediately 
                  in your projects with confidence.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Proven Results</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our case studies feature real businesses with actual metrics - from 300% 
                  order increases to 95% accuracy improvements. Learn from implementations 
                  that have generated significant ROI.
                </p>
              </div>
            </div>
          </div>
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
              Looking for AI Solutions Tailored to Your Business?
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
