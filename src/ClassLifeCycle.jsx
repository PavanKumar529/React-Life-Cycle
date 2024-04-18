import React, { Component } from 'react'

export default class ClassLifeCycle extends Component {
    constructor(props){          //This is first method of mounting Phase 
        super(props);
        this.state = {
            count: 0,
            background: 'blue',
            color: 'green'
            
        }
    }
    static getDerivedStateFromProps(props, state) {  // this method used to assign props data as a state
        // console.log(props, state)
        console.log("this is getDerivedStateFromProps method")
        return state.background = props.background
    }
    componentDidMount() {   // This is last method mounting, it only executes after initial render
     console.log("This is componentDidMount method");   
    }

    shouldComponentUpdate() { // It is the second method of updating pahse, which handels the component re-render
      console.log("This is a shouldComponentUpdate method");
      return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { // To catch the previous props and state values
      console.log(prevProps, prevState);
      console.log("This is a getSnapshotBeforeUpdate method");
      return null;
    }
    componentDidUpdate(prevProps, prevState) { //This is the last method of upadting Phase, it exceutes after
      console.log("This is a componentDidUpdate method");
    }

    componentWillUnmount() { // Before removing the component from DOM, Unmounting Phase
      console.log("It is a componentWillUnmount method"); 
      // alert("Hey!! You want to Removing the Component")
    }

    static getDerivedStateFromError(error) {
      console.log("This a getDerivedStateFromError method");
      return { hasErrors: true}
    }

    componentDidCatch(error, info){
      console.log(info);
    }


  render() {           // This metthod is 3rd method of mounting it renders the element in DOM
    return (
      <>
        <h1>ClassLifeCycle</h1> 
        <h1>Count: {this.state.count}</h1>
        {console.log("This is render method")}
        <h1 style = {{background: this.state.background, color: this.state.color}}>This is the Background Color Text</h1>

        <div>
            <button onClick={() => this.setState({count: this.state.count + 1})}>Change Count</button>
            <button onClick={() => this.setState({color: "red"})}>Change Color</button>
        </div>
      </>
    )
  }
}
