import React from "react";

const Balance =({transactions})=>{

    const total = transactions.reduce((acc, curr)=>{
        return acc + curr.amount;
    },0);
    return(
        <div className="my-4 text-center">
            <h4 className="text-sm text-gray-400">Your Balance</h4>
            <h1 className="text-2xl font-bold">₹{total}</h1>
        </div>
    );
};

export default Balance