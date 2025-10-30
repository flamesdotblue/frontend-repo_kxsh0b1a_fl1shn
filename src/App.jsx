import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DealsKanban from './components/DealsKanban';
import TasksWidget from './components/TasksWidget';
import { Users, Building2, Briefcase, BarChart3 } from 'lucide-react';

function StatCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
          <div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
          {sub && <div className="text-xs text-slate-500 mt-1">{sub}</div>}
        </div>
        <div className="p-2 rounded-md bg-slate-100 text-slate-700">
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />

          <main className="px-4 md:px-6 py-6 space-y-6">
            {/* Greeting + CTA */}
            <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h1 className="text-xl md:text-2xl font-semibold">Welcome back 👋</h1>
                <p className="text-slate-600 text-sm">Here’s a snapshot of your pipeline and tasks for today.</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800">Add Lead</button>
                <button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-100">Log Activity</button>
              </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard icon={Users} label="Contacts" value="1,284" sub="+32 this week" />
              <StatCard icon={Building2} label="Companies" value="312" sub="+8 this week" />
              <StatCard icon={Briefcase} label="Open Deals" value="57" sub="$148,200 value" />
              <StatCard icon={BarChart3} label="Win Rate" value="28%" sub="last 30 days" />
            </section>

            {/* Main Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold">Deals</h2>
                  <button className="text-sm text-slate-600 hover:text-slate-900">View pipeline</button>
                </div>
                <DealsKanban />
              </div>

              <div className="space-y-4">
                <TasksWidget />
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <h3 className="font-semibold">Lead Scoring</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Leads are prioritized as Hot, Warm, or Cold based on enrichment and activity.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">Hot</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-amber-50 text-amber-700 border border-amber-200">Warm</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-slate-100 text-slate-700 border border-slate-200">Cold</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
