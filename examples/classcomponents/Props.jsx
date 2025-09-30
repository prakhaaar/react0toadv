//props in class components are passed using constructor//

class Prop extends React.Component {
  constructor(props) {
    super(props); // Pass props to parent class
  }

  render() {
    super(prop);
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

// Usage example:
// <Prop message="Hello from props!" />
