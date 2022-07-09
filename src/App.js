import React from "react";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import TransactionList from "./Components/TransactionList";
import AddTransactionForm from "./Components/AddTransactionForm"

import './index.css'

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <AddTransactionForm />
      <TransactionList />
    </div>
  );
}

export default App;
