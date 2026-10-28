import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ImageKey } from "@/data/site";
import { ResponsiveImage } from "./ResponsiveImage";

type Props = { title: string; eyebrow: string; intro?: string; image: ImageKey; imageAlt: string };

export function PageHero({ title, eyebrow, intro, image, imageAlt }: Props) {
  return (
    <section className="relative isolate flex min-h-[460px] items-end overflow-hidden bg-navy pt-32 pb-16 sm:min-h-[520px] sm:pb-20">
      <ResponsiveImage name={image} alt={imageAlt} priority intrinsic={false} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/80 to-navy/50" />
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0 -z-10 opacity-60" />
      <div className="container-x">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-white/70">
            <li>
              <Link to="/" className="transition-colors hover:text-amber">Home</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="size-4" /></li>
            <li aria-current="page" className="text-white">{title}</li>
          </ol>
        </nav>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <p className="eyebrow mt-8 flex items-center gap-3 text-amber">
            <span aria-hidden="true" className="h-0.5 w-8 bg-amber" />
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.04] font-bold text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <p className="mt-5 max-w-2xl text-lg text-white/80">{intro}</p>}
        </motion.div>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-40 bg-amber" />
    </section>
  );
}
