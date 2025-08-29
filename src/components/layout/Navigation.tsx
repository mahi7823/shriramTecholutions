'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/common/ThemeToggle';
import Logo from '@/components/common/Logo';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'Solutions', href: '/#case-studies' },
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/#contact' }
  ];

  const isNavLinkActive = (href: string) => {
    // Handle SSR - return false during server-side rendering
    if (typeof window === 'undefined') {
      return false;
    }
    
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    if (href.startsWith('#')) {
      return currentHash === href || (href === '/#home' && !currentHash);
    }
    return currentPath === href;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
            >
              <Logo size="md" showText={true} />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = isNavLinkActive(item.href);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg
                    ${isActive 
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                      : 'hover:text-cyan-400 hover:bg-cyan-500/5'
                    }
                  `}
                >
                  {item.name}
                </a>
              );
            })}
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a
                href="https://wa.me/917433000131?text=Hi! I'm interested in AI solutions."
                className="btn btn-primary btn-sm"
              >
                Get Started
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X size={20} className="transition-transform duration-200" />
              ) : (
                <Menu size={20} className="transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700 mt-4 pt-4">
            <div className="flex flex-col space-y-2 pb-4">
              {navItems.map((item) => {
                const isActive = isNavLinkActive(item.href);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`
                      block py-3 px-4 rounded-lg font-medium transition-colors duration-200
                      ${isActive 
                        ? 'text-white bg-cyan-600/10 border-l-2 border-cyan-400' 
                        : 'hover:text-cyan-400 hover:bg-gray-800'
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
              
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="https://wa.me/917433000131?text=Hi! I'm interested in AI solutions."
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}