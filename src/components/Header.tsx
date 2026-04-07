"use client"
import { useScroll } from "@/hooks";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

function Header() {
  const scroll = useScroll();
  const isScrolled = scroll > 50;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        <Link href="#" className="text-xl font-bold text-secondary-foreground hover:scale-105 transition-transform duration-200">
          XandZap<span className="text-primary">Dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-foreground/70 hover:text-secondary-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <nav className="hidden md:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/alexandre-roberto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-secondary-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/XandZap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-secondary-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <BsGithub />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;