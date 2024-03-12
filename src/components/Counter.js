import React, { Component } from "react";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const increment = () => {
      console.log("btn clicked");
      this.setState((prev) => ({
        count: prev.count + 1,
      }));

      //   this.setState((prevState) => ({
      //     count: prevState.count + 1
      //   }));
    };
    return (
      <>
        <p>Button clicked {this.state.count} times</p>
        <button onClick={increment}>Click me</button>
      </>
    );
  }
}

export default Test;