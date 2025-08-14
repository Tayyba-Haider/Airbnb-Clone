import { useEffect, useRef, useState } from "react";

export default function useScrollDirection(threshold = 6) {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [offset, setOffset] = useState<number>(() => (typeof window !== "undefined" ? window.pageYOffset : 0));

  const lastScrollY = useRef<number>(typeof window !== "undefined" ? window.pageYOffset : 0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    lastScrollY.current = window.pageYOffset;

    const update = () => {
      const y = window.pageYOffset;
      if (Math.abs(y - lastScrollY.current) < threshold) {
        ticking.current = false;
        return;
      }
      setDirection(y > lastScrollY.current ? "down" : "up");
      setOffset(y);
      lastScrollY.current = y > 0 ? y : 0;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, offset };
}
