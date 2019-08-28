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
    // Check empty input
    if (this.state.newItem.trim().length !== 0) {
      event.preventDefault(); // Prevent reload
      // ... Find and update/replace only those with changes
      // Take everything currently in the array,
      // put in new array defined here,
      // put new object itemName and done at end of array
      this.setState({
        items: [
          ...this.state.items,
          {
            itemName: this.state.newItem,
            done: false
          }
        ]
      });
    } else {
      alert("Sorry! Could not add empty item. Please type something!");
      event.preventDefault(); // Prevent reload
    }
    // Clear input
    this.setState({
      newItem: ""
    });
  }

  toggleCheckbox(event, index) {
    const items = [...this.state.items]; // copies array (can't directly)
    items[index] = { ...items[index] }; // copies the list
    items[index].done = event.target.checked; // updates "done" property on copied list
    this.setState({
      items
    });
  }

  removeItem(index) {
    const items = [...this.state.items]; // copies array
    items.splice(index, 1);

    this.setState({
      items
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
          {/* Maps array of objects into JSX */}
          {/* Each object returns list item */}
          {this.state.items.map((item, index) => {
            return (
              <li key={item.itemName + index} className={item.done ? "done" : ""}>
                <div>
                  <input
                    type="checkbox"
                    // Takes in event, calls method toggleCheckbox with params event and index
                    onChange={event => this.toggleCheckbox(event, index)}
                  />
                  {item.itemName}
                  <button
                    type="button"
                    className="btn btn-default"
                    id="removeBtn"
                    onClick={() => this.removeItem(index)}
                  >
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
