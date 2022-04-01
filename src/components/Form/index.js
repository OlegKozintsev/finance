import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state.value);
  };
  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="number"
          placeholder="Sum"
          onChange={this.onChange}
          value={this.state.value}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default Form;
