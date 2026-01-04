import React, {useState} from "react";

const TransactionForm =({addTransaction}) =>{
    const [ text, setText] = useState("");
    const [ amount, setAmount] = useState("");
    const [ date, setDate] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!text || !amount || !date) return;

        addTransaction({
            id: Date.now(),
            text,
            amount: +amount,
            date
        });

        setText("");
        setAmount("");
        setDate("");
    };

    return(
        <form onSubmit={handleSubmit} className="space-y-2 mb-4">
            <input className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700" placeholder="Enter text" value={text} onChange={(e) => setText(e.target.value)} />
            <input className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700" type="number" placeholder="Enter amount (+ income, - expense)" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700" type="date" value={date} onChange={(e) => setDate(e.target.value)} />

            <button className="w-full bg-blue-600 text-white py-2 rounded" > Add Transaction </button>
        </form>
    );
};

export default TransactionForm