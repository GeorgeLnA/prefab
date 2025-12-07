'use client';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface AnimatedButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: React.ReactNode;
  className?: string;
  asLink?: boolean;
  href?: string;
  variant?: 'primary' | 'secondary' | 'white' | 'whiteOnYellow' | 'yellow' | 'yellowOnWhite' | 'greyToYellow' | 'greyToWhite' | 'whiteToGrey' | 'dark';
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      children,
      className,
      asLink = false,
      href,
      variant = 'yellow',
      onClick,
      ...props
    },
    ref,
  ) => {
    // Determine colors based on variant
    // White buttons → yellow on hover
    // Yellow buttons → dark blue on hover
    // Dark buttons → yellow on hover
    const getColors = () => {
      if (variant === 'yellow') {
        // Yellow button: yellow → white
        return {
          topBg: 'bg-primary',
          topText: 'text-black',
          bottomBg: 'bg-white',
          bottomText: 'text-black',
        };
      } else if (variant === 'primary') {
        // Primary button (header): yellow → grey
        return {
          topBg: 'bg-primary',
          topText: 'text-black',
          bottomBg: 'bg-gray-900',
          bottomText: 'text-white',
        };
      } else if (variant === 'dark') {
        // Dark button: dark blue → white
        return {
          topBg: 'bg-gray-900',
          topText: 'text-white',
          bottomBg: 'bg-white',
          bottomText: 'text-black',
        };
      } else if (variant === 'whiteOnYellow') {
        // White button on yellow background: white → white
        return {
          topBg: 'bg-white',
          topText: 'text-gray-900',
          bottomBg: 'bg-white',
          bottomText: 'text-gray-900',
        };
      } else if (variant === 'yellowOnWhite') {
        // Yellow button on white background: yellow → grey
        return {
          topBg: 'bg-primary',
          topText: 'text-black',
          bottomBg: 'bg-gray-900',
          bottomText: 'text-white',
        };
      } else if (variant === 'greyToYellow') {
        // Grey button: grey → yellow (brand yellow)
        return {
          topBg: 'bg-gray-900',
          topText: 'text-white',
          bottomBg: 'bg-primary',
          bottomText: 'text-black',
        };
      } else if (variant === 'greyToWhite') {
        // Grey button: grey → white
        return {
          topBg: 'bg-gray-900',
          topText: 'text-white',
          bottomBg: 'bg-white',
          bottomText: 'text-gray-900',
        };
      } else if (variant === 'whiteToGrey') {
        // White button: white → grey
        return {
          topBg: 'bg-white',
          topText: 'text-gray-900',
          bottomBg: 'bg-gray-900',
          bottomText: 'text-white',
        };
      } else {
        // White button: white → yellow
        return {
          topBg: 'bg-white',
          topText: 'text-gray-900',
          bottomBg: 'bg-primary',
          bottomText: 'text-black',
        };
      }
    };

    const colors = getColors();

    const buttonContent = (
      <button
        ref={ref}
        className={cn(
          'group/btn relative cursor-pointer p-2 overflow-hidden rounded-lg text-center font-thin',
          colors.topBg,
          colors.topText,
          className,
        )}
        onClick={onClick}
        {...props}
      >
        <span className={cn(
          'translate-y-0 md:group-hover/btn:-translate-y-12 md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap',
        )}>
          {children}
        </span>
        <div className={cn(
          'flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap',
          colors.bottomBg,
          colors.bottomText,
        )}>
          <span>{children}</span>
        </div>
      </button>
    );

    if (asLink && href) {
      return (
        <Link to={href} className="inline-block">
          {buttonContent}
        </Link>
      );
    }

    return buttonContent;
  },
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton, type AnimatedButtonProps };
