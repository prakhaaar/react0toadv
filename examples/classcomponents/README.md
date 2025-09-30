# Class-based components are React components written as ES6 classes that extend React.Component. They were the main way to use state and lifecycle methods before hooks were introduced.

# extends Component → makes it a React component.

# render() → every class component must have a render() method that returns JSX.

# this.props → access props passed from parent.

# Lifecycle Phase Method Description

# Mounting (component added) constructor() Initialize state or bind methods

# componentDidMount() Runs after first render; good for fetching data

# Updating (props/state change) shouldComponentUpdate() Decide if component should re-render

# componentDidUpdate() Runs after every update

# Unmounting (removal) componentWillUnmount() Cleanup (e.g., remove listeners, timers)
