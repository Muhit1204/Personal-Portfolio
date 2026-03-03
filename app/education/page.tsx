'use client';

import { motion } from 'motion/react';
import { GraduationCap, Award, Code, Terminal, Shield } from 'lucide-react';

export default function Education() {
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
      className="space-y-12"
    >
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-100">Education & Background</h1>
        <p className="text-slate-400">Academic history, technical skills, and achievements.</p>
      </motion.div>

      {/* Education */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-200 border-b border-slate-800 pb-2 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-indigo-400" />
          Academic Background
        </h2>
        <div className="space-y-6">
          <div className="group bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 shadow-sm hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors">Masters of Science (MS) in Computer Science</h3>
              <span className="text-sm font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">2023 – Present</span>
            </div>
            <p className="text-slate-300 font-medium mb-4">Lamar University, Beaumont, TX</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300">Relevant Coursework:</span> Software Engineering, Analysis of Algorithms, Computer Networks, Big Data, Machine Learning, Advance Operating Systems.
            </p>
          </div>

          <div className="group bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 shadow-sm hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors">Bachelors of Science (B.Sc.) in Computer Science and Engineering</h3>
              <span className="text-sm font-mono text-slate-400 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">2017 – 2021</span>
            </div>
            <p className="text-slate-300 font-medium mb-4">American International University-Bangladesh, Dhaka</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300">Relevant Coursework:</span> Data Structures, Algorithms, Cloud Computing, Data Mining, Cybersecurity, Data communication.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-200 border-b border-slate-800 pb-2 flex items-center gap-2">
          <Code className="w-6 h-6 text-emerald-400" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 shadow-sm hover:bg-slate-800/50 hover:border-emerald-500/30 transition-all duration-300">
            <h3 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              Languages & Web
            </h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React.js', 'HTML/CSS', 'Python', 'Java', 'C++', 'PHP', 'Laravel', 'Bootstrap'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-950 text-slate-300 text-sm rounded-md border border-slate-800 group-hover:border-slate-700 transition-colors">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="group bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 shadow-sm hover:bg-slate-800/50 hover:border-emerald-500/30 transition-all duration-300">
            <h3 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              Tools & Tech
            </h3>
            <div className="flex flex-wrap gap-2">
              {['MySQL', 'MongoDB', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Git', 'NS-3', 'Wireshark', 'Jira', 'VirtualBox', 'Overleaf'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-950 text-slate-300 text-sm rounded-md border border-slate-800 group-hover:border-slate-700 transition-colors">{skill}</span>
              ))}
            </div>
          </div>

          <div className="group bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 shadow-sm hover:bg-slate-800/50 hover:border-emerald-500/30 transition-all duration-300">
            <h3 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />
              Network Security
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Spoofing', 'Sniffing', 'Session Hijacking', 'DoS', 'DDoS', 'Cybersecurity Analysis'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-950 text-slate-300 text-sm rounded-md border border-slate-800 group-hover:border-slate-700 transition-colors">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Awards */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-200 border-b border-slate-800 pb-2 flex items-center gap-2">
          <Award className="w-6 h-6 text-amber-400" />
          Honors & Awards
        </h2>
        <div className="group bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 shadow-sm flex items-start gap-4 hover:bg-slate-800/50 hover:border-amber-500/30 transition-all duration-300">
          <div className="bg-amber-500/10 border border-amber-500/20 text-amber-400 p-3 rounded-xl shrink-0 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-200 group-hover:text-amber-300 transition-colors">Dean&apos;s List Award</h3>
            <p className="text-slate-400 font-medium mb-2">American International University-Bangladesh • 2019</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Recognized for outstanding academic performance and ranking among the top students in the Department of Computer Science. Awarded for consistent academic excellence and exemplary GPA achievement.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
