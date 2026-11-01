import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteProvider } from "@/components/site-provider";
import { Ticker } from "@/components/ticker";
import { WorkSection } from "@/components/work-section";

export default function Page() {
  return (
    <SiteProvider>
      <Header />
      <main id="home">
        <Hero />
        <Ticker />
        <Services />
        <WorkSection />
        <Process />
        <About />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </SiteProvider>
  );
}
