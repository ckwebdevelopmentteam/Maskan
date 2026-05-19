import ParallaxContainer from "@/components/Client/ParallaxContainer";
import Input from "@/components/Server/Input";
import Form from "next/form";
import Label from "@/components/Server/Label";
import * as motion from "motion/react-client";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";

export default function FormServer() {
  return (
    <div id="contact" className="flex flex-col bg-[#2B3530] md:grid md:grid-cols-2 border-t border-white/5">
      <ParallaxContainer 
        parallaxAmount={20} 
        containerClassName="relative w-full h-[450px] md:h-full md:min-h-[900px] overflow-hidden"
        className="w-full h-full"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/SliderCentral.mp4" type="video/mp4" />
        </video>
      </ParallaxContainer>
      <div className="col-start-2 flex flex-col items-center justify-center bg-[#2B3530]">
        <Form action={""} className="w-full max-w-102 px-5 py-24 md:p-0">
          <div className="w-full text-xl font-light md:text-30 text-[#DCD4C4]">
            Build Your Dream With Us
          </div>
          <div className="mt-8 mb-10 text-base md:text-lg text-white/70">
            Join the Maskan Builders community and take the first step towards
            realizing your architectural dreams with our expert team.
          </div>
          <div className="flex flex-col gap-4">
            <Label label="Full Name" className="text-[#DCD4C4]">
              <Input name="fullName" type="text" placeholder="Enter your name" required className="bg-white/5 border-b border-[#DCD4C4]/20 text-[#DCD4C4] placeholder-[#DCD4C4]/40 focus:border-[#DCD4C4] transition-colors" />
            </Label>
            <Label label="Email Address" className="text-[#DCD4C4]">
              <Input name="email" type="email" placeholder="Enter your email address" required className="bg-white/5 border-b border-[#DCD4C4]/20 text-[#DCD4C4] placeholder-[#DCD4C4]/40 focus:border-[#DCD4C4] transition-colors" />
            </Label>
            <Label label="Phone number" className="text-[#DCD4C4]">
              <Input name="phone" type="tel" placeholder="Enter your phone number" required className="bg-white/5 border-b border-[#DCD4C4]/20 text-[#DCD4C4] placeholder-[#DCD4C4]/40 focus:border-[#DCD4C4] transition-colors" />
            </Label>
            <Label label="Location" className="text-[#DCD4C4]">
              <Input name="location" type="text" placeholder="Enter your location" required className="bg-white/5 border-b border-[#DCD4C4]/20 text-[#DCD4C4] placeholder-[#DCD4C4]/40 focus:border-[#DCD4C4] transition-colors" />
            </Label>
          </div>
          <motion.button
            type="submit"
            className="mt-14 flex w-full cursor-pointer items-center justify-between px-6 py-5 text-base text-[#2B3530] md:text-lg font-medium"
            initial={{ backgroundColor: "#DCD4C4" }}
            whileHover={{ backgroundColor: "#c8beac" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span>Enquire Now</span>
            <NavigateSVG fill="#2B3530" />
          </motion.button>
        </Form>
      </div>
    </div>
  );
}
