import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, nav, services } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const heading = "eyebrow mb-5 text-amber";
  const link = "text-white/70 transition-colors hover:text-white focus-visible:text-white";
  return (
    <footer className="relative bg-navy-900 text-sm">
      <div aria-hidden="true" className="h-0.5 bg-amber" />
      <div className="bg-grid-dark">
        <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm leading-relaxed text-white/70">
              Maritime and industrial support services from the Kirikiri waterfront, Apapa, Lagos.
            </p>
          </div>
          <div className="lg:col-span-2">
            <h2 className={heading}>Quick links</h2>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className={link}>{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className={heading}>Services</h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}><Link to={`/services#${s.slug}`} className={link}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className={heading}>Contact</h2>
            <ul className="space-y-4">
              <li>
                <a href={company.phoneHref} className={`${link} flex gap-3`}><Phone aria-hidden="true" className="size-4 shrink-0 text-amber" />{company.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className={`${link} flex gap-3 break-all`}><Mail aria-hidden="true" className="size-4 shrink-0 text-amber" />{company.email}</a>
              </li>
              <li className="flex gap-3 text-white/70"><MapPin aria-hidden="true" className="size-4 shrink-0 text-amber" />{company.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-white/65 sm:flex-row sm:justify-between">
          <p>© 2026 {company.name}</p>
          <p>Kirikiri Waterside · Apapa · Lagos</p>
        </div>
      </div>
    </footer>
  );
}
