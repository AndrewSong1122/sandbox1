import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

let App = () => {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const [started, setStarted] = useState(false);
  const [stopped, setStopped] = useState(true);
  const intervalRef = useRef(0);

  let handleStartClick = () => {
    if(started === true && stopped === false) return;
    // if(stopped === true);
    setStart(Date.now());
    setNow(Date.now());
    setStarted(true);
    setStopped(false);

    clearInterval(intervalRef.current);
    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 10);
    intervalRef.current = intervalId;
  }

  let handleStopClick = () => {
    setStopped(true);

    const intervalId = intervalRef.current;
    clearInterval(intervalId);
  }
  
  let minutes = '00';
  let seconds = '00';
  let centiSeconds = '00';
  
  if(start != null && now != null) {
    seconds = Math.floor((now - start) / 1000) % 60 > 9 ? '' + Math.floor((now - start) / 1000) % 60 : '0' +  Math.floor((now - start) / 1000) % 60;
    minutes = Math.floor((now - start) / 1000 / 60) % 60 > 9 ? '' + Math.floor((now - start) / 1000 / 60) % 60 : '0' + Math.floor((now - start) / 1000 / 60) % 60;
    centiSeconds = Math.floor((now - start) / 10) % 100 > 9 ? '' + Math.floor((now - start) / 10) % 100 : '0' + Math.floor((now - start) / 10) % 100;
  }

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
        <div id="stopwatch">
          <p>{minutes}:{seconds}.{centiSeconds}</p>
          <button onClick={handleStartClick}>Start</button>
          <button onClick={handleStopClick}>Stop</button>
          <button>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
