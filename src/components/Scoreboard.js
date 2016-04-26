import React  from 'react';
import styles from '../styles/styles.scss';

export default class Scoredboard extends React.Component {
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
