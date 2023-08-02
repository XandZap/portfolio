import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { SLink, Section } from "./ui/styles";

function Footer() {
  return (
    <Section className="p-5 flex items-center justify-center border-t relative">
      <footer>© 2023 | Alexandre Roberto Lima</footer>
      <div className="absolute bottom-5 right-0 flex gap-2 max-lg:static">
        <SLink href="https://www.linkedin.com/in/alexandre-roberto/" target="_blank">
          <BsLinkedin />
        </SLink>
        <SLink href="https://github.com/XandZap" target="_blank">
          <BsGithub />
        </SLink>
        <SLink href="https://wa.me/5592993265953?text=Olá Alexandre." target="_blank">
          <BsWhatsapp />
        </SLink>
        <SLink href="mailto:alexandreroberto.94@gmail.com?subject=&body=" target="_blank">
          <BiLogoGmail />
        </SLink>
      </div>
    </Section>
  );
}

export default Footer;

