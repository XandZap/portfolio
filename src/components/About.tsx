import Image from "next/image";
import { Box, Section, Text, Title } from "./ui/styles";

function About() {
  return (
    <Section className="">
      <div className="flex justify-center items-center rounded-[100%] overflow-hidden w-80 h-80 border relative">
        <Image src="/assets/img/XandImage.JPG" alt="Imagem de perfil de XandZap" fill objectFit="cover" />
      </div>
      <Box className="w-1/2">
        <Title>Quem sou eu</Title>
        <Text>
          Formado em Ciência da Computação e apaixonado por desenvolvimento web. Minha jornada começou na
          faculdade, e desde então venho aprimorando minhas habilidades. Com foco no frontend, sou especialista em
          React e também tenho conhecimentos em Node.js para o backend. Iniciei minha carreira em fevereiro de 2022
          como estagiário e, em junho, fui contratado como desenvolvedor Frontend.
        </Text>
      </Box>
    </Section>
  );
}

export default About;

