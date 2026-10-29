import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/data/site";
import { ResponsiveImage, imageSrc } from "./ResponsiveImage";

type Props = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export function Lightbox({ items, index, onClose, onIndexChange }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Leave arrow keys to the video's own controls (seeking) when focused
      else if (e.target instanceof HTMLVideoElement) return;
      else if (e.key === "ArrowRight") onIndexChange((index + 1) % items.length);
      else if (e.key === "ArrowLeft") onIndexChange((index - 1 + items.length) % items.length);
      else if (e.key === "Tab") {
        // Keep focus inside the dialog
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndexChange]);

  const item = index !== null ? items[index] : null;
  const navBtn =
    "absolute top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center bg-white/10 text-white backdrop-blur transition-colors hover:bg-amber hover:text-navy";

  return createPortal(
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.video ? "Video" : "Image"} ${index + 1} of ${items.length}: ${item.caption}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/95 p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close gallery" className="absolute top-4 right-4 z-10 grid size-12 place-items-center bg-white/10 text-white transition-colors hover:bg-amber hover:text-navy">
            <X />
          </button>
          <button type="button" aria-label="Previous image" className={`${navBtn} left-2 sm:left-6`} onClick={(e) => { e.stopPropagation(); onIndexChange((index - 1 + items.length) % items.length); }}>
            <ChevronLeft />
          </button>
          <motion.figure
            key={item.image}
            className="relative max-h-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {item.video ? (
              <video
                key={item.video}
                className="max-h-[78vh] w-auto max-w-full bg-black"
                src={`${import.meta.env.BASE_URL}${item.video}`}
                poster={imageSrc(item.image, 1024)}
                controls
                autoPlay
                muted
                playsInline
                aria-label={item.caption}
              />
            ) : (
              <ResponsiveImage name={item.image} alt={item.caption} sizes="(min-width: 1024px) 1024px, 100vw" priority className="max-h-[78vh] w-auto object-contain" />
            )}
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm text-white/80">
              <span><span className="eyebrow mr-3 text-amber">{item.category}</span>{item.caption}</span>
              <span className="tabular-nums text-white/65">{index + 1} / {items.length}</span>
            </figcaption>
          </motion.figure>
          <button type="button" aria-label="Next image" className={`${navBtn} right-2 sm:right-6`} onClick={(e) => { e.stopPropagation(); onIndexChange((index + 1) % items.length); }}>
            <ChevronRight />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
