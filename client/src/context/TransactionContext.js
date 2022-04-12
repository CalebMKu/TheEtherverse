import axios from "axios";
import { createContext, useState } from "react";
import moment from "moment";

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState(null);
  const [id, setId] = useState(0);

  const getTransactions = () => {
    axios
      .get("http://localhost:8080/get", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getTransaction = (id) => {
    axios
      .get(`http://localhost:8080/get/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const deleteTransaction = (id) => {
    axios
      .delete(`http://localhost:8080/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setTransactions(transactions.filter((t) => t.id !== id));
      })
      .catch((error) => {
        alert(error);
      });
  };

  const createTransaction = (sender, receiver, ethereumAmount) => {
    const tx = {
      sender_address: sender,
      receiver_address: receiver,
      id: id,
      amount: ethereumAmount,
      created_at: moment(new Date()).format("MM/DD/YYYY"),
    };

    axios
      .post("http://localhost:8080/create", tx)
      .then(() => {
        setId(id + 1);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        transaction,
        getTransactions,
        getTransaction,
        deleteTransaction,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
