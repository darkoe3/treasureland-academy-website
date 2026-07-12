"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 left-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-purple-brand text-white shadow-soft hover:bg-gold-brand"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
