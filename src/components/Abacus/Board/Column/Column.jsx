import React from 'react';
import style from './style.css';

import Piece from '../Piece/Piece.jsx'

const COLUMN_WIDTH = 3;

const Column = ({leftPieces, rightPieces, height, handlePieceClick}) => {
  return (
    <div className={style.column}>
      <SidePieces pieces={leftPieces} handlePieceClick={handlePieceClick} />

      <div style={{flexGrow: 10, border: '1px solid black'}}></div>

      <SidePieces pieces={rightPieces} handlePieceClick={handlePieceClick}/>
    </div>
  )
}

const SidePieces = ({pieces, handlePieceClick}) => {
  return(
    <div style={{display: 'flex'}}>
      {pieces.map(p => {
        return(<Piece handlePieceClick={handlePieceClick} color={p.color}/>)
      })}
    </div>
  )
}

export default Column;
