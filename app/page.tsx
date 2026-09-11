export const revalidate = 60;
import NavBar from "@/components/Client/NavBar";
import ScrollReveal from "@/components/Client/ScrollReveal";
import ServicesStickyScroll from "@/sections/ServicesStickyScroll";
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
import BlogCarousel from "@/sections/BlogCarousel";

export default function Home() {
  return (
    <main>
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal><Introduction /></ScrollReveal>
      <ScrollReveal><ServicesStickyScroll /></ScrollReveal>
      <ScrollReveal><HowWeWork /></ScrollReveal>
      <div><Innovation /></div>
      <ScrollReveal><ProjectsGrid /></ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal><WhyChooseUs /></ScrollReveal>


      {/* CTA */}
      <ScrollReveal><Form /></ScrollReveal>

      {/* Testimonial */}
      <ScrollReveal><Testimonials /></ScrollReveal>

      {/* FAQ */}
      <ScrollReveal><FAQ /></ScrollReveal>

      {/* Blog Carousel */}
      <ScrollReveal><BlogCarousel /></ScrollReveal>

      <ScrollReveal><SeoContent /></ScrollReveal>

      {/* Footer */}
      <ScrollReveal><Footer /></ScrollReveal>
      <NavBar />
    </main>
  );
}
