import React from "react";

const Summary =({transactions}) =>{
    const income = transactions
        .filter((t)=>t.amount>0)
        .reduce((a,t)=>a+t.amount, 0);

    const expense = transactions
        .filter((t)=>t.amount>0)
        .reduce((a,t)=>a+t.amount, 0);

    return (
        <div className="flex justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4" >
            <div>
                <h4 className="text-sm" >Income</h4>
                <p className="text-red-500 font-bold" >₹{Math.abs(expense)}</p>
            </div>
        </div>
    );
};

export default Summary