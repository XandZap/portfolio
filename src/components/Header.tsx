"use client"
import tw from "tailwind-styled-components";
import { useScroll } from "@/hooks";
import { SLink } from "./ui/styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Header() {
  const scroll = useScroll();

  const handleScroll = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <header
      className={`fixed top-0 py-7 px-[8%] mb-16 w-full flex justify-between  opacity-90 z-10 ${
        scroll > 0 && " bg-background "
      }`}
    >
      <button onClick={handleScroll}>
        <SLink href={""}>XandZapDev</SLink>
      </button>
      <nav className="flex gap-5 ">
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

