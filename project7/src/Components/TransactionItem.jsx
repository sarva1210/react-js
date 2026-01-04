import React from "react";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    <li className={`flex justify-between items-center p-2 rounded border-l-4 ${
        transaction.amount > 0 ? "border-green-500" : "border-red-500" } bg-gray-100 dark:bg-gray-700`} >

      <div>
        <p className="font-medium">{transaction.text}</p>
        <small className="text-gray-400">{transaction.date}</small>
      </div>

      <div className="flex items-center gap-2">
        <span> ₹{Math.abs(transaction.amount)} </span>
        <button onClick={() => deleteTransaction(transaction.id)} className="text-red-500" > ✕ </button>
      </div>
    </li>
  );
};

export default TransactionItem
