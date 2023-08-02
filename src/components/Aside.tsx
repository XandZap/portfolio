import { SLink } from "@/components/ui/styles";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Aside() {
  return (
    <aside className="fixed left-8 bottom-0 flex flex-col justify-center items-center gap-3 text-xl opacity-60 max-lg:hidden">
      <SLink href="https://www.linkedin.com/in/alexandre-roberto/" target="_blank">
        <FiLinkedin />
      </SLink>
      <SLink href="https://github.com/XandZap" target="_blank">
        <FiGithub />
      </SLink>
      <SLink href="https://wa.me/5592993265953?text=Olá Alexandre." target="_blank">
        <BsWhatsapp />
      </SLink>
      <SLink href="mailto:alexandreroberto.94@gmail.com?subject=&body=" target="_blank">
        <BiLogoGmail />
      </SLink>
      <span className="h-32 w-0 border"></span>
    </aside>
  );
}

export default Aside;

