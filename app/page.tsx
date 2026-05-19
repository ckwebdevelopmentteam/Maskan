import NavBar from "@/components/Client/NavBar";
import SustainableRetreat from "@/components/Client/SustainableRetreat";
import ElementisStory from "@/sections/ElementisStory";
import Footer from "@/sections/Footer/Server";
import Form from "@/sections/Form";
import Innovation from "@/components/Client/Innovation";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Locations from "@/sections/Locations";
import Testimonials from "@/sections/Testimonials";
import Advantage from "@/sections/Advantage";
import ProjectsGrid from "@/sections/ProjectsGrid";
import CTA from "@/sections/CTA";
import FAQ from "@/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Innovation />
      <ProjectsGrid />

      {/* Calculation */}
      <SustainableRetreat />

      {/* Advantage */}
      <Advantage />
      <ElementisStory />

      {/* Location */}
      <Locations />

      {/* CTA */}
      <CTA />

      {/* Testimonial */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Content (Services & Contact) */}
      <div id="services">

      </div>
      <Form />

      {/* Footer */}
      <Footer />
      <NavBar />
    </main>
  );
}
