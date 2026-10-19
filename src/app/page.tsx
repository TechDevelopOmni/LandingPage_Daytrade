import { Hero } from "../components/sections/Hero/Hero";
import { Features } from "../components/sections/Platform/Platform";
import { Process } from "../components/sections/Process/Process";
import { CallToAction } from "../components/sections/CTA/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Process />
      <CallToAction />
    </main>
  );
}