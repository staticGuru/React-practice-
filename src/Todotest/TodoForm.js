import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let regNo = shortid.generate();
    this.props.onSubmit({
      id: regNo,
      text: this.state.text,
      complete: false,
    });
    // localStorage.setItem(regNo, this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button onClick={this.handleSubmit}>add todo</button>
      </form>
    );
  }
}
