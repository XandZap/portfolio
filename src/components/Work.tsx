import { works } from "@/utils/works";
import { Section, Text, Title } from "./ui/styles";

function Work() {
  return (
    <Section className="flex-col gap-4">
      <Title>Onde já trabalhei</Title>
      <div className="flex gap-5 ">
        {works.map((work) => (
          <div key={work.date} className="p-5 bg-primary rounded-sm text-accent ">
            <div className="flex gap-5 ">
              <p className="text-2xl max-lg:text-lg">{work.type}</p>
              <p className="text-2xl text-secondary-foreground max-lg:text-xl">@{work.name}</p>
            </div>
            <p className="text-zinc-50/50">{work.date}</p>
            <ul className="list-disc px-6 max-w-[80%] max-lg:max-w-full">
              {work.description.map((description) => (
                <li key={description} className="max-lg:text-sm">{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Work;

