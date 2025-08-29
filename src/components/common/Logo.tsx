'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  src?: string; // optional override
}

export default function Logo({ className = '', showText = true, size = 'md', src = '/logo-mark.svg' }: LogoProps) {
  const sizePx = {
    sm: 28,
    md: 40,
    lg: 48
  }[size];

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative mr-3">
        <Image
          src={src}
          alt="Shriram Tech logo"
          width={sizePx}
          height={sizePx}
          className="rounded-md object-contain"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} font-bold text-[var(--color-text-primary)]`}>
            ShriRam Tech
          </span>
          {size !== 'sm' && (
            <span className="text-xxs text-gray-600 dark:text-gray-400 -mt-0.5 tracking-wide uppercase">
              Automate the World
            </span>
          )}
        </div>
      )}
    </div>
  );
}
