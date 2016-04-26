import React  from 'react';
import styles from '../styles/styles.scss';

export default class GameOver extends React.Component {
  render() {
    let winner = this.props.winner;

    return (
      <div className='overlay'>
        {this.props.winner ?
          <h1 className='winner-message'>{this.props.winner} wins!</h1>
          : null
        }
        <button className='reset-btn' onClick={this.props.resetGame}>Start a New Game</button>
      </div>
    );
  }
}
