import React from 'react';
import './App.css';

const results = {
  '01': -1,
  '02': 1,
  '12': -1,
};

const rock = require('./images/rock.png');
const paper = require('./images/paper.png');
const scissors = require('./images/scissors.png');
const transparent = require('./images/transparent.png');

const image_choices = {
  0: rock,
  1: paper,
  2: scissors,
  3: transparent
};
class App extends React.Component {
  state = {
    score: 0,
    user_choice: 3,
    computer_choice: 3,
    results: ''
  };

  game(user_move){
    this.setState({user_choice: user_move})
    var computer_move = Math.floor(Math.random() * 3);
    this.setState({computer_choice: computer_move})
    var result = 0;
    if (user_move === computer_move) {
      result = 0;
    }
    else if (user_move < computer_move) {
      result = results[user_move.toString()+computer_move.toString()];
    }
    else {
      result = -1*results[computer_move.toString()+user_move.toString()];
    }
    this.setState({score: this.state.score + result})
    if (result === 0)
    {
      this.setState({results: 'TIE'});
    }
    else if (result === 1)
    {
      this.setState({results: 'WIN'});
    }
    else
    {
      this.setState({results: 'LOSE'});
    }
  }
  
  render () {
    return (
        <div className="App">
          <header className="App-header">
            <p>
              Score:{' '} 
              { this.state.score }
            </p>
            <p> { this.state.results } </p>
            <p> Computer Choice </p>
            <img src={image_choices[this.state.computer_choice]} alt="" width="200" height="200" />
            <p> Your Choice </p>
            <img src={image_choices[this.state.user_choice]} alt="" width="200" height="200" />
            <br />
            <div>
              <button class='button-6' onClick={() => this.game(0)}>
                Rock
              </button>
              <button class='button-6' onClick={() => this.game(1)}>
                Paper
              </button>
              <button class='button-6' onClick={() => this.game(2)}>
                Scissors
              </button>
            </div>
          </header>
          
        </div>
    );
  }
}

export default App;
