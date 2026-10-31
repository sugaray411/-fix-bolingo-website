import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gauge } from "lucide-react";
import { products, productsNote, type Product } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { CtaBanner } from "@/components/CtaBanner";
import { Seo } from "@/components/Seo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [shown, setShown] = useState(0);
  const main = product.images[shown];

  return (
    <Reveal
      as="li"
      delay={(index % 3) * 0.08}
      id={product.slug}
      className="group relative flex scroll-mt-28 flex-col border border-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-[0_25px_50px_-25px_rgb(11_34_57/0.45)]"
    >
      <span aria-hidden="true" className="absolute top-0 left-0 z-10 h-0.5 w-12 bg-amber transition-all duration-300 group-hover:w-full" />
      {/* Product shots are on white, so they sit on a white tile and keep their whole shape */}
      <div className="relative aspect-square overflow-hidden bg-white p-6">
        {main ? (
          <ResponsiveImage
            name={main.image}
            alt={main.alt}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
            intrinsic={false}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="bg-grid flex h-full flex-col items-center justify-center gap-3 bg-offwhite text-slate-body">
            <Gauge aria-hidden="true" className="size-14 text-teal" />
            <span className="text-sm">Photo coming soon</span>
          </div>
        )}
        <span className="absolute top-0 left-0 bg-navy px-3 py-1.5 font-display text-sm font-bold text-amber">
          {String(index + 1).padStart(2, "0")}
        </span>
        {product.images.length > 1 && (
          <div role="group" aria-label={`${product.name} photos`} className="absolute bottom-3 left-3 flex gap-2">
            {product.images.map((img, i) => (
              <button
                key={img.image}
                type="button"
                onClick={() => setShown(i)}
                aria-pressed={shown === i}
                aria-label={`Show photo ${i + 1}: ${img.alt}`}
                className={cn(
                  "size-12 overflow-hidden border bg-white p-1 shadow-sm transition-colors",
                  shown === i ? "border-teal ring-1 ring-teal" : "border-navy/15 hover:border-teal",
                )}
              >
                <ResponsiveImage name={img.image} alt="" sizes="48px" intrinsic={false} className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl leading-snug font-semibold">{product.name}</h3>
        <p className="mt-3 flex-1 leading-relaxed">{product.description}</p>
        <Link to={`/contact?product=${product.slug}#quote`} className={cn(buttonVariants({ size: "sm" }), "mt-6 self-start")}>
          Request a quote <ArrowRight aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </Reveal>
  );
}

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description="Broco exothermic cutting rods, BR-22 and BR-22 PLUS underwater cutting torches, high-volume oxygen regulators and cutting torch spare parts, from Apapa, Lagos."
      />
      <PageHero
        title="Products"
        eyebrow="Cutting equipment & supplies"
        intro="Underwater and exothermic cutting equipment, consumables and spare parts for marine and industrial cutting work."
        image="deck-cutting-crew"
        imageAlt="Cutting crew with gas cylinders and hoses working on a vessel deck"
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            number="01"
            eyebrow="What we supply"
            title="Cutting equipment for marine and industrial work."
            intro="Ask us for cutting rods, torches, regulators and spare parts, on their own or alongside our marine cutting support."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
            <Reveal as="li" delay={0.16} className="bg-grid-dark flex flex-col justify-between gap-8 bg-navy p-8">
              <div>
                <p className="eyebrow text-amber">Something else?</p>
                <h3 className="mt-4 text-2xl leading-snug font-semibold text-white">Need a part or consumable that isn't listed?</h3>
                <p className="mt-3 leading-relaxed text-white/75">Tell us what you need and we'll confirm availability.</p>
              </div>
              <Link
                to="/contact?service=marine-cutting#quote"
                className={cn(buttonVariants(), "self-start")}
              >
                Ask us <ArrowRight aria-hidden="true" />
              </Link>
            </Reveal>
          </ul>
          <Reveal className="mt-12 flex flex-col gap-6 border-l-2 border-amber bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm">{productsNote}</p>
            <Link to="/services#marine-cutting" className={cn(buttonVariants({ variant: "outline-dark", size: "sm" }), "shrink-0")}>
              Marine cutting support <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
