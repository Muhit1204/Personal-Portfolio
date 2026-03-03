'use client';

import { motion } from 'motion/react';
import { BookOpen, Server, Database, ShieldCheck } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Master's Thesis: Performance Evaluation and Cybersecurity Analysis of Starlink Maritime Internet Systems",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />,
      description: [
        "Conducted field tests with Starlink Flat High-Performance Gen-3 equipment in varied environments (fair-weather, heavy rain, near-ocean), measuring throughput, latency, jitter, and delivery ratio.",
        "Built NS-3 simulation models to replicate satellite links and identified deviations such as 15-minute real-world initialization delays compared to instant stability in simulation.",
        "Documented throughput drops in heavy rain, and investigated cybersecurity vulnerabilities (spoofing, jamming, IoT exploitation), providing recommendations to strengthen port operations."
      ]
    },
    {
      title: "Bachelor's Thesis: Rigorous Study on Computational Geometry and Turing Test on Graph Layout Algorithm",
      icon: <BookOpen className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
      description: [
        "Explored algorithmic complexity and geometric optimization in graph layout models, evaluating performance using Turing test."
      ]
    },
    {
      title: "Banknote Authentication Using Machine Learning",
      icon: <Database className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />,
      description: [
        "Built a classification model to detect counterfeit banknotes using the UCI dataset with wavelet-based features.",
        "Applied Random Forests, SVM, Decision Trees, and KNN, optimizing accuracy through cross-validation and feature scaling.",
        "Performed statistical analysis and hypothesis testing to validate model precision, recall, and overall reliability.",
        "Utilized Python (scikit-learn, NumPy, Pandas, Matplotlib) for preprocessing, feature engineering, model training, and visualization."
      ]
    },
    {
      title: "Multithreaded FTP Server",
      icon: <Server className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />,
      description: [
        "Developed a multithreaded FTP server to support concurrent file operations using socket programming in C.",
        "Implemented core FTP functionalities: file download, deletion, and renaming, ensuring secure and efficient file handling.",
        "Enabled support for multiple clients to interact with the server simultaneously, evaluating the server's robustness and concurrency.",
        "Enhanced the server's architecture by incorporating thread management for handling multiple client requests."
      ]
    },
    {
      title: "Employee Salaries Analysis Project",
      icon: <Database className="w-6 h-6 text-rose-400 group-hover:text-rose-300 transition-colors" />,
      description: [
        "Analyzed employee salary data using Big Data tools to assess compensation structures.",
        "Built a linear regression model to identify significant gender pay disparities.",
        "Applied K-means clustering to reveal salary distribution patterns across departments.",
        "Conducted multivariate analysis with a correlation matrix to evaluate pay components.",
        "Provided actionable insights to improve pay equity and competitiveness."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
        <h1 className="text-3xl font-bold tracking-tight text-slate-100">Projects & Thesis</h1>
        <p className="text-slate-400">Academic research and technical projects.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <motion.div variants={itemVariants} key={index} className="group bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 shadow-sm hover:bg-slate-800/80 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:scale-110 group-hover:border-slate-700 transition-all duration-300">
                {project.icon}
              </div>
              <h2 className="text-xl font-semibold text-slate-200 leading-tight pt-1 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h2>
            </div>
            <ul className="space-y-2 text-slate-400 text-sm pl-2">
              {project.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-slate-600 mt-1 group-hover:text-indigo-500 transition-colors">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
