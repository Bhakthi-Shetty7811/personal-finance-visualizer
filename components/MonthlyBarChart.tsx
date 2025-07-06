'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

interface Props {
  data: { month: string; total: number }[];
}

export default function MonthlyBarChart({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center border border-gray-300 rounded">
        <p>No data to display in chart.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-64 bg-white border-4 border-red-500">
      <BarChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#3b82f6" />
      </BarChart>
    </div>
  );
}


