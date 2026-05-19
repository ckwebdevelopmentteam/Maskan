import Image from "next/image";
import FormImage from "@/public/Maskan 01_page-0026.jpg";
import ParallaxContainer from "@/components/Client/ParallaxContainer";
import Input from "@/components/Server/Input";
import Form from "next/form";
import Label from "@/components/Server/Label";
import * as motion from "motion/react-client";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";

export default function FormServer() {
  return (
    <div id="contact" className="flex flex-col bg-[#CED1BF] md:grid md:grid-cols-2 border-t border-white/5">
      <ParallaxContainer 
        parallaxAmount={20} 
        containerClassName="relative w-full h-[450px] md:h-full md:min-h-[900px] overflow-hidden"
        className="w-full h-full"
      >
        <Image src={FormImage} alt="maskan-form-image" className="w-full h-full object-cover" />
      </ParallaxContainer>
      <div className="col-start-2 flex flex-col items-center justify-center">
        <Form action={""} className="w-full max-w-102 px-5 py-24 md:p-0">
          <div className="w-full text-xl font-light md:text-30">
            Build Your Dream With Us
          </div>
          <div className="mt-8 mb-10 text-base md:text-lg">
            Join the Maskan Builders community and take the first step towards
            realizing your architectural dreams with our expert team.
          </div>
          <div className="flex flex-col gap-4">
            <Label label="Full Name">
              <Input name="fullName" type="text" placeholder="Enter your name" required />
            </Label>
            <Label label="Email Address">
              <Input name="email" type="email" placeholder="Enter your email address" required />
            </Label>
            <Label label="Phone number">
              <Input name="phone" type="tel" placeholder="Enter your phone number" required />
            </Label>
            <Label label="Location">
              <Input name="location" type="text" placeholder="Enter your location" required />
            </Label>
          </div>
          <motion.button
            type="submit"
            className="mt-14 flex w-full cursor-pointer items-center justify-between px-6 py-5 text-base text-[#DCD4C4] md:text-lg"
            initial={{ backgroundColor: "#2B3530" }}
            whileHover={{ backgroundColor: "#304d3d" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span>Enquire Now</span>
            <NavigateSVG fill="#DCD4C4" />
          </motion.button>
        </Form>
      </div>
    </div>
  );
}
