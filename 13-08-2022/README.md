# Component Life Cycle methods in ReactJS

- The components like us, also are born(initializing - mounting), they grow(by updating) and then they die(unmounting) => This is known as component lifecycle

## Lifecycle Methods
- Initialization
- Mounting
- Updating
- Unmounting

### Initialization
- This is the phase in which the component is going to start its journey by setting up the state. This is usually done inside the constructor method

### Mounting
- constructor()
- componentWillMount() =>deprecated - was used in earlier version of react
- render()
- componentDidMount()

#### Constructor
- It's not a react provided method, it's a ES6 feature
- super(props) what does this do?
  - React uses the constructor to pass the props to parent Component extended from React library
  - Why? Passing of props to parent component helps us to use this.props in the component
- Never use setState in the constructor?
  - beause setState is designed to update the state and not for creation
- Side effects like calls to web api should be avoided in the constructor 
  - because web apis calls takes time to return result and by that time constructor method will complete it's execution
- Method binding can also be done in the constructor
  - this.handleSomething = this.handleSomething.bind(this)