import { Intro, About, Technologies, Work, Projects, Footer, Aside, CTA } from "@/components";
import ParallaxSection from "@/components/ParallaxSection";
import ScrollReveal from "@/components/ScrollReveal";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexandre Roberto",
  alternateName: "XandZap",
  jobTitle: "Desenvolvedor Frontend",
  url: "https://xandzap.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/alexandre-roberto/",
    "https://github.com/XandZap",
  ],
  knowsAbout: ["React", "TypeScript", "Next.js", "Node.js", "Frontend Development", "Tailwind CSS"],
  email: "alexandreroberto.94@gmail.com",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* JSON-LD structured data for SEO */}
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Intro />
      <About />
      <Technologies />

      <ParallaxSection
        backgroundImage="/assets/img/parallax-bg.png"
        quote="Transformo ideias em experiências digitais que conectam pessoas e tecnologia."
        author="Alexandre Roberto"
      />

      <Work />
      <ScrollReveal>
        <section id="projetos">
          <Projects />
        </section>
      </ScrollReveal>
      <CTA />
      <Footer />
      <Aside />
    </main>
  );
}