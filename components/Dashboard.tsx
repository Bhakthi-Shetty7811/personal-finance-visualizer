"use client";

import { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import MonthlyBarChart from "./MonthlyBarChart";
import CategoryPieChart from "./CategoryPieChart";
import BudgetComparisonChart from "./BudgetComparisonChart";
import "../styles/Dashboard.css";

// Utility: Category-wise totals
function getCategoryBreakdown(transactions: any[]) {
  const map: { [key: string]: number } = {};
  transactions.forEach((tx) => {
    if (tx.category) {
      map[tx.category] = (map[tx.category] || 0) + Number(tx.amount);
    }
  });
  return Object.entries(map).map(([category, total]) => ({ category, total }));
}

export default function Dashboard() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [editingTransaction, setEditingTransaction] = useState<any | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [budgets, setBudgets] = useState<{ [category: string]: number }>({
    Food: 0,
    Travel: 0,
    Shopping: 0,
    Bills: 0,
    Other: 0,
  });

  const comparisonData = Object.keys(budgets).map((category) => {
    const spent = transactions
      .filter((t) => t.category === category)
      .reduce((sum, t) => Number(sum) + Number(t.amount), 0);
    return {
      category,
      budget: budgets[category],
      spent,
    };
  });

  useEffect(() => {
    const stored = localStorage.getItem("transactions");
    if (stored) {
      setTransactions(JSON.parse(stored));
    }
    setIsLoaded(true);
  }, []);

  const addTransaction = (tx: any) => {
    if (editingTransaction) {
      const updated = transactions.map((t) =>
        t._id === editingTransaction._id ? { ...tx, _id: editingTransaction._id } : t
      );
      setTransactions(updated);
      localStorage.setItem("transactions", JSON.stringify(updated));
      setEditingTransaction(null);
    } else {
      const newTx = { ...tx, _id: Date.now().toString() };
      const updated = [...transactions, newTx];
      setTransactions(updated);
      localStorage.setItem("transactions", JSON.stringify(updated));
    }
  };

  const deleteTransaction = (id: string) => {
    const updated = transactions.filter((t) => t._id !== id);
    setTransactions(updated);
    localStorage.setItem("transactions", JSON.stringify(updated));
  };

  const editTransaction = (tx: any) => {
    setEditingTransaction(tx);
  };

  const totalSpent = transactions.reduce((sum, t) => Number(sum) + Number(t.amount), 0);

  const categoryTotals = transactions.reduce((acc: Record<string, number>, tx) => {
    acc[tx.category] = (acc[tx.category] || 0) + Number(tx.amount);
    return acc;
  }, {});

  const topCategory = (Object.entries(categoryTotals) as [string, number][])
  .sort((a, b) => b[1] - a[1])[0]?.[0];


  const highestTransaction =
    transactions.length > 0
      ? Math.max(...transactions.map((tx) => Number(tx.amount)))
      : 0;

  const monthlyData = transactions.reduce((acc, tx) => {
    const month = new Date(tx.date).toLocaleString("default", { month: "short" });
    const found = acc.find((m) => m.month === month);
    if (found) found.total += Number(tx.amount);
    else acc.push({ month, total: Number(tx.amount) });
    return acc;
  }, [] as { month: string; total: number }[]);

  return (
    <>
      {/* 🌟 Navbar */}
      <header className="navbar">
        <div className="nav-content">
          <h1 className="nav-logo">Dashboard</h1>
          <nav className="nav-links">
            <a href="#summary">Summary</a>
            <a href="#charts">Trends</a>
            <a href="#budget">Budgets</a>
            <a href="#transactions">Transactions</a>
          </nav>
        </div>
      </header>

      <main className="dashboard-main">
        <h1 className="main-heading">PERSONAL FINANCE VISUALIZER </h1>

        {/* 🔢 Summary */}
        <section id="summary" className="summary-grid">
          <div className="summary-card">
            <p className="label">Total Spent</p>
            <p className="value">₹{totalSpent}</p>
          </div>
          <div className="summary-card">
            <p className="label">Top Category</p>
            <p className="value">{topCategory || "N/A"}</p>
          </div>
          <div className="summary-card">
            <p className="label">Highest Transaction</p>
            <p className="value">₹{highestTransaction}</p>
          </div>
          <div className="summary-card">
            <p className="label">Total Transactions</p>
            <p className="value">{transactions.length}</p>
          </div>
        </section>

        {/* 📊 Charts */}
        {isLoaded && (
          <section id="charts" className="chart-grid">
            <div className="card">
              <h2 className="section-header">📊 Monthly Trends</h2>
              <MonthlyBarChart data={monthlyData} />
            </div>
            <div className="card">
              <h2 className="section-header">📈 Category Breakdown</h2>
              <CategoryPieChart data={transactions} />
            </div>
          </section>
        )}

        {/* 📉 Budget Comparison */}
        <section id="budget" className="card">
          <h2 className="section-header">📉 Budget vs Actual</h2>
          <BudgetComparisonChart data={comparisonData} />
        </section>

        {/* 💼 Budget Inputs */}
        <section className="card">
          <h2 className="section-header">💼 Set Budgets by Category</h2>
          <div className="budget-grid">
            {Object.entries(budgets).map(([category, value]) => (
              <div key={category}>
                <label className="block mb-1 text-sm font-medium text-gray-600">
                  {category}
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) =>
                    setBudgets({
                      ...budgets,
                      [category]: parseInt(e.target.value) || 0,
                    })
                  }
                  className="input"
                  placeholder={`₹0`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ➕ Add / Recent Transactions */}
        <section id="transactions" className="transaction-grid">
          <div className="card">
            <h2 className="section-header">➕ Add / Edit Transaction</h2>
            <TransactionForm
              onSubmit={addTransaction}
              editingTransaction={editingTransaction}
            />
          </div>
          <div className="card">
            <h2 className="section-header">📄 Recent Transactions</h2>
            <TransactionList
              transactions={transactions}
              onEdit={editTransaction}
              onDelete={deleteTransaction}
            />
          </div>
        </section>
      </main>
    </>
  );
}
