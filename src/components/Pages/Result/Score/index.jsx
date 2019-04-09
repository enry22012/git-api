import React, { Component } from 'react';
import './index.css'

class Score extends Component {

  constructor (props) {
    super();
    const score = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(props.score);
    this.state = {
      round: false,
      score: score
    }
  }

  setRound = () => {
    const options = this.state.round ? { maximumFractionDigits: 0 } : { maximumFractionDigits: 2 };
    const score = new Intl.NumberFormat('ru-RU', options).format(this.props.score);
    this.setState({
      round: !this.state.round,
      score: score
    })
  }

  render() {
    const { score, round } = this.state;
    return(
      <div className='result-score' onClick={this.setRound}>
        {score}{!round ? '...' : ''}
      </div>
    )
  }
}

export default Score;