import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            groceryList: ['bananas', 'milk', 'bread', 'peaches'],
            userInput: '',
            filteredGroceries: []
        }

    }

    handleChange(value) {
        this.setState({
            userInput: value
        })
    }

    filterGroceries(userInput) {
        let groceries = this.state.groceryList;
        let filteredGroceries = [];

        for (let i = 0; i < groceries.length; i++) {
            if (groceries[i].includes(userInput)) {
                filteredGroceries.push(groceries[i]);
            }
        }

        this.setState({ filteredGroceries: filteredGroceries})
    }
        render() {
            return (
                <div className="puzzleBox filterStringPB">
                    <h4> Filter String </h4>
                    <span className="puzzleText">Groceries: {
                        JSON.stringify(this.state.groceryList, null, 10)} </span>
                    <input
                        onChange={e => this.handleChange(e.target.value)}
                        className="inputLine"></input>
                    <button
                        onClick={() => this.filterGroceries(this.state.userInput)}
                        className="confirmationButton"> Filter </button>
                    <span className="resultsBox filterStringRB">
                        Filtered Groceries: {JSON.stringify(this.state.filteredGroceries, null, 10)} </span>
                </div>
            )
    }
}