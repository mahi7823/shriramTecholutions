'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'home', href: '/#home' },
    { name: 'services', href: '/#services' },
    { name: 'case-studies', href: '/#case-studies' },
    { name: 'about', href: '/about' },
    { name: 'contact', href: '/#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Shriram Tech Solutions
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1).replace('-', ' ')}
                </a>
              ))}
              <a
                href="https://wa.me/917433000131?text=Hi! I'm interested in WhatsApp Business API and AI solutions."
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600"
              >
                Get Quote
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1).replace('-', ' ')}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}