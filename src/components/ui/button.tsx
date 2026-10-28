import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-display text-sm font-semibold tracking-wide uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-amber text-navy hover:bg-amber-600 shadow-[0_10px_30px_-12px_rgb(245_165_36/0.7)] hover:-translate-y-0.5",
        navy: "bg-navy text-white hover:bg-navy-700 hover:-translate-y-0.5",
        teal: "bg-teal text-white hover:bg-teal-600 hover:-translate-y-0.5",
        outline: "border-2 border-white/70 text-white hover:border-white hover:bg-white hover:text-navy",
        "outline-dark": "border-2 border-navy text-navy hover:bg-navy hover:text-white",
        link: "px-0 text-teal underline-offset-4 hover:text-navy hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
