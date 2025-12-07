import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

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
>(({ text = "Button", className, asLink = false, href, to, ...props }, ref) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const textSpanRef = useRef<HTMLSpanElement>(null);
  const hoverContentRef = useRef<HTMLDivElement>(null);
  const bgCircleRef = useRef<HTMLDivElement>(null);

  // Detect button background color from className
  const isYellow = className?.includes('bg-primary') || className?.includes('bg-yellow');
  const isGrey = className?.includes('bg-gray') || className?.includes('bg-grey');
  const isWhite = className?.includes('bg-white');
  
  // Determine hover colors: 
  // - Yellow buttons -> Grey hover
  // - Grey buttons -> Yellow hover
  // - White buttons -> Yellow hover (default)
  // - Default (no bg specified) -> Yellow hover
  const hoverBgColor = isYellow ? 'bg-gray-900' : 'bg-primary';
  const hoverTextColor = isYellow ? 'text-white' : 'text-black';

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Check if device supports hover (desktop)
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    if (!supportsHover) return;

    const handleMouseEnter = () => {
      if (textSpanRef.current) {
        gsap.to(textSpanRef.current, {
          x: 48,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }
      if (hoverContentRef.current) {
        gsap.to(hoverContentRef.current, {
          x: -4,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      }
      if (bgCircleRef.current) {
        gsap.to(bgCircleRef.current, {
          left: "0%",
          top: "0%",
          width: "100%",
          height: "100%",
          scale: 1.8,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (textSpanRef.current) {
        gsap.to(textSpanRef.current, {
          x: 4,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      }
      if (hoverContentRef.current) {
        gsap.to(hoverContentRef.current, {
          x: 48,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }
      if (bgCircleRef.current) {
        gsap.to(bgCircleRef.current, {
          left: "20%",
          top: "40%",
          width: "8px",
          height: "8px",
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const baseClasses = cn(
    "relative cursor-pointer overflow-hidden rounded-lg bg-background py-2.5 px-6 text-center font-thin inline-flex items-center justify-center min-w-[140px]",
    className,
  );

  const content = (
    <>
      <span 
        ref={textSpanRef}
        className="inline-block whitespace-nowrap"
        style={{ transform: "translateX(4px)" }}
      >
        {text}
      </span>
      <div 
        ref={hoverContentRef}
        className={cn("absolute top-0 z-10 flex h-full w-full items-center justify-center gap-2", hoverTextColor)}
        style={{ transform: "translateX(48px)", opacity: 0 }}
      >
        <span className="whitespace-nowrap">{text}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      <div 
        ref={bgCircleRef}
        className={cn("absolute rounded-lg", hoverBgColor)}
        style={{ 
          left: "20%", 
          top: "40%", 
          width: "8px", 
          height: "8px",
          transform: "scale(1)"
        }}
      ></div>
    </>
  );

  if (asLink && (to || href)) {
    const linkProps = to ? { to } : { to: href };
    return (
      <Link
        {...linkProps}
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        className={baseClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={(node) => {
        buttonRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

