"use client"
import tw from "tailwind-styled-components";
import { useScroll } from "@/hooks";
import { SLink } from "./ui/styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Header() {
  const scroll = useScroll();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 py-7 px-[8%] w-full flex justify-between items-center z-10 transition-all duration-300 ${
        scroll > 0 ? "bg-background/90 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <button onClick={handleScroll} className="cursor-pointer">
        <SLink href="#">XandZapDev</SLink>
      </button>
      <nav className="flex gap-5">
        <SLink href="https://www.linkedin.com/in/alexandre-roberto/" target="_blank">
          <Span>LinkedIn</Span>
          <BsLinkedin />
        </SLink>
        <SLink href="https://github.com/XandZap" target="_blank">
          <Span>GitHub</Span>
          <BsGithub />
        </SLink>
      </nav>
    </header>
  );
}

export default Header;

const Span = tw.span`max-md:hidden`;
