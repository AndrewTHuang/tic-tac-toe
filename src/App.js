import React      from 'react';
import Board      from './components/Board';
import GameOver   from './components/GameOver';
import Scoreboard from './components/Scoreboard';
import styles     from './styles/Board.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: [
        '', '', '',
        '', '', '',
        '', '', ''
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
    this.check(tiles[0], tiles[1], tiles[2]);
    this.check(tiles[3], tiles[4], tiles[5]);
    this.check(tiles[6], tiles[7], tiles[8]);
  }

  checkColumns() {
    let tiles = this.state.tiles;
    this.check(tiles[0], tiles[3], tiles[6]);
    this.check(tiles[1], tiles[4], tiles[7]);
    this.check(tiles[2], tiles[5], tiles[8]);
  }

  checkDiagonals() {
    let tiles = this.state.tiles;
    this.check(tiles[0], tiles[4], tiles[8]);
    this.check(tiles[2], tiles[4], tiles[6]);
  }

  checkBoard() {
    this.checkRows();
    this.checkColumns();
    this.checkDiagonals();
  }

  tileClick(position) {
    let tiles = this.state.tiles;
    let turn = this.state.turn;

    tiles.map(tile => {
      // Don't allow player to overwrite occupied tile
      if (tiles[position] === '') {
        tiles[position] = turn;

        // End game if there's a draw
        if (tiles.indexOf('') === -1) {
          this.setState({winner: 'No one'})
        }

        // Re-render the board and toggle turn
        this.setState({
          tiles: tiles,
          turn: turn === 'X' ? 'O' : 'X'
        })
      }
    })

    this.checkBoard();
  }

  resetGame() {
    this.setState({
      tiles: [
        '', '', '',
        '', '', '',
        '', '', ''
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
