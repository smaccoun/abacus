import React from 'react';
import style from './style.css'

const PlayerInfo = () => {
    return(
      <div className={style.container}>
        <h3>Player Info </h3>
        <p>Name: </p>
        <p>Number of games played: </p>
      </div>
    )
}

export default PlayerInfo;
