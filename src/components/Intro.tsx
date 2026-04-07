import { GradientTitle, Section, Text, Title } from "./ui/styles";
import Icon from "./Icon";

function Intro() {
  return (
    <section className="min-h-screen flex items-center pt-20 max-lg:pt-32 max-lg:min-h-auto max-lg:pt-28">
      <Section className="pt-0 max-lg:pt-4">
        <div className="flex flex-col max-lg:gap-5">
          <Title>Olá, me chamo Alexandre Roberto, conhecido como</Title>
          <GradientTitle className="text-5xl leading-[60px] font-extrabold max-lg:text-2xl">
            XandZap — Desenvolvedor Frontend
          </GradientTitle>
          <Text>
            Sou desenvolvedor frontend apaixonado por criar experiências digitais modernas e de alto desempenho, utilizando React, TypeScript e Next.js. Busco continuamente inovação e aprendizado para entregar produtos com qualidade e atenção aos detalhes.
          </Text>
          <Text>Vamos construir algo incrível juntos!</Text>
        </div>
        <div className="max-lg:hidden">
          <Icon />
        </div>
      </Section>
    </section>
  );
}

export default Intro;
