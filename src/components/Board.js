import React  from 'react';
import styles from '../styles/Board.scss';

export default class Board extends React.Component {
  render() {
    let tiles = this.props.tiles;
    // let board = [];

    let board = tiles.reduce((newBoard, row, rowIndex) => {
      let rowTiles = row.map((tile, index) => {
        return <div className='tile'
                  key={rowIndex * 3 + index}
                  onClick={this.props.tileClick.bind(this, index)} >
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

/*
map((tile, index) => {
      return <div className='tile'
                  key={index}
                  onClick={this.props.tileClick.bind(this, index)} >
                { tile }
              </div>
    });

    ES6
    `[...newBoard, ...rowTiles]`` is the same as `newBoard.concat(rowTiles)``


        tiles.forEach((row, rowIndex) => {
      row.forEach((tile, index) => {
        board.push(<div className='tile'
                  key={rowIndex * 3 + index}
                  onClick={this.props.tileClick.bind(this, index)} >
                { tile }
              </div>);
      })
    });


0 1 2
3 4 5
6 7 8


*/
