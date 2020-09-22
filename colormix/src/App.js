import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    red1: 0,
    green1: 0,
    blue1: 0,
    red2: 0,
    green2: 0,
    blue2: 0,
  }

  changeComponent = (event) => {
    event.preventDefault()
    if (event.target.value <= 255 && event.target.value >= 0) {
      this.setState({
        [event.target.name]: parseInt(event.target.value)
      })
    }
  } 

  render() {
    const components1 = ['red1', 'green1', 'blue1']
    const components2 = ['red2','green2','blue2']
    const components3 = ['red', 'green', 'blue']
    const squares = ['1', '2']

    return (  
      <div className='App'>
        <div className='title'>
          <h1>COLORMIX</h1>
        </div>
        <div className='components' id='components1'>
          {components1.map((component) => {
            return (
              <>
              <label>{component.slice(0,component.length - 1)}</label><br/>
              <input type='number' name={component} value={this.state[component]} onChange={this.changeComponent}></input>
              <br/>
              <br/>
              </>
            )
          })}
        </div>
        <div className='components' id='components2'>
          {components2.map((component) => {
            return (
              <>
              <label>{component.slice(0,component.length - 1)}</label><br/>
              <input type='number' name={component} value={this.state[component]} onChange={this.changeComponent}></input>
              <br/>
              <br/>
              </>
            )
          })}
        </div>
        <div className='components' id='components3'>
          {components3.map((component) => {
            return (
              <>
              <label>{component}</label><br/>
              <p>{(this.state[component + 1] + this.state[component + 2]) / 2}</p>
              <br/>
              </>
            )
          })}
        </div>
        <br/>
        {squares.map((square) => {
          return (
            <>
            <div className='square' id={`square${square}`} style={{backgroundColor: `rgb(${this.state['red'+square]}, ${this.state['green'+square]}, ${this.state['blue'+square]})`}}></div>
            <br/>
            </>
          )
        })}
        <div className='square' id={`square3`} style={{backgroundColor: `rgb(${(this.state['red1'] + this.state['red2']) / 2}, ${(this.state['green1'] + this.state['green2'] / 2) / 2}, ${(this.state['blue1'] + this.state['blue2']) / 2})`}}></div>
      </div>
    )
  }
}

export default App;
