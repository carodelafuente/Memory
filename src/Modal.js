import React, { Component } from 'react'

class Modal extends Component {

reset = () => {
  window.location.reload()
}

render() {
  return (
    <div className="overlay">
      <div className="dialog">
        <h3>You Win!</h3>
        <button onClick={this.reset}>Play Again?</button>
      </div>
    </div>
  )
}

}

export default Modal
