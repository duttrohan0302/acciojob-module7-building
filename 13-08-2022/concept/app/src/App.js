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
class App extends React.Component{

  render(){
    return <div>
      <p>
        Basic App
      </p>
      <Initialize />
    </div>
  }
}

export default App;
