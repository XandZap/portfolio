import ScrollReveal from "./ScrollReveal";

const education = [
  {
    degree: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal do Amazonas",
    period: "Concluído",
  },
];

function Education() {
  return (
    <ScrollReveal>
      <section className="py-28 max-lg:py-16 max-lg:flex-col max-lg:text-base max-lg:gap-5" id="educacao">
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-secondary-foreground leading-8">Formação Acadêmica</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="md:col-span-3 p-6 rounded-lg border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-accent">{edu.degree}</h3>
              <p className="text-secondary-foreground font-medium mt-1">{edu.institution}</p>
              <p className="text-zinc-50/50 text-sm mt-1">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Education;
