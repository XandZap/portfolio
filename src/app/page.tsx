import { About, Aside, Footer, Intro, Projects, Technologies, Work } from "@/components";

export default function Home() {
  return (
    <main className="relative flex flex-col items-stretch justify-between h-screen px-[8%]">
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

