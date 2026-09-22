import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Pillars />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
