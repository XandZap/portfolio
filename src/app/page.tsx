import { Intro, About, Technologies, Work, Projects, Footer, Aside } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 px-[8%] py-4">
      <Intro />
      <About />
      <Technologies />
      <Work />
      <Projects />
      <Footer />
      <Aside />
    </main>
  );
}
