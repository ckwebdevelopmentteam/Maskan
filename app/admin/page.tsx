"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      
      {/* Video Side - Hidden on smaller screens */}
      <div className="hidden lg:flex w-1/2 relative bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/2f8513be6ada613216512933aa4a7ea4519c1e7755d75a40a6a43440466b37d4.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay for a premium feel */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Logo at top center */}
        <div className="absolute top-12 left-0 w-full flex justify-center z-20 pointer-events-none">
          <img src="/Maskan Open File/PNG/Maskan-01.png" alt="Maskan Logo" className="h-64 scale-150 object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)]" />
        </div>
        
        <div className="absolute bottom-16 left-16 text-white z-10 pr-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Manage Maskan</h2>
          <p className="text-lg text-white/80">Access your dashboard to manage career listings, track applications, and oversee locations.</p>
        </div>
      </div>

      {/* Form Side */}
      <div 
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Maskan Open File/PNG/Maskan-06.png')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 w-full max-w-md bg-white/85 p-12 rounded-[2.5rem] shadow-2xl backdrop-blur-md border border-white/50 flex flex-col items-center">
          <div className="mb-10 w-full flex justify-center">
            <img src="/Maskan Open File/PNG/Maskan-01.png" alt="Maskan Logo" className="h-24 object-contain scale-125 invert" />
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-8 text-[#245171]">Admin Login</h2>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl mb-6 text-sm w-full text-center font-bold">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6 w-full">
            <div>
              <label className="block text-sm font-bold text-[#245171] mb-2">Username</label>
              <input 
                type="text" 
                className="w-full px-5 py-3.5 border border-[#245171]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#245171] text-base transition-all bg-white/80 text-gray-900 placeholder-gray-500 backdrop-blur-md shadow-sm hover:bg-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#245171] mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-5 py-3.5 border border-[#245171]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#245171] text-base transition-all bg-white/80 text-gray-900 placeholder-gray-500 backdrop-blur-md shadow-sm hover:bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#245171] text-white py-4 mt-4 rounded-xl text-lg font-bold hover:bg-[#1C415B] transition-all disabled:opacity-50 shadow-xl shadow-[#245171]/20"
            >
              {loading ? 'Authenticating...' : 'Login'}
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
