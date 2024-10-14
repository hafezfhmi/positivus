import CaseStudies from "@/_sections/CaseStudies";
import Hero from "@/_sections/Hero";
import LogoTicker from "@/_sections/LogoTicker";
import Proposal from "@/_sections/Proposal";
import Services from "@/_sections/Services";
import Team from "@/_sections/Team";
import WorkingProcess from "@/_sections/WorkingProcess";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <Services />
      <Proposal />
      <CaseStudies />
      <WorkingProcess />
      <Team />
    </main>
  );
}
