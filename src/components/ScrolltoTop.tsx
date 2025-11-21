// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (e.g. #about) try to scroll to that element.
    if (hash) {
      // small delay helps if element is rendered after route change
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        // fallback to top if hash target not found
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    } else {
      // For normal route changes, scroll to top
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}
