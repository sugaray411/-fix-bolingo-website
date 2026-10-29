import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/site";
import { buttonVariants } from "./ui/button";
import { ResponsiveImage } from "./ResponsiveImage";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-28">
      <ResponsiveImage name="scrap-haulage-seafront" alt="" sizes="100vw" intrinsic={false} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/95 to-teal/70" />
      <div aria-hidden="true" className="bg-steel absolute inset-0 -z-10" />
      <div className="container-x flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-amber">
            <span aria-hidden="true" className="h-0.5 w-8 bg-amber" /> Start a conversation
          </p>
          <h2 className="mt-5 text-3xl leading-[1.08] font-bold text-white sm:text-4xl lg:text-5xl">
            Let's discuss your next marine or industrial project.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            We welcome project enquiries, supplier relationships, service partnerships and requests for quotations.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col gap-4 sm:flex-row">
          <a href={company.phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })}>
            <Phone aria-hidden="true" /> {company.phoneDisplay}
          </a>
          <Link to="/contact#quote" className={buttonVariants({ size: "lg" })}>
            Request a Quote <ArrowRight aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
