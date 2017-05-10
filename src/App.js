import React, { Component } from 'react';
import Card from './Card';
import Modal from './Modal'
import Title from './Title'
import Footer from './Footer'
import _ from 'lodash'

class App extends Component {
  state = {
    moves: _.shuffle(['boy', 'boy2', 'girl', 'girl2', 'man1', 'man2', 'man3', 'man4', 'boy', 'boy2', 'girl', 'girl2', 'man1', 'man2', 'man3', 'man4',]),
    picks: [],
    matches: [],
    gameOver: false
  }

  flipCard = (flip) => {
    if (this.state.picks.includes(flip) || this.state.matches.includes(flip)) return
    if (this.state.picks.length < 2) {
      this.setState({
        picks: [...this.state.picks, flip]
      }, () => {
        if (this.state.picks.length === 2) {
          this.checkForMatch()
        }
      })
    }
  }



  checkForMatch = (i) => {
    if (this.state.moves[this.state.picks[0]] === this.state.moves[this.state.picks[1]]) {
      this.setState({
        matches: [...this.state.matches, ...this.state.picks]
      }, () => {
        if (this.state.matches.length === this.state.moves.length) {
          window.setTimeout(() => {
            this.setState({
              picks: [],
              matches: [],
              gameOver: true
            })
          }, 2000)
        }
      })
    }
    window.setTimeout(() => {
      this.setState({
        picks: []
      })
    }, 1000)
  }


  render() {
    return (
      <div className="main">
        <div className="title">
          <Title />
        </div>

        <div className="container">
          <Card index={0} value={this.state.moves[0]} revealed={this.state.picks.includes(0)} matches={this.state.matches.includes(0)} flipCard={this.flipCard} />
          <Card index={1} value={this.state.moves[1]} revealed={this.state.picks.includes(1)} matches={this.state.matches.includes(1)} flipCard={this.flipCard} />
          <Card index={2} value={this.state.moves[2]} revealed={this.state.picks.includes(2)} matches={this.state.matches.includes(2)} flipCard={this.flipCard} />
          <Card index={3} value={this.state.moves[3]} revealed={this.state.picks.includes(3)} matches={this.state.matches.includes(3)} flipCard={this.flipCard} />
          <Card index={4} value={this.state.moves[4]} revealed={this.state.picks.includes(4)} matches={this.state.matches.includes(4)} flipCard={this.flipCard} />
          <Card index={5} value={this.state.moves[5]} revealed={this.state.picks.includes(5)} matches={this.state.matches.includes(5)} flipCard={this.flipCard} />
          <Card index={6} value={this.state.moves[6]} revealed={this.state.picks.includes(6)} matches={this.state.matches.includes(6)} flipCard={this.flipCard} />
          <Card index={7} value={this.state.moves[7]} revealed={this.state.picks.includes(7)} matches={this.state.matches.includes(7)} flipCard={this.flipCard} />
          <Card index={8} value={this.state.moves[8]} revealed={this.state.picks.includes(8)} matches={this.state.matches.includes(8)} flipCard={this.flipCard} />
          <Card index={9} value={this.state.moves[9]} revealed={this.state.picks.includes(9)} matches={this.state.matches.includes(9)} flipCard={this.flipCard} />
          <Card index={10} value={this.state.moves[10]} revealed={this.state.picks.includes(10)} matches={this.state.matches.includes(10)} flipCard={this.flipCard} />
          <Card index={11} value={this.state.moves[11]} revealed={this.state.picks.includes(11)} matches={this.state.matches.includes(11)} flipCard={this.flipCard} />
          <Card index={12} value={this.state.moves[12]} revealed={this.state.picks.includes(12)} matches={this.state.matches.includes(12)} flipCard={this.flipCard} />
          <Card index={13} value={this.state.moves[13]} revealed={this.state.picks.includes(13)} matches={this.state.matches.includes(13)} flipCard={this.flipCard} />
          <Card index={14} value={this.state.moves[14]} revealed={this.state.picks.includes(14)} matches={this.state.matches.includes(14)} flipCard={this.flipCard} />
          <Card index={15} value={this.state.moves[15]} revealed={this.state.picks.includes(15)} matches={this.state.matches.includes(15)} flipCard={this.flipCard} />
        </div>

        <div className='footer'>
          <Footer />
        </div>
        <Modal visible={this.state.gameOver}/>
      </div>
    )
  }
}

export default App;
