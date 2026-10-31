import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { ServiceNote } from "@/components/ServiceNote";
import { CtaBanner } from "@/components/CtaBanner";
import { Seo } from "@/components/Seo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Ship scrapping, wreckage removal support, marine cutting, vessel repair, jetty space, heavy-equipment and lifting support, water supply and marine scrap from Apapa, Lagos."
      />
      <PageHero
        title="Our Services"
        eyebrow="One maritime partner"
        intro="Eight core services for vessel owners, contractors, industrial buyers and project partners."
        image="crawler-crane-breakwater"
        imageAlt="Crawler crane on a rock breakwater beside a vessel being dismantled"
      />

      {/* Quick index */}
      <nav aria-label="Services on this page" className="sticky top-16 z-30 hidden border-b border-navy/10 bg-white/95 backdrop-blur lg:block">
        <ul className="container-x flex gap-1 overflow-x-auto py-3">
          {services.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="block px-3 py-2 font-display text-xs font-semibold whitespace-nowrap text-navy/70 uppercase transition-colors hover:bg-offwhite hover:text-teal">
                <span className="mr-1.5 text-amber-600">{s.number}</span>
                {s.title.split(" ")[0]} {s.title.split(" ")[1]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="py-20 sm:py-28">
        <div className="container-x space-y-24 sm:space-y-32">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-36 items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <Reveal className={cn("group relative overflow-hidden", i % 2 === 1 && "lg:order-2")}>
                <ResponsiveImage
                  name={s.image}
                  alt={s.imageAlt}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-0 left-0 bg-navy px-5 py-3 font-display text-2xl font-bold text-amber">{s.number}</span>
                <span aria-hidden="true" className="absolute right-0 bottom-0 h-1 w-1/3 bg-amber" />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center bg-navy text-amber">
                    <s.icon aria-hidden="true" className="size-6" />
                  </span>
                  <span className="eyebrow text-teal">Service {s.number}</span>
                </div>
                <h2 className="mt-6 text-3xl leading-tight font-bold sm:text-4xl">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed">{s.description}</p>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Link to={`/contact?service=${s.slug}#quote`} className={buttonVariants()}>
                    Request this service <ArrowRight aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  {s.slug === "marine-cutting" && (
                    <Link to="/products" className={buttonVariants({ variant: "outline-dark" })}>
                      Cutting equipment we supply
                    </Link>
                  )}
                </div>
              </Reveal>
            </article>
          ))}
          <ServiceNote />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
