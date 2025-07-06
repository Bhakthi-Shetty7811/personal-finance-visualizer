type Props = {
  transactions: any[];
  onEdit: (txn: any) => void;
  onDelete: (id: string) => void;
};

export default function TransactionList({ transactions, onEdit, onDelete }: Props) {
  if (transactions.length === 0) {
    return <p className="text-center text-gray-500 italic">No transactions recorded yet.</p>;
  }

  return (
    <div className="space-y-4">
      {transactions.map((txn) => (
        <div
          key={txn._id}
          className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm hover:shadow-md transition-all"
        >
          {/* 💸 Left Section */}
          <div className="space-y-1">
            <div className="text-2xl font-bold text-primary">₹{txn.amount}</div>
            <div className="text-base text-gray-800 font-medium capitalize">{txn.description}</div>
            <div className="text-xs text-gray-500">
              {new Date(txn.date).toLocaleDateString("en-GB", {
                weekday: "short",
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>

          {/* 🔧 Right Section */}
          <div className="flex gap-3 items-center">
            <button
              onClick={() => onEdit(txn)}
              className="button-secondary px-4 py-1.5 text-sm font-semibold"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => onDelete(txn._id)}
              className="button-danger px-4 py-1.5 text-sm font-semibold"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


