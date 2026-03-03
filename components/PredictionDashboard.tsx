'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Activity, Clock } from 'lucide-react';

// Mock data based on the paper's findings
const generateData = (horizon: '15m' | '30m', metric: 'throughput' | 'latency') => {
  const data = [];
  let currentVal = metric === 'throughput' ? 280 : 35;
  
  for (let i = 0; i < 20; i++) {
    const time = new Date();
    time.setMinutes(time.getMinutes() + i * (horizon === '15m' ? 1 : 2));
    
    // Add some random walk noise
    const noise = (Math.random() - 0.5) * (metric === 'throughput' ? 40 : 10);
    currentVal = Math.max(metric === 'throughput' ? 50 : 20, currentVal + noise);
    
    // Simulate a sudden drop/spike (e.g., handoff or weather event)
    if (i === 10) {
      currentVal = metric === 'throughput' ? currentVal - 100 : currentVal + 40;
    }

    // Baseline (persistence) is just a delayed or flat version
    const baseline = currentVal + (Math.random() - 0.5) * (horizon === '15m' ? 30 : 50);

    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actual: Math.round(currentVal),
      predicted: Math.round(currentVal + (Math.random() - 0.5) * (horizon === '15m' ? 15 : 35)),
      baseline: Math.round(baseline),
    });
  }
  return data;
};

export default function PredictionDashboard() {
  const [horizon, setHorizon] = useState<'15m' | '30m'>('15m');
  const [metric, setMetric] = useState<'throughput' | 'latency'>('throughput');

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData(generateData(horizon, metric));
  }, [horizon, metric]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-400" />
            Performance Prediction Model
          </h3>
          <p className="text-sm text-slate-400">RandomForest Multi-Horizon Regression</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Metric Toggle */}
          <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
            <button
              onClick={() => setMetric('throughput')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                metric === 'throughput' ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Throughput
            </button>
            <button
              onClick={() => setMetric('latency')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                metric === 'latency' ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Latency
            </button>
          </div>

          {/* Horizon Toggle */}
          <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
            <button
              onClick={() => setHorizon('15m')}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                horizon === '15m' ? 'bg-emerald-500/20 text-emerald-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Clock className="w-3 h-3" /> 15 Min
            </button>
            <button
              onClick={() => setHorizon('30m')}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                horizon === '30m' ? 'bg-emerald-500/20 text-emerald-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Clock className="w-3 h-3" /> 30 Min
            </button>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#64748b" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke="#64748b" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              domain={['auto', 'auto']}
              unit={metric === 'throughput' ? ' Mbps' : ' ms'}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
              itemStyle={{ fontSize: '12px' }}
              labelStyle={{ color: '#94a3b8', marginBottom: '4px', fontSize: '12px' }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line 
              type="monotone" 
              dataKey="actual" 
              name="Measured" 
              stroke="#94a3b8" 
              strokeWidth={2} 
              dot={false} 
            />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              name="RF Predicted" 
              stroke="#6366f1" 
              strokeWidth={2} 
              dot={false} 
            />
            <Line 
              type="monotone" 
              dataKey="baseline" 
              name="Baseline" 
              stroke="#ef4444" 
              strokeWidth={1} 
              strokeDasharray="4 4" 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-500 mb-1">Model MAE</div>
          <div className="text-lg font-mono text-slate-200">
            {horizon === '15m' ? (metric === 'throughput' ? '19.1 Mbps' : '10.4 ms') : (metric === 'throughput' ? '24.6 Mbps' : '14.2 ms')}
          </div>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-500 mb-1">Baseline MAE</div>
          <div className="text-lg font-mono text-slate-400">
            {horizon === '15m' ? (metric === 'throughput' ? '27.7 Mbps' : '11.8 ms') : (metric === 'throughput' ? '26.0 Mbps' : '15.1 ms')}
          </div>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-500 mb-1">Improvement</div>
          <div className="text-lg font-mono text-emerald-400">
            {horizon === '15m' ? '31%' : '5%'}
          </div>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-500 mb-1">Horizon</div>
          <div className="text-lg font-mono text-indigo-400">
            {horizon === '15m' ? 'Short-term' : 'Mid-term'}
          </div>
        </div>
      </div>
    </div>
  );
}
