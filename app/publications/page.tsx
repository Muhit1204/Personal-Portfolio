'use client';

import { motion } from 'motion/react';
import { FileText, Calendar, Users, MapPin, ExternalLink } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      title: "Predictive Model for Starlink Maritime Performance Using Multi-Horizon RandomForest",
      link: "https://ieeexplore.ieee.org/document/11395767",
      authors: "Md Muntasir Hossain, Xingya Liu, Helen H. Lou, Ruhai Wang, Kazi Fazlee Rabbi",
      venue: "2026 IEEE 16th Annual Computing and Communication Workshop and Conference (CCWC)",
      date: "2026",
      abstract: "Low Earth orbit (LEO) satellite systems have become a crucial enabler of broadband access for maritime industries. However, the high mobility of LEO constellations and constantly changing weather conditions result in unpredictable link fluctuations. This paper proposes a data-driven forecasting model that predicts future downlink throughput using multi-horizon RandomForest regression. The model is trained using real experimental coastal measurement data incorporating recent throughput history, network-layer indicators, and environmental variables. The proposed approach reduces mean absolute error by approximately 31% compared to a persistence baseline for 15-minute horizons.",
      keywords: ["Starlink", "LEO satellite networks", "Maritime communication", "Throughput Prediction", "RandomForest regression", "Experimental Data"]
    },
    {
      title: "A Dual-task Prediction Model for Starlink Maritime Performance",
      link: "https://ieeexplore.ieee.org/document/11393745",
      authors: "Richard Li, Md Muntasir Hossain, Xingya Liu, Ruhai Wang",
      venue: "5th IEEE International Conference on AI in Cybersecurity (ICAIC)",
      location: "University of Houston, Houston, United States",
      date: "18-20 February 2026",
      abstract: "While LEO satellite systems have revolutionized broadband access for maritime industries, the dual challenges of high orbital mobility and dynamic weather lead to unpredictable signal instability. To address this issue, this work developed a short-term, dual-task prediction model to predict future downlink throughput and latency simultaneously using a 15-minute prediction horizon. The model is trained using real-world experimental data. By utilizing a shared backbone for simultaneous downlink throughput and latency forecasting, this dual-task approach outperforms single-task models.",
      keywords: ["LEO satellite networks", "Starlink", "Throughput Prediction", "latency Prediction", "multi-task learning", "RandomForest regression", "Maritime communication"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-100">Publications</h1>
        <p className="text-slate-400">Research papers and conference proceedings.</p>
      </motion.div>

      <div className="space-y-8">
        {publications.map((pub, index) => (
          <motion.article variants={itemVariants} key={index} className="group bg-slate-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-800 shadow-sm hover:bg-slate-800/80 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-200 leading-tight group-hover:text-indigo-300 transition-colors">
                {pub.title}
              </h2>
              {pub.link && (
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-400 text-sm font-medium rounded-xl border border-indigo-500/20 hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/40 transition-all shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">View Paper</span>
                </a>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                <span className="font-medium text-slate-300">{pub.authors}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                <span className="italic">{pub.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                <span>{pub.date}</span>
              </div>
              {pub.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                  <span>{pub.location}</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Abstract</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pub.abstract}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map(keyword => (
                    <span key={keyword} className="px-2.5 py-1 bg-slate-950 text-slate-400 text-xs font-medium rounded-md border border-slate-800 group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-colors">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
