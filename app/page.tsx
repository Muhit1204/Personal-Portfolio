import { MapPin, Terminal, Cpu, ShieldCheck, Activity } from 'lucide-react';
import SatelliteOrbitDiagram from '@/components/SatelliteOrbitDiagram';
import PredictionDashboard from '@/components/PredictionDashboard';
import CybersecurityPanel from '@/components/CybersecurityPanel';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
          <Activity className="w-4 h-4" />
          Live Research Dashboard
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Md Muntasir Hossain
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Graduate Research Assistant at Lamar University specializing in Satellite Communication, Machine Learning, and Cybersecurity Resilience.
        </p>
        <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
          <MapPin className="w-4 h-4" />
          <span>Beaumont, TX, United States</span>
        </div>
      </section>

      {/* Interactive Section 1: Satellite Communication Diagram */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-200 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-indigo-400" />
            Maritime LEO Connectivity
          </h2>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Visualizing the dynamic nature of Low Earth Orbit (LEO) satellite networks. The high mobility of constellations requires frequent handovers, which can cause unpredictable link fluctuations and impact maritime operations.
        </p>
        <SatelliteOrbitDiagram />
      </section>

      {/* Interactive Section 2: Performance Prediction */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-200 flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-400" />
            Performance Prediction Modeling
          </h2>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          A data-driven forecasting framework that predicts future downlink throughput and latency on maritime LEO links. Toggle between metrics and forecasting horizons to see how the RandomForest regression model anticipates link behavior.
        </p>
        <PredictionDashboard />
      </section>

      {/* Interactive Section 3: Cybersecurity Resilience */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-200 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-rose-400" />
            Cybersecurity Resilience
          </h2>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Investigating vulnerabilities in intelligent maritime systems. Explore common threat vectors affecting satellite communications and the proposed mitigation strategies to ensure operational security.
        </p>
        <CybersecurityPanel />
      </section>

      {/* Research Focus Areas */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-200 border-b border-slate-800 pb-2">Core Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Satellite based Communication & Navigation",
            "Intelligent Systems",
            "Wireless Network Resilience & Cybersecurity",
            "Machine Learning & Dynamic Data-Driven Optimization",
            "Autonomous Systems"
          ].map((interest, i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-start gap-3 hover:bg-slate-800/50 transition-colors">
              <div className="mt-1 bg-slate-950 border border-slate-800 text-indigo-400 p-1.5 rounded-md">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-medium text-slate-300">{interest}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
