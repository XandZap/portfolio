import Image from "next/image";
import { Box, Section, Title, Text } from "./ui/styles";
import ScrollReveal from "./ScrollReveal";

function About() {
  return (
    <ScrollReveal>
      <Section id="sobre">
        <div className="flex-shrink-0 flex justify-center items-center rounded-full overflow-hidden w-80 h-80 border-2 border-primary/30 relative shadow-lg shadow-primary/10">
          <Image
            src="/assets/img/XandImage.JPG"
            alt="Foto de perfil de Alexandre Roberto (XandZap)"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Box className="w-1/2">
          <Title>Quem sou eu</Title>
          <Text>
            Formado em Ciência da Computação e apaixonado por desenvolvimento web. Minha jornada começou
            na faculdade, e desde então venho aprimorando minhas habilidades em cada projeto. Com foco no
            frontend, sou especialista em React e também possuo conhecimentos em Node.js para o backend.
            Iniciei minha carreira em fevereiro de 2022 como estagiário na Luby Software e, em junho do
            mesmo ano, fui promovido a desenvolvedor frontend pleno.
          </Text>
        </Box>
      </Section>
    </ScrollReveal>
  );
}

export default About;
