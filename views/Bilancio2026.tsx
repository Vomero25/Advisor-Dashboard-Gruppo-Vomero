
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Bilancio2026: React.FC = () => {
  const news = [
    {
      title: "Innalzamento Deducibilità Fiscale",
      description: "Il limite massimo di deducibilità dei contributi versati sale da 5.164,57€ a 5.300€ annui per incentivare in modo robusto il risparmio previdenziale integrativo.",
      badge: "Incentivo",
      icon: "📈"
    },
    {
      title: "Più Capitale al Pensionamento",
      description: "Il limite ordinario per l'erogazione della prestazione in capitale sale dal 50% al 60% del montante finale accumulato al momento della pensione.",
      badge: "Flessibilità",
      icon: "💰"
    },
    {
      title: "Portabilità Contributo Datoriale",
      description: "Piena libertà per il lavoratore di trasferire il contributo a carico del datore di lavoro anche verso fondi aperti (FPA) e PIP, eliminando il vincolo dei fondi negoziali.",
      badge: "Rivoluzionario",
      icon: "🔄"
    },
    {
      title: "Nuove Opzioni di Erogazione",
      description: "Introdotta la 'rendita a durata definita' e nuovi schemi di prelievo flessibile dal montante accumulato per una gestione sartoriale della quiescenza.",
      badge: "Personalizzazione",
      icon: "📋"
    },
    {
      title: "Adesione Silenzio-Assenso",
      description: "Meccanismo di adesione automatica per i neo-assunti con investimento di default basato su un profilo 'Life Cycle' ottimizzato per la durata residua lavorativa.",
      badge: "Automatico",
      icon: "⚙️"
    },
    {
      title: "TFR al Fondo Tesoreria INPS",
      description: "Aggiornamento delle soglie dimensionali aziendali per l'obbligo di conferimento del TFR non optato verso il Fondo di Tesoreria INPS.",
      badge: "Aziendale",
      icon: "🏢"
    }
  ];

  const lifeCycleData = [
    { age: 25, azionario: 90, obbligazionario: 10, garantito: 0 },
    { age: 30, azionario: 85, obbligazionario: 15, garantito: 0 },
    { age: 35, azionario: 80, obbligazionario: 20, garantito: 0 },
    { age: 40, azionario: 65, obbligazionario: 35, garantito: 0 },
    { age: 45, azionario: 50, obbligazionario: 50, garantito: 0 },
    { age: 50, azionario: 35, obbligazionario: 55, garantito: 10 },
    { age: 55, azionario: 20, obbligazionario: 60, garantito: 20 },
    { age: 60, azionario: 10, obbligazionario: 50, garantito: 40 },
    { age: 65, azionario: 5, obbligazionario: 35, garantito: 60 },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in-95 duration-500 pb-16">
      <header className="text-center space-y-6">
        <div className="space-y-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Legge di Bilancio 2026</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Elaborazione a cura di dr. Raffaele Camposano Group Manager</p>
        </div>
        
        <div className="inline-block px-5 py-2 bg-orange-100 text-orange-700 text-sm font-extrabold rounded-2xl border border-orange-200 uppercase shadow-sm">
          Analisi Normativa e Novità Fiscali
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-3xl max-w-2xl mx-auto shadow-sm">
          <p className="text-slate-600 text-[10px] md:text-xs leading-relaxed font-semibold italic">
            <span className="font-bold uppercase text-slate-900 not-italic mb-1.5 block tracking-widest">Riferimenti Normativi Estesi per Esteso:</span>
            Le analisi e le proiezioni qui esposte si fondano sulla consultazione della <span className="font-bold text-slate-900">Bozza della Legge di Bilancio 2026 (Documento Programmatico di Bilancio)</span>, sui <span className="font-bold text-slate-900">Comunicati Ufficiali del Ministero dell'Economia e delle Finanze (MEF)</span> e sulle Note Tecniche di indirizzo formulate dalla <span className="font-bold text-slate-900">COVIP</span> in merito alla riforma organica della previdenza complementare.
          </p>
        </div>
      </header>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {news.map((item, idx) => (
          <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full -mr-12 -mt-12 group-hover:scale-125 transition-transform"></div>
            <div className="flex items-start gap-5 relative z-10">
              <div className="text-5xl">{item.icon}</div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded-md uppercase border border-blue-100 mb-1">
                    {item.badge}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{item.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Life Cycle Chart Section */}
      <div className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-200 shadow-sm space-y-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-400 to-slate-200"></div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Evoluzione Strategia 'Life Cycle'</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest italic">Fonte: Proiezioni Standard COVIP per adesioni silenti 2026</p>
          </div>
          <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-tighter">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-sm shadow-blue-200"></span> Azionario
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-200"></span> Obbligazionario
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-sm"></span> Garantito
            </div>
          </div>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lifeCycleData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAzn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorObb" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#818cf8" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorGar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e2e8f0" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#e2e8f0" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="age" 
                label={{ value: 'Età del sottoscrittore (anni)', position: 'insideBottom', offset: -10, fontSize: 11, fontWeight: 700, fill: '#64748b' }} 
                tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
              />
              <YAxis 
                unit="%" 
                tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '20px' }}
                formatter={(value) => [`${value}%`]}
                labelFormatter={(label) => `PROFILO ETA': ${label} ANNI`}
              />
              <Area type="monotone" dataKey="azionario" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorAzn)" stackId="1" />
              <Area type="monotone" dataKey="obbligazionario" stroke="#818cf8" strokeWidth={3} fillOpacity={1} fill="url(#colorObb)" stackId="1" />
              <Area type="monotone" dataKey="garantito" stroke="#cbd5e1" strokeWidth={3} fillOpacity={1} fill="url(#colorGar)" stackId="1" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center italic leading-relaxed">
          Il grafico rappresenta l'allocazione automatica "Life Cycle" suggerita dalla COVIP per massimizzare il rendimento atteso<br/>e mitigare il rischio volata in prossimità del pensionamento (Riforma 2026).
        </p>
      </div>

      <footer className="text-center pt-8 border-t border-slate-200">
        <p className="text-[11px] text-slate-700 font-extrabold uppercase tracking-widest mb-1">
          Elaborazione a cura di dr. Raffaele Camposano Group Manager
        </p>
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
          Gruppo Vomero | Focus Normativo Bilancio 2026
        </p>
      </footer>
    </div>
  );
};

export default Bilancio2026;
