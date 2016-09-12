import React from 'react';
import style from './style.css';

import Title from './Title/Title.jsx'
import Board from './Board/Board.jsx'
import Score from './Score/Score.jsx'


export default class Abacus extends React.Component {

  constructor(props){
    super(props);
    const boardState = {
      leftPieces:  [{color: 'yellow'}, {color: 'green'}, {color: 'orange'}, {color: 'green'}],
      rightPieces: [{color: 'blue'}, {color: 'blue'}]
    }
    this.state = {
      boardState: boardState,
      score : 0
    }

    this.getScore = this.getScore.bind(this)
    this.handlePieceClick = this.handlePieceClick.bind(this);
    this.onIncrementScore = this.onIncrementScore.bind(this);
  }

  getScore(){
    return this.state.score
  }

  handlePieceClick(pieceKey){
    alert(pieceKey);
  }

  onIncrementScore(event){
    let curScore = this.state.score;
    let newScore = this.state.score + 1;
    this.setState({score : newScore})
  }

  render() {

    return (
      <div className={style.container}>
        <Title msg={"Abacus Board"}/>
        <Score score={this.getScore()}/>
        <button onClick={this.onIncrementScore}>+Score </button>
        <Board
          handlePieceClick={this.handlePieceClick}
          boardState={this.state.boardState}/>
      </div>
    )
  }
}
