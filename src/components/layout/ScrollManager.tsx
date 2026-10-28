import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to top on route change, or to the #hash target when present. */
export function ScrollManager() {
  const { pathname, hash, search } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait for the page transition to mount the target
      const id = window.setTimeout(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: "start" });
      }, 350);
      return () => window.clearTimeout(id);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, search]);
  return null;
}
