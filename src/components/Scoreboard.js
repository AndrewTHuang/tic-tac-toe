import React  from 'react';
import styles from '../styles/Scoreboard.scss';

export default class Scoreboard extends React.Component {
  render() {
    return (
      <div className='scoreboard'>
        <h3 className='win-count'>Win Count</h3>
        <p>X: {this.props.XScore}</p>
        <p>O: {this.props.OScore}</p>
      </div>
    );
  }
}
