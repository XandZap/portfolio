import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { SLink, Section } from "./ui/styles";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Section className="p-5 flex items-center justify-between border-t border-primary/10 max-lg:flex-col max-lg:gap-4 max-lg:text-center">
      <footer>© {currentYear} — Alexandre Roberto. Todos os direitos reservados.</footer>
      <nav className="flex gap-3" aria-label="Links sociais">
        <SLink href="https://www.linkedin.com/in/alexandre-roberto/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <BsLinkedin />
        </SLink>
        <SLink href="https://github.com/XandZap" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <BsGithub />
        </SLink>
        <SLink href="https://wa.me/5592993265953?text=Olá Alexandre." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <BsWhatsapp />
        </SLink>
        <SLink href="mailto:alexandreroberto.94@gmail.com" aria-label="Email">
          <BiLogoGmail />
        </SLink>
      </nav>
    </Section>
  );
}

export default Footer;
