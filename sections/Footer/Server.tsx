import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-8 px-6 md:px-16 flex flex-col font-sans border-t border-white/5">
      
      {/* Top 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-20 md:mb-32">
        
        {/* Col 1: Newsletter */}
        <div className="flex flex-col gap-4">
          <span className="text-xs text-white/50 font-medium">Newsletter</span>
          <p className="text-sm font-medium">Subscribe for news and insights</p>
          <div className="mt-4 flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-b border-white/20 py-2 text-sm outline-none focus:border-white transition-colors placeholder:text-white/30 w-[90%]"
            />
            <button className="text-[10px] font-bold self-start tracking-[0.15em] mt-3 flex items-center gap-1 hover:opacity-70 transition-opacity uppercase">
              Subscribe <span className="text-[14px] leading-none mb-0.5">↗</span>
            </button>
          </div>
        </div>

        {/* Col 2: Get in touch */}
        <div className="flex flex-col gap-4">
          <span className="text-xs text-white/50 font-medium">Get in touch</span>
          <div className="flex flex-col gap-3 text-sm font-medium">
            <a href="tel:+9251111MASKAN" className="hover:opacity-70 transition-opacity">+92 51 111 MASKAN</a>
            <a href="mailto:info@maskan.pk" className="hover:opacity-70 transition-opacity">info@maskan.pk</a>
            <p className="text-white/80">Kozhikode, Kerala, India</p>
          </div>
        </div>

        {/* Col 3: Navigation */}
        <div className="flex flex-col gap-4">
          <span className="text-xs text-white/50 font-medium">Navigation</span>
          <div className="flex flex-col gap-3 text-sm font-medium">
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <Link href="/projects" className="hover:opacity-70 transition-opacity">Projects</Link>
            <Link href="/services" className="hover:opacity-70 transition-opacity">Services</Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">About us</Link>
          </div>
        </div>

        {/* Col 4: More */}
        <div className="flex flex-col gap-4">
          <span className="text-xs text-white/50 font-medium">More</span>
          <div className="flex flex-col gap-3 text-sm font-medium">
            <Link href="/#contact" className="hover:opacity-70 transition-opacity">Contact</Link>
            <Link href="/privacy-terms" className="hover:opacity-70 transition-opacity">Privacy Policy</Link>
            <Link href="/privacy-terms" className="hover:opacity-70 transition-opacity">Terms of Service</Link>
          </div>
        </div>

      </div>

      {/* Giant MASKAN Logo */}
      <div className="w-full flex justify-center items-center py-6 md:py-10 mb-8 border-b border-white/10">
        <h1 className="text-[18vw] md:text-[16vw] leading-none font-medium tracking-tight text-white flex items-start select-none">
          Maskan<span className="text-[4vw] md:text-[3vw] leading-none mt-[1.5vw] md:mt-[2vw] font-normal opacity-80">®</span>
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-4 font-medium">
        <p>© 2025 MASKAN®. All rights reserved.</p>
        <p>Created by Yash Ostwal</p>
      </div>

    </footer>
  );
}

