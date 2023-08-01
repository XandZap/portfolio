import { Box, Section, Title } from "./ui/styles";

function About() {
  return (
    <Section>
      <div className="w-full">algo aqui</div>
      <Box>
        <Title>Quem sou eu</Title>
        <p>
          Formado em Ciência da Computação e apaixonado por desenvolvimento web. Minha jornada começou na
          faculdade, e desde então venho aprimorando minhas habilidades. Com foco no frontend, sou especialista em
          React e também tenho conhecimentos em Node.js para o backend. Iniciei minha carreira em fevereiro de 2022
          como estagiário e, em junho, fui contratado como desenvolvedor Frontend.
        </p>
      </Box>
    </Section>
  );
}

export default About;

