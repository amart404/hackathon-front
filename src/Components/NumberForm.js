import React, { Component } from 'react'
import '../Stylesheets/NumberForm.css'

export default class NumberForm extends Component {

    submitHandler = event => {
        event.preventDefault()
        this.props.getFact()
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Enter a number" onChange={this.props.getNumber}/><br/>
                <input type="radio" name="answer" value="trivia" checked={true} onChange={this.props.changeRadio}/>Trivia<br/>
                <input type="radio" name="answer" value="math" checked={false} onChange={this.props.changeRadio}/>Math<br/>
                <input type="submit" value="Give Me Facts"/>
            </form>
        )
    }
}