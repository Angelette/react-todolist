import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      items: []
    };
  }

  itemInputChanged(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  submitForm(event) {
    event.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        {
          itemName: this.state.newItem,
          done: false
        }
      ]
    });
    this.setState({
      newItem: ""
    });
  }

  render() {
    return (
      <div id="App">
        <div id="header">
          <title>To Do List</title>
          <h1>Things To Do</h1>
          <form onSubmit={event => this.submitForm(event)}>
            <input
              id="itemInput"
              onChange={event => this.itemInputChanged(event)}
              value={this.state.newItem}
              placeholder="I am going to ..."
            />
            <button id="addBtn" type="submit">
              Add
            </button>
          </form>
        </div>
        <ul>
          {this.state.items.map(item => {
            return <li key={item.itemName}>{item.itemName}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
