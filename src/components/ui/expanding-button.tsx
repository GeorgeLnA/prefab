import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

interface ExpandingButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  to: string;
  className?: string;
}

const ExpandingButton = React.forwardRef<HTMLAnchorElement, ExpandingButtonProps>(
  ({ children, to, className, ...props }, ref) => {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const textSpanRef = useRef<HTMLSpanElement>(null);
    const hoverContentRef = useRef<HTMLDivElement>(null);
    const bgCircleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const button = buttonRef.current;
      if (!button) return;

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

    return (
      <Link
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLAnchorElement | null>).current = node;
          }
        }}
        to={to}
        className={cn(
          "relative block w-full overflow-hidden text-center rounded-lg font-medium",
          className
        )}
        {...props}
      >
        <span 
          ref={textSpanRef}
          className="relative z-10 inline-block whitespace-nowrap"
          style={{ transform: "translateX(4px)" }}
        >
          {children}
        </span>
        <div 
          ref={hoverContentRef}
          className="absolute top-0 z-10 flex h-full w-full items-center justify-center gap-2 text-white"
          style={{ transform: "translateX(48px)", opacity: 0 }}
        >
          <span className="whitespace-nowrap">{children}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
        <div 
          ref={bgCircleRef}
          className="absolute rounded-lg bg-gray-900"
          style={{ 
            left: "20%", 
            top: "40%", 
            width: "8px", 
            height: "8px",
            transform: "scale(1)"
          }}
        ></div>
      </Link>
    );
  }
);

ExpandingButton.displayName = "ExpandingButton";

export { ExpandingButton };
