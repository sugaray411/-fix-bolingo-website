import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  number?: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ number, eyebrow, title, intro, dark, align = "left", className }: Props) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow flex items-center gap-3", align === "center" && "justify-center", dark ? "text-amber" : "text-teal")}>
        {number && <span className={dark ? "text-white/65" : "text-slate-body"}>{number}</span>}
        <span aria-hidden="true" className="h-0.5 w-8 bg-amber" />
        {eyebrow}
      </p>
      <h2 className={cn("mt-5 text-3xl leading-[1.08] font-bold sm:text-4xl lg:text-5xl", dark && "text-white")}>{title}</h2>
      {intro && <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/75" : "text-slate-body")}>{intro}</p>}
    </Reveal>
  );
}
