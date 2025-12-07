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
    
    // Determine if button starts with grey background - if so, expand with yellow
    const isGreyBackground = className?.includes('bg-gray-900');
    const expandingColor = isGreyBackground ? 'bg-primary' : 'bg-gray-900';

    useEffect(() => {
      const button = buttonRef.current;
      if (!button) return;

      let enterTimeline: gsap.core.Timeline | null = null;
      let leaveTimeline: gsap.core.Timeline | null = null;

      const handleMouseEnter = () => {
        // Kill any running leave animation
        if (leaveTimeline) {
          leaveTimeline.kill();
          leaveTimeline = null;
        }
        
        // Kill any running enter animation
        if (enterTimeline) {
          enterTimeline.kill();
        }

        // Create a timeline for smoother coordinated animation
        enterTimeline = gsap.timeline();
        
        // Animate initial text out (fade and move right)
        if (textSpanRef.current) {
          enterTimeline.to(textSpanRef.current, {
            x: 48,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          }, 0);
        }
        
        // Animate expanding circle (starts slightly before text fades completely)
        if (bgCircleRef.current) {
          enterTimeline.to(bgCircleRef.current, {
            left: "0%",
            top: "0%",
            width: "100%",
            height: "100%",
            scale: 1.8,
            duration: 0.5,
            ease: "power2.out",
          }, 0.1);
        }
        
        // Animate hover text in (fade and move from right, starts when initial text is mostly gone)
        if (hoverContentRef.current) {
          enterTimeline.to(hoverContentRef.current, {
            x: -4,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }, 0.3);
        }
      };

      const handleMouseLeave = () => {
        // Kill any running enter animation
        if (enterTimeline) {
          enterTimeline.kill();
          enterTimeline = null;
        }
        
        // Kill any running leave animation
        if (leaveTimeline) {
          leaveTimeline.kill();
        }

        // Create a timeline for smoother coordinated animation
        leaveTimeline = gsap.timeline({
          onComplete: () => {
            leaveTimeline = null;
            // Ensure final state is correct
            if (textSpanRef.current) {
              gsap.set(textSpanRef.current, { x: 4, opacity: 1 });
            }
            if (hoverContentRef.current) {
              gsap.set(hoverContentRef.current, { x: 48, opacity: 0 });
            }
            if (bgCircleRef.current) {
              gsap.set(bgCircleRef.current, {
                left: "20%",
                top: "40%",
                width: "8px",
                height: "8px",
                scale: 1
              });
            }
          }
        });
        
        // Animate hover text out first (fade and move right) - must complete before color changes
        if (hoverContentRef.current) {
          leaveTimeline.to(hoverContentRef.current, {
            x: 48,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          }, 0);
        }
        
        // Animate circle back to small size - starts AFTER text is completely gone
        if (bgCircleRef.current) {
          leaveTimeline.to(bgCircleRef.current, {
            left: "20%",
            top: "40%",
            width: "8px",
            height: "8px",
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          }, 0.3);
        }
        
        // Animate initial text back in - starts when circle is shrinking
        if (textSpanRef.current) {
          leaveTimeline.to(textSpanRef.current, {
            x: 4,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          }, 0.4);
        }
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        // Clean up animations
        if (enterTimeline) enterTimeline.kill();
        if (leaveTimeline) leaveTimeline.kill();
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
          ref={bgCircleRef}
          className={`absolute rounded-lg ${expandingColor} z-20`}
          style={{ 
            left: "20%", 
            top: "40%", 
            width: "8px", 
            height: "8px",
            transform: "scale(1)"
          }}
        ></div>
        <div 
          ref={hoverContentRef}
          className="absolute top-0 z-30 flex h-full w-full items-center justify-center gap-2 text-white"
          style={{ transform: "translateX(48px)", opacity: 0 }}
        >
          <span className="whitespace-nowrap">{children}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    );
  }
);

ExpandingButton.displayName = "ExpandingButton";

export { ExpandingButton };
