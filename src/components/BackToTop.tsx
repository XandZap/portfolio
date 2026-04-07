
"use client";
import { useScroll } from "@/hooks";
import { BsArrowUp } from "react-icons/bs";

function BackToTop() {
  const scroll = useScroll();
  const visible = scroll > 400;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-accent shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary/90 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Voltar ao topo"
    >
      <BsArrowUp className="text-xl" />
    </button>
  );
}

export default BackToTop;
