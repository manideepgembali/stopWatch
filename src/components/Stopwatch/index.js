// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    seconds: 0,
  }

  timeFormat = () => {
    const {seconds} = this.state
    const min = Math.floor(seconds / 60)
    const sec = Math.floor(seconds % 60)
    const minInStr = min > 9 ? min : `0${min}`
    const secInStr = sec > 9 ? sec : `0${sec}`
    return `${minInStr}:${secInStr}`
  }

  start = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  startTimer = () => {
    this.intervalId = setInterval(() => this.start(), 1000)
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
  }

  resetTimer = () => {
    this.setState({seconds: 0})
  }

  render() {
    return (
      <div className="bg">
        <div className="card">
          <h1>Stopwatch</h1>
          <div className="timer-block">
            <div className="timer-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <p>Timer</p>
            </div>
            <h1>{this.timeFormat()}</h1>
            <div>
              <button
                type="button"
                className="buttin"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="buttin stop"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="buttin reset"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
