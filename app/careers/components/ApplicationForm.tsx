"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ApplicationFormProps {
  isOpen?: boolean;
  jobTitle: string;
  onClose?: () => void;
  isInline?: boolean;
}

export default function ApplicationForm({ isOpen = true, jobTitle, onClose = () => { }, isInline = false }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!isInline && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isInline]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const resumeFile = formData.get('Resume') as File;
    
    let base64Resume = '';
    let resumeName = '';
    
    if (resumeFile && resumeFile.size > 0) {
      resumeName = resumeFile.name;
      // Convert to base64
      base64Resume = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(resumeFile);
      });
    }

    const data = {
      name: formData.get('Name') as string,
      email: formData.get('Email') as string,
      phone: formData.get('Phone') as string,
      jobTitle: jobTitle,
      message: formData.get('Remarks') as string,
      resumeName: resumeName,
      resumeData: base64Resume
    };

    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        // Redirect to WhatsApp
        const waNumber = "917594033300";
        const text = `Hi, I am applying for the ${jobTitle} position.\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nRemarks: ${data.message}\n\n*Note: My resume has been securely uploaded to your Admin Dashboard.*`;
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
        onClose();
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const innerFormContent = (
    <>
      <div className="flex items-center justify-between px-8 py-6 border-b border-black/10 shrink-0">
        <h2 className="text-2xl md:text-3xl font-normal text-black leading-tight">
          Online Application
        </h2>
        {!isInline && (
          <button
            type="button"
            onClick={onClose}
            className="text-black/50 hover:text-black transition-colors"
          >
            <X className="w-6 h-6 font-light" strokeWidth={1} />
          </button>
        )}
      </div>

      <div className="px-8 py-6 flex-grow overflow-y-auto">
        <form
          className="flex flex-col"
          onSubmit={handleSubmit}
        >

          <div className="space-y-5">
            {/* Position (Read-only) */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-black/50 mb-1">Position *</label>
              <input
                type="text"
                name="Position"
                value={jobTitle}
                readOnly
                className="w-full bg-transparent border-b border-black/20 text-black py-2 text-base outline-none"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-black/50 mb-1">Name *</label>
              <input
                name="Name"
                type="text"
                required
                className="w-full bg-transparent border-b border-black/20 text-black py-2 text-base outline-none focus:border-[#C52026] transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-black/50 mb-1">Email Address *</label>
              <input
                name="Email"
                type="email"
                required
                className="w-full bg-transparent border-b border-black/20 text-black py-2 text-base outline-none focus:border-[#C52026] transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-black/50 mb-1">Mobile Number *</label>
              <input
                name="Phone"
                type="tel"
                required
                className="w-full bg-transparent border-b border-black/20 text-black py-2 text-base outline-none focus:border-[#C52026] transition-colors"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-black/50 mb-1">Resume * <span className="text-[10px] normal-case tracking-normal">(Pdf, doc, docx, txt)</span></label>
              <input
                name="Resume"
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                required
                className="w-full mt-1 text-sm text-black/60 file:mr-3 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-gray-100 file:text-black hover:file:bg-gray-200 file:cursor-pointer file:transition-colors"
              />
            </div>

            {/* Remarks */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-black/50 mb-1">Remarks *</label>
              <input
                name="Remarks"
                type="text"
                required
                className="w-full bg-transparent border-b border-black/20 text-black py-2 text-base outline-none focus:border-[#C52026] transition-colors"
              />
            </div>
          </div>

          <div className="pt-8 pb-4 shrink-0">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1F4F71] text-white text-base font-normal py-4 hover:bg-[#A01920] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-center shadow-lg"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </>
  );

  if (isInline) {
    return (
      <div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-black/5 flex flex-col mt-8" id="apply">
        {innerFormContent}
      </div>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Slide-over Panel */}
          <motion.div
            className="fixed top-0 right-0 h-[100dvh] w-full max-w-md bg-white z-50 overflow-hidden shadow-2xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {innerFormContent}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
