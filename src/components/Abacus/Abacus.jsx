import React from 'react';
import style from './style.css';

import Board from './Board/Board.jsx'

export default class Abacus extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <h1>Abacus Board </h1>
        <Board />
      </div>
    )
  }
}
