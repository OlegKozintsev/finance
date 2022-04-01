const Transaction = (props) => (
  <div>
    label: {props.transaction.label}
    <p>Value: {props.transaction.value}</p>
    <br />
  </div>
);

export default Transaction;
