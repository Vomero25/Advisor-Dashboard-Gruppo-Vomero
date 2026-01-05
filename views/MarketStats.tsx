
import React, { useState, useMemo } from 'react';
import { MARKET_STATUS_DATA } from '../data/marketStatusData';

const MarketStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'FPN' | 'FPA'>('FPN');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    return MARKET_STATUS_DATA.filter(item => 
      item.category === activeTab &&
      item.provider.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeTab, searchTerm]);

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat('it-IT').format(val);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-8 animate-in fade-in duration-700 pb-10">
      <header className="space-y-4">
        <div className="space-y-2">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Anagrafica Mercato</h2>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Elaborazione a cura di dr. Raffaele Camposano Group Manager</p>
            </div>
          </div>
          
          <div className="bg-slate-800 text-white p-5 rounded-2xl shadow-xl border border-slate-700">
            <p className="text-[10px] md:text-[11px] leading-relaxed opacity-90 font-medium italic">
              <span className="font-bold text-blue-400 uppercase not-italic mb-1.5 block tracking-wider">Dichiarazione Fonte Dati per Esteso:</span>
              Tutti i dati statistici relativi ad aderenti, patrimonio gestito e distribuzione dei comparti di investimento sono estratti e rielaborati dal <span className="font-bold">Bollettino Statistico n. 96 (pubblicato a Luglio 2025)</span>, documento ufficiale curato da <span className="font-bold">Mefop S.p.A. (Società per lo sviluppo del Mercato dei Fondi Pensione)</span> sulla base delle rilevazioni periodiche trasmesse alla <span className="font-bold">COVIP</span>. I dati fotografano lo scenario della previdenza complementare in Italia al 31 Marzo 2025 (Pagg. 4, 5, 6, 7 e 8).
            </p>
          </div>
        </div>

        <div className="flex gap-1 p-1 bg-slate-200 rounded-xl md:w-fit">
          <button 
            onClick={() => setActiveTab('FPN')}
            className={`flex-1 md:px-8 px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${activeTab === 'FPN' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:bg-slate-300'}`}
          >
            Fondi Negoziali
          </button>
          <button 
            onClick={() => setActiveTab('FPA')}
            className={`flex-1 md:px-8 px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${activeTab === 'FPA' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:bg-slate-300'}`}
          >
            Fondi Aperti
          </button>
        </div>
      </header>

      <div className="relative">
        <input 
          type="text"
          placeholder="Cerca per Società (es. Cometa, Zurich...)"
          className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 pl-12 text-sm focus:ring-4 focus:ring-blue-100 outline-none shadow-sm transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute left-5 top-4.5 text-slate-400">🔍</span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 bg-slate-50/30 group-hover:bg-blue-50/10 transition-colors">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">{item.provider}</h3>
                <div className="flex items-center gap-2">
                   <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-200"></span>
                   <span className="text-[10px] md:text-xs text-slate-500 font-extrabold uppercase tracking-widest">
                     {item.category === 'FPN' ? 'Settoriale / Negoziale' : 'Mercato Aperto'}
                   </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 md:gap-12">
                <div className="bg-white p-4 md:p-0 rounded-2xl md:rounded-none border border-slate-100 md:border-none shadow-sm md:shadow-none">
                  <p className="text-[9px] uppercase font-bold text-slate-400 mb-1 tracking-wider">Aderenti Totali</p>
                  <p className="text-xl md:text-3xl font-extrabold text-slate-900">{formatNumber(item.aderenti)}</p>
                </div>
                <div className="bg-white p-4 md:p-0 rounded-2xl md:rounded-none border border-slate-100 md:border-none shadow-sm md:shadow-none">
                  <p className="text-[9px] uppercase font-bold text-slate-400 mb-1 tracking-wider">Patrimonio Gestito</p>
                  <p className="text-xl md:text-3xl font-extrabold text-blue-600">€{item.patrimonio.toLocaleString('it-IT')}M</p>
                </div>
              </div>
            </div>

            {item.comparti && (
              <div className="bg-white">
                <div className="px-6 md:px-8 py-4 border-b border-slate-50 flex justify-between items-center">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dettaglio Comparti di Investimento</p>
                   <p className="text-[9px] text-slate-400 italic">Distribuzione % su base Mefop 2025</p>
                </div>
                <div className="p-6 md:p-8 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto no-scrollbar snap-x">
                  {item.comparti.map((comp, idx) => (
                    <div key={idx} className="min-w-[240px] md:min-w-0 snap-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors space-y-5">
                      <div className="font-bold text-slate-800 text-sm border-b border-slate-200 pb-3">{comp.name}</div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                           <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
                             <span className="text-slate-500">Peso Aderenti</span>
                             <span className="text-slate-900">{comp.aderentiPerc}%</span>
                           </div>
                           <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden shadow-inner">
                             <div className="bg-blue-500 h-full rounded-full transition-all duration-1000 shadow-sm" style={{ width: `${comp.aderentiPerc}%` }}></div>
                           </div>
                        </div>
                        <div className="space-y-2">
                           <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
                             <span className="text-slate-500">Peso Patrimonio</span>
                             <span className="text-blue-600">{comp.patrimonioPerc}%</span>
                           </div>
                           <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden shadow-inner">
                             <div className="bg-emerald-500 h-full rounded-full transition-all duration-1000 shadow-sm" style={{ width: `${comp.patrimonioPerc}%` }}></div>
                           </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <footer className="text-center pt-12 pb-8">
        <div className="h-px bg-slate-200 w-full mb-8"></div>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] mb-2">
          &copy; 2025 Gruppo Vomero | Progetto Pension Advisor
        </p>
        <p className="text-[12px] text-slate-600 font-extrabold uppercase tracking-widest">
          Elaborazione a cura di dr. Raffaele Camposano Group Manager
        </p>
        <p className="text-[9px] text-slate-400 mt-2 italic">
          Dati Ufficiali estratti da: Bollettino Statistico Mefop/COVIP n. 96 - Luglio 2025
        </p>
      </footer>
    </div>
  );
};

export default MarketStats;
