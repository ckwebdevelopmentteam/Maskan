import NavBar from "@/components/Client/NavBar";
import ScrollReveal from "@/components/Client/ScrollReveal";
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
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal className="my-8"><Introduction /></ScrollReveal>
      <ScrollReveal className="my-8"><HowWeWork /></ScrollReveal>
      <ScrollReveal className="my-8"><Innovation /></ScrollReveal>
      <ScrollReveal className="my-8"><ProjectsGrid /></ScrollReveal>

      {/* Calculation */}
      {/* <SustainableRetreat /> */}

      {/* Why Choose Us */}
      <ScrollReveal className="my-8"><WhyChooseUs /></ScrollReveal>
      <ScrollReveal className="my-8"><ElementisStory /></ScrollReveal>

      {/* CTA */}
      <ScrollReveal className="my-8"><Form /></ScrollReveal>

      {/* Testimonial */}
      <ScrollReveal className="my-8"><Testimonials /></ScrollReveal>

      {/* FAQ */}
      <ScrollReveal className="my-8"><FAQ /></ScrollReveal>
      <ScrollReveal className="my-8"><SeoContent /></ScrollReveal>

      {/* Footer */}
      <ScrollReveal className="my-8"><Footer /></ScrollReveal>
      <NavBar />
    </main>
  );
}
