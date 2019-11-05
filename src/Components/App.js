import React, { Component } from 'react';
import '../Stylesheets/App.css';
import Header from './Header'
import NumberForm from './NumberForm'
import TriviaBox from './TriviaBox';

export default class App extends Component {

  state = {
    number: 0,
    factType: 'trivia',
    fact: '',
    showInput: true,
    showTrivia: false
  }

  componentDidMount() {
    this.getFact()
  }

  changeRadio = () => {
    this.state.factType === 'trivia'
      ? this.setState({factType: 'math'})
      : this.setState({factType: 'trivia'})
  }

  getNumber = event => {
    this.setState({
      number: event.target.value
    })
  }

  getFact = () => {
    const URL = `http://numbersapi.com/${this.state.number}/${this.state.factType}`

    fetch(URL)
      .then(resp => resp.text())
      .then(fact => {
        this.setState({
          fact
        })
      })

    this.setState({
      showInput: false,
      showTrivia: true
    })

  }

  postFact = () => {
    const URL = `http://localhost:3000/numbers`

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({number: this.state.number, type: this.state.factType})
    })

    this.setState({
      showInput: true,
      showTrivia: false
    })

  }
  
  render() {
    return (
      <div className="App">
        <Header />
        { this.state.showInput &&
          <NumberForm getFact={this.getFact} getNumber={this.getNumber} changeRadio={this.changeRadio}/>
        }
        {this.state.showTrivia &&
          <TriviaBox fact={this.state.fact} postFact={this.postFact}/>
        }
      </div>
    );
  }
}
