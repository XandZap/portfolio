import { Section, Title } from "./ui/styles";
import { technologies } from "@/utils/technologies";
import { TbShieldCheckFilled } from "react-icons/tb";
import ScrollReveal from "./ScrollReveal";

function Technologies() {
  return (
    <ScrollReveal>
      <Section className="flex-col" id="tecnologias">
        <Title className="text-2xl">Linguagens e Tecnologias</Title>
        <p className="text-zinc-50/50 leading-8">Ferramentas e tecnologias que utilizo no dia a dia</p>
        <div className="mt-5 grid grid-flow-row grid-cols-5 max-lg:grid-cols-2 gap-5">
          {technologies.map((technology) => (
            <div
              key={technology}
              className="flex gap-2 items-center border border-primary/50
              rounded-md p-5 bg-background text-accent duration-200 hover:scale-105 max-lg:text-xs"
            >
              <TbShieldCheckFilled className="text-secondary-foreground"/>
              <p>{technology}</p>
            </div>
          ))}
        </div>
      </Section>
    </ScrollReveal>
  );
}

export default Technologies;
