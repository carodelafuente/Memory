import React, { Component } from 'react'

class Flipper extends Component {
  render() {
    return(
      <div className={'flipper-container' + this.flipper.orientation}>
      </div>
      <div className={"flipper" + (this.props.flipped ? " flipped" : "")}>
      </div>
    )
  }
}

export default Flipper
