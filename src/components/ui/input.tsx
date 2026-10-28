import * as React from "react";
import { cn } from "@/lib/utils";

export const fieldClass =
  "w-full border border-navy/15 bg-white px-4 text-[15px] text-navy placeholder:text-slate-400 transition-colors hover:border-navy/35 focus-visible:border-teal focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-teal aria-invalid:border-red-600 aria-invalid:outline-red-600";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(fieldClass, "h-12", className)} {...props} />;
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea className={cn(fieldClass, "min-h-36 resize-y py-3", className)} {...props} />;
}

function NativeSelect({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        fieldClass,
        "h-12 appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%230B2239' stroke-width='2'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10",
        className,
      )}
      {...props}
    />
  );
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("mb-2 block font-display text-xs font-semibold tracking-[0.14em] text-navy uppercase", className)}
      {...props}
    />
  );
}

export { Input, Textarea, NativeSelect, Label };
