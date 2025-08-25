'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/common/ThemeToggle';
import Logo from '@/components/common/Logo';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'home', href: '/#home' },
    { name: 'services', href: '/#services' },
    { name: 'case-studies', href: '/#case-studies' },
    { name: 'about', href: '/about' },
    { name: 'blog', href: '/blog' },
    { name: 'contact', href: '/#contact' }
  ];

  useEffect(() => {
    // Get current path and hash
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    // Determine active section based on current URL
    if (currentPath === '/about') {
      setActiveSection('about');
    } else if (currentPath === '/blog' || currentPath.startsWith('/blog/')) {
      setActiveSection('blog');
    } else if (currentHash) {
      // For hash-based navigation (home page sections)
      const section = currentHash.substring(1); // Remove the '#'
      setActiveSection(section);
    } else {
      // Default to home if no specific section
      setActiveSection('home');
    }

    // Listen for hash changes (when navigating within the same page)
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = hash.substring(1);
        setActiveSection(section);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const getNavItemClasses = (itemName: string) => {
    const isActive = activeSection === itemName;
    const baseClasses = "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200";
    
    if (isActive) {
      return `${baseClasses} text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900`;
    } else {
      return `${baseClasses} text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900`;
    }
  };

  const getMobileNavItemClasses = (itemName: string) => {
    const isActive = activeSection === itemName;
    const baseClasses = "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200";
    
    if (isActive) {
      return `${baseClasses} text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/40`;
    } else {
      return `${baseClasses} text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30`;
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <Logo size="md" showText={true} />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={getNavItemClasses(item.name)}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1).replace('-', ' ')}
                </a>
              ))}
              <ThemeToggle />
              <a
                href="https://wa.me/917433000131?text=Hi! I'm interested in WhatsApp Business API and AI solutions."
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600"
              >
                Get Quote
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={getMobileNavItemClasses(item.name)}
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