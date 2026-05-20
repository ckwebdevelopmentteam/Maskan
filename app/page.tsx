import NavBar from "@/components/Client/NavBar";
import SustainableRetreat from "@/components/Client/SustainableRetreat";
import ElementisStory from "@/sections/ElementisStory";
import Footer from "@/sections/Footer/Server";
import Form from "@/sections/Form";
import Innovation from "@/components/Client/Innovation";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Testimonials from "@/sections/Testimonials";
import WhyChooseUs from "@/sections/WhyChooseUs";
import ProjectsGrid from "@/sections/ProjectsGrid";
import FAQ from "@/sections/FAQ";
import SeoContent from "@/sections/SeoContent";
import HowWeWork from "@/sections/HowWeWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <HowWeWork />
      <Innovation />
      <ProjectsGrid />

      {/* Calculation */}
      <SustainableRetreat />

      {/* Why Choose Us */}
      <WhyChooseUs />
      <ElementisStory />

      {/* CTA */}
      <Form />

      {/* Testimonial */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />
      <SeoContent />

      {/* Footer */}
      <Footer />
      <NavBar />
    </main>
  );
}
