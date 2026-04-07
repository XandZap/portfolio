import { works } from "@/utils/works";
import { Section, Title } from "./ui/styles";
import ScrollReveal from "./ScrollReveal";

function Work() {
  return (
    <ScrollReveal>
      <Section className="flex-col gap-4" id="experiencia">
        <Title>Experiência Profissional</Title>
        <div className="flex gap-5 max-lg:flex-col">
          {works.map((work) => (
            <div key={work.date} className="p-6 bg-primary/80 rounded-lg text-accent transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 max-lg:w-full">
              <div className="flex gap-3 items-center mb-2">
                <p className="text-xl font-bold max-lg:text-lg">{work.type}</p>
              </div>
              <p className="text-secondary-foreground font-medium">@{work.name}</p>
              <p className="text-zinc-50/50 text-sm">{work.date}</p>
              <ul className="list-disc px-6 mt-3 max-w-full">
                {work.description.map((description) => (
                  <li key={description} className="text-sm max-lg:text-sm mb-2">{description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </ScrollReveal>
  );
}

export default Work;
