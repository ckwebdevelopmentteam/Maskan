"use client";

import React, { useState, useMemo, useEffect } from "react";
import { ArrowRight, User, Phone, MapPin, Send, Calculator } from "lucide-react";

function useCountUp(endValue: number, duration = 1000) {
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

export default function PaymentCalculator() {
  const [totalCost, setTotalCost] = useState<number>(3000000);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", location: "" });

  const initialPercent = Number(process.env.NEXT_PUBLIC_INITIAL_PAYMENT_PERCENT || 30);
  const emiPercent = Number(process.env.NEXT_PUBLIC_MONTHLY_EMI_PERCENT || 1); // as percentage of total cost

  const calculations = useMemo(() => {
    const advance = totalCost * (initialPercent / 100);
    const balance = totalCost - advance;
    // Monthly EMI is configured percentage of TOTAL cost
    const emi = totalCost * (emiPercent / 100);
    const tenure = emi > 0 ? Math.round(balance / emi) : 0;
    
    return { advance, emi, tenure };
  }, [totalCost, initialPercent, emiPercent]);

  const animatedAdvance = useCountUp(calculations.advance);
  const animatedEmi = useCountUp(calculations.emi);

  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-0 mt-20 pt-20 border-t border-[var(--fg-primary)]/20 col-span-1 md:col-span-2">
      {/* Left side: Description */}
      <div className="flex flex-col gap-6 md:gap-8 md:pr-12">
        <div className="text-xl font-medium uppercase tracking-widest text-[var(--text-white)]/80 md:text-2xl">
          The {initialPercent}% Installment Engine
        </div>
        <p className="text-base leading-relaxed opacity-90 md:text-lg">
          Start your project with our exclusive budgeting model. By committing an advance token-payment of just {initialPercent}%, the remaining balance is seamlessly split into {calculations.tenure} equal monthly instalments. No market surplus, no hidden fees.
        </p>
        <p className="text-base leading-relaxed opacity-90 md:text-lg">
          We believe luxury construction must be a transparent journey. We&apos;ve restructured the traditional financial model to align completely with your progress, ensuring your capital is utilized efficiently and visibly.
        </p>
        <p className="text-base leading-relaxed opacity-90 md:text-lg">
          With our in-house architects and engineers working in absolute synergy, every rupee spent is justified. Enjoy total control over your investment—from the first foundation pour to the final handover.
        </p>
      </div>

      {/* Right side: Calculator & Form with Claymorphism */}
      <div className="bg-[var(--bg-primary)] rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-[inset_4px_4px_12px_rgba(255,255,255,0.05),_inset_-6px_-6px_15px_rgba(0,0,0,0.4),_10px_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500">
        
        {!showEnquiry ? (
          <div className="space-y-12">
            <div className="space-y-4">
              <label className="text-sm uppercase tracking-widest text-[var(--fg-primary)]/60 block">Project Valuation</label>
              <div className="relative group">
                <input 
                  type="number" 
                  value={totalCost || ''}
                  onChange={(e) => setTotalCost(Number(e.target.value))}
                  className="w-full bg-transparent border-b border-[var(--fg-primary)]/30 py-4 text-4xl md:text-5xl font-light text-[var(--fg-primary)] focus:outline-none focus:border-[var(--fg-primary)] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[var(--fg-primary)]/10">
              <div className="space-y-2">
                <span className="text-sm uppercase tracking-widest text-[var(--fg-primary)]/60 block">Advance ({initialPercent}%)</span>
                <div className="text-2xl md:text-3xl font-light text-[var(--fg-primary)] flex items-baseline gap-2">
                  <span>{animatedAdvance.toLocaleString()}</span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm uppercase tracking-widest text-[var(--fg-primary)]/60 block">Monthly EMI ({emiPercent}%)</span>
                <div className="text-2xl md:text-3xl font-light text-[var(--fg-primary)] flex items-baseline gap-2">
                  <span>{animatedEmi.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm uppercase tracking-widest text-[var(--fg-primary)]/60">Tenure Breakdown</span>
                <span className="text-lg text-[var(--fg-primary)]">{calculations.tenure} MONTHS</span>
              </div>
              <div className="h-px w-full bg-[var(--fg-primary)]/20 relative">
                <div className="absolute top-0 left-0 h-full bg-[var(--fg-primary)] shadow-[0_0_10px_rgba(209,204,191,0.5)]" style={{ width: `${initialPercent}%`, borderRadius: '2px' }} />
              </div>
            </div>

            <button 
              onClick={() => setShowEnquiry(true)}
              className="w-full mt-8 py-5 rounded-2xl bg-[var(--fg-primary)] text-[var(--bg-primary)] text-sm uppercase tracking-widest font-bold hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 shadow-[4px_4px_10px_rgba(0,0,0,0.3),_inset_-2px_-2px_5px_rgba(0,0,0,0.1),_inset_2px_2px_5px_rgba(255,255,255,0.8)]"
            >
              Proceed with Design <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-light text-[var(--fg-primary)]">Finalize Inquiry</h3>
              <button 
                onClick={() => setShowEnquiry(false)}
                className="p-3 rounded-full hover:bg-[var(--fg-primary)]/10 text-[var(--fg-primary)]/60 hover:text-[var(--fg-primary)] transition-colors shadow-[inset_2px_2px_5px_rgba(255,255,255,0.05),_inset_-2px_-2px_5px_rgba(0,0,0,0.3)]"
              >
                <Calculator className="w-5 h-5" />
              </button>
            </div>
            
            {/* Summary Box */}
            <div className="bg-[var(--bg-dark)] rounded-2xl p-5 shadow-[inset_3px_3px_8px_rgba(0,0,0,0.4),_inset_-2px_-2px_5px_rgba(255,255,255,0.02)] space-y-3">
              <div className="flex justify-between text-sm text-[var(--fg-primary)]/80">
                <span>Valuation:</span>
                <span className="font-medium">{totalCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-[var(--fg-primary)]/80">
                <span>Advance:</span>
                <span className="font-medium">{calculations.advance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-[var(--fg-primary)]/80">
                <span>EMI ({calculations.tenure} mos):</span>
                <span className="font-medium">{calculations.emi.toLocaleString()}</span>
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => {
              e.preventDefault();
              alert(`Lead Captured! \nName: ${formData.name} \nPhone: ${formData.phone} \nLocation: ${formData.location} \n\nProject: ${totalCost}`);
            }}>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--fg-primary)]/40 group-focus-within:text-[var(--fg-primary)] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[var(--bg-dark)] border-none rounded-xl py-4 pl-12 pr-4 text-[var(--fg-primary)] placeholder:text-[var(--fg-primary)]/30 focus:outline-none focus:ring-1 focus:ring-[var(--fg-primary)]/50 shadow-[inset_3px_3px_8px_rgba(0,0,0,0.4),_inset_-2px_-2px_5px_rgba(255,255,255,0.02)]"
                />
              </div>
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--fg-primary)]/40 group-focus-within:text-[var(--fg-primary)] transition-colors" />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[var(--bg-dark)] border-none rounded-xl py-4 pl-12 pr-4 text-[var(--fg-primary)] placeholder:text-[var(--fg-primary)]/30 focus:outline-none focus:ring-1 focus:ring-[var(--fg-primary)]/50 shadow-[inset_3px_3px_8px_rgba(0,0,0,0.4),_inset_-2px_-2px_5px_rgba(255,255,255,0.02)]"
                />
              </div>
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--fg-primary)]/40 group-focus-within:text-[var(--fg-primary)] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Project Location"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-[var(--bg-dark)] border-none rounded-xl py-4 pl-12 pr-4 text-[var(--fg-primary)] placeholder:text-[var(--fg-primary)]/30 focus:outline-none focus:ring-1 focus:ring-[var(--fg-primary)]/50 shadow-[inset_3px_3px_8px_rgba(0,0,0,0.4),_inset_-2px_-2px_5px_rgba(255,255,255,0.02)]"
                />
              </div>

              <button 
                type="submit"
                className="w-full mt-4 py-5 rounded-2xl bg-[var(--fg-primary)] text-[var(--bg-primary)] text-sm uppercase tracking-widest font-bold hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 shadow-[4px_4px_10px_rgba(0,0,0,0.3),_inset_-2px_-2px_5px_rgba(0,0,0,0.1),_inset_2px_2px_5px_rgba(255,255,255,0.8)]"
              >
                Submit Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
