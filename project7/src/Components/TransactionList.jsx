import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList =({ transactions, deleteTransaction }) =>{
    return(
        <>
          <h3 className="font-semibold mb-2">History</h3>
          <ul className="space-y-2">
            {transactions.map((t)=>(
                <TransactionItem key={t.id} transaction={t}deleteTransaction={deleteTransaction} />
            ))}
          </ul>
        </>
    );
};

export default TransactionList