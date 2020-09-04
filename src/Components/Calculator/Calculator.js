import React from 'react'
import './style.css'
import * as math from 'mathjs'

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            res : ''
        };
    }

    changeNum=(event)=>{
        this.setState({
            res:this.state.res+event.target.textContent
        })
    }
    clearLed = () =>{
        this.setState({
            res:''
        })
    }

    handleEqual = () => {
        this.setState({ res: math.evaluate(this.state.res) });
        console.log(this.state.res)
      }

    handleMultiply = () =>{
        this.setState({
            res: this.state.res + '*'
        })
    }        
    

    render = () =>{
        return(
            <div className="main-cont">
                <div className="led">
                    <h3>{this.state.res}</h3>
                </div>
                <div className = "calc-btn">
                    <button onClick={this.changeNum}>1</button>
                    <button onClick={this.changeNum}>2</button>
                    <button onClick={this.changeNum}>3</button>
                    <button className="opr" onClick={this.changeNum}>+</button>
                    <button onClick={this.changeNum}>4</button>
                    <button onClick={this.changeNum}>5</button>
                    <button onClick={this.changeNum}>6</button>
                    <button className="opr" onClick={this.changeNum}>-</button>
                    <button onClick={this.changeNum}>7</button>
                    <button onClick={this.changeNum}>8</button>
                    <button onClick={this.changeNum}>9</button>
                    <button className="opr" onClick={this.handleMultiply}>x</button>
                    <button className="opr" onClick={this.clearLed}>C</button>
                    <button onClick={this.changeNum}>0</button>
                    <button className="opr" onClick={this.changeNum}>.</button>
                    <button className="opr" onClick={this.changeNum}>/</button>
                    <button className="answer" onClick={this.handleEqual}>=</button>
                </div>
            </div>
        )
    }
}

export default Calculator