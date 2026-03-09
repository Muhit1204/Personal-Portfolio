'use client';

import { motion } from 'motion/react';
import { Server, Database, ShieldCheck } from 'lucide-react';

export default function Projects() {
  const projects = [
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
      className="space-y-16 max-w-5xl mx-auto pb-12"
    >
      <motion.div variants={itemVariants} className="space-y-4 pt-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-mono">Projects</h1>
        <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
          A showcase of my technical projects spanning machine learning, networking, and data analysis.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.div variants={itemVariants} key={index} className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 group-hover:scale-110 group-hover:border-indigo-200 transition-all duration-300">
                {project.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 leading-tight pt-1 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h2>
            </div>
            <ul className="space-y-3 text-slate-600 pl-2">
              {project.description.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1.5 group-hover:text-indigo-500 transition-colors">—</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
