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

export default function Home() {
  return (
    <main>
      {/* 1. Home */}
      <Hero />

      {/* 2. About Us */}
      <Introduction />

      {/* Standalone: The Maskan Advantage (with split parallax image) */}
      <Advantage />

      {/* 3. Main Services (Beautiful 3-column grid of core services) */}
      <div id="services">
        <ElementisStory />
      </div>



      {/* 8. Gallery (Parallax/Clip-mask Project Showcase) */}
      <Innovation />
      {/* 4. Projects / Portfolio (8 Majestic Property Cards Grid!) */}
      <ProjectsGrid />
      {/* 5. Locations / Areas Served */}
      <Locations />

      {/* Financial Calculator Segment */}
      <SustainableRetreat />

      {/* 6. Contact Us */}
      <Form />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* Footers & Navigators */}
      <Footer />
      <NavBar />
    </main>
  );
}
