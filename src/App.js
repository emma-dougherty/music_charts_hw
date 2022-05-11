import React from 'react'
import SongContainer from './containers/SongContainer';
import './App.css';

function App() {
  return (

    <div className="App">
      <header>
        The Official Chart Top 40
      </header>
      <div className='page'>
        <div className='content'>
            <SongContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
