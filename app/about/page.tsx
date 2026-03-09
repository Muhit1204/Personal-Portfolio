import { MapPin, Tent, Bike, Mountain, Flame, Plane, Waves, Rocket, GraduationCap, Award, Code, Terminal, Shield, Map } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="space-y-20 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <section className="space-y-6 pt-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-mono">About Me</h1>
        <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
          Beyond the code and the lab, I am an explorer at heart—whether that means navigating the complexities of satellite networks or finding the best hiking trails.
        </p>
      </section>

      {/* Personal Journey Roadmap */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <Map className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Personal Journey Roadmap</h2>
        </div>
        <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-6 space-y-12 pb-4">
          
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100" />
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-2 block">Present</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Graduate Research Assistant</h3>
              <p className="text-slate-600 leading-relaxed">
                Currently at Lamar University's Center for Data Analytics and Cybersecurity, focusing on network resilience and cybersecurity for LEO satellite networks. Working on federally funded projects to ensure massive, dynamic satellite networks remain reliable.
              </p>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-50" />
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-2 block">The Turning Point</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Discovering Global Connectivity</h3>
              <p className="text-slate-600 leading-relaxed">
                Realized the profound impact that global connectivity has on remote and underserved areas. The idea that a network of satellites floating miles above the Earth could bridge the digital divide and provide critical communication during chaos captivated me.
              </p>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-50" />
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-2 block">The Beginning</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Curiosity in Computer Science</h3>
              <p className="text-slate-600 leading-relaxed">
                Fascination with technology began early, wondering how information traveled across the globe. This led to a B.Sc. in Computer Science and Engineering, building web applications and managing IT infrastructure.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Education */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300">
            <div className="flex flex-col gap-2 mb-4">
              <span className="text-sm font-mono text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full w-fit">2023 – Present</span>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Masters of Science (MS) in Computer Science</h3>
            </div>
            <p className="text-slate-700 font-medium mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              Lamar University, Beaumont, TX
            </p>
            <div className="space-y-2">
              <span className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Relevant Coursework</span>
              <p className="text-slate-600 leading-relaxed">
                Software Engineering, Analysis of Algorithms, Computer Networks, Big Data, Machine Learning, Advance Operating Systems.
              </p>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300">
            <div className="flex flex-col gap-2 mb-4">
              <span className="text-sm font-mono text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full w-fit">2017 – 2021</span>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Bachelors of Science (B.Sc.) in Computer Science and Engineering</h3>
            </div>
            <p className="text-slate-700 font-medium mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              American International University-Bangladesh, Dhaka
            </p>
            <div className="space-y-2">
              <span className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Relevant Coursework</span>
              <p className="text-slate-600 leading-relaxed">
                Data Structures, Algorithms, Cloud Computing, Data Mining, Cybersecurity, Data communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Grants */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <Award className="w-8 h-8 text-amber-500" />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Awards & Grants</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-6 hover:border-amber-300 hover:shadow-md transition-all duration-300">
            <div className="bg-amber-50 border border-amber-100 text-amber-600 p-4 rounded-2xl shrink-0 group-hover:scale-110 group-hover:bg-amber-100 transition-all">
              <Award className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Dean's List Award</h3>
                <span className="text-sm font-bold text-amber-600 tracking-wider uppercase">2019</span>
              </div>
              <p className="text-slate-700 font-medium">American International University-Bangladesh</p>
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                Recognized for outstanding academic performance and ranking among the top students in the Department of Computer Science. Awarded for consistent academic excellence and exemplary GPA achievement.
              </p>
            </div>
          </div>
          {/* Add more awards/grants here as needed */}
        </div>
      </section>

      {/* Personal Interests / Hobbies */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <Tent className="w-8 h-8 text-emerald-600" />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Personal Hobbies</h2>
        </div>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          When I'm not analyzing network topologies or writing NS-3 simulation models, you can usually find me outdoors. I believe that stepping away from the screen is the best way to solve complex problems.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center gap-4 hover:border-emerald-300 hover:shadow-md transition-all duration-300">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
              <Tent className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Camping</h3>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center gap-4 hover:border-amber-300 hover:shadow-md transition-all duration-300">
            <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl">
              <Mountain className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Hiking</h3>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center gap-4 hover:border-blue-300 hover:shadow-md transition-all duration-300">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
              <Bike className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Cycling</h3>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center gap-4 hover:border-orange-300 hover:shadow-md transition-all duration-300">
            <div className="p-4 bg-orange-50 text-orange-600 rounded-2xl">
              <Flame className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">BBQ</h3>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center gap-4 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
            <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
              <Plane className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Traveling</h3>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center gap-4 hover:border-cyan-300 hover:shadow-md transition-all duration-300">
            <div className="p-4 bg-cyan-50 text-cyan-600 rounded-2xl">
              <Waves className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Swimming</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
