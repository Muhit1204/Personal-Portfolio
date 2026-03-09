'use client';

import { motion } from 'motion/react';
import { FileText, Calendar, Users, MapPin, ExternalLink, GraduationCap } from 'lucide-react';

export default function Publications() {
  const theses = [
    {
      title: "Master's Thesis: Dynamic Data-Driven Optimization for Maritime Broadband Connectivity",
      type: "Master's Thesis",
      institution: "Lamar University",
      date: "Expected 2026",
      abstract: "This thesis explores the resilience of satellite networks in maritime environments, focusing on dynamic data-driven optimization to improve the reliability of LEO satellite communications under unpredictable weather and mobility conditions.",
      keywords: ["LEO Satellites", "Maritime Communication", "Network Resilience", "Machine Learning"]
    },
    {
      title: "Undergraduate Thesis: Analysis of Cybersecurity Threats in Cloud-Based IoT Networks",
      type: "Undergraduate Thesis",
      institution: "American International University-Bangladesh",
      date: "2021",
      abstract: "An in-depth analysis of vulnerabilities within cloud-integrated Internet of Things (IoT) networks, proposing a novel framework for detecting and mitigating distributed denial-of-service (DDoS) attacks using machine learning techniques.",
      keywords: ["IoT", "Cloud Computing", "Cybersecurity", "DDoS", "Machine Learning"]
    }
  ];

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
      className="space-y-16 max-w-5xl mx-auto pb-12"
    >
      <motion.div variants={itemVariants} className="space-y-4 pt-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-mono">Research & Publications</h1>
        <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
          A collection of my academic research, conference proceedings, and thesis work focused on satellite communications and network resilience.
        </p>
      </motion.div>

      {/* Theses Section */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Academic Theses</h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {theses.map((thesis, index) => (
            <div key={index} className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                  {thesis.title}
                </h3>
                <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-bold rounded-full border border-blue-100 shrink-0 uppercase tracking-wider">
                  {thesis.type}
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-500 mb-6 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  <span>{thesis.institution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  <span>{thesis.date}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Abstract</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {thesis.abstract}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {thesis.keywords.map(keyword => (
                      <span key={keyword} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-md border border-slate-200 group-hover:border-blue-200 group-hover:text-blue-700 transition-colors">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Publications Section */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <FileText className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Published Papers</h2>
        </div>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <article key={index} className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-indigo-700 transition-colors">
                  {pub.title}
                </h3>
                {pub.link && (
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-xl border border-indigo-100 hover:bg-indigo-100 hover:border-indigo-200 transition-all shrink-0 uppercase tracking-wider"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">View Paper</span>
                  </a>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-500 mb-6 font-medium">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  <span className="text-slate-700">{pub.authors}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  <span className="italic">{pub.venue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  <span>{pub.date}</span>
                </div>
                {pub.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                    <span>{pub.location}</span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Abstract</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map(keyword => (
                      <span key={keyword} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-md border border-slate-200 group-hover:border-indigo-200 group-hover:text-indigo-700 transition-colors">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
