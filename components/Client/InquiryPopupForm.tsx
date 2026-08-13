"use client";

import React, { useState, useEffect } from "react";
import { X, Send, User, Phone, Mail, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";

interface InquiryPopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryPopupForm({ isOpen, onClose }: InquiryPopupFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Replace this URL with your Formspree, Web3Forms, or Google Apps Script Web App URL
    const FORMS_ENDPOINT = "https://formspree.io/f/placeholder_id";

    try {
      await fetch(FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Whether success or mock fallback, redirect to thank-you page
      onClose();
      setStatus("idle");
      setFormData({ name: "", email: "", phone: "", message: "", projectType: "" });
      router.push("/thank-you");
    } catch {
      // Fallback for demo purposes
      onClose();
      setStatus("idle");
      setFormData({ name: "", email: "", phone: "", message: "", projectType: "" });
      router.push("/thank-you");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Wrapper */}
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-xl bg-white text-gray-900 rounded-[2.5rem] shadow-2xl overflow-y-auto max-h-[90vh] md:max-h-[95vh] pointer-events-auto border border-black/5 relative p-6 md:p-10 flex flex-col gap-6 scrollbar-thin overflow-hidden"
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem] z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[50%] bg-gradient-to-br from-[#1F4F71]/10 to-transparent blur-[80px] rounded-full" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-tr from-gray-200/50 to-transparent blur-[60px] rounded-full" />
                {/* CSS Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.015]"
                  style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors z-20 shadow-sm"
                aria-label="Close form"
              >
                <X size={18} />
              </button>

              {/* Header Info */}
              <div className="flex flex-col items-center text-center mt-2 shrink-0">
                {/* Maskan Logo */}
                <div className="w-64 h-16 relative flex justify-center items-center">
                  <Image
                    src={MaskanLogo}
                    alt="Maskan Logo"
                    className="object-contain max-h-full brightness-0 scale-[2.8] origin-center"
                  />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mt-6 leading-tight">
                  Your dream space is one message away
                </h2>
                <p className="text-sm text-gray-500 max-w-sm mt-2.5 font-light leading-relaxed">
                  Have a project in mind or just want to say hello? Fill out the form and our team will get back to you.
                  <span className="block mt-2 text-[14px] font-semibold text-[var(--fg-primary)]">
                    &quot;നിങ്ങളുടെ സ്വപ്ന വീട് ഒരു സന്ദേശം അകലെ&quot;
                  </span>
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1.5 ml-1">
                      Your Full Name *
                    </span>
                    <div className="flex items-center bg-gray-50 border border-gray-200/80 rounded-2xl focus-within:ring-2 focus-within:ring-[#1F4F71]/15 focus-within:border-[#1F4F71] transition-all px-4 py-3">
                      <User size={16} className="text-gray-400 mr-2.5 shrink-0" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-transparent border-0 outline-none p-0 w-full text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1.5 ml-1">
                      Phone Number
                    </span>
                    <div className="flex items-center bg-gray-50 border border-gray-200/80 rounded-2xl focus-within:ring-2 focus-within:ring-[#1F4F71]/15 focus-within:border-[#1F4F71] transition-all px-4 py-3">
                      <Phone size={16} className="text-gray-400 mr-2.5 shrink-0" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-transparent border-0 outline-none p-0 w-full text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>
                  {/* Email Field */}
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1.5 ml-1">
                      Email Address *
                    </span>
                    <div className="flex items-center bg-gray-50 border border-gray-200/80 rounded-2xl focus-within:ring-2 focus-within:ring-[#1F4F71]/15 focus-within:border-[#1F4F71] transition-all px-4 py-3">
                      <Mail size={16} className="text-gray-400 mr-2.5 shrink-0" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-transparent border-0 outline-none p-0 w-full text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  {/* Type Of Project Field */}
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1.5 ml-1">
                      Type Of Project
                    </span>
                    <div className="relative flex items-center bg-gray-50 border border-gray-200/80 rounded-2xl focus-within:ring-2 focus-within:ring-[#1F4F71]/15 focus-within:border-[#1F4F71] transition-all px-4 py-3">
                      <svg className="w-4 h-4 text-gray-400 mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="bg-transparent border-0 outline-none p-0 w-full text-sm text-gray-900 appearance-none cursor-pointer focus:ring-0 focus:outline-none"
                      >
                        <option value="" disabled hidden>Select Your Project</option>
                        <option value="maskan-avoria">Maskan Avoria</option>
                        <option value="meridian-heights">Meridian Heights</option>
                        <option value="kakanad-commercial-hub">Kakanad Commercial Hub</option>
                        <option value="plaza-commercial-complex">Plaza Commercial Complex</option>
                        <option value="manjeri-white-field">Manjeri White Field</option>
                        <option value="residential-flat">Apartments</option>
                        <option value="plaza-commercial-building">Plaza Commercial Building</option>
                        <option value="ayush-villa">Ayush Villa</option>
                        <option value="school-project-pattambi">School Project (Pattambi)</option>
                        <option value="commercial-building-edappal">Commercial Building (Edappal)</option>
                        <option value="commercial-building-areacode">Commercial Building (Areacode)</option>
                        <option value="school-project-tirur">School Project (Tirur)</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1.5 ml-1">
                    Message *
                  </span>
                  <div className="flex items-start bg-gray-50 border border-gray-200/80 rounded-2xl focus-within:ring-2 focus-within:ring-[#1F4F71]/15 focus-within:border-[#1F4F71] transition-all px-4 py-3">
                    <MessageSquare size={16} className="text-gray-400 mr-2.5 shrink-0 mt-1" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-transparent border-0 outline-none p-0 w-full text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-[#1F4F71] hover:bg-[#153a54] text-white font-semibold rounded-2xl active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-6 shadow-md shadow-[#1F4F71]/10 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-1" />
                    </>
                  )}
                </button>
              </form>

              {/* Social Channels / Footer */}
              <div className="flex flex-col items-center mt-2 pt-4 border-t border-gray-100 gap-3 shrink-0">
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                  Follow Our Journey
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/maskan_builders/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-[#1F4F71] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  </a>
                  <a
                    href="https://www.facebook.com/Maskan-builders-106170434940334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-[#1F4F71] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </a>
                  <a
                    href="https://wa.me/917594033300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-[#1F4F71] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.031 0C5.385 0 0 5.388 0 12.037c0 2.124.553 4.195 1.604 6.01L.004 24l6.105-1.601a11.967 11.967 0 005.922 1.564h.005c6.645 0 12.035-5.388 12.035-12.036 0-3.22-1.254-6.248-3.532-8.528A11.967 11.967 0 0012.031 0zm0 21.95h-.003a9.932 9.932 0 01-5.06-1.378l-.362-.215-3.766.988.998-3.67-.236-.376A9.957 9.957 0 012.031 12.04c0-5.495 4.472-9.97 9.972-9.97 2.663 0 5.166 1.037 7.048 2.92a9.971 9.971 0 012.923 7.046c0 5.495-4.472 9.97-9.97 9.97l.001-.004v-.012l-.004.016zm5.474-7.48c-.3-.15-1.776-.877-2.05-.977-.275-.1-.475-.15-.675.15-.2.3-.775.977-.95 1.177-.175.2-.35.225-.65.075-1.343-.674-2.482-1.428-3.385-2.92-.2-.33-.02-.51.13-.66.134-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.627-.925-2.227-.244-.585-.49-.505-.675-.515-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.114 3.228 5.12 4.526 2.378 1.026 3.14 1.075 3.82.9.728-.187 2.225-.912 2.54-1.794.314-.882.314-1.637.22-1.794-.09-.157-.34-.247-.64-.397h-.005v-.01z" clipRule="evenodd" /></svg>
                  </a>
                  <a
                    href="https://twitter.com/LlpMaskan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-[#1F4F71] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
