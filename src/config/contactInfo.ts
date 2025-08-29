// Centralized Contact Information and Social Media Links
// Update all your contact details here and they will be used throughout the app

export const contactInfo = {
  // Personal Information
  name: "Shriram Tech Solutions",
  tagline: "Automate the World",
  
  // Contact Details
  email: "myadav8890@outlook.com",
  phone: "+91-7433000131",
  whatsappNumber: "917433000131", // Without + sign for WhatsApp links
  
  // Business Information
  location: "India (Remote Services)",
  availability: "Available 6-11 PM IST",
  experience: "5+ Years Experience",
  
  // Domain and Website
  domain: "shritech.digital",
  website: "https://shritech.digital",
  
  // Social Media Links (Update these with your actual profiles)
  socialMedia: {
    // LinkedIn
    linkedin: "https://www.linkedin.com/in/your-linkedin-profile", // Update this
    
    // Twitter/X
    twitter: "https://twitter.com/your-twitter-handle", // Update this
    
    // Facebook
    facebook: "https://facebook.com/your-facebook-page", // Update this
    
    // Instagram
    instagram: "https://instagram.com/your-instagram-handle", // Update this
    
    // GitHub
    github: "https://github.com/mahi7823/shriramTecholutions",
    
    // YouTube (if you have one)
    youtube: "https://youtube.com/@your-channel", // Update this or set to null
    
    // Telegram (if you use it)
    telegram: "https://t.me/your-telegram-username", // Update this or set to null
  },
  
  // WhatsApp Quick Messages
  whatsappMessages: {
    general: "Hi! I'm interested in your AI/ML services.",
    consultation: "Hi! I want a free consultation about AI solutions for my business.",
    whatsappApi: "Hi! I want to discuss WhatsApp Business API integration.",
    pricing: "Hi! Can you provide pricing for your AI/ML services?",
    support: "Hi! I need help with my existing project.",
    faq: "Hi! I have questions about your services.",
  },
  
  // Business Hours
  businessHours: {
    timezone: "IST (GMT+5:30)",
    weekdays: "6:00 PM - 11:00 PM",
    weekends: "Available on request",
  },
  
  // Professional Details
  professional: {
    title: "AI/ML Developer & WhatsApp Business API Expert",
    specializations: [
      "WhatsApp Business API Integration",
      "AI/ML Development",
      "FastAPI & Next.js",
      "Python Development",
      "Computer Vision",
      "Document Processing AI",
      "Chatbot Development",
      "Business Intelligence"
    ],
    certifications: [
      "WhatsApp Business API Specialist",
      "AI/ML Expert"
    ]
  }
}

// Helper functions for generating links
export const generateWhatsAppLink = (message?: string) => {
  const encodedMessage = message ? encodeURIComponent(message) : encodeURIComponent(contactInfo.whatsappMessages.general)
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodedMessage}`
}

export const generateEmailLink = (subject?: string, body?: string) => {
  let link = `mailto:${contactInfo.email}`
  const params = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  if (params.length > 0) link += `?${params.join('&')}`
  return link
}

export const generatePhoneLink = () => {
  return `tel:${contactInfo.phone}`
}

// Export individual items for easy access
export const { 
  email, 
  phone, 
  website, 
  domain, 
  socialMedia, 
  whatsappMessages,
  professional 
} = contactInfo
