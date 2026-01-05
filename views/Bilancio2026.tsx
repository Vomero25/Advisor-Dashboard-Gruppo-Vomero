
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell } from 'recharts';
import { ShieldAlert, TrendingUp, Zap, Briefcase, Calculator, Landmark } from 'lucide-react';

const Bilancio2026: React.FC = () => {
  const requirementChanges = [
    { year: '2025-26', vecchiaia: '67y 0m', anticipataU: '42y 10m' },
    { year: '2027', vecchiaia: '67y 1m', anticipataU: '42y 11m' },
    { year: '2028+', vecchiaia: '67y 3m', anticipataU: '43y 1m' },
  ];

  const highlights = [
    {
      title: "Contributo Datoriale Portabile",
      desc: "Abrogato il vincolo: il lavoratore può portare il contributo del datore anche in FPA e PIP. Opportunità di switch da fondi negoziali.",
      impact: "Commerciale",
      color: "blue"
    },
    {
      title: "Capitale al 60%",
      desc: "Innalzata la quota di montante liquidabile subito in capitale dal 50% al 60%. Maggiore liquidità al pensionamento.",
      impact: "Flessibilità",
      color: "emerald"
    },
    {
      title: "Nuovo Tetto 5.300€",
      desc: "Aggiornato il limite di deducibilità fermo da 20 anni. Maggior risparmio fiscale per i redditi alti.",
      impact: "Fiscale",
      color: "orange"
    },
    {
      title: "Default Life Cycle",
      desc: "Le adesioni 'tacite' non finiscono più nel garantito ma in percorsi Life Cycle che massimizzano i rendimenti dei giovani.",
      impact: "Rendimenti",
      color: "indigo"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-20 animate-fade-in">
      {/* Header Strategico */}
      <header className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-2">
            Legge di Bilancio 2026: <span className="text-blue-500">Guida per il Consulente</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Analisi Tecnica Gruppo Vomero - Dr. Raffaele Camposano</p>
        </div>
      </header>

      {/* Grid Novità Previdenza Complementare */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className={`w-10 h-10 rounded-xl bg-${h.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              {i === 0 && <Briefcase className="text-blue-600" size={20} />}
              {i === 1 && <Landmark className="text-emerald-600" size={20} />}
              {i === 2 && <Calculator className="text-orange-600" size={20} />}
              {i === 3 && <TrendingUp className="text-indigo-600" size={20} />}
            </div>
            <span className={`text-[9px] font-black uppercase tracking-widest text-${h.color}-600 mb-1 block`}>{h.impact}</span>
            <h3 className="text-sm font-black text-slate-900 mb-2 uppercase leading-tight">{h.title}</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </section>

      {/* Focus Commerciale: Portabilità */}
      <div className="bg-blue-600 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-blue-200">
        <div className="space-y-4 md:w-2/3">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full w-fit">
            <Zap size={14} className="text-yellow-300" />
            <span className="text-[10px] font-black uppercase tracking-widest">Vantaggio Competitivo</span>
          </div>
          <h2 className="text-3xl font-black uppercase italic">Fine del Vincolo sui Fondi Negoziali</h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            La manovra 2026 ha abrogato la norma che limitava il contributo datoriale ai soli fondi negoziali. 
            Il consulente può ora proporre lo spostamento delle masse verso i <strong>PIP Zurich</strong> o i <strong>FPA Anima</strong> mantenendo il flusso contributivo dell'azienda. 
            È lo strumento definitivo per la conquista della clientela corporate.
          </p>
        </div>
        <div className="md:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20">
          <p className="text-center text-[10px] font-black uppercase tracking-widest mb-4">Target Consigliato</p>
          <ul className="space-y-2">
            {['Iscritti Fonchim/Cometa', 'Clienti con TFR in azienda', 'Quadri e Dirigenti'].map(t => (
              <li key={t} className="flex items-center gap-2 text-xs font-bold">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Requisiti Pensione Pubblica */}
        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm space-y-8">
          <h3 className="text-xl font-black text-slate-900 uppercase italic flex items-center gap-3">
             <Landmark className="text-blue-600" /> Requisiti Pensionistici 2027-2028
          </h3>
          <div className="overflow-hidden rounded-2xl border border-slate-100">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-400 font-black uppercase text-[9px]">
                <tr>
                  <th className="px-6 py-4">Anno</th>
                  <th className="px-6 py-4">Vecchiaia</th>
                  <th className="px-6 py-4">Anticipata (U)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {requirementChanges.map((r, i) => (
                  <tr key={i} className={i === 2 ? 'bg-blue-50/50' : ''}>
                    <td className="px-6 py-4 font-black">{r.year}</td>
                    <td className="px-6 py-4 font-bold text-slate-600">{r.vecchiaia}</td>
                    <td className="px-6 py-4 font-bold text-slate-600">{r.anticipataU}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
            <ShieldAlert className="text-amber-600 shrink-0" size={20} />
            <p className="text-[10px] text-amber-800 font-bold leading-relaxed">
              <strong>ATTENZIONE:</strong> Abrogata la possibilità di cumulare la rendita del fondo pensione per raggiungere la soglia di accesso alla pensione anticipata contributiva (dietrofront rispetto al 2025).
            </p>
          </div>
        </div>

        {/* Nuove Opzioni Erogazione */}
        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 space-y-8">
          <h3 className="text-xl font-black text-slate-900 uppercase italic flex items-center gap-3">
             <TrendingUp className="text-indigo-600" /> Nuove Erogazioni Flessibili
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xs font-black text-slate-800 uppercase mb-1">Rendita a Durata Definita</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Corrisposta per un numero di anni pari alla speranza di vita residua. Calcolo dinamico sul montante accumulato.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xs font-black text-slate-800 uppercase mb-1">Prelievi Liberamente Determinabili</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Possibilità di mantenere il fondo attivo e prelevare "a chiamata" entro i limiti della rendita teorica.</p>
            </div>
            <div className="bg-indigo-900 text-white p-5 rounded-2xl shadow-lg border border-indigo-700">
              <h4 className="text-xs font-black uppercase mb-1 text-indigo-300">Nuova Tassazione (20% -> 15%)</h4>
              <p className="text-[11px] opacity-80 leading-relaxed">Le nuove prestazioni sono soggette a una ritenuta del 20%, riducibile dello 0,25% annuo dopo il 15° anno, fino al 15% minimo.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center pt-10">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">
          &copy; 2025 Gruppo Vomero | Analisi Legge di Bilancio 2026 - Testo Definitivo
        </p>
      </footer>
    </div>
  );
};

export default Bilancio2026;
