'use client';

import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1'];

interface Props {
  data: { category: string; amount: number }[];
}

export default function CategoryPieChart({ data }: Props) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data for pie chart.</p>;
  }

  // Aggregate data by category
  const categoryTotals: { [key: string]: number } = {};
  data.forEach((tx) => {
    if (!tx.category) return;
    categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + tx.amount;
  });

  const chartData = Object.entries(categoryTotals).map(([category, amount]) => ({
    category,
    amount,
  }));

  console.log('Pie chart data:', chartData); // ✅ Debug

  return (
    <div className="bg-white border-2 border-green-500 rounded p-4">
      <PieChart width={300} height={300}>
        <Pie
          data={chartData}
          cx={150}
          cy={150}
          outerRadius={100}
          dataKey="amount"
          nameKey="category"
          label
        >
          {chartData.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

