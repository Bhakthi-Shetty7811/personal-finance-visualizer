'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

interface DataItem {
  category: string;
  budget: number;
  spent: number;
}

interface Props {
  data: DataItem[];
}

export default function BudgetComparisonChart({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center border border-gray-300 rounded">
        <p>No budget data to display.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-64 bg-white border-2 border-green-500 rounded p-2">
      <h2 className="text-lg font-semibold mb-2">Budget vs Actual</h2>
      <BarChart width={500} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="budget" fill="#34d399" name="Budget" />
        <Bar dataKey="spent" fill="#f87171" name="Spent" />
      </BarChart>
    </div>
  );
}
