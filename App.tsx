
import React from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Comparison from './views/Comparison';
import Bilancio2026 from './views/Bilancio2026';
import Assistant from './views/Assistant';
import MarketStats from './views/MarketStats';

const navItems = [
  { path: '/', label: 'Home', icon: '📊' },
  { path: '/market-stats', label: 'Market', icon: '📈' },
  { path: '/comparison', label: 'Confronto', icon: '⚖️' },
  { path: '/bilancio-2026', label: '2026', icon: '📜' },
  { path: '/assistant', label: 'AI', icon: '🤖' },
];

const DesktopSidebar: React.FC = () => (
  <div className="hidden md:flex w-64 bg-slate-900 text-white min-h-screen fixed left-0 top-0 p-6 flex-col z-50">
    <div className="mb-10">
      <h1 className="text-xl font-bold tracking-tight text-blue-400">Gruppo Vomero</h1>
      <p className="text-xs text-slate-400 font-medium">Pension Advisor Tool</p>
    </div>
    <nav className="flex-1 space-y-2">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`
          }
        >
          <span>{item.icon}</span>
          <span className="font-medium text-sm">{item.label}</span>
        </NavLink>
      ))}
    </nav>
    <div className="mt-auto pt-6 border-t border-slate-800">
      <div className="flex items-center gap-3 px-4 py-2">
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">CV</div>
        <div className="overflow-hidden">
          <p className="text-sm font-semibold truncate">Consulente Vomero</p>
          <p className="text-[10px] text-slate-500 uppercase font-bold">Pro Access</p>
        </div>
      </div>
    </div>
  </div>
);

const MobileBottomNav: React.FC = () => (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around items-center px-2 py-3 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
    {navItems.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition-colors ${
            isActive ? 'text-blue-600' : 'text-slate-400'
          }`
        }
      >
        <span className="text-xl">{item.icon}</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
      </NavLink>
    ))}
  </nav>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
        <DesktopSidebar />
        <main className="flex-1 p-4 md:p-8 md:ml-64 mb-20 md:mb-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/market-stats" element={<MarketStats />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/bilancio-2026" element={<Bilancio2026 />} />
            <Route path="/assistant" element={<Assistant />} />
          </Routes>
        </main>
        <MobileBottomNav />
      </div>
    </HashRouter>
  );
};

export default App;
