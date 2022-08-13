import React from 'react';

class Initialize extends React.Component{

  constructor(props){
    // Calling the constructor of Parent Classs React.Component
    super(props);

    // Initialize state
    this.state = {
      date: new Date(),
      clickedStatus: false
    }
    // this.handleSomething = this.handleSomething.bind(this)
  }

  render(){
    return(
      <div>
        Today's date time is {this.state.date.toLocaleDateString()}
      </div>
    )
  }
}

class RenderExample extends React.Component{
  constructor(props){
    super(props)
    this.state={
      surname:"Dutt"
    }
  }

  render(){
    if(this.props.name){
      return(
        <div>
          The name is {this.props.name}
        </div>
      )
    }
    return(
      <div>
        The surname is {this.state.surname}
      </div>
    )
  }
}
class App extends React.Component{

  render(){
    return <div>
      <p>
        Basic App
      </p>
      {/* The lifecycle methods of initialize component will run now(inside the render func of App component) */}
      <Initialize /> 
      <RenderExample name={'Rohan'}/>
      <RenderExample/>
    </div>
  }
}


export default App;
