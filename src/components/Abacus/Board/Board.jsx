import React from 'react';
import style from './style.css';

import Column from './Column/Column.jsx'

const NUM_COLUMNS = 9;
const BOARD_WITDH = 420;
const BOARD_HEIGHT = 120;



const Board = ({handlePieceClick, boardState}) => {


  return (
    <div className={style.container}>
      {
        Array(NUM_COLUMNS).fill().map((_, i) => {
          return(
            <Column
              handlePieceClick={handlePieceClick} key={i}
              height={BOARD_HEIGHT}
              leftPieces={boardState.leftPieces}
              rightPieces={boardState.rightPieces}
            />
          )
        })
      }
    </div>
  )
}

export default Board;
