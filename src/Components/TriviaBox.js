import React, { Component } from 'react'
import '../Stylesheets/TriviaBox.css'

export default class TriviaBox extends Component {
    
    render() {
        return (
            <div className="trivia-box">
                <p>{this.props.fact}</p>
                <button onClick={this.props.postFact}>Done</button>
            </div>
        )
    }
}