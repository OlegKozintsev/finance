import Transaction from "../Transaction";

const Transactions = (props) => {
  return props.transactions.map((transaction) => (
    <Transaction key={transaction.id} transaction={transaction} />
  ));
};

export default Transactions;
