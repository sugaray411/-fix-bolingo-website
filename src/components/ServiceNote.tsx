import { Info } from "lucide-react";
import { company } from "@/data/site";

export function ServiceNote({ dark }: { dark?: boolean }) {
  return (
    <p
      className={
        dark
          ? "flex items-start gap-3 border-l-2 border-amber bg-white/5 px-5 py-4 text-sm text-white/80"
          : "flex items-start gap-3 border-l-2 border-amber bg-white px-5 py-4 text-sm text-slate-body shadow-sm"
      }
    >
      <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber" />
      <span>{company.serviceNote}</span>
    </p>
  );
}
