import { useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";
import { company } from "@/data/site";

const base = import.meta.env.BASE_URL;

/**
 * Muted, looping background video for the home hero. The parent owns
 * `playing` so the pause control can sit above the hero's overlays; it
 * starts false for visitors who prefer reduced motion, who see the poster.
 */
export function HeroVideo({ playing, onBlocked }: { playing: boolean; onBlocked: () => void }) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (!playing) {
      v.pause();
      return;
    }
    // Autoplay can be refused (e.g. low-power mode); fall back to the poster
    const start = () => v.play().catch(onBlocked);
    // Fetch the video only after the page has loaded, so it doesn't delay
    // the text and images; the poster frame shows until then.
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, [playing, onBlocked]);

  return (
    <>
      <video
        ref={video}
        className="h-full w-full object-cover"
        poster={`${base}${company.heroVideo.poster}`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={`${base}${company.heroVideo.src}`} type="video/mp4" />
      </video>
      <span className="sr-only">{company.heroVideo.description}</span>
    </>
  );
}

export function HeroVideoToggle({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={playing ? "Pause background video" : "Play background video"}
      className="grid size-11 place-items-center bg-navy/60 text-white ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-amber hover:text-navy"
    >
      {playing ? <Pause aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
    </button>
  );
}
