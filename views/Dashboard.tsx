
import React from 'react';
import { PENSION_DATA } from '../data/pensionData';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

// --- CONFIGURAZIONE IMMAGINE HERO ---
// Immagine professionale di un ufficio finanziario moderno per riflettere l'autorevolezza del Gruppo Vomero
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop";

const Dashboard: React.FC = () => {
  const topPerformers = [...PENSION_DATA]
    .sort((a, b) => b.return2024 - a.return2024)
    .slice(0, 5);

  const marketAvgISC = [
    { name: 'FPN', value: 0.39, color: '#10b981' },
    { name: 'FPA', value: 1.25, color: '#f59e0b' },
    { name: 'PIP', value: 2.62, color: '#ef4444' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 animate-in fade-in duration-1000 pb-16">
      
      {/* Hero Section - Professional Advisor View */}
      <section className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl group bg-slate-900">
        <img 
          src={HERO_IMAGE_URL} 
          alt="Zurich Bank Gruppo Vomero Office" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[30000ms] group-hover:scale-110 ease-out opacity-70"
          onLoad={(e) => (e.currentTarget.style.opacity = '0.6')}
          style={{ opacity: 0, transition: 'opacity 1.5s ease-in-out' }}
        />
        {/* Overlay con gradiente scuro per la leggibilità del testo */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-slate-900/20"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-8">
          <div className="space-y-4 animate-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
              Zurich Bank <br className="md:hidden" />
              <span className="text-blue-400"> - </span>
              Gruppo Vomero
            </h1>
            <div className="h-1.5 w-32 bg-blue-500 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-3xl flex flex-col items-center gap-1 shadow-2xl">
            <span className="text-white text-sm md:text-lg font-extrabold uppercase tracking-[0.3em]">
              dr. Raffaele Camposano
            </span>
            <span className="text-blue-300 text-[10px] md:text-xs font-black uppercase tracking-widest">
              Group Manager
            </span>
          </div>
        </div>
      </section>

      <header className="space-y-6 px-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight italic">Advisor Dashboard</h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Analisi comparativa asset pensionistici</p>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Dati Certificati COVIP 2025
          </div>
        </div>
        
        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-[2rem] shadow-sm flex flex-col md:flex-row items-center gap-6 group hover:bg-blue-50/30 transition-all">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-2xl shadow-xl shrink-0 group-hover:rotate-6 transition-transform">
            🏛️
          </div>
          <div className="space-y-1">
            <p className="text-slate-900 text-sm md:text-base font-bold uppercase tracking-tight">Focus Gruppo Vomero & Zurich Bank</p>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Integrazione strategica dei <span className="font-bold text-slate-800">Rendiconti di Gestione 2024</span> e dei dati statistici <span className="font-bold text-slate-800">Mefop/COVIP</span>. Elaborazione proprietaria per la rete di consulenza Zurich Bank - Sede Napoli Vomero.
            </p>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {[
          { label: "Performance Max 2024", val: "19.85%", sub: "PIP Azionario Leader", color: "text-blue-600" },
          { label: "Zurich ESG Target", val: "15.37%", sub: "Zurich Bank Asset", color: "text-slate-900" },
          { label: "Deducibilità 2026", val: "€5.300", sub: "Nuovo Limite Fiscale", color: "text-orange-600" }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-slate-50 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="text-[10px] font-black text-slate-400 mb-3 uppercase tracking-[0.2em]">{stat.label}</div>
              <div className={`text-5xl font-black ${stat.color} tracking-tighter`}>{stat.val}</div>
              <div className="text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                {stat.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grafici e Analisi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-white p-10 rounded-[3.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
          <h3 className="text-xl font-black mb-10 flex items-center gap-4 text-slate-800 uppercase tracking-tight">
            <span className="w-3 h-8 bg-blue-600 rounded-full"></span>
            Ranking Rendimenti (%)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topPerformers} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="lineName" type="category" width={100} tick={{ fontSize: 9, fontWeight: 900, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 30px -5px rgb(0 0 0 / 0.1)', fontSize: '10px' }}
                />
                <Bar dataKey="return2024" radius={[0, 12, 12, 0]} barSize={35}>
                  {topPerformers.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.provider.includes('Zurich') ? '#2563eb' : '#e2e8f0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-slate-400 mt-10 italic font-black uppercase tracking-[0.3em] text-center">Analisi Rendiconti Ufficiali Esercizio 2024</p>
        </div>

        <div className="bg-white p-10 rounded-[3.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
          <h3 className="text-xl font-black mb-10 flex items-center gap-4 text-slate-800 uppercase tracking-tight">
            <span className="w-3 h-8 bg-orange-500 rounded-full"></span>
            Costo Medio Sistema (ISC)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketAvgISC}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 13, fontWeight: 900, fill: '#64748b' }} />
                <YAxis unit="%" tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 30px -5px rgb(0 0 0 / 0.1)', fontSize: '10px' }}
                />
                <Bar dataKey="value" radius={[12, 12, 0, 0]} barSize={65}>
                  {marketAvgISC.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-slate-400 mt-10 italic font-black uppercase tracking-[0.3em] text-center">Fonte: Commissione Vigilanza Fondi Pensione (COVIP)</p>
        </div>
      </div>

      <footer className="text-center pt-24 pb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full mb-16"></div>
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[13px] text-slate-800 font-black uppercase tracking-[0.6em]">
              &copy; 2025 Gruppo Vomero | Elite Financial Services
            </p>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.3em]">Napoli - Via Bernini 25</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[16px] text-slate-600 font-black uppercase tracking-[0.2em]">
            <span>dr. Raffaele Camposano</span>
            <span className="hidden md:block w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Group Manager Zurich Bank</span>
          </div>
          
          <p className="text-[11px] text-slate-400 font-medium italic mt-10 max-w-4xl mx-auto leading-relaxed px-6">
            AVVERTENZA: Le presenti analisi hanno scopo meramente informativo e tecnico ad uso della rete di consulenza professionale. 
            I rendimenti storici non costituiscono in alcun modo una garanzia di rendimento per il futuro. Zurich Bank e Gruppo Vomero 
            operano nel rispetto delle normative vigenti COVIP e IVASS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
