import { GradientTitle, Section, Text, Title } from "./ui/styles";
import Icon from "./Icon";

function Intro() {
  return (
    <Section className=" pt-60 max-lg:pt-20">
      <div className="flex flex-col max-lg:gap-5">
        <Title>Olá, me chamo Alexandre Roberto, também conhecido como </Title>
        <GradientTitle className="text-5xl leading-[60px] font-extrabold max-lg:text-xl ">
          XandZap Desenvolvedor Frontend.
        </GradientTitle>
        <Text>
          Sou programador frontend apaixonado por criar experiências digitais excepcionais, utilizando tecnologias
          como React, TypeScript e NextJS. Meu objetivo é entregar produtos de alta qualidade, buscando sempre
          inovação e aprendizado contínuo.
        </Text>
        <Text>Vamos construir algo incrível juntos!</Text>
      </div>
      <div className="max-lg:hidden">
        <Icon />
      </div>
    </Section>
  );
}

export default Intro;

