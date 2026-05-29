"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Moon, ExternalLink, Copy, Check, Twitter, 
  Send, BarChart3, Zap, ShieldCheck, Rocket, Flame, Globe, Info
} from 'lucide-react';

// --- CONFIGURATION ---
const contractAddress = "0x26f75C5eD01bb7Be6cFb807a332593b1D6c77139";
const buyUrl = "https://world.org/mini-app?app_id=app_4593f73390a9843503ec096086b43612&path=/launchpad/token/0x26f75C5eD01bb7Be6cFb807a332593b1D6c77139";
const telegramUrl = "https://t.me/Cloudogeweb3MY";
const twitterUrl = "https://x.com/CLOUDOGEweb3";

export default function CloudogeLanding() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-[#fbbf24]/30 text-white overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#fbbf24]/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
            <span className="text-2xl font-black tracking-tighter">CLOUDOGE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">
            <a href="#about" className="hover:text-[#fbbf24] transition-colors">ABOUT</a>
            <a href="#roadmap" className="hover:text-[#fbbf24] transition-colors">ROADMAP</a>
            <a href={buyUrl} target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-2 bg-[#fbbf24] hover:bg-white text-[#020617] rounded-full transition-all font-black">
                BUY $CLOUD
                </button>
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/20 text-[#fbbf24] text-xs font-black mb-6 tracking-widest">
              <Zap size={14} /> LIVE ON WORLD CHAIN
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
              The Dreamiest <br />
              <span className="text-sky-400">Meme Coin</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
              CLOUDOGE ($CLOUD) is building a strong community of dreamers, holders, and moon believers. Catch the vibe, join the cloud.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={buyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#fbbf24] hover:scale-105 text-[#020617] rounded-2xl font-black transition-all shadow-xl shadow-[#fbbf24]/20">
                BUY $CLOUD
              </a>
              <a href={buyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold transition-all flex items-center gap-2 border border-white/10">
                <BarChart3 size={18} /> VIEW CHART
              </a>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-2xl font-bold transition-all flex items-center gap-2 border border-sky-500/20">
                <Send size={18} /> TELEGRAM
              </a>
            </div>
          </motion.div>

          <motion.div className="relative flex justify-center" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
             <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 bg-[#fbbf24]/20 blur-[100px] rounded-full"></div>
                <img src="/logo.png" alt="Cloudoge" className="relative z-10 w-full h-full object-contain" />
                <div className="absolute top-0 right-0 animate-bounce"><Moon className="text-[#fbbf24] fill-[#fbbf24]" size={48} /></div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LIVE TOKEN INFO */}
      <section className="py-12 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Supply", val: "100M", icon: <Globe size={16}/> },
            { label: "Burned", val: "638.K 🔥", icon: <Flame size={16}/> },
            { label: "Fee", val: "0.55%", icon: <Info size={16}/> },
            { label: "Network", val: "World Chain", icon: <ShieldCheck size={16}/> },
            { label: "Status", val: "Active", icon: <Zap size={16}/> },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
              <div className="text-[#fbbf24] mb-2">{s.icon}</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s.label}</div>
              <div className="text-xl font-black text-white">{s.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT */}
      <section id="about" className="py-32 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">What is CLOUDOGE?</h2>
          <p className="text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            CLOUDOGE is a cozy meme token built for community, rewards, and the future of Web3 culture.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { t: "Cozy Branding", d: "Premium aesthetic designed for long-term vibes." },
            { t: "Meme Community", d: "Organic growth driven by the strongest dreamers." },
            { t: "Community Rewards", d: "Holders are rewarded through ecosystem growth." },
            { t: "Burn Events", d: "Deflationary pressure through strategic burn cycles." },
            { t: "Future Mini Apps", d: "Real utility via Telegram and World Chain apps." },
            { t: "Web3 Expansion", d: "Bridging memes with actual decentralized tools." },
          ].map((feat, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-[#fbbf24]/30 transition-all group">
              <div className="w-12 h-12 bg-[#fbbf24]/10 rounded-2xl flex items-center justify-center text-[#fbbf24] mb-6 group-hover:scale-110 transition-transform">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-black text-white mb-2">{feat.t}</h3>
              <p className="text-slate-500">{feat.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ROADMAP */}
      <section id="roadmap" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-20">Roadmap</h2>
          <div className="space-y-12 border-l-2 border-[#fbbf24]/20 pl-8 ml-4">
            {[
              { p: "Phase 1", t: "Launch", items: ["Token Launch", "Bonding Curve", "Website Release", "Community Launch"] },
              { p: "Phase 2", t: "Growth", items: ["Whitepaper", "Meme Contest", "Community Expension", "Marketing Push"] },
              { p: "Phase 3", t: "Utility", items: ["NFT Collection", "Exchage Listing", "Staking System", "Mini App Integration", "NFT Collection", "Exchange Listings", "Partnerships" ] },
            ].map((r, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 bg-[#fbbf24] rounded-full border-4 border-[#020617]"></div>
                <span className="text-[#fbbf24] font-black uppercase text-sm tracking-widest">{r.p}</span>
                <h3 className="text-3xl font-black text-white mb-4">{r.t}</h3>
                <div className="flex flex-wrap gap-2">
                  {r.items.map((item, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/5 rounded-lg text-sm border border-white/10 text-slate-400">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#fbbf24]/5 blur-[150px] rounded-full"></div>
        <div className="relative z-10">
          <h2 className="text-7xl md:text-[120px] font-black text-white mb-10 tracking-tighter">Sleep. Meme. Moon.</h2>
          <a href={buyUrl} target="_blank" rel="noopener noreferrer">
            <button className="px-12 py-6 bg-[#fbbf24] text-[#020617] rounded-3xl font-black text-2xl hover:scale-110 transition-transform shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                HOLD $CLOUD
            </button>
          </a>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-20 border-t border-white/5 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-black">CLOUDOGE</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">Built for dreamers and moon believers. The official cozy coin of World Chain.</p>
            <div className="flex gap-4">
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-[#fbbf24] transition-all">
                <Twitter size={20} />
              </a>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-[#fbbf24] transition-all">
                <Send size={20} />
              </a>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
             <p className="text-[10px] font-black text-[#fbbf24] mb-2 tracking-widest uppercase">Contract Address</p>
             <div className="flex items-center justify-between bg-black/50 p-4 rounded-xl border border-white/5">
                <code className="text-sky-300 text-xs md:text-sm truncate mr-4">{contractAddress}</code>
                <button onClick={copyToClipboard} className="text-white hover:text-[#fbbf24] transition-colors flex-shrink-0">
                  {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} />}
                </button>
             </div>
             <div className="mt-4 flex flex-wrap gap-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <span>Network: World Chain</span>
                <a href={buyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-[#fbbf24]">View Chart</a>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 text-center text-slate-600 text-[10px] font-bold tracking-widest">
           &copy; {new Date().getFullYear()} CLOUDOGE. BUILT FOR DREAMERS AND MOON BELIEVERS.
        </div>
      </footer>
    </div>
  );
}
