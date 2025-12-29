import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ExpandingButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  to: string;
  className?: string;
}

const ExpandingButton = React.forwardRef<HTMLAnchorElement, ExpandingButtonProps>(
  ({ children, to, className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        to={to}
        className={cn(
          "group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-black",
          className
        )}
        {...props}
      >
        <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
          {children}
        </span>
        <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white w-full">
          <span>{children}</span>
        </div>
      </Link>
    );
  }
);

ExpandingButton.displayName = "ExpandingButton";

export { ExpandingButton };
