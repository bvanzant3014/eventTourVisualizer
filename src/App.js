import './App.css';
import {VisualizeApp} from './VisualizeApp.js'
import React from 'react';

function App() {
  return (
    <div className="App">
      <VisualizeApp />
      <div className='attribution'>
          Made with{' '}
          <a href='https://platform.seatgeek.com/' className='technology'>
            Seatgeak API, 
          </a> {' '}
          <a href='https://threejs.org/' className='technology'>
            Three.js, 
          </a>{' '}
           and {' '}
          <a href='https://reactjs.org/' className='technology'>
            React. 
          </a>
        </div>
    </div>
  );
}

export default App;
