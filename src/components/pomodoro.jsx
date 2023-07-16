import React, { useState, useEffect } from 'react';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { BiCog } from 'react-icons/bi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import taskFinishSound from '../sounds/task-finsh.wav';
import breakFinishSound from '../sounds/break-finsh.wav';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Pomodoro({
  workTime,
  breakTime,
  isPaused,
  timerValue,
  finishedWorkSessions,
  handleWorkTimeChange,
  handleBreakTimeChange,
  timerType,
  handleStartPauseClick,
  calculatePercentage
}) {
  // const [workTime, setWorkTime] = useState(25 * 60); // Initial value of 25 minutes in seconds; 
  // const [breakTime, setBreakTime] = useState(5 * 60); // Initial break time in seconds
  // const [isPaused, setIsPaused] = useState(true);
  // // const [timerValue, setTimerValue] = useState(workTime);
  // const [finishedWorkSessions, setFinishedWorkSessions] = useState(0);
  // const [userData, setUserData] = useState([
  //   { name: new Date().toLocaleDateString(), sessions: finishedWorkSessions }
  // ]);


 
  // useEffect(() => {
  //   const storedFinishedWorkSessions = localStorage.getItem(getLocalStorageKey());
  //   if (storedFinishedWorkSessions) {
  //     const sessionCount = parseInt(storedFinishedWorkSessions);
  
  //     // Update finishedWorkSessions state
  //     setFinishedWorkSessions(sessionCount);
  
  //     // Update userData state with the new session count and current date
  //     const currentDate = new Date().toLocaleDateString();
  //     setUserData([{ name: currentDate, sessions: sessionCount }]);
  //   }
  // }, [finishedWorkSessions]);









  // const handleWorkTimeChange = (event) => {
  //   const minutes = parseInt(event.target.value);
  //   setWorkTime(minutes * 60); // Convert minutes to seconds
  //   setTimerValue(minutes * 60); // Update the timer value as well
  // };

  // const handleBreakTimeChange = (event) => {
  //   const minutes = parseInt(event.target.value);
  //   setBreakTime(minutes * 60); // Convert minutes to seconds
  // };

  // const [timerType, setTimerType] = useState('work');

  // const getLocalStorageKey = () => {
  //   const currentDate = new Date();
  //   const year = currentDate.getFullYear();
  //   const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  //   const day = String(currentDate.getDate()).padStart(2, '0');
  //   return `finishedWorkSessions_${year}-${month}-${day}`;
  // };

  // const handleTaskFinish = (sound, volume) => {
  //   const audio = new Audio(sound);
  //   audio.volume = volume;
  //   audio.play();
  // };

  // useEffect(() => {
  //   const storedFinishedWorkSessions = localStorage.getItem(getLocalStorageKey());
  //   if (storedFinishedWorkSessions) {
  //     setFinishedWorkSessions(parseInt(storedFinishedWorkSessions));
  //   }
  // }, [finishedWorkSessions]);
  

  // useEffect(() => {
  //   if (!isPaused) {
  //     const timerInterval = setInterval(() => {
  //       setTimerValue((prevValue) => {
  //         if (prevValue === 0) {
  //           if (timerType === 'work') {
  //             handleTaskFinish(taskFinishSound, 1);
  //             setTimerType('break');
  //             setTimerValue(breakTime);
  //             setFinishedWorkSessions((prevSessions) => prevSessions + 1);
  //             localStorage.setItem(getLocalStorageKey(), finishedWorkSessions + 1); // Update the local storage with the new value
  //           } else {
  //             handleTaskFinish(breakFinishSound, 1);
  //             setTimerType('work');
  //             setTimerValue(workTime);
  //           }
  //         }
  //         return prevValue - 1;
  //       });
  //     }, 1000);
  
  //     return () => {
  //       clearInterval(timerInterval);
  //     };
  //   }
  // }, [isPaused, timerType, workTime, breakTime]);
  
  // const handleStartPauseClick = () => {
  //   setIsPaused((prevState) => !prevState);
  // };

  // const calculatePercentage = (value, maxValue) => {
  //   return Math.floor((value / maxValue) * 100);
  // };

  return (
    <div className='flex flex-col items-center  justify-center mt-20 '>
      <div style={{ width: '350px' }}>
        <CircularProgressbar
          className='transform transition-all duration-150 ease-out'
          value={calculatePercentage(timerValue, workTime)}
          text={`${Math.floor(timerValue / 60)}:${String(timerValue % 60).padStart(2, '0')}`}
          styles={buildStyles({
            pathColor: '#0E9F6E',
            textColor: '#0E9F6E',
          })}
        />
      </div>
      <div className='flex'>
        {isPaused ? (
          <AiFillPlayCircle
            onClick={handleStartPauseClick}
            style={{ marginTop: '2rem' }}
            size={80}
            className='cursor-pointer'
          />
        ) : (
          <AiFillPauseCircle
            onClick={handleStartPauseClick}
            style={{ marginTop: '2rem' }}
            size={80}
            className='cursor-pointer'
          />
        )}
      </div>

      {/* <p>Total Finished Work Sessions: {finishedWorkSessions}</p> */}
    
    
      <span className="countdown font-mono text-6xl">
</span>
      <button className='btn mt-5' onClick={() => window.my_modal_1.showModal()}>
        <BiCog size={24} />
        Settings
      </button>

      <dialog id='my_modal_1' className='modal'>
        <form method='dialog' className='modal-box'>
          <p className='text-sm'>Work time: {workTime / 60} minutes</p>

          <input
            type='range'
            min={25}
            max={100}
            value={Math.floor(workTime / 60)}
            onChange={handleWorkTimeChange}
            className='range'
            step={5}
          />

          <div className='w-full flex justify-between text-xs px-2'></div>

          <input
            type='range'
            min={5}
            max={25}
            value={breakTime / 60}
            onChange={handleBreakTimeChange}
            className='range'
            step={5}
          />

          <div className='w-full flex justify-between text-xs px-2'></div>

          <p className='text-sm'>Break time: {Math.floor(breakTime / 60)} minutes</p>
        </form>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>

      <div className="flex flex-col align-middle justify-center p-2 bg-neutral rounded-box text-neutral-content mt-5">
   
   <span className="countdown gap-4 font-sans text-2xl btn">
    
     <span  style={{"--value":finishedWorkSessions}}></span>
     Sessions today
   </span>

 </div> 




         {/* <button className="btn mt-5 w-96" onClick={()=>window.my_modal_3.showModal()}>view progress</button>
    <dialog id="my_modal_3" className="modal">
     <form method="dialog" className="modal-box">
       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

  
        <BarChart
          width={500}
          height={300}
          data={userData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sessions" fill="#0E9F6E" background={{ fill: '#eee' }} />
        </BarChart>





  </form>
</dialog> */}

    </div>
  );
}

export default Pomodoro;
