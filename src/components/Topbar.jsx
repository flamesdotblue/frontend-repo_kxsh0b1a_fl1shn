import React from 'react';
import { Bell, Search, Sparkles, Plus } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="h-16 w-full flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur px-4 md:px-6 sticky top-0 z-10">
      <div className="flex items-center gap-3 w-full max-w-xl">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-200 focus:border-slate-400 outline-none text-sm bg-white"
            placeholder="Search contacts, companies, deals..."
          />
        </div>
        <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800">
          <Plus className="w-4 h-4" /> New Lead
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="inline-flex items-center gap-1 px-3 py-2 rounded-md border border-amber-200 bg-amber-50 text-amber-800 text-sm hover:bg-amber-100">
          <Sparkles className="w-4 h-4" /> AI Copilot
        </button>
        <button className="p-2 rounded-md hover:bg-slate-100">
          <Bell className="w-5 h-5 text-slate-600" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300" />
      </div>
    </div>
  );
}
