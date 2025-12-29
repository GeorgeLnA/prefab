import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  asLink?: boolean;
  href?: string;
  to?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, asLink = false, href, to, children, ...props }, ref) => {
  // Detect button background color from className
  const isYellow = className?.includes('bg-primary') || className?.includes('bg-yellow');
  const isGrey = className?.includes('bg-gray') || className?.includes('bg-grey');
  
  // Determine hover colors: 
  // - Yellow buttons -> Grey hover
  // - Grey buttons -> Yellow hover
  // - Default -> Yellow hover
  const hoverBgColor = isYellow ? 'bg-gray-900' : 'bg-primary';
  const hoverTextColor = isYellow ? 'text-white' : 'text-black';
  const initialBgColor = isYellow ? 'bg-primary' : (isGrey ? 'bg-gray-900' : 'bg-primary');
  const initialTextColor = isYellow ? 'text-black' : (isGrey ? 'text-white' : 'text-black');

  const displayText = text || children;

  const baseClasses = cn(
    "group/btn relative cursor-pointer overflow-hidden rounded-lg py-2.5 px-6 text-center font-thin inline-flex items-center justify-center min-w-[140px]",
    initialBgColor,
    initialTextColor,
    className,
  );

  const content = (
    <>
      <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap">
        {displayText}
      </span>
      <div className={cn(
        "flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap",
        hoverBgColor,
        hoverTextColor
      )}>
        <span>{displayText}</span>
      </div>
    </>
  );

  if (asLink && (to || href)) {
    const linkProps = to ? { to } : { to: href };
    return (
      <Link
        {...linkProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={baseClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

