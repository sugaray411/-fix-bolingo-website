import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import type { GalleryItem } from "@/data/site";
import { ResponsiveImage } from "./ResponsiveImage";
import { Lightbox } from "./Lightbox";

/** Masonry grid of site photos with hover captions; opens a lightbox. */
export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        <AnimatePresence initial={false}>
          {items.map((item, i) => (
            <motion.li
              key={item.image}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden bg-navy text-left"
                aria-label={`Open image: ${item.caption}`}
              >
                <ResponsiveImage
                  name={item.image}
                  alt={item.caption}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105"
                />
                <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy/90 via-navy/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="eyebrow text-amber">{item.category}</span>
                  <span className="mt-1 font-display text-lg font-semibold text-white">{item.caption}</span>
                </span>
                <span aria-hidden="true" className="absolute top-4 right-4 grid size-10 place-items-center bg-amber text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="size-4" />
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <Lightbox items={items} index={active} onClose={() => setActive(null)} onIndexChange={setActive} />
    </>
  );
}
