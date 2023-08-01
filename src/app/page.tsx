import { About, Intro, Projects } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch justify-between h-screen px-[8%]">
      <Intro />
      <About />
      <Projects />
    </main>
  );
}

