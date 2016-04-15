import React      from 'react';
import Board      from './components/Board';
import GameOver   from './components/GameOver';
import Scoreboard from './components/Scoreboard';
import styles     from './styles/Board.scss';
import _          from 'underscore';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      turn: 'X',
      winner: null,
      XScore: 0,
      OScore: 0
    }

    // React components using ES6 classes no longer autobind `this` to non-React methods, so we manually do it here
    this.tileClick = this.tileClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  check(tile1, tile2, tile3) {
    if (tile1 !== '' && tile1 === tile2 && tile2 === tile3) {

      // Update winner and score
      let newState = {winner: this.state.turn};
      newState[this.state.turn + 'Score'] = this.state[this.state.turn + 'Score'] + 1;

      this.setState(newState);
    }
  }

  checkRows() {
    let tiles = this.state.tiles;
    tiles.forEach(row => {
      this.check(row[0], row[1], row[2]);
    })
  }

  checkColumns() {
    let tiles = this.state.tiles;
    // Assuming a square grid, we can equate number of rows (tiles.length) with number of columns
    for (var i = 0; i < tiles.length; i++) {
      this.check(tiles[0][i], tiles[1][i], tiles[2][i]);
    }
  }

  checkDiagonals() {
    let tiles = this.state.tiles;
    this.check(tiles[0][0], tiles[1][1], tiles[2][2]);
    this.check(tiles[0][2], tiles[1][1], tiles[2][0]);
  }

  checkDraw() {
    let tiles = this.state.tiles;
    let flatBoard = _.flatten(tiles);

    if (!_.contains(flatBoard, '')) {
      this.setState({winner: 'No one'});
    };
  }

  checkBoard() {
    this.checkRows();
    this.checkColumns();
    this.checkDiagonals();
    this.checkDraw();
  }

  tileClick(tileIndex, rowIndex) {
    let tiles = this.state.tiles;
    let turn = this.state.turn;

    tiles.forEach(row => {
      row.map(tile => {
          // Don't allow player to overwrite occupied tile
        if (tiles[rowIndex][tileIndex] === '') {
          tiles[rowIndex][tileIndex] = turn;

          // Re-render the board and toggle turn
          this.setState({
            tiles: tiles,
            turn: turn === 'X' ? 'O' : 'X'
          })
        }
      })
      this.checkBoard();
    })
  }

  resetGame() {
    this.setState({
      tiles: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      turn: 'X',
      winner: null
    });
  }

  render() {
    return (
      <div>
        <div className='game'>

          <div className='board'>
            {this.state.winner ?
              <GameOver resetGame={this.resetGame} winner={this.state.winner} />
              : null
            }
            <Board tiles={this.state.tiles} tileClick={this.tileClick} />
          </div>

          <Scoreboard XScore={this.state.XScore} OScore={this.state.OScore} />
        </div>
      </div>
    );
  }
}
