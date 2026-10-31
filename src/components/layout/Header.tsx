import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { company, nav } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panel.current) {
        const els = panel.current.querySelectorAll<HTMLElement>("a, button");
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      menuButton.current?.focus();
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy/95 shadow-[0_10px_30px_-15px_rgb(0_0_0/0.5)] backdrop-blur-md" : "bg-gradient-to-b from-black/45 to-transparent",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-amber focus:px-4 focus:py-2 focus:text-navy">
        Skip to content
      </a>
      <div className={cn("container-x flex items-center justify-between transition-all duration-300", scrolled ? "h-16" : "h-20 lg:h-24")}>
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative px-2.5 py-2 font-display text-sm font-medium tracking-wide text-white/85 uppercase transition-colors hover:text-white xl:px-4",
                      "after:absolute after:inset-x-2.5 xl:after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-amber after:transition-transform hover:after:scale-x-100",
                      isActive && "text-white after:scale-x-100",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact#quote" className={cn(buttonVariants({ size: scrolled ? "sm" : "default" }), "hidden sm:inline-flex")}>
            Request a Quote
          </Link>
          <button
            ref={menuButton}
            type="button"
            className="grid size-11 place-items-center text-white ring-1 ring-white/25 transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="bg-grid-dark fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-x flex h-20 items-center justify-between">
              <Logo onClick={() => setOpen(false)} />
              <button type="button" aria-label="Close menu" className="grid size-11 place-items-center text-white ring-1 ring-white/25 hover:bg-white/10" onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
            <nav aria-label="Mobile" className="container-x mt-6 flex-1">
              <ul className="border-t border-white/10">
                {nav.map((item, i) => (
                  <motion.li key={item.to} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }} className="border-b border-white/10">
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        cn("flex items-center justify-between py-5 font-display text-3xl font-semibold text-white transition-colors hover:text-amber", isActive && "text-amber")
                      }
                    >
                      <span><span className="mr-4 text-sm text-white/60">0{i + 1}</span>{item.label}</span>
                      <ArrowRight aria-hidden="true" className="size-5" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <Link to="/contact#quote" className={cn(buttonVariants({ size: "lg" }), "mt-8 w-full")}>
                Request a Quote
              </Link>
            </nav>
            <div className="container-x space-y-3 py-8 text-sm text-white/75">
              <a href={company.phoneHref} className="flex items-center gap-3 hover:text-amber"><Phone aria-hidden="true" className="size-4 text-amber" />{company.phoneDisplay}</a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 break-all hover:text-amber"><Mail aria-hidden="true" className="size-4 shrink-0 text-amber" />{company.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
