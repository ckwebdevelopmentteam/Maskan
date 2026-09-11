export const revalidate = 60;
import NavBar from "@/components/Client/NavBar";
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
      <Hero />
      <Introduction />
      <ServicesStickyScroll />
      <HowWeWork />
      <Innovation />
      <ProjectsGrid />
      <WhyChooseUs />
      <Form />
      <Testimonials />
      <FAQ />
      <BlogCarousel />
      <SeoContent />
      <Footer />
      <NavBar />
    </main>
  );
}
