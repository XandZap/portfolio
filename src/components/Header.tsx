"use client";

import { useScroll } from "@/hooks";

function Header() {
  const scroll = useScroll();

  return (
    <header className={`sticky top-0 py-7 px-[8%] mb-16 w-full flex justify-between opacity-80 z-10 ${scroll > 0 && " bg-background "}`}>
      XandZapDev
      <nav>link link</nav>
    </header>
  );
}

export default Header;

