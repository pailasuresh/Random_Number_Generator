// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  random = () => {
    const numb = Math.ceil(Math.random() * 100)
    this.setState({count: numb})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <div className="main">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.random}>
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
