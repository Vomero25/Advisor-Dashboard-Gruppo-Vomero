
import React, { useState, useMemo } from 'react';
import { PENSION_DATA } from '../data/pensionData';
import { PensionType, LineCategory, PensionLine } from '../types';

type SortField = keyof Pick<PensionLine, 'provider' | 'return2024' | 'return3y' | 'return5y' | 'return10y' | 'isc10y'>;
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
      
      if (typeof valA === 'string' && typeof valB === 'string') {
        return sortOrder === 'asc' 
          ? valA.localeCompare(valB) 
          : valB.localeCompare(valA);
      }
      
      return sortOrder === 'asc' 
        ? (valA as number) - (valB as number) 
        : (valB as number) - (valA as number);
    });

    return data;
  }, [selectedType, selectedCategory, searchTerm, sortField, sortOrder]);

  const SortIndicator = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <span className="text-slate-300 ml-1">⇅</span>;
    return <span className="text-blue-600 ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 animate-in slide-in-from-bottom-4 duration-700 pb-10">
      <header className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Confronto Prodotti</h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Elaborazione a cura di dr. Raffaele Camposano Group Manager</p>
          </div>
        </div>
        
        <div className="bg-slate-100 p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-700 text-[11px] md:text-xs leading-relaxed font-medium">
            <span className="font-bold text-slate-900 uppercase block mb-1.5 tracking-wider">Dettaglio Fonti Dati per Esteso:</span>
            Le metriche di performance (Rendimenti 2024 e medie storiche M3Y, M5Y, M10Y) e gli Indicatori Sintetici di Costo (ISC a 10 anni) sono stati reperiti attraverso l'analisi puntuale dei <span className="font-bold text-slate-900">Prospetti Informativi (Scheda Costi)</span> e dei <span className="font-bold text-slate-900">Rendiconti di Gestione Annuali (Esercizio 2024)</span> pubblicati sui siti istituzionali dei singoli gestori. Le medie di mercato sono calibrate sulle serie storiche certificate e depositate presso la <span className="font-bold text-slate-900">COVIP (Commissione di Vigilanza sui Fondi Pensione)</span>.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 pt-2">
          <div className="relative w-full">
            <input 
              type="text"
              placeholder="Cerca per Società, Prodotto o Linea..."
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 pl-12 text-sm focus:ring-4 focus:ring-blue-100 outline-none shadow-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-4 top-4.5 text-slate-400">🔍</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <select 
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 focus:ring-4 focus:ring-blue-100 outline-none shadow-sm appearance-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
              >
                <option value="ALL">Tutti i Tipi di Fondo</option>
                <option value={PensionType.FPN}>FPN (Negoziali)</option>
                <option value={PensionType.FPA}>FPA (Aperti)</option>
                <option value={PensionType.PIP}>PIP (Piani Individuali)</option>
              </select>
              <span className="absolute right-4 top-3.5 text-slate-400 pointer-events-none">▼</span>
            </div>
            
            <div className="relative">
              <select 
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 focus:ring-4 focus:ring-blue-100 outline-none shadow-sm appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
              >
                <option value="ALL">Tutte le Categorie Linee</option>
                <option value={LineCategory.AZN}>Azionari</option>
                <option value={LineCategory.BIL}>Bilanciati</option>
                <option value={LineCategory.OBB}>Obbligazionari</option>
                <option value={LineCategory.GAR}>Garantiti</option>
              </select>
              <span className="absolute right-4 top-3.5 text-slate-400 pointer-events-none">▼</span>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th 
                  className="sticky left-0 bg-slate-50 px-6 py-5 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest cursor-pointer z-10 hover:text-blue-600 transition-colors"
                  onClick={() => toggleSort('provider')}
                >
                  Società / Prodotto <SortIndicator field="provider" />
                </th>
                <th className="px-6 py-5 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Linea</th>
                <th className="px-6 py-5 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Tipo</th>
                <th 
                  className="px-6 py-5 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest text-center cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => toggleSort('return2024')}
                >
                  R. 2024 <SortIndicator field="return2024" />
                </th>
                <th className="px-6 py-5 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest text-center cursor-pointer hover:text-blue-600 transition-colors" onClick={() => toggleSort('return3y')}>
                  M. 3Y <SortIndicator field="return3y" />
                </th>
                <th className="px-6 py-5 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest text-center cursor-pointer hover:text-blue-600 transition-colors" onClick={() => toggleSort('return5y')}>
                  M. 5Y <SortIndicator field="return5y" />
                </th>
                <th className="px-6 py-5 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest text-center cursor-pointer hover:text-blue-600 transition-colors" onClick={() => toggleSort('return10y')}>
                  M. 10Y <SortIndicator field="return10y" />
                </th>
                <th className="px-6 py-5 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest text-center cursor-pointer hover:text-blue-600 transition-colors" onClick={() => toggleSort('isc10y')}>
                  ISC 10Y <SortIndicator field="isc10y" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.length > 0 ? (
                filteredData.map((line) => {
                  const isTarget = line.provider.includes('Zurich') || line.provider.includes('Anima');
                  return (
                    <tr key={line.id} className={`${isTarget ? 'bg-blue-50/40' : 'hover:bg-slate-50'} transition-colors group`}>
                      <td className="sticky left-0 px-6 py-5 bg-inherit font-bold text-slate-900 text-xs border-r border-slate-100 md:border-none group-hover:bg-blue-50/40">
                        {line.provider}
                        <div className="text-[9px] text-slate-400 font-medium group-hover:text-blue-600/70 transition-colors">{line.productName}</div>
                      </td>
                      <td className="px-6 py-5 text-xs font-semibold text-slate-700 uppercase tracking-tighter">
                        {line.lineName}
                      </td>
                      <td className="px-6 py-5 text-[9px] font-bold">
                        <span className={`px-2.5 py-1 rounded-md shadow-sm uppercase ${
                          line.type === PensionType.FPN ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                          line.type === PensionType.FPA ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                          'bg-rose-50 text-rose-700 border border-rose-100'
                        }`}>
                          {line.type.split(' ')[1] || line.type}
                        </span>
                      </td>
                      <td className={`px-6 py-5 text-xs font-extrabold text-center ${line.return2024 > 10 ? 'text-green-600' : 'text-slate-900'}`}>
                        {line.return2024.toFixed(2)}%
                      </td>
                      <td className="px-6 py-5 text-xs font-semibold text-slate-600 text-center">{line.return3y.toFixed(2)}%</td>
                      <td className="px-6 py-5 text-xs font-semibold text-slate-600 text-center">{line.return5y.toFixed(2)}%</td>
                      <td className="px-6 py-5 text-xs font-semibold text-slate-600 text-center">{line.return10y.toFixed(2)}%</td>
                      <td className="px-6 py-5 text-xs font-extrabold text-slate-900 text-center">{line.isc10y?.toFixed(2)}%</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={8} className="px-6 py-16 text-center text-slate-500 italic text-sm">Nessun prodotto corrispondente ai criteri di ricerca.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="md:hidden p-4 bg-slate-50 text-[10px] text-slate-400 text-center font-bold uppercase tracking-widest italic border-t border-slate-100">
          Scorri lateralmente per visualizzare tutti gli indicatori →
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          <h4 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            Focus Zurich ESG
          </h4>
          <p className="text-slate-400 text-[10px] leading-relaxed mb-6 italic font-bold uppercase tracking-widest">Fonte Reperimento: Rendiconto Annuale Zurich Investments Life S.p.A. 2024</p>
          <div className="flex gap-4">
            <div className="flex-1 bg-slate-800/50 p-4 rounded-2xl border border-slate-800 hover:border-blue-900/50 transition-colors">
              <div className="text-[9px] uppercase font-bold text-slate-500 mb-1 tracking-wider">Media Rend. 10Y</div>
              <div className="text-xl font-extrabold text-white">~6.80%</div>
            </div>
            <div className="flex-1 bg-slate-800/50 p-4 rounded-2xl border border-slate-800 hover:border-blue-900/50 transition-colors">
              <div className="text-[9px] uppercase font-bold text-slate-500 mb-1 tracking-wider">ISC (Costo) 10Y</div>
              <div className="text-xl font-extrabold text-white">2.15%</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          <h4 className="text-xl font-bold mb-4 text-orange-600 flex items-center gap-2">
             <span className="w-1.5 h-6 bg-orange-600 rounded-full"></span>
             Focus Anima SGR
          </h4>
          <p className="text-slate-500 text-[10px] leading-relaxed mb-6 italic font-bold uppercase tracking-widest">Fonte Reperimento: Rendiconto Fondi Aperti Anima SGR 2024 e COVIP</p>
          <div className="flex gap-4">
            <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:border-orange-100 transition-colors">
              <div className="text-[9px] uppercase font-bold text-slate-400 mb-1 tracking-wider">Media Rend. 10Y</div>
              <div className="text-xl font-extrabold text-slate-900">~7.90%</div>
            </div>
            <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:border-orange-100 transition-colors">
              <div className="text-[9px] uppercase font-bold text-slate-400 mb-1 tracking-wider">ISC (Costo) 10Y</div>
              <div className="text-xl font-extrabold text-slate-900">1.25%</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center pt-12 pb-6">
        <div className="h-px bg-slate-200 w-full mb-8"></div>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] mb-2">
          &copy; 2025 Gruppo Vomero | Pension Analytics System
        </p>
        <p className="text-[12px] text-slate-700 font-extrabold uppercase tracking-widest">
          Elaborazione a cura di dr. Raffaele Camposano Group Manager
        </p>
        <p className="text-[9px] text-slate-400 mt-2 italic uppercase">
          Dati confrontati: Rendiconti 2024, Prospetti Informativi, Serie Storiche COVIP.
        </p>
      </footer>
    </div>
  );
};

export default Comparison;
