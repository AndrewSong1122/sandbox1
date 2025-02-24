import { useState, useEffect } from 'react';

export const Stopwatch = () => {
    const [started, setStarted] = useState(false);
    const [stopped, setStopped] = useState(true);
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      let intervalId = null;
      if(started === true && stopped === false) {
        intervalId = setInterval(() => {
          setTime(time + 1);
        }, 10);
      } else {
        clearInterval(intervalId);
      }
  
      return () => {
        clearInterval(intervalId);
      }
    }, [started, stopped, time]);
  
    let handleStartClick = () => {
      setStarted(true);
      setStopped(false);
    }
  
    let handleStopClick = () => {
      setStopped(true);
    }
  
    let handleResetClick = () => {
      setStopped(true);
      setStarted(false);
      setTime(0);
    }
    
    let minutes = '00';
    let seconds = '00';
    let centiSeconds = '00';
    
    if(started === true) {
      seconds = Math.floor((time) / 100) % 60 > 9 ? '' + Math.floor((time) / 100) % 60 : '0' +  Math.floor((time) / 100) % 60;
      minutes = Math.floor((time) / 100 / 60) % 60 > 9 ? '' + Math.floor((time) / 100 / 60) % 60 : '0' + Math.floor((time) / 100 / 60) % 60;
      centiSeconds = time % 100 > 9 ? '' + time % 100 : '0' + time % 100;
    }
    
    return (
        <div id="stopwatch">
          <p>{minutes}:{seconds}.{centiSeconds}</p>
          <button onClick={handleStartClick}>Start</button>
          <button onClick={handleStopClick}>Stop</button>
          <button onClick={handleResetClick}>Reset</button>
        </div>);
}