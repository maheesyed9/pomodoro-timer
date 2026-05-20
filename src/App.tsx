import React, {useState, useEffect} from 'react'; // React Library
import logo from './logo.svg'; // Import an Image (not used right now)
import './App.css'; // Import a CSS file




function App() {

  const [timeLeft, setTimeLeft] = useState(25*60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [encouragement, setEncouragement] = useState("");

  const cheerMessages = [
    "Stay focused!",
    "Eye on the money!",
    "Be lazy or stupid, but don't be Both!",
    "Keep going!",
    "Satisfaction is Rewarding!"
  ]

  const breakMessages = [
    "Stay Hydrated!",
    "Go Piss Girl!",
    "You have five seconds. 5...4...",
    "Stetch or something ig!",
    "Mini Reward? ;)"
  ]
  //Encouraging Message
  useEffect(()=>{
    let messageInterval: NodeJS.Timeout;
    if (isRunning){
      const messages = isBreak ? breakMessages : cheerMessages;
      setEncouragement(messages[0]);
      let index = 1;
      
      messageInterval = setInterval(()=>{
        setEncouragement(messages[index]);
        index = (index + 1) % messages.length;
      }, 8000); //8000 miliseconds (8 seconds)
    }
    else {
      setEncouragement("");
    }

    return() => clearInterval(messageInterval);
  }, [isRunning, isBreak]);

  // Timer Effect
  useEffect(()=>{

    if(isRunning&& timeLeft > 0){
      const interval = setInterval(()=>{
        setTimeLeft(prev => prev - 1);
      }, 1000);
    
    return () => clearInterval(interval);
    } else if (timeLeft === 0){
      setIsRunning(false);
    }
  },[isRunning, timeLeft]);

  useEffect(()=> {
    switchMode(false);
  }, []);

  // Format Time Function
  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds/60).toString().padStart(2,'0');

    const s = (seconds % 60).toString().padStart(2,'0');
    return `${m}:${s}`;
  };

  const switchMode = (breakMode: boolean)=> {
    setIsBreak(breakMode);
    setIsRunning(false);
    setTimeLeft(breakMode ? 5*60 : 25*60);

  }
  
  const handleClick = () => {
    if(!isRunning){
      setIsRunning(true);
    }else{
      setIsRunning(false);
      setTimeLeft(isBreak ? 5*60 : 25*60);
    }
  }

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(isBreak ? 5*60 : 25*60);
  }

  const handleMinimize = () => {
    const electron = (window as any).require('electron');
    electron.ipcRenderer.send('minimize-window');
  }

  const handleClose = () => {
    const electron = (window as any).require('electron');
    electron.ipcRenderer.send('close-window');
  }


  return (
    <div className='app'>

      

      <div className='homeContent'>
        
        <div>
          <button className='minimizeButton' onClick={handleMinimize}>
          Minimize
          </button>
        </div>

        <div>
          <button className='closeButton' onClick={handleClose}>
          Close
          </button>
        </div>
          
        
        <div className='homePageControls'>
          <button className='workButton' onClick={ () =>switchMode(false)}>
            Work 
          </button>
          <button className='breakButton' onClick={ () =>switchMode(true)}>
            Break 
          </button>
        </div>
        
        <p className= {`encouragement-text ${!isRunning? "hidden" : ""}`} >
          {encouragement}
        </p>
        
        <h1 className = 'home-timer'>{formatTime(timeLeft)}</h1>

        <button className='StartButton' onClick={handleClick}>
          Start
        </button>
        <button className='ResetButton' onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
