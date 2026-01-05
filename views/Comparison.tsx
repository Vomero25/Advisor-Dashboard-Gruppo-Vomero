
import React, { useState, useMemo } from 'react';
import { PENSION_DATA } from '../data/pensionData';
import { PensionType, LineCategory, PensionLine } from '../types';
import { ShieldCheck, Info, ArrowUpDown, AlertCircle } from 'lucide-react';

type SortField = keyof PensionLine;
type SortOrder = 'asc' | 'desc';

const Comparison: React.FC = () => {
  const [selectedType, setSelectedType] = useState<PensionType | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<LineCategory | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('return2024');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const filteredData = useMemo(() => {
    let data = PENSION_DATA.filter(p => 
      (selectedType === 'ALL' || p.type === selectedType) &&
      (selectedCategory === 'ALL' || p.category === selectedCategory) &&
      (p.provider.toLowerCase().includes(searchTerm.toLowerCase()) || 
       p.productName.toLowerCase().includes(searchTerm.toLowerCase()) || 
       p.lineName.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    data.sort((a, b) => {
      const valA = a[sortField] ?? 0;
      const valB = b[sortField] ?? 0;
      return sortOrder === 'asc' ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
    });

    return data;
  }, [selectedType, selectedCategory, searchTerm, sortField, sortOrder]);

  return (
    <div className="max-w-full mx-auto space-y-8 animate-fade-in pb-16">
      <header className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic italic">Analisi Comparativa <span className="text-blue-600">Multidimensionale</span></h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Dati Certificati Mefop & Prospetti 2024</p>
        </div>
        <div className="flex flex-wrap gap-4">
           <select value={selectedType} onChange={(e) => setSelectedType(e.target.value as any)} className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-[10px] font-black uppercase outline-none focus:ring-2 focus:ring-blue-600">
             <option value="ALL">Tutti i Tipi</option>
             {Object.values(PensionType).map(t => <option key={t} value={t}>{t}</option>)}
           </select>
           <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value as any)} className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-[10px] font-black uppercase outline-none focus:ring-2 focus:ring-blue-600">
             <option value="ALL">Tutte le Categorie</option>
             {Object.values(LineCategory).map(c => <option key={c} value={c}>{c}</option>)}
           </select>
           <div className="relative">
             <input type="text" placeholder="Cerca prodotto..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-[10px] font-black uppercase outline-none focus:ring-2 focus:ring-blue-600 w-64" />
           </div>
        </div>
      </header>

      <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0f172a] text-white text-[9px] font-black uppercase tracking-widest sticky top-0 z-10">
              <tr>
                <th className="px-6 py-6 border-b border-white/10">Società / Linea</th>
                {[
                  { id: 'return2024', label: 'R. 2024' },
                  { id: 'return3y', label: 'M. 3Y' },
                  { id: 'return5y', label: 'M. 5Y' },
                  { id: 'return10y', label: 'M. 10Y' },
                  { id: 'return20y', label: 'M. 20Y' },
                  { id: 'isc10y', label: 'ISC (Costo)' }
                ].map((col) => (
                  <th key={col.id} className="px-4 py-6 text-center border-b border-white/10 cursor-pointer hover:bg-white/5 transition-colors" onClick={() => toggleSort(col.id as SortField)}>
                    <div className="flex items-center justify-center gap-1">
                      {col.label}
                      <ArrowUpDown size={10} className={sortField === col.id ? 'text-blue-400' : 'text-white/20'} />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map(line => {
                const isTarget = line.provider.includes('Zurich') || line.provider.includes('Anima');
                return (
                  <tr key={line.id} className={`${isTarget ? 'bg-blue-50/60' : 'hover:bg-slate-50/80'} transition-all group`}>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-black text-slate-900 uppercase tracking-tight text-[11px]">{line.provider}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase italic">{line.lineName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <span className={`px-3 py-1 rounded-lg font-black text-sm ${line.return2024 > 12 ? 'bg-emerald-100 text-emerald-700' : 'text-slate-900'}`}>
                        {line.return2024}%
                      </span>
                    </td>
                    <td className="px-4 py-5 text-center font-bold text-slate-600">{line.return3y}%</td>
                    <td className="px-4 py-5 text-center font-bold text-slate-600">{line.return5y}%</td>
                    <td className="px-4 py-5 text-center font-bold text-blue-600">{line.return10y}%</td>
                    <td className="px-4 py-5 text-center font-bold text-indigo-400 italic">
                      {line.return20y ? `${line.return20y}%` : 'N.D.'}
                    </td>
                    <td className="px-4 py-5 text-center">
                      <span className={`px-2 py-1 rounded-md font-black text-[10px] ${line.isc10y > 2 ? 'text-rose-500 bg-rose-50' : 'text-emerald-500 bg-emerald-50'}`}>
                        {line.isc10y}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-6 bg-slate-900 rounded-[2.5rem] border border-slate-800 text-white/60 text-[10px] leading-relaxed italic space-y-2">
        <div className="flex items-center gap-2 text-blue-400 font-black uppercase mb-1">
          <AlertCircle size={14} /> Nota Legale sui Rendimenti
        </div>
        <p>I rendimenti passati non costituiscono alcun tipo di garanzia per i rendimenti futuri. I dati esposti riflettono le performance storiche nette (o lorde dove specificato) estratte dai Prospetti Informativi e dai Bollettini Statistici COVIP/Mefop. Le medie a 3, 5, 10 e 20 anni sono calcolate su base geometrica annualizzata. Prima dell'adesione, è obbligatorio leggere la "Parte I: Le informazioni chiave per l'aderente" e la "Scheda i Costi" di ogni singolo prodotto.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group border border-slate-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h4 className="text-xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
             <div className="w-2 h-6 bg-blue-600 rounded-full"></div> Nota Tecnica Dr. Camposano
          </h4>
          <p className="text-slate-400 text-sm italic leading-relaxed">
            "Il confronto a 20 anni evidenzia come i fondi negoziali (FPN) abbiano una stabilità di rendimento importante, ma l'analisi degli ultimi 10 anni premia i prodotti a gestione attiva (PIP e FPA) capaci di catturare i trend tecnologici e ESG globali. La flessibilità del comparto Zurich è la chiave per il 2026."
          </p>
        </div>
        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center space-y-4">
           <ShieldCheck size={48} className="text-blue-600" />
           <p className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Certificazione Dati</p>
           <p className="text-lg font-bold text-slate-900 italic">Dati consolidati su serie storica Bollettino Mefop n. 96</p>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
