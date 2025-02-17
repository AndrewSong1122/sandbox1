import logo from './logo.svg';
import './App.css';
import { Stopwatch } from './Stopwatch';
import {Modal} from './Modal';
import {useState} from 'react';
import { createPortal } from 'react-dom';

let App = () => {
  let [showStopwatch, setShowStopwatch] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setShowStopwatch(!showStopwatch)}>Stopwatch</button>
        <Modal child={Stopwatch} display={showStopwatch} handleClose={() => setShowStopwatch(false)}/>
      </header>
    </div>
  );
}

export default App;
