import React, { Component } from 'react'

class Card extends Component {

  _click = () => {
    this.props.flipCard(this.props.index)
  }

  render() {
    const revealed = this.props.revealed ? 'revealed' : ''
    const matches = this.props.matches ? 'matched' : ''
    return <div className={`${this.props.value} card ${revealed} ${matches}`} onClick={this._click}> </div>
  }
}

export default Card
