'use client';

import { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const services = [
    'WhatsApp Business API',
    'AI Chatbots',
    'Custom Web Development',
    'E-commerce Solutions',
    'Digital Marketing',
    'Consulting',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = formRef.current?.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      errorElement?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Focus on success message for screen readers
      setTimeout(() => {
        const successMessage = document.getElementById('success-message');
        successMessage?.focus();
      }, 100);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="card card-md max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="mb-4 text-gradient">
          Send us a Message
        </h3>
        <p className="text-muted">
          Tell us about your project and we'll get back to you within 2 hours.
        </p>
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div
          id="success-message"
          tabIndex={-1}
          className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3"
          role="status"
          aria-live="polite"
        >
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
          <div>
            <h4 className="text-green-400 font-medium mb-1">Message Sent Successfully!</h4>
            <p className="text-green-300/80 text-sm">
              We've received your message and will respond within 2 hours.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div
          className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <div>
            <h4 className="text-red-400 font-medium mb-1">Submission Failed</h4>
            <p className="text-red-300/80 text-sm">
              There was an error sending your message. Please try again or contact us directly.
            </p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name <span className="text-red-400" aria-label="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input w-full ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
              placeholder="Enter your full name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-400" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address <span className="text-red-400" aria-label="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input w-full ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
              placeholder="your@email.com"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-400" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Company and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input w-full"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input w-full"
              placeholder="+91 12345 67890"
            />
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-input w-full"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message <span className="text-red-400" aria-label="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`form-input w-full resize-vertical ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
            placeholder="Tell us about your project, requirements, or any questions you have..."
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
          />
          {!errors.message && (
            <p id="message-hint" className="mt-2 text-sm text-muted">
              Minimum 10 characters. Be specific about your requirements for better assistance.
            </p>
          )}
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-400" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary btn-lg w-full md:w-auto min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
          
          <p className="mt-4 text-xs text-muted">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </div>
      </form>
    </div>
  );
}
