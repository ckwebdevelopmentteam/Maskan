"use client";

import React, { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setFormData({ name: "", email: "", phone: "", message: "" });
      router.push("/thank-you");
    } catch {
      // Fallback for demo purposes
      onClose();
      setStatus("idle");
      setFormData({ name: "", email: "", phone: "", message: "" });
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

          {/* Modal */}
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-2xl bg-[var(--bg-primary)] text-[var(--fg-primary)] rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              <div className="flex justify-between items-center p-6 border-b border-[var(--fg-primary)]/10">
                <div className="flex-1 flex justify-center pl-8 h-16 md:h-20 relative overflow-hidden">
                  <Image 
                    src={MaskanLogo} 
                    alt="Maskan Logo" 
                    className="absolute inset-0 w-full h-full object-contain brightness-0 scale-[2.5] md:scale-[3] origin-center" 
                  />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-[var(--fg-primary)]/5 transition-colors shrink-0"
                  aria-label="Close form"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--fg-primary)]/5 border border-[var(--fg-primary)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--fg-primary)]/5 border border-[var(--fg-primary)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--fg-primary)]/5 border border-[var(--fg-primary)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--fg-primary)]/5 border border-[var(--fg-primary)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
