import React from "react";

class userClass extends React.Component {
  //setting a state in the class components
  //create a constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 2,
    }; //global state variable for the components// all these states will be created here itself //
  }

  render() {
    const count1 = this.state.count;
    const count2 = this.state.count1; //now  we have state variables//
    return (
      <div>
        <h1>Count1 is : {count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        ></button>
      </div>
    );
  }
}
