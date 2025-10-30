import React from 'react';
import { CheckCircle2, CalendarDays } from 'lucide-react';

const tasks = [
  { id: 1, title: 'Follow up with Jane (Acme)', due: 'Today', overdue: false },
  { id: 2, title: 'Prepare proposal for Stark', due: 'Today', overdue: true },
  { id: 3, title: 'Schedule demo with Umbrella', due: 'Tomorrow', overdue: false },
];

export default function TasksWidget() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-slate-700" />
          <h3 className="font-semibold text-slate-900">My Tasks</h3>
        </div>
        <button className="text-sm text-slate-600 hover:text-slate-900">View all</button>
      </div>
      <div className="mt-3 space-y-2">
        {tasks.map((t) => (
          <div key={t.id} className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50">
            <div>
              <div className="text-sm text-slate-800">{t.title}</div>
              <div className={`flex items-center gap-1 text-xs ${t.overdue ? 'text-red-600' : 'text-slate-500'}`}>
                <CalendarDays className="w-3.5 h-3.5" />
                {t.due} {t.overdue ? '• Overdue' : ''}
              </div>
            </div>
            <button className="text-xs px-2 py-1 rounded-md border border-slate-200 hover:bg-slate-100">Complete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
