import React, { Component } from 'react';

class Calculator extends Component {
  constructor(){
    super()
    this.state ={
      value1: 0,
      value2: 0,
      sum: ''
    }
  }

  handleChange1 = (e) => {
    let newVal = parseInt(e.target.value)
    this.setState({
      value1: newVal
    })
    console.log(newVal);
  }

  handleChange2 = (e) => {
    let newVal = parseInt(e.target.value)
    this.setState({
      value2: newVal
    })
    console.log(newVal);
  }


  calculate = () => {
    this.setState({
      sum: (this.state.value1 + this.state.value2)
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" onChange={this.handleChange1}/>
          <span>+</span>
          <input type="text" onChange={this.handleChange2}/>
          <span>=</span>
          <button onClick={() => this.calculate()}>Equals</button>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    )
  }
}


export default Calculator;
