import { useState } from "react";
import { gallery, galleryCategories } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import { CtaBanner } from "@/components/CtaBanner";
import { Seo } from "@/components/Seo";
import { cn } from "@/lib/utils";

type Filter = (typeof galleryCategories)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <>
      <Seo title="Projects & Gallery" description="Photos from ship scrapping, equipment and waterfront operations at Kirikiri Waterside, Apapa, Lagos." />
      <PageHero
        title="Projects & Gallery"
        eyebrow="On site"
        intro="A look at our yard, equipment and waterfront operations at Kirikiri, Apapa."
        image="dismantling-site-3"
        imageAlt="Vessel dismantling operations on the waterfront"
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div role="group" aria-label="Filter gallery" className="flex flex-wrap gap-2">
            {galleryCategories.map((c) => {
              const count = c === "All" ? gallery.length : gallery.filter((g) => g.category === c).length;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={filter === c}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "h-11 border px-5 font-display text-sm font-semibold tracking-wide uppercase transition-colors",
                    filter === c ? "border-navy bg-navy text-white" : "border-navy/15 bg-white text-navy hover:border-teal hover:text-teal",
                  )}
                >
                  {c} <span className={filter === c ? "text-amber" : "text-slate-body"}>({count})</span>
                </button>
              );
            })}
          </div>
          <p aria-live="polite" className="sr-only">Showing {items.length} images</p>
          <div className="mt-10">
            <Gallery key={filter} items={items} />
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
