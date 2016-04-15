import React  from 'react';
import styles from '../styles/Board.scss';

export default class Board extends React.Component {
  render() {
    let tiles = this.props.tiles;

    let board = tiles.reduce((newBoard, row, rowIndex) => {
      let rowTiles = row.map((tile, tileIndex) => {
        // Refer to individual tiles by index (0-8)
        let position = rowIndex * 3 + tileIndex;
        return <div className='tile'
                  key={position}
                  onClick={this.props.tileClick.bind(this, tileIndex, rowIndex)} >
                { tile }
              </div>
      })
      return [...newBoard, ...rowTiles];

    }, []);

    return (
      <div>
        { board }
      </div>
    );
  }
}
