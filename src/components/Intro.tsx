import Image from "next/image";
import { Section, Title } from "./ui/styles";

function Intro() {
  return (
    <Section >
      <div>
        <Title>
          Olá, me chamo Alexandre Roberto, também conhecido como{" "}
        </Title>
        <h1 className="text-5xl leading-[60px] text-transparent bg-clip-text bg-gradient-to-b from-accent to-secondary-foreground ">
          XandZap Desenvolvedor Frontend.
        </h1>
        <p className="w-1/2 text-xl leading-8">
          Sou programador frontend apaixonado por criar experiências digitais excepcionais, utilizando tecnologias
          como React, TypeScript e NextJS. Meu objetivo é entregar produtos de alta qualidade, buscando sempre
          inovação e aprendizado contínuo.
        </p>
        <p className="w-1/2 text-xl leading-8">Vamos construir algo incrível juntos!</p>
      </div>
      <div className="flex justify-center items-center rounded-[100%] overflow-hidden w-1/2 relative">
        <Image src="/assets/img/XandImage.JPG" alt="Imagem de perfil de XandZap" fill objectFit="cover" />
      </div>
    </Section>
  );
}

export default Intro;

