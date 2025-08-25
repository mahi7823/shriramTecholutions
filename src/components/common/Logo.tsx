'use client';

import { Brain, Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', 
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* AI-themed logo with brain and neural network pattern */}
      <div className={`relative ${sizeClasses[size]} mr-3`}>
        {/* Outer glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-sm opacity-75 animate-pulse"></div>
        
        {/* Main logo container */}
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl p-2 shadow-lg">
          {/* Neural network dots pattern */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute top-1 left-1 w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="absolute top-2 right-1.5 w-0.5 h-0.5 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-1.5 left-2 w-0.5 h-0.5 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-white/40 rounded-full"></div>
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40">
              <line x1="4" y1="4" x2="36" y2="36" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              <line x1="36" y1="8" x2="8" y2="32" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            </svg>
          </div>
          
          {/* Brain icon with AI enhancement */}
          <div className="relative z-10">
            <Brain className="w-full h-full text-white" strokeWidth={2} />
            {/* AI spark effect */}
            <Zap className="absolute -top-0.5 -right-0.5 w-2 h-2 text-yellow-300 animate-bounce" strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* Company name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent`}>
            Shriram Tech
          </span>
          {size !== 'sm' && (
            <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1 font-medium">
              AI Solutions
            </span>
          )}
        </div>
      )}
    </div>
  );
}
