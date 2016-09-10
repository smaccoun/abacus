import React from 'react';
import style from './style.css';

import Abacus from '../Abacus/Abacus.jsx'

class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Abacus />
      </div>
    )
  }
}

export default App;
