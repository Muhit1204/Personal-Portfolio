'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { User, Briefcase, Code, BookOpen, GraduationCap, Mail, Cloud } from 'lucide-react';

export default function InteractiveNetworkMap() {
  // Coordinates mapped to the NEW provided isometric city image
  const hotspots = [
    // Publications Building (Left)
    { id: 'publications', label: 'Publications', icon: BookOpen, href: '/publications', top: '35%', left: '20%', color: 'text-rose-600' },
    // Research Projects (Center with Satellite)
    { id: 'projects', label: 'Projects', icon: Code, href: '/projects', top: '40%', left: '45%', color: 'text-indigo-600' },
    // Experience (Tall Grey Building, Back Right)
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '/experience', top: '25%', left: '65%', color: 'text-amber-600' },
    // Contact (Cafe Contact, Right)
    { id: 'contact', label: 'Contact', icon: Mail, href: '/contact', top: '45%', left: '80%', color: 'text-cyan-600' },
    // About Me (Park area, Bottom Center)
    { id: 'about', label: 'About Me', icon: User, href: '/about', top: '75%', left: '55%', color: 'text-emerald-600' },
    // Education (Greenhouse area, Left Center)
    { id: 'education', label: 'Education', icon: GraduationCap, href: '/education', top: '60%', left: '32%', color: 'text-blue-600' },
  ];

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#fdfbf7] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
      {/* Background Image - The NEW Isometric City */}
      <img
        src="/city-map.png"
        alt="Interactive City Map"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop";
        }}
      />

      {/* --- DYNAMIC ANIMATIONS OVERLAY --- */}

      {/* 1. Animated Water Waves (Bottom Left) */}
      <div className="absolute bottom-[0%] left-[0%] w-[50%] h-[40%] pointer-events-none z-0 overflow-hidden" style={{ transform: 'rotate(-25deg) skewX(40deg)' }}>
        <motion.div
          animate={{ x: ['-20%', '20%', '-20%'], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[10%] w-[80%] h-[8px] bg-white/40 rounded-full blur-[1px]"
        />
        <motion.div
          animate={{ x: ['20%', '-20%', '20%'], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] left-[20%] w-[60%] h-[6px] bg-white/30 rounded-full blur-[1px]"
        />
        <motion.div
          animate={{ x: ['-10%', '30%', '-10%'], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[80%] left-[5%] w-[70%] h-[10px] bg-cyan-100/40 rounded-full blur-[2px]"
        />
      </div>

      {/* 2. Moving Vehicles */}
      {/* Car 1: Driving along the beach road (top-left to bottom-right) */}
      <motion.div
        animate={{ 
          left: ['10%', '45%'], 
          top: ['55%', '75%'],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-8 h-4 bg-red-500 rounded-sm shadow-md z-0 pointer-events-none border-t-2 border-red-400"
        style={{ transform: 'rotate(25deg)' }}
      >
        {/* Car windows */}
        <div className="absolute top-[10%] left-[20%] w-[60%] h-[80%] bg-slate-800 rounded-[1px]" />
      </motion.div>

      {/* Car 2: Driving from bottom-right to the intersection */}
      <motion.div
        animate={{ 
          left: ['80%', '55%'], 
          top: ['80%', '65%'],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 3 }}
        className="absolute w-8 h-4 bg-blue-500 rounded-sm shadow-md z-0 pointer-events-none border-t-2 border-blue-400"
        style={{ transform: 'rotate(-25deg)' }}
      >
        <div className="absolute top-[10%] left-[20%] w-[60%] h-[80%] bg-slate-800 rounded-[1px]" />
      </motion.div>

      {/* Car 3: Driving from the intersection up towards the right */}
      <motion.div
        animate={{ 
          left: ['55%', '80%'], 
          top: ['65%', '50%'],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
        className="absolute w-10 h-5 bg-yellow-400 rounded-sm shadow-md z-0 pointer-events-none border-t-2 border-yellow-300"
        style={{ transform: 'rotate(-25deg)' }}
      >
        <div className="absolute top-[10%] left-[20%] w-[60%] h-[80%] bg-slate-800 rounded-[1px]" />
      </motion.div>

      {/* 3. Animated Clouds */}
      <motion.div 
        animate={{ x: ['-100%', '1000%'] }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[5%] left-0 opacity-70 text-white z-0 pointer-events-none drop-shadow-md"
      >
        <Cloud className="w-16 h-16" fill="white" />
      </motion.div>
      <motion.div 
        animate={{ x: ['-100%', '1000%'] }} 
        transition={{ duration: 55, repeat: Infinity, ease: "linear", delay: 15 }}
        className="absolute top-[15%] left-0 opacity-50 text-white z-0 pointer-events-none drop-shadow-md"
      >
        <Cloud className="w-24 h-24" fill="white" />
      </motion.div>

      {/* --- INTERACTIVE HOTSPOTS --- */}
      {hotspots.map((spot, index) => {
        const Icon = spot.icon;
        return (
          <Link key={spot.id} href={spot.href}>
            <motion.div
              className="absolute z-10 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group/spot"
              style={{ top: spot.top, left: spot.left }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Bouncing Marker */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className="relative"
              >
                {/* Glowing Pulse Effect */}
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-60" />
                
                {/* Pin/Marker */}
                <div className="relative bg-white/95 backdrop-blur-md border-2 border-slate-200 p-3 rounded-full shadow-xl group-hover/spot:bg-slate-50 transition-colors cursor-pointer">
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${spot.color}`} />
                </div>
              </motion.div>

              {/* Label (Hidden by default, shows on hover to avoid clashing with image text) */}
              <div className="mt-3 bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-white px-4 py-1.5 rounded-xl text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover/spot:opacity-100 transition-all transform group-hover/spot:translate-y-0 translate-y-2 pointer-events-none">
                {spot.label}
              </div>
            </motion.div>
          </Link>
        );
      })}

      {/* Instructions overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md text-slate-800 font-semibold px-6 py-2 rounded-full text-sm shadow-xl pointer-events-none border border-slate-200">
        Click on the buildings to explore
      </div>
    </div>
  );
}
