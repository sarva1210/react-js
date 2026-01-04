import React from "react";
import { useEffect, useState } from "react";
import Balance from "./Components/Balance";
import Summary from "./Components/Summary";
import TransactionForm from "./Components/TransactionForm";
import TransactionList from "./Components/TransactionList";
import ThemeToggle from "./Components/Themetoggle";

const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });


  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);


  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="w-full min-h-screen bg-white dark:bg-gray-800 px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Expense Tracker</h2>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <Balance transactions={transactions} />
        <Summary transactions={transactions} />
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
};

export default App;