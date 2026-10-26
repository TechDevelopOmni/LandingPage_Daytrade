import { Hero } from "../components/sections/Hero/Hero";
import { Insights } from "../components/sections/Insights/Insights";
import { Features } from "../components/sections/Platform/Platform";
import { Process } from "../components/sections/Process/Process";
import { CallToAction } from "../components/sections/CTA/cta";
import { Blog } from "../components/sections/Blog/Blog";
import { FAQ } from "../components/sections/FAQ/FAQ";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Insights />
        <Features />
        <Process />
        <CallToAction />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
