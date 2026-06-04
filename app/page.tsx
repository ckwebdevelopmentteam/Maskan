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
      <ScrollReveal><Introduction /></ScrollReveal>
      <ScrollReveal><HowWeWork /></ScrollReveal>
      <div><Innovation /></div>
      <ScrollReveal><ProjectsGrid /></ScrollReveal>

      {/* Calculation */}
      {/* <SustainableRetreat /> */}

      {/* Why Choose Us */}
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><ElementisStory /></ScrollReveal>

      {/* CTA */}
      <ScrollReveal><Form /></ScrollReveal>

      {/* Testimonial */}
      <ScrollReveal><Testimonials /></ScrollReveal>

      {/* FAQ */}
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><SeoContent /></ScrollReveal>

      {/* Footer */}
      <ScrollReveal><Footer /></ScrollReveal>
      <NavBar />
    </main>
  );
}
