import React, {useEffect, useState} from 'react';
import SideBar from './components/SideBar';
import TodoList from './components/todo'
import Qoute from './components/qoute';
import Nature from './components/nature';
import Pomodoro from './components/pomodoro';
import Eisenhower from './components/eisenhowerMatrix';
import rainSound from './sounds/rain.wav';
import fireSound from './sounds/fire.mp3';
import natureSound from './sounds/nature.mp3';
import HabitTracker from './components/HabitTracker ';

function App() {

  // pomodoro state 
  const [workTime, setWorkTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [isPaused, setIsPaused] = useState(true);
  const [timerValue, setTimerValue] = useState(workTime);
  const [finishedWorkSessions, setFinishedWorkSessions] = useState(0);
  const [userData, setUserData] = useState([
    { name: new Date().toLocaleDateString(), sessions: finishedWorkSessions }
  ]);

  useEffect(() => {
    const storedFinishedWorkSessions = localStorage.getItem(getLocalStorageKey());
    if (storedFinishedWorkSessions) {
      const sessionCount = parseInt(storedFinishedWorkSessions);

      setFinishedWorkSessions(sessionCount);

      const currentDate = new Date().toLocaleDateString();
      setUserData([{ name: currentDate, sessions: sessionCount }]);
    }
  }, [finishedWorkSessions]);

  const handleWorkTimeChange = (event) => {
    const minutes = parseInt(event.target.value);
    setWorkTime(minutes * 60);
    setTimerValue(minutes * 60);
  };

  const handleBreakTimeChange = (event) => {
    const minutes = parseInt(event.target.value);
    setBreakTime(minutes * 60);
  };

  const [timerType, setTimerType] = useState('work');

  const getLocalStorageKey = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `finishedWorkSessions_${year}-${month}-${day}`;
  };

  const handleTaskFinish = (sound, volume) => {
    const audio = new Audio(sound);
    audio.volume = volume;
    audio.play();
  };

  useEffect(() => {
    const storedFinishedWorkSessions = localStorage.getItem(getLocalStorageKey());
    if (storedFinishedWorkSessions) {
      setFinishedWorkSessions(parseInt(storedFinishedWorkSessions));
    }
  }, [finishedWorkSessions]);

  useEffect(() => {
    if (!isPaused) {
      const timerInterval = setInterval(() => {
        setTimerValue((prevValue) => {
          if (prevValue === 0) {
            if (timerType === 'work') {
              handleTaskFinish(taskFinishSound, 1);
              setTimerType('break');
              setTimerValue(breakTime);
              setFinishedWorkSessions((prevSessions) => prevSessions + 1);
              localStorage.setItem(getLocalStorageKey(), finishedWorkSessions + 1);
            } else {
              handleTaskFinish(breakFinishSound, 1);
              setTimerType('work');
              setTimerValue(workTime);
            }
          }
          return prevValue - 1;
        });
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [isPaused, timerType, workTime, breakTime]);

  const handleStartPauseClick = () => {
    setIsPaused((prevState) => !prevState);
  };

  const calculatePercentage = (value, maxValue) => {
    return Math.floor((value / maxValue) * 100);
  };

  // end of pomodoro state

  // nature state







  const [activeComponent, setActiveComponent] = useState(null);
  
  const renderComponent = (component) => {
    setActiveComponent(component);
  };
  
  return (
    <div className="app  ">
      <SideBar selectedComponent={activeComponent} onIconClick={renderComponent} />
      <div className="main-content flex-grow transition-all duration-300  ">     
        {activeComponent === 'todo' && <TodoList />}
        {activeComponent === 'Eisenhower' && <Eisenhower />}
        {activeComponent === 'pomodoro' && <Pomodoro
        workTime={workTime}
        breakTime={breakTime}
        isPaused={isPaused}
        timerValue={timerValue}
        finishedWorkSessions={finishedWorkSessions}
        handleWorkTimeChange={handleWorkTimeChange}
        handleBreakTimeChange={handleBreakTimeChange}
        timerType={timerType}
        handleStartPauseClick={handleStartPauseClick}
        calculatePercentage={calculatePercentage}
        
        
        
        /> }
        {activeComponent === 'whitenoise' && <Nature
       
        />}
        {/* {activeComponent === 'HabitTracker' && <HabitTracker />} */}
        {activeComponent === 'quote' && <Qoute />}
        {activeComponent === 'about' && <About />}
        {!activeComponent && <TodoList />}
        
      </div>
  
    </div>
    
  );
  
  
}

// Define your components to be rendered
const TodoComponent = () => <div>Todo Component</div>;
const PomodoroComponent = () => <div>Pomodoro Component</div>;
const WhiteNoiseComponent = () => <div>White Noise Component</div>;
const QuoteComponent = () => <div>Quote Component</div>;
const AboutComponent = () => <div>about</div>;
const DefaultComponent = () => <div>Please select an icon</div>;

export default App;


