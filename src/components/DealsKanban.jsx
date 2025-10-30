import React from 'react';
import { GripVertical, DollarSign } from 'lucide-react';

const columns = [
  { key: 'new', title: 'New' },
  { key: 'qualifying', title: 'Qualifying' },
  { key: 'demo', title: 'Demo' },
  { key: 'proposal', title: 'Proposal' },
  { key: 'closedWon', title: 'Closed-Won' },
];

const sampleDeals = {
  new: [
    { id: 1, name: 'Acme Inc – Starter', company: 'Acme Inc', value: 2400 },
    { id: 2, name: 'Globex – Pilot', company: 'Globex', value: 5000 },
  ],
  qualifying: [
    { id: 3, name: 'Initech – AI Suite', company: 'Initech', value: 12000 },
  ],
  demo: [
    { id: 4, name: 'Umbrella – Team', company: 'Umbrella', value: 7600 },
  ],
  proposal: [
    { id: 5, name: 'Stark – Enterprise', company: 'Stark Industries', value: 22000 },
  ],
  closedWon: [
    { id: 6, name: 'Wayne – Pro', company: 'Wayne Enterprises', value: 9800 },
  ],
};

function DealCard({ deal }) {
  return (
    <div className="p-3 rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-500">
          <GripVertical className="w-4 h-4" />
          <span className="text-xs font-medium">{deal.company}</span>
        </div>
        <div className="flex items-center text-emerald-600 text-xs font-semibold">
          <DollarSign className="w-3 h-3" />
          {deal.value.toLocaleString()}
        </div>
      </div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{deal.name}</div>
    </div>
  );
}

export default function DealsKanban() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {columns.map((col) => (
        <div key={col.key} className="rounded-lg bg-slate-50 border border-slate-200 p-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-800">{col.title}</h3>
            <span className="text-xs text-slate-500">
              {sampleDeals[col.key]?.length || 0}
            </span>
          </div>
          <div className="mt-3 space-y-3">
            {sampleDeals[col.key]?.map((d) => (
              <DealCard key={d.id} deal={d} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
