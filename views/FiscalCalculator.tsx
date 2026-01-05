
import React, { useState, useMemo } from 'react';

const FiscalCalculator: React.FC = () => {
  const [ral, setRal] = useState<number>(35000);
  const [contribution, setContribution] = useState<number>(5300);
  const [age, setAge] = useState<number>(40);

  const DEDUCTIBILITY_LIMIT = 5300;

  const results = useMemo(() => {
    // Simplified IRPEF 2026 Logic
    // Up to 28k: 23%
    // 28k - 50k: 35%
    // Over 50k: 43%
    
    let marginalRate = 0.23;
    if (ral > 50000) marginalRate = 0.43;
    else if (ral > 28000) marginalRate = 0.35;

    const effectiveContribution = Math.min(contribution, DEDUCTIBILITY_LIMIT);
    const taxSaving = effectiveContribution * marginalRate;
    const netCost = contribution - taxSaving;

    // Projection logic (simple estimation)
    const yearsToRetire = 67 - age;
    const estimatedReturn = 0.04; // 4% annual
    
    let totalAccumulated = 0;
    for (let i = 0; i < yearsToRetire; i++) {
      totalAccumulated = (totalAccumulated + contribution) * (1 + estimatedReturn);
    }

    // Tax on withdrawal (15% to 9% based on years)
    const taxRateAtEnd = yearsToRetire > 35 ? 0.09 : 0.15;
    const netAccumulated = totalAccumulated * (1 - taxRateAtEnd);
    const monthlyAnnuity = (netAccumulated * 0.04) / 12; // 4% conversion factor

    return {
      marginalRate: marginalRate * 100,
      taxSaving,
      netCost,
      netAccumulated,
      monthlyAnnuity
    };
  }, [ral, contribution, age]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-700 pb-16">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Calcolatore Fiscale 2026</h2>
        <p className="text-slate-500 text-sm font-medium">Ottimizzazione del risparmio previdenziale dr. Raffaele Camposano</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
            Parametri Cliente
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Reddito Annuo Lordo (RAL)</label>
              <div className="relative">
                <input 
                  type="number" 
                  value={ral} 
                  onChange={(e) => setRal(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 outline-none"
                />
                <span className="absolute right-4 top-3 text-slate-400">€</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Versamento Annuo Previdenza</label>
              <div className="relative">
                <input 
                  type="number" 
                  value={contribution} 
                  onChange={(e) => setContribution(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 outline-none"
                />
                <span className="absolute right-4 top-3 text-slate-400">€</span>
                {contribution > DEDUCTIBILITY_LIMIT && (
                  <p className="text-[9px] text-orange-600 font-bold mt-1">Sopra il limite di deducibilità (€5.300)</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Età Attuale</label>
              <input 
                type="range" 
                min="20" 
                max="65" 
                value={age} 
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>20 anni</span>
                <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{age} anni</span>
                <span>65 anni</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">Beneficio Fiscale Immediato</p>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-black tracking-tighter">€{results.taxSaving.toLocaleString('it-IT')}</div>
                <p className="text-xs text-slate-400 font-medium mt-1">Risparmio IRPEF annuo (Aliquota {results.marginalRate}%)</p>
              </div>
              <div className="h-px bg-slate-800"></div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-2xl font-bold">€{results.netCost.toLocaleString('it-IT')}</div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Costo Reale del Versamento</p>
                </div>
                <div className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-500/20 uppercase">
                  Vantaggio del {(results.taxSaving / contribution * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
              Proiezione a 67 anni
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Capitale Netto Stimato</p>
                <p className="text-xl font-black text-slate-900">€{Math.round(results.netAccumulated).toLocaleString('it-IT')}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Rendita Mensile Netta</p>
                <p className="text-xl font-black text-blue-600">€{Math.round(results.monthlyAnnuity).toLocaleString('it-IT')}</p>
              </div>
            </div>
            <p className="text-[9px] text-slate-400 font-medium italic leading-relaxed">
              *La simulazione ipotizza un rendimento annuo del 4% e l'applicazione dell'aliquota sostitutiva agevolata al pensionamento (Riforma 2026).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl">
        <h4 className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">Analisi Professionale Gruppo Vomero</h4>
        <p className="text-xs text-blue-800 leading-relaxed">
          Grazie alla nuova Legge di Bilancio 2026, l'efficienza fiscale dello strumento previdenziale raggiunge livelli senza precedenti. 
          Il passaggio della deducibilità a <strong>€5.300</strong> permette un recupero d'imposta ancora più significativo, 
          rendendo la previdenza integrativa il pilastro fondamentale della pianificazione finanziaria moderna.
        </p>
      </div>
    </div>
  );
};

export default FiscalCalculator;
