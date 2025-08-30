import { Star, Quote, Building, MapPin } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Operations Manager",
    company: "FoodExpress Restaurants",
    location: "Mumbai, India",
    content: "Shriram Tech Solutions transformed our restaurant operations with their WhatsApp Business API integration. Our order processing became 90% faster, customer response time improved dramatically, and we reduced manual work by 75%. The AI chatbot handles customer inquiries perfectly, and the integration with our POS system is seamless. Highly recommend their expertise in restaurant automation.",
    rating: 5,
    project: "WhatsApp Business API + AI Chatbot"
  },
  {
    name: "Priya Sharma",
    role: "CEO",
    company: "LegalDocs Solutions",
    location: "Delhi, India", 
    content: "The document processing AI solution from Shriram Tech has revolutionized our law firm operations. We can now process 500+ legal documents daily with 95% accuracy, which previously took our team weeks. The machine learning models accurately extract key information from contracts, agreements, and legal papers. This AI automation saved us ₹3 lakhs monthly in operational costs.",
    rating: 5,
    project: "Document Processing AI + Machine Learning"
  },
  {
    name: "Amit Patel",
    role: "E-commerce Director",
    company: "ShopIndia Online",
    location: "Bangalore, India",
    content: "Working with Shriram Tech for our e-commerce AI solutions was excellent. Their computer vision system automatically categorizes products, the predictive analytics helps with inventory management, and the WhatsApp integration increased our customer engagement by 200%. The ROI was visible within 4 months. Professional development team with deep AI/ML expertise.",
    rating: 5,
    project: "Computer Vision + Predictive Analytics + WhatsApp API"
  },
  {
    name: "Dr. Sunita Reddy",
    role: "Clinic Director",
    company: "HealthCare Plus",
    location: "Hyderabad, India",
    content: "The healthcare AI automation developed by Shriram Tech streamlined our patient management process significantly. The WhatsApp Business API integration allows patients to book appointments, get reports, and receive medical reminders automatically. The system handles 80% of patient queries without human intervention, allowing our staff to focus on actual patient care.",
    rating: 5,
    project: "Healthcare AI + WhatsApp Business API"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            What Our Clients Say About Our AI/ML Solutions
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Real testimonials from businesses that have transformed their operations with our AI/ML development services, 
            WhatsApp Business API integrations, and intelligent automation solutions. See how we've helped companies 
            across India reduce costs, improve efficiency, and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up animate-stagger-${Math.min(index + 1, 4)}`}
            >
              {/* Quote Icon */}
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Project Info */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Project:</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{testimonial.project}</p>
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                    <span className="font-medium">{testimonial.company}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Clients</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ready to experience similar results? Let's discuss how our AI/ML solutions can transform your business operations, 
              reduce costs, and improve customer satisfaction. Get a free consultation and custom project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917433000131?text=Hi! I saw the testimonials and I'm interested in AI/ML solutions for my business."
                title="Contact us on WhatsApp for free consultation"
                className="btn btn-primary"
              >
                Get Free Consultation
              </a>
              <a
                href="#contact"
                title="View contact options"
                className="btn btn-secondary"
              >
                View All Contact Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
