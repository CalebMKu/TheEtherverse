import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";
import { TransactionContext } from "../context/TransactionContext";

const Transactions = () => {
  const { transactions, deleteTransaction, getTransactions } = useContext(TransactionContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return transactions.map((t) => (
    <Transaction
      key={t.id}
      transaction={t}
      onDelete={() => deleteTransaction(t.id)}
    />
  ));
};

export default Transactions;
