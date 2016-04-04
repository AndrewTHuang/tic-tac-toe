import React  from 'react';
import styles from '../styles/Board.scss';

export default class Board extends React.Component {
  render() {
    let tiles = this.props.tiles;

    let board = tiles.map((tile, index) => {
      return <div className='tile'
                  key={index}
                  onClick={this.props.tileClick.bind(this, index)} >
                { tile }
              </div>
    });

    return (
      <div>
        { board }
      </div>
    );
  }
}
