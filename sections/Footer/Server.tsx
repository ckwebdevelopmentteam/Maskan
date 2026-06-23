import Link from "next/link";
import React from "react";
import Image from "next/image";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white font-sans border-t border-white/10">

      {/* Main Footer Body */}
      <div className="px-6 md:px-16 py-4 flex flex-col md:flex-row md:items-center gap-8 md:gap-0 border-b border-white/10">

        {/* Left — Big Logo */}
        <div className="flex-1 flex items-center">
          <Image
            src={MaskanLogo}
            alt="Maskan Builders"
            className="h-[30vw] md:h-[24vw] w-auto object-contain brightness-0 invert"
          />
        </div>

        {/* Right — Links Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">

          {/* Get in touch */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-1">Get in touch</span>
            <a href="tel:+917594033300" className="text-sm text-white/80 hover:text-white transition-colors">+91 75940 33300</a>
            <a href="mailto:maskanplans@gmail.com" className="text-sm text-white/80 hover:text-white transition-colors">maskanplans@gmail.com</a>
            <p className="text-sm text-white/50">Kozhikode, Kerala, India</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-1">Navigation</span>
            <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">Home</Link>
            <Link href="/projects" className="text-sm text-white/80 hover:text-white transition-colors">Projects</Link>
            <Link href="/services" className="text-sm text-white/80 hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="text-sm text-white/80 hover:text-white transition-colors">About us</Link>
          </div>

          {/* More & Socials */}
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-1">More</span>
            <Link href="/#contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy-terms" className="text-sm text-white/80 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/privacy-terms" className="text-sm text-white/80 hover:text-white transition-colors">Terms of Service</Link>

            <div className="flex items-center gap-2 mt-2">
              <a href="https://www.facebook.com/Maskan-builders-106170434940334" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-white/5 rounded-full border border-white/10 hover:bg-white/15 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://twitter.com/LlpMaskan" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-white/5 rounded-full border border-white/10 hover:bg-white/15 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="https://www.instagram.com/maskan_builders/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-white/5 rounded-full border border-white/10 hover:bg-white/15 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://wa.me/917594033300" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-white/5 rounded-full border border-white/10 hover:bg-white/15 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.031 0C5.385 0 0 5.388 0 12.037c0 2.124.553 4.195 1.604 6.01L.004 24l6.105-1.601a11.967 11.967 0 005.922 1.564h.005c6.645 0 12.035-5.388 12.035-12.036 0-3.22-1.254-6.248-3.532-8.528A11.967 11.967 0 0012.031 0zm0 21.95h-.003a9.932 9.932 0 01-5.06-1.378l-.362-.215-3.766.988.998-3.67-.236-.376A9.957 9.957 0 012.031 12.04c0-5.495 4.472-9.97 9.972-9.97 2.663 0 5.166 1.037 7.048 2.92a9.971 9.971 0 012.923 7.046c0 5.495-4.472 9.97-9.97 9.97l.001-.004v-.012l-.004.016zm5.474-7.48c-.3-.15-1.776-.877-2.05-.977-.275-.1-.475-.15-.675.15-.2.3-.775.977-.95 1.177-.175.2-.35.225-.65.075-1.343-.674-2.482-1.428-3.385-2.92-.2-.33-.02-.51.13-.66.134-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.627-.925-2.227-.244-.585-.49-.505-.675-.515-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.114 3.228 5.12 4.526 2.378 1.026 3.14 1.075 3.82.9.728-.187 2.225-.912 2.54-1.794.314-.882.314-1.637.22-1.794-.09-.157-.34-.247-.64-.397h-.005v-.01z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/30 font-medium">
        <p>© 2025 MASKAN®. All rights reserved.</p>
        <a href="https://www.thynck.in" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
          Created by THYNCK · www.thynck.in
        </a>
      </div>

    </footer>
  );
}
