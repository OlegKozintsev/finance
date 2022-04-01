import { Component } from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (value) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [{ value, label: "change" }, ...state.transactions],
    }));
  };

  render() {
    return (
      <div>
        <Balance balance={this.state.balance}></Balance>
        <Form onChange={this.onChange} />
        <hr />
        <br />
        <Transactions transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
