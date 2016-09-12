import React from 'react';

import s from './style.css';

const WIDTH = 20;

const Piece = ({color, handlePieceClick}) => {

  const style = {
    backgroundColor: color
  }

  const onPieceClick = (event) => {
    alert("YOU just clicked a piece")
  }

  return (
    <div className={s.container} style={style}
      onClick={handlePieceClick}>
    </div>
  )
}

export default Piece;
