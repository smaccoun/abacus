import React from 'react';
import style from './style.css';

import Piece from '../Piece/Piece.jsx'

const COLUMN_WIDTH = 3;

const Column = ({height}) => {
  return (
    <div className={style.column}>
      <Piece color={'green'} position={"left"}/>
      <Piece color={'green'} position={"left"}/>
      <Piece color={'green'} position={"left"}/>
      <Piece color={'green'} position={"left"}/>
      <Piece color={'green'} position={"left"}/>
      <div style={{flexGrow: 10, border: '1px solid black'}}></div>
      <Piece color={'blue'} position={"left"}/>
      <Piece color={'blue'} position={"left"}/>
    </div>
  )
}

export default Column;
