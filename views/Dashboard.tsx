
import React from 'react';
import { PENSION_DATA } from '../data/pensionData';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const topPerformers = [...PENSION_DATA]
    .sort((a, b) => b.return2024 - a.return2024)
    .slice(0, 5);

  const marketAvgISC = [
    { name: 'FPN', value: 0.39, color: '#10b981' },
    { name: 'FPA', value: 1.25, color: '#f59e0b' },
    { name: 'PIP', value: 2.62, color: '#ef4444' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-16">
      
      {/* Header Istituzionale */}
      <header className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-4">
            <div className="space-y-1">
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Zurich Bank <span className="text-blue-400">|</span> Gruppo Vomero
              </h1>
              <p className="text-blue-300 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                Elite Pension Advisory System
              </p>
            </div>
            <div className="h-1 w-24 bg-blue-500 rounded-full mx-auto md:mx-0"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl text-center md:text-right">
            <p className="text-white text-lg font-extrabold uppercase tracking-wider">dr. Raffaele Camposano</p>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Group Manager - Napoli Vomero</p>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Performance Max 2024", val: "19.85%", sub: "PIP Azionario Leader", color: "text-blue-600" },
          { label: "Zurich ESG Target", val: "15.37%", sub: "Asset Management", color: "text-slate-900" },
          { label: "Deducibilità 2026", val: "€5.300", sub: "Nuovo Limite Fiscale", color: "text-orange-600" }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">{stat.label}</div>
            <div className={`text-4xl font-black ${stat.color} tracking-tighter`}>{stat.val}</div>
            <div className="text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              {stat.sub}
            </div>
          </div>
        ))}
      </section>

      {/* Grafici Analitici */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <h3 className="text-lg font-black mb-8 flex items-center gap-3 text-slate-800 uppercase tracking-tight">
            <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
            Ranking Rendimenti 2024 (%)
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topPerformers} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="lineName" type="category" width={100} tick={{ fontSize: 9, fontWeight: 700, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="return2024" radius={[0, 8, 8, 0]} barSize={25}>
                  {topPerformers.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.provider.includes('Zurich') ? '#2563eb' : '#e2e8f0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <h3 className="text-lg font-black mb-8 flex items-center gap-3 text-slate-800 uppercase tracking-tight">
            <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
            Costo Medio Sistema (ISC)
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketAvgISC}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }} />
                <YAxis unit="%" tick={{ fontSize: 10, fontWeight: 600, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={50}>
                  {marketAvgISC.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <footer className="text-center pt-12 pb-6 border-t border-slate-200">
        <p className="text-[11px] text-slate-800 font-black uppercase tracking-[0.5em] mb-2">
          &copy; 2025 Gruppo Vomero | Elite Financial Services
        </p>
        <p className="text-[14px] text-slate-600 font-black uppercase tracking-widest">
          dr. Raffaele Camposano - Group Manager Zurich Bank
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
