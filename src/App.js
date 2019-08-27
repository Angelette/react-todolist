import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      toDoList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange = (onChangeEvent) => {
  //   this.setState({
  //     userInput: onChangeEvent.target.value
  //   })
  // }

  handleChange(onChangeEvent) {
    this.setState({
      userInput: onChangeEvent.target.value
    });
  }

  // handleSubmit() {
  //   //const itemsArr = this.state.userInput.split(',');
  //   this.setState({
  //     toDoList: this.state.userInput.toString()
  //   });
  //   // // Clear input
  //   // itemsArr = "";
  // }

  // handleSubmit = (onSubmitEvent) => {
  //   this.setState({
  //     toDoList: this.state.userInput.toString()
  //   });
  // }

  handleSubmit() {
    this.state.toDoList.push(this.state.userInput.toString());
    // this.setState({
    //   toDoList: this.state
    // })
  }

  render() {
    const items = this.state.toDoList.map((item, i) => (
      <li key={item + i}>{item}</li>
    ));
    return (
      <div id="App">
        <div id="header">
          <title>To Do List</title>
          <h1>Things To Do</h1>
          <input
            id="newInput"
            onChange={this.handleChange}
            value={this.state.userInput}
            placeholder="Enter your item here . . ."
          />
          <span id="addBtn" onClick={this.handleSubmit}>
            Add
          </span>
        </div>
        <div>
          <ul>{items}</ul>
        </div>
      </div>
    );
  }
}

export default App;
