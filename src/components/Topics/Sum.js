import React, {Component} from 'react'

export default class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null

        }
    }

    updateNumber1(value) {
        this.setState({
            number1: parseInt(value, 10)
        })
    }

    updateNumber2(value) {
        this.setState({
            number2: parseInt(value, 10)
        })
    }

    add(num1, num2) {
        this.setState({
            sum: num1 + num2
        })
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input 
                onChange={e => this.updateNumber1(e.target.value)}
                className="inputLine" type="text"/>
                <input 
                onChange={e => this.updateNumber2(e.target.value)}
                className="inputLine" type="text"/>
                <button 
                onClick={() => this.add(this.state.number1, this.state.number2)}
                className="confirmationButton" >Add </button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}