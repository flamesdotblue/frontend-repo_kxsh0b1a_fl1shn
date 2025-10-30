import React from 'react';
import { Home, Users, Building2, Briefcase, BarChart3, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: Users, label: 'Contacts' },
  { icon: Building2, label: 'Companies' },
  { icon: Briefcase, label: 'Deals' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col md:w-64 h-screen sticky top-0 border-r border-slate-200 bg-white/90 backdrop-blur">
      <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center font-bold text-slate-900">A</div>
        <div className="ml-3">
          <div className="text-slate-900 font-semibold leading-tight">Alchemetryx</div>
          <div className="text-xs text-slate-500">AI CRM</div>
        </div>
      </div>

      <nav className="p-3 space-y-1 overflow-y-auto">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
          <div className="text-sm font-semibold text-slate-900">Freemium Plan</div>
          <p className="text-xs text-slate-600 mt-1">15 enrichment credits/month. Upgrade for more.</p>
          <button className="mt-3 w-full text-sm font-medium bg-slate-900 text-white rounded-md py-2 hover:bg-slate-800">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
}
