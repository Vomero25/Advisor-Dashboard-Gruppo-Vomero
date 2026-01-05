
import React, { useState, useMemo } from 'react';
import { Info, Calculator, Landmark, ShieldCheck, TrendingUp, Percent, CheckCircle2, AlertTriangle } from 'lucide-react';

const FiscalCalculator: React.FC = () => {
  const [ral, setRal] = useState<number>(45000);
  const [contribution, setContribution] = useState<number>(5300);
  const [age, setAge] = useState<number>(35);

  const DEDUCTIBILITY_LIMIT = 5300;

  const results = useMemo(() => {
    // Aliquote IRPEF 2026 Presunte
    let marginalRate = 0.23;
    if (ral > 50000) marginalRate = 0.43;
    else if (ral > 28000) marginalRate = 0.35;

    const effectiveDeduction = Math.min(contribution, DEDUCTIBILITY_LIMIT);
    const taxSaving = effectiveDeduction * marginalRate;
    const netCost = contribution - taxSaving;

    // Proiezione Finanziaria
    const yearsToRetire = 67 - age;
    const estimatedReturn = 0.045; // 4.5% Benchmark Zurich Azionario ESG
    
    let totalAccumulated = 0;
    for (let i = 0; i < yearsToRetire; i++) {
      totalAccumulated = (totalAccumulated + contribution) * (1 + estimatedReturn);
    }

    // Tassazione agevolata 15-9%
    const participationYears = yearsToRetire + 5; // Ipotizziamo 5 anni di pregresso
    let finalTaxRate = 0.15;
    if (participationYears > 15) {
      finalTaxRate = Math.max(0.09, 0.15 - ((participationYears - 15) * 0.003));
    }
    
    const netAccumulated = totalAccumulated * (1 - finalTaxRate);
    const monthlyAnnuity = (netAccumulated * 0.042) / 12; // Coeff. conversione stima

    return {
      marginalRate: (marginalRate * 100).toFixed(0),
      taxSaving,
      netCost,
      netAccumulated,
      monthlyAnnuity,
      finalTaxRate: (finalTaxRate * 100).toFixed(1),
      yearsToRetire
    };
  }, [ral, contribution, age]);

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-fade-in pb-20">
      <header className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic flex items-center gap-3">
            <Calculator className="text-blue-600" /> Simulatore <span className="text-blue-600">Leva Fiscale</span>
          </h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Analisi Efficienza Fiscale Legge 2026</p>
        </div>
        <div className="bg-blue-50 px-6 py-3 rounded-2xl border border-blue-100 flex items-center gap-3">
          <ShieldCheck className="text-blue-600" size={20} />
          <span className="text-[11px] font-black text-blue-700 uppercase tracking-widest italic">Modello dr. Raffaele Camposano</span>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* INPUT PANEL */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm space-y-8">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2 italic">
              <Landmark size={16} className="text-blue-600" /> Profilo Finanziario
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">RAL (Reddito Annuo Lordo)</label>
                <div className="relative">
                  <input type="number" value={ral} onChange={(e) => setRal(Number(e.target.value))} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 font-black text-slate-900 focus:border-blue-600 focus:bg-white outline-none transition-all" />
                  <span className="absolute right-5 top-4.5 font-black text-slate-300">€</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Versamento Annuo</label>
                <div className="relative">
                  <input type="number" value={contribution} onChange={(e) => setContribution(Number(e.target.value))} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 font-black text-slate-900 focus:border-blue-600 focus:bg-white outline-none transition-all" />
                  <span className="absolute right-5 top-4.5 font-black text-slate-300">€</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex justify-between italic">
                  Età Attuale: <span className="text-blue-600 font-black">{age} anni</span>
                </label>
                <input type="range" min="20" max="65" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                  <span>Start</span>
                  <span className="bg-slate-100 px-2 rounded-full">Orizzonte: {results.yearsToRetire}y</span>
                  <span>Pension</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[3rem] text-white space-y-6 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 flex items-center gap-2 italic">
              <Info size={14} /> Presupposti Tecnici
            </h4>
            <div className="space-y-5">
              {[
                { t: "Deduzione IRPEF", d: `Sottrazione diretta dall'imponibile con recupero all'aliquota marginale (${results.marginalRate}%).` },
                { t: "Tetto Deducibilità", d: "Limite innalzato a €5.300 (Legge 2026) per favorire i redditi elevati." },
                { t: "Costo Netto", d: `Lo Stato finanzia il ${results.marginalRate}% del tuo investimento futuro.` }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-200 mb-1">{item.t}</p>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTS PANEL */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* CARD EFFICIENZA */}
            <div className="bg-blue-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-blue-200 relative group cursor-default">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform">
                <Percent size={120} />
              </div>
              <div className="relative z-10 space-y-12">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200 mb-2 italic">Bonus Fiscale Annuo</p>
                  <div className="text-6xl font-black tracking-tighter">€{results.taxSaving.toLocaleString('it-IT')}</div>
                  <div className="mt-4 flex items-center gap-2 text-blue-100 font-bold uppercase text-[11px]">
                    <TrendingUp size={14} /> 
                    <span>Efficienza: +{results.marginalRate}% annuo</span>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/20">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200 mb-2 italic">Il tuo investimento reale</p>
                  <div className="text-3xl font-black italic">€{results.netCost.toLocaleString('it-IT')}</div>
                  <p className="text-[11px] font-medium text-blue-100 opacity-80 mt-1 uppercase tracking-tight">Costo netto post-deduzione</p>
                </div>
              </div>
            </div>

            {/* CARD PROIEZIONE */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm space-y-10 flex flex-col">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tighter">Asset Pensionistico</h3>
                <TrendingUp className="text-emerald-500" />
              </div>
              
              <div className="flex-1 space-y-10">
                <div className="space-y-2">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Montante Netto Stimato</p>
                  <p className="text-5xl font-black text-slate-900 tracking-tighter">€{Math.round(results.netAccumulated).toLocaleString('it-IT')}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Integrazione Mensile Netta</p>
                  <p className="text-5xl font-black text-blue-600 tracking-tighter">€{Math.round(results.monthlyAnnuity).toLocaleString('it-IT')}</p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-[2rem] border border-slate-100">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-400">Tassazione Prestazione:</span>
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{results.finalTaxRate}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-8 rounded-[3rem] flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
               <AlertTriangle className="text-amber-600" size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-black text-amber-900 uppercase tracking-[0.2em] italic">Disclaimer Metodologico del Calcolo</h4>
              <p className="text-[11px] text-amber-800 leading-relaxed font-medium italic">
                I calcoli sopra riportati sono simulazioni basate sulle attuali aliquote IRPEF previste dalla Riforma 2026 e su un rendimento lordo annuo costante del 4.5%. L'effettivo risparmio fiscale dipende dalla capienza dell'imponibile del contribuente e da eventuali addizionali locali. Il montante finale è una stima puramente indicativa e non garantita, soggetta alla variabilità dei mercati finanziari e alla tassazione vigente al momento dell'erogazione. Non costituisce garanzia di rendita futura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiscalCalculator;
