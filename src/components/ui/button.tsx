import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5 shadow-button magnetic-button",
        premium: "bg-gradient-to-r from-tesla-blue to-tesla-purple text-white hover:shadow-xl hover:-translate-y-1 shadow-tesla magnetic-button backdrop-blur-md border border-white/20",
        electric: "bg-gradient-to-r from-tesla-electric to-tesla-blue text-white hover:shadow-xl hover:-translate-y-1 shadow-tesla magnetic-button",
        success: "bg-gradient-to-r from-tesla-green to-tesla-blue text-white hover:shadow-lg hover:-translate-y-0.5 magnetic-button",
        outline: "border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-xl glass-effect",
        secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl border border-white/10 glass-effect",
        ghost: "text-white hover:bg-white/10 hover:backdrop-blur-xl",
        link: "text-tesla-blue underline-offset-4 hover:underline hover:text-tesla-electric",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-6 text-base font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
