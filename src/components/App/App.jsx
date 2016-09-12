import React from 'react';
import style from './style.css';

import Abacus from '../Abacus/Abacus.jsx'
import PlayerInfo from '../PlayerInfo/PlayerInfo.jsx'
import Title from '../Abacus/Title/Title.jsx'

class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Title />
        <PlayerInfo />
        <Abacus />
      </div>
    )
  }
}

export default App;
