"use client";

import React from "react";
import Form from "next/form";
import { motion } from "motion/react";

export default function FormServer() {
  return (
    <div id="contact" className="w-full py-12 md:py-20 bg-[var(--bg-primary)] flex justify-center items-center">
      <div className="w-[95%] max-w-[1600px] bg-white rounded-[3rem] p-5 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column - Video Card */}
        <div className="relative w-full min-h-[350px] lg:min-h-[520px] rounded-[2rem] overflow-hidden shadow-sm">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/SliderCentral.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Right Column - Form Card */}
        <div className="bg-white rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-md flex flex-col justify-center border border-black/[0.03]">
          
          <h2 className="text-2xl md:text-[2.25rem] font-semibold text-gray-900 leading-[1.15] tracking-tight">
            Your dream space is<br className="hidden md:inline" /> one message away
          </h2>
          
          <p className="mt-3 mb-6 text-sm text-gray-500 font-light leading-relaxed">
            Have a project in mind or just want to say hello?<br className="hidden md:inline" />
            Fill out the form and our team will get back to you.
          </p>

          <Form action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500 mb-1.5 flex items-center">
                Full Name<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-[#F8F9FA] border border-gray-100 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:bg-white focus:border-gray-200 transition-all"
              />
            </div>

            {/* E-Mail */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500 mb-1.5 flex items-center">
                E-Mail<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="E-Mail"
                required
                className="w-full bg-[#F8F9FA] border border-gray-100 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:bg-white focus:border-gray-200 transition-all"
              />
            </div>

            {/* Primary Contact Number */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500 mb-1.5 flex items-center">
                Primary Contact Number<span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="flex items-center w-full bg-[#F8F9FA] border border-gray-100 rounded-xl px-4 py-3 focus-within:bg-white focus-within:border-gray-200 transition-all">
                <div className="flex items-center gap-1.5 pr-3 border-r border-gray-200 mr-3 shrink-0">
                  <svg className="w-5 h-3.5 rounded-sm overflow-hidden shadow-sm" viewBox="0 0 24 16">
                    <rect width="24" height="5.33" fill="#FF9933" />
                    <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
                    <rect y="10.66" width="24" height="5.33" fill="#138808" />
                    <circle cx="12" cy="8" r="1.5" fill="none" stroke="#000080" strokeWidth="0.5" />
                  </svg>
                  <svg className="w-2 h-2 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21l-12-18h24z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-400 font-medium mr-1.5 shrink-0">+91</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder=""
                  required
                  className="w-full bg-transparent text-sm text-black placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Type Of Project */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500 mb-1.5">
                Type Of Project
              </label>
              <div className="relative">
                <select
                  name="projectType"
                  className="w-full bg-[#F8F9FA] border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-400 outline-none appearance-none focus:bg-white focus:border-gray-200 focus:text-black transition-all cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled hidden>Select Your Project</option>
                  <option value="residential">Residential Villa / Apartment</option>
                  <option value="commercial">Commercial Space</option>
                  <option value="interior">Interior Design</option>
                  <option value="renovation">Renovation</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-semibold text-gray-500 mb-1.5">
                Project Details
              </label>
              <textarea
                name="details"
                placeholder="Tell us a little about your project or idea"
                className="w-full bg-[#F8F9FA] border border-gray-100 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:bg-white focus:border-gray-200 transition-all resize-none h-20"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="mt-2 md:col-span-2 w-full bg-black text-white rounded-full py-3.5 text-sm font-semibold tracking-wide hover:bg-black/90 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Send Message</span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>

          </Form>

        </div>
      </div>
    </div>
  );
}
