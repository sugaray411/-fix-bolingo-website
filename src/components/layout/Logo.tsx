import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className={cn("group flex items-center gap-3", className)}>
      <span aria-hidden="true" className="relative grid size-10 place-items-center bg-white/10 ring-1 ring-white/20 transition-colors group-hover:bg-amber">
        <svg viewBox="0 0 24 24" className="size-6 text-amber transition-colors group-hover:text-navy" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v13M8 7h8M5 13c0 4 3.1 7 7 7s7-3 7-7M3 13h4M17 13h4" strokeLinecap="square" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl font-bold tracking-[0.08em] text-white">FIX BOLINGO</span>
        <span className="mt-1 block text-[10px] font-medium tracking-[0.24em] text-white/70 uppercase">International Limited</span>
      </span>
    </Link>
  );
}
