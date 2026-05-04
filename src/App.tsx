/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Target, 
  ShieldAlert, 
  TrendingUp, 
  Bell, 
  ChevronLeft, 
  ChevronRight, 
  Crown,
  Play,
  CheckCircle2,
  TrendingUp as TrendingUpIcon,
  MessageSquare,
  Flame,
  ThumbsUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    author: "Ahmed",
    status: "online",
    pair: "XAUUSD BUY",
    entry: "2332.50",
    tp1: "2338.00",
    tp2: "2344.00",
    sl: "2324.00",
    message: "Hit TP1 ✅ Let's go!",
    time: "10:28 AM",
    reactions: { fire: 18, thumbs: 12 }
  },
  {
    author: "Michael",
    status: "online",
    pair: "GBPUSD BUY",
    entry: "1.2685",
    tp1: "1.2735",
    tp2: "1.2785",
    sl: "1.2620",
    message: "+100 Pips locked in! Amazing signal 🔥",
    time: "11:15 AM",
    reactions: { fire: 21, thumbs: 15 }
  },
  {
    author: "Lucas",
    status: "online",
    pair: "EURUSD BUY",
    entry: "1.0850",
    tp1: "1.0890",
    tp2: "1.0930",
    sl: "1.0790",
    message: "+160 Pips ✅ You're the best! 👑",
    time: "12:05 PM",
    reactions: { fire: 16, thumbs: 10 }
  },
  {
    author: "Sophia",
    status: "online",
    pair: "NAS100 SELL",
    entry: "18240",
    tp1: "18180",
    tp2: "18100",
    sl: "18300",
    message: "Sharp entry on NAS! TP2 smashed 🎯💰",
    time: "2:45 PM",
    reactions: { fire: 25, thumbs: 18 }
  },
  {
    author: "Ryan",
    status: "online",
    pair: "GBPJPY BUY",
    entry: "190.20",
    tp1: "190.80",
    tp2: "191.50",
    sl: "189.50",
    message: "GBPJPY moving exactly as predicted. 80 pips and counting!",
    time: "4:12 PM",
    reactions: { fire: 14, thumbs: 9 }
  },
  {
    author: "Daniel",
    status: "online",
    message: "Back to back wins 💪 This is real trading. This is THE23FX 🔥 Let's keep printing 💰",
    time: "1:20 PM",
    reactions: { fire: 20, thumbs: 14 }
  }
];

const features = [
  {
    icon: <Target className="w-8 h-8 text-gold-400" />,
    title: "HIGH ACCURACY",
    desc: "Carefully analyzed setups with high probability for consistent results."
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-gold-400" />,
    title: "RISK MANAGEMENT",
    desc: "Every signal includes clear stop loss and take profit levels to protect your capital."
  },
  {
    icon: <TrendingUpIcon className="w-8 h-8 text-gold-400" />,
    title: "CONSISTENT RESULTS",
    desc: "Backed by strategy, discipline & data to deliver steady and reliable profits."
  },
  {
    icon: <Bell className="w-8 h-8 text-gold-400" />,
    title: "REAL-TIME ALERTS",
    desc: "Fast, clear and timely signals so you never miss a winning opportunity."
  }
];

const TELEGRAM_LINK = "https://t.me/the23fx";

export default function App() {
  useEffect(() => {
    const container = document.getElementById('testimonial-container');
    if (!container) return;

    const autoScroll = setInterval(() => {
      // Check if we're at the end
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 350, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, []);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    const container = document.getElementById('testimonial-container');
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-trading-dark text-white overflow-x-hidden font-sans">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-trading-blue/10 blur-[120px] rounded-full" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Header / Logo */}
      <header className="relative z-10 pt-12 pb-8 px-4 flex flex-col items-center">
        <div className="relative group">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-4">
              <img 
                src="/logo.png" 
                alt="The 23fx Logo" 
                className="h-24 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                onError={(e) => {
                  // Fallback if image isn't uploaded yet
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none' }} className="flex flex-col items-center">
                <Crown className="w-10 h-10 text-gold-400 mb-1 drop-shadow-[0_0_15px_rgba(255,161,20,0.5)]" />
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter flex items-center">
                  The <span className="text-gold-400 italic">23</span>fx
                </h1>
              </div>
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-x-0 -bottom-4 bg-gold-400/20 blur-2xl h-8 -z-10"
              />
            </div>
            <p className="mt-4 text-xs md:text-sm tracking-[0.4em] text-gray-400 font-medium uppercase text-center space-x-2">
              <span>PRECISION.</span>
              <span className="text-white">DISCIPLINE.</span>
              <span>PROFIT.</span>
            </p>
          </motion.div>
          
          {/* Bull/Bear Decorative Images */}
          <div className="absolute -left-20 top-0 hidden lg:block opacity-20 hover:opacity-40 transition-opacity duration-700 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=400&auto=format&fit=crop" 
              alt="Bull" 
              className="w-48 h-48 object-contain mix-blend-screen"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -right-20 top-0 hidden lg:block opacity-20 hover:opacity-40 transition-opacity duration-700 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?q=80&w=400&auto=format&fit=crop" 
              alt="Bear" 
              className="w-48 h-48 object-contain mix-blend-screen"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full mx-auto px-4 md:px-8 lg:px-16 pb-24 flex flex-col items-center space-y-24">
        
        {/* Playable Video Section */}
        <section className="w-full max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-video group"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/6nO9P6q7Rrc?autoplay=1&mute=1&loop=1&playlist=6nO9P6q7Rrc&controls=1&showinfo=0&rel=0"
              title="Forex Trading Results"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* Custom Overlay for 'Premium' look */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-black/20 rounded-2xl" />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              LIVE PROFITS
            </div>
            <div className="absolute bottom-4 right-4 bg-trading-blue/80 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold border border-white/20 shadow-lg">
              +318 PIPS SECURED
            </div>
          </motion.div>
        </section>

        {/* Telegram Section */}
        <section className="w-full max-w-7xl">
          <motion.a 
            href={TELEGRAM_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-trading-blue to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative bg-[#001429] border border-trading-blue/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 overflow-hidden">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-trading-blue rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(10,132,255,0.4)] transition-transform group-hover:scale-110 duration-500">
                <Send className="w-10 h-10 md:w-12 md:h-12 text-white -rotate-12 translate-x-[-2px] translate-y-[-1px]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight leading-none mb-2">
                  JOIN NOW <br className="hidden md:block" /><span className="text-trading-blue underline decoration-white/20 underline-offset-8 transition-colors group-hover:text-white">FOR FREE!</span>
                </h2>
                <p className="text-xs md:text-sm text-gray-400 font-bold tracking-[0.1em] uppercase">
                  EXCLUSIVE FOREX SIGNALS & MARKET INSIGHTS
                </p>
              </div>
              <ChevronRight className="w-12 h-12 text-white/50 group-hover:text-white group-hover:translate-x-2 transition-all" />
            </div>
          </motion.a>
        </section>

        {/* Testimonials Carousel */}
        <section className="w-full flex flex-col items-center">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-black">REAL RESULTS. REAL TRADERS.</span>
            <h3 className="text-2xl md:text-4xl font-display font-bold mt-2">SEE WHAT <span className="text-gold-400">OUR MEMBERS</span> SAY</h3>
          </div>

          <div className="relative w-full px-4 md:px-12">
            <div 
              id="testimonial-container"
              className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8 snap-x snap-mandatory"
            >
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="min-w-[280px] md:min-w-[320px] bg-[#0A0A0B] border border-white/5 rounded-2xl p-6 snap-center flex flex-col group hover:bg-[#0E0E0F] hover:border-gold-400/30 transition-all duration-300 shadow-xl shadow-black/20"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/10 to-gold-600/10 border border-gold-400/20 flex items-center justify-center text-gold-400 font-bold shadow-inner group-hover:scale-105 transition-transform">
                      {t.author[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-gold-400 transition-colors">{t.author}</h4>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{t.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    {t.pair && (
                      <div className="bg-black/40 rounded-xl p-4 border border-white/5 text-[11px] font-mono space-y-2 group-hover:border-white/10 transition-colors">
                        <div className="text-gold-400 font-black mb-2 tracking-tighter flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3" />
                          THE23FX VIP SIGNAL
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-gray-500">PAIR:</span> <span className="text-white font-bold">{t.pair}</span></div>
                        <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-gray-500">ENTRY:</span> <span className="text-white">{t.entry}</span></div>
                        <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-gray-500">TP1:</span> <span className="text-green-400 font-black">{t.tp1}</span></div>
                        <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-gray-500">TP2:</span> <span className="text-green-400 font-black">{t.tp2}</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">SL:</span> <span className="text-red-500 font-black">{t.sl}</span></div>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed text-gray-300 font-medium">
                      "{t.message}"
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 bg-white/[0.03] px-2.5 py-1 rounded-md text-[10px] font-bold border border-white/5">
                        <Flame className="w-3 h-3 text-orange-500" /> {t.reactions.fire}
                      </div>
                      <div className="flex items-center gap-1 bg-white/[0.03] px-2.5 py-1 rounded-md text-[10px] font-bold border border-white/5">
                        <ThumbsUp className="w-3 h-3 text-blue-400" /> {t.reactions.thumbs}
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">{t.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Arrows */}
            <button 
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 hidden md:flex items-center justify-center border border-white/10 transition-colors z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 hidden md:flex items-center justify-center border border-white/10 transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Features / Pillars */}
        <section className="w-full">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-display font-black tracking-widest text-gold-400 mb-2 uppercase">THE23FX SOLID TRADING SIGNALS</h3>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-gold-400/50 transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="mb-6 p-4 rounded-full bg-gold-400/10 group-hover:scale-110 group-hover:bg-gold-400/20 transition-all duration-500">
                  {f.icon}
                </div>
                <h4 className="text-lg font-display font-bold mb-4 tracking-tight group-hover:text-gold-400 transition-colors">{f.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 pt-20 pb-12 px-6">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <Crown className="w-8 h-8 text-gold-500/50 mb-8" />
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 mb-16">
            <div className="text-center md:text-left">
              <div className="text-2xl font-display font-bold mb-1">
                The <span className="text-gold-400 italic">23</span>fx
              </div>
              <p className="text-xs text-gray-500 tracking-[0.2em] uppercase font-bold">Trading Excellence</p>
            </div>
            
            <div className="text-center uppercase tracking-[0.3em] text-xs font-black">
              <span className="text-gray-500">DISCIPLINE</span> TODAY. <span className="text-trading-blue">FREEDOM</span> TOMORROW.
            </div>

            <div className="flex gap-6">
              <motion.a 
                href={TELEGRAM_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }} 
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Send className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href={TELEGRAM_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }} 
                className="text-gray-500 hover:text-white transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
            <p className="text-[10px] text-gray-600 font-bold tracking-widest uppercase">
              © 2024 THE23FX. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[10px] text-gray-600 font-bold tracking-widest uppercase">
              RECREATED WITH ❤️ BY <a href="https://mushieditz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">MUSHI EDITZ</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:hidden z-50">
        <motion.a 
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-3 w-full py-4 bg-trading-blue rounded-xl font-bold shadow-2xl shadow-blue-500/40 border border-white/20"
        >
          <Send className="w-5 h-5" />
          JOIN TELEGRAM FOR FREE
        </motion.a>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

