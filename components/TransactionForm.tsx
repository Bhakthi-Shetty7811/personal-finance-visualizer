'use client';

import { useEffect, useState } from "react";

interface Props {
  onSubmit: (tx: any) => void;
  editingTransaction: any | null;
}

export default function TransactionForm({ onSubmit, editingTransaction }: Props) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Food');

  useEffect(() => {
    if (editingTransaction) {
      setAmount(editingTransaction.amount.toString());
      setDescription(editingTransaction.description);
      setDate(editingTransaction.date);
      setCategory(editingTransaction.category || 'Food');
    }
  }, [editingTransaction]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || !description || !date || !category) {
      alert("Please fill in all fields.");
      return;
    }

    const tx = {
      amount: Number(amount),
      description,
      date,
      category,
    };

    onSubmit(tx);

    setAmount('');
    setDescription('');
    setDate('');
    setCategory('Food');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="₹0"
            className="input"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g. Grocery, Rent"
            className="input"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input"
          />
        </div>
      </div>

      <div className="text-right">
        <button type="submit" className="button px-6 py-2 text-sm">
          {editingTransaction ? "Update Transaction" : "Add Transaction"}
        </button>
      </div>
    </form>
  );
}



