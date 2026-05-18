"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, User, Phone, MapPin, Send, Calculator, CheckCircle2 } from "lucide-react";

function useCountUp(endValue: number, duration = 800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * endValue));
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    
    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [endValue, duration]);

  return count;
}

export default function SustainableRetreat() {
  const [totalCost, setTotalCost] = useState<number>(5000000);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", location: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialPercent = 30;
  const emiPercent = 1; // 1% of total project cost per month

  const calculations = useMemo(() => {
    const advance = totalCost * (initialPercent / 100);
    const balance = totalCost - advance;
    const emi = totalCost * (emiPercent / 100);
    const tenure = emi > 0 ? Math.round(balance / emi) : 0;
    
    return { advance, emi, tenure };
  }, [totalCost]);

  const animatedAdvance = useCountUp(calculations.advance);
  const animatedEmi = useCountUp(calculations.emi);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      alert(`Inquiry Submitted! \nName: ${formData.name} \nPhone: ${formData.phone} \nLocation: ${formData.location} \nProject Value: ₹${totalCost.toLocaleString()}`);
      setIsSubmitted(false);
      setShowEnquiry(false);
      setFormData({ name: "", phone: "", location: "" });
    }, 1000);
  };

  return (
    <div className="bg-[#2B3530] py-24 md:py-36 px-4 md:px-16 text-[#D1CCBF] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Flat Minimalism Calculator */}
        <div className="lg:col-span-6 w-full">
          <motion.div 
            className="bg-[#232b27] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative background grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_50%)] pointer-events-none" />

            {!showEnquiry ? (
              <div className="space-y-8 relative z-10">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="text-xs uppercase tracking-widest text-white font-semibold">Installment Calculator</div>
                  <Calculator className="w-4 h-4 text-white/40" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest text-white/50">
                    <span>Project Budget Valuation</span>
                    <span className="text-[#D1CCBF] text-sm">₹ {totalCost.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000000" 
                    max="20000000" 
                    step="100000" 
                    value={totalCost}
                    onChange={(e) => setTotalCost(Number(e.target.value))}
                    className="w-full accent-white bg-white/10 h-1 rounded-lg cursor-pointer transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="space-y-1">
                    <span className="text-2xs uppercase tracking-widest text-white/40 block">Booking Advance ({initialPercent}%)</span>
                    <div className="text-xl md:text-2xl font-light text-white leading-none">
                      ₹ {animatedAdvance.toLocaleString()}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-2xs uppercase tracking-widest text-white/40 block">Monthly Installment ({emiPercent}%)</span>
                    <div className="text-xl md:text-2xl font-light text-white leading-none">
                      ₹ {animatedEmi.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest text-white/50">
                    <span>Project Tenure</span>
                    <span className="text-sm text-white font-medium">{calculations.tenure} Months</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-white to-zinc-400 rounded-full transition-all duration-500" 
                      style={{ width: `${initialPercent}%` }} 
                    />
                  </div>
                </div>

                <button 
                  onClick={() => setShowEnquiry(true)}
                  className="w-full py-4 rounded-xl bg-white hover:bg-neutral-100 text-black text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 group animate-pulse"
                >
                  Customize Payment Plan 
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : (
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="text-xs uppercase tracking-widest text-white font-semibold">Estimate Details</div>
                  <button 
                    onClick={() => setShowEnquiry(false)}
                    className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                  >
                    Back to Calculator
                  </button>
                </div>

                {/* Summary box */}
                <div className="bg-black/20 border border-white/5 rounded-2xl p-4 space-y-2 text-xs">
                  <div className="flex justify-between text-white/60">
                    <span>Total Project Valuation:</span>
                    <span className="font-semibold text-white">₹ {totalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Booking Advance ({initialPercent}%):</span>
                    <span className="font-semibold text-white">₹ {calculations.advance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Milestone EMI (x{calculations.tenure} months):</span>
                    <span className="font-semibold text-white">₹ {calculations.emi.toLocaleString()}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative border-b border-white/10 focus-within:border-white transition-colors py-2 flex items-center gap-3">
                    <User className="w-4 h-4 text-white/30" />
                    <input 
                      type="text" 
                      placeholder="Your Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-transparent border-none w-full text-sm text-[#D1CCBF] placeholder-white/20 focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div className="relative border-b border-white/10 focus-within:border-white transition-colors py-2 flex items-center gap-3">
                    <Phone className="w-4 h-4 text-white/30" />
                    <input 
                      type="tel" 
                      placeholder="Contact Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-transparent border-none w-full text-sm text-[#D1CCBF] placeholder-white/20 focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div className="relative border-b border-white/10 focus-within:border-white transition-colors py-2 flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-white/30" />
                    <input 
                      type="text" 
                      placeholder="Project Location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="bg-transparent border-none w-full text-sm text-[#D1CCBF] placeholder-white/20 focus:outline-none focus:ring-0"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full py-4 mt-2 rounded-xl bg-white hover:bg-neutral-100 text-black text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitted ? (
                      <>
                        Securing Estimate... <CheckCircle2 className="w-4 h-4 animate-bounce" />
                      </>
                    ) : (
                      <>
                        Submit Payment Request <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Column: 30/70 Explanation */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-white/80 uppercase tracking-widest text-xs font-bold">Unique Financial Engine</div>
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
              The Maskan <br />
              <span className="text-white font-normal border-b border-white/20 pb-1">30/70</span> Payment Model
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              We&apos;ve completely re-engineered high-end home building finances. Traditional construction models force clients to pay heavy upfront margins, creating severe capital bottlenecks. Maskan replaces this stress with a clean, low-advance, installment-driven workflow synced perfectly with project milestones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            <motion.div 
              className="space-y-2 border-l border-white/10 pl-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-xs uppercase tracking-wider text-white font-semibold">01 / Low 30% Booking</div>
              <div className="text-sm text-white/80 leading-relaxed font-normal">
                Secure design, detailed structural plans, and mobilization assets with a minimal down payment.
              </div>
            </motion.div>

            <motion.div 
              className="space-y-2 border-l border-white/10 pl-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-xs uppercase tracking-wider text-white font-semibold">02 / No Capital Bottlenecks</div>
              <div className="text-sm text-white/80 leading-relaxed font-normal">
                Construction progresses fluidly without halting due to giant cash advances or supply constraints.
              </div>
            </motion.div>

            <motion.div 
              className="space-y-2 border-l border-white/10 pl-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-xs uppercase tracking-wider text-white font-semibold">03 / 70% Over Tenure</div>
              <div className="text-sm text-white/80 leading-relaxed font-normal">
                The balance is split into easy monthly payments aligned with strict building standards.
              </div>
            </motion.div>

            <motion.div 
              className="space-y-2 border-l border-white/10 pl-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-xs uppercase tracking-wider text-white font-semibold">04 / Zero Hidden Margins</div>
              <div className="text-sm text-white/80 leading-relaxed font-normal">
                Any resource saving achieved during planning is directly passed back to lower your budget.
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
