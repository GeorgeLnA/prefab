/**
 * Design System Constants
 * Centralized design tokens for consistent styling across the website
 */

export const SPACING = {
  // Section padding
  section: {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20',
    lg: 'py-20 sm:py-24',
    xl: 'py-24 sm:py-32',
  },
  // Container padding
  container: 'px-4 sm:px-6 lg:px-8',
  // Grid gaps
  gap: {
    sm: 'gap-4 sm:gap-6',
    md: 'gap-6 lg:gap-8',
    lg: 'gap-8 lg:gap-10',
  },
  // Margins
  margin: {
    sm: 'mb-4 sm:mb-6',
    md: 'mb-6 sm:mb-8',
    lg: 'mb-8 sm:mb-12',
    xl: 'mb-12 sm:mb-16',
  },
} as const;

export const TYPOGRAPHY = {
  // Hero/Display text (largest)
  display: {
    xl: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-light leading-tight',
    lg: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-light leading-tight',
    md: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-light leading-tight',
  },
  // Page titles
  pageTitle: 'text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-tight',
  // Section headings (H2)
  sectionTitle: 'text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight',
  // Subsection headings (H3)
  subsectionTitle: 'text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-gray-900 leading-tight',
  // Card titles
  cardTitle: 'text-xl sm:text-2xl font-heading font-semibold text-gray-900 leading-tight',
  // Small headings
  smallHeading: 'text-lg sm:text-xl font-heading font-semibold text-gray-900 leading-tight',
  // Body text
  body: {
    xl: 'text-lg sm:text-xl md:text-2xl font-body font-normal text-gray-900 leading-relaxed',
    lg: 'text-base sm:text-lg md:text-xl font-body font-normal text-gray-900 leading-relaxed',
    md: 'text-sm sm:text-base md:text-lg font-body font-normal text-gray-900 leading-relaxed',
    sm: 'text-sm sm:text-base font-body font-normal text-gray-900 leading-relaxed',
    xs: 'text-xs sm:text-sm font-body font-normal text-gray-900 leading-relaxed',
  },
  // Labels/Badges
  label: {
    lg: 'text-sm sm:text-base uppercase tracking-wider font-body font-semibold',
    md: 'text-xs sm:text-sm uppercase tracking-wider font-body font-semibold',
    sm: 'text-[10px] sm:text-xs uppercase tracking-wider font-body font-semibold',
  },
  // Navigation
  nav: 'text-xs sm:text-sm md:text-base font-body font-normal text-gray-900',
  // Button text
  button: {
    lg: 'text-base sm:text-lg font-body font-semibold',
    md: 'text-sm sm:text-base font-body font-semibold',
    sm: 'text-xs sm:text-sm font-body font-semibold',
  },
  // Stats/Numbers
  stat: {
    lg: 'text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary',
    md: 'text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary',
    sm: 'text-xl sm:text-2xl font-heading font-bold text-primary',
  },
} as const;

export const BUTTONS = {
  // Primary button (yellow)
  primary: 'px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base rounded-lg',
  // Secondary button (grey/dark)
  secondary: 'px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base rounded-lg',
  // Full width button
  fullWidth: 'w-full py-3 sm:py-4 font-semibold text-sm sm:text-base rounded-lg',
  // Small button
  small: 'px-4 sm:px-5 py-2 sm:py-2.5 font-medium text-xs sm:text-sm rounded-lg',
} as const;

export const CARDS = {
  // Standard card padding
  padding: 'p-4 sm:p-6 lg:p-8',
  // Card image heights
  imageHeight: {
    sm: 'h-48 sm:h-56 md:h-64',
    md: 'h-64 sm:h-72 md:h-80',
    lg: 'h-80 sm:h-96',
  },
  // Card gaps
  gap: 'gap-6 lg:gap-8',
} as const;

export const LAYOUT = {
  // Max width container
  maxWidth: 'max-w-[1920px] mx-auto',
  // Standard container
  container: 'max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8',
  // Content max width
  contentMaxWidth: 'max-w-3xl mx-auto',
  // Wide content max width
  wideContentMaxWidth: 'max-w-4xl mx-auto',
} as const;
