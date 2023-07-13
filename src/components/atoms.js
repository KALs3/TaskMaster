import { atom } from 'recoil';


export const workTimeState = atom({
  key: 'workTimeState',
  default: 25 * 60, // Initial value of 25 minutes in seconds
});

export const breakTimeState = atom({
  key: 'breakTimeState',
  default: 5 * 60, // Initial break time in seconds
});

export const isPausedState = atom({
  key: 'isPausedState',
  default: true,
});

export const timerValueState = atom({
  key: 'timerValueState',
  default: 25 * 60, // Initial value of 25 minutes in seconds
});

export const finishedWorkSessionsState = atom({
  key: 'finishedWorkSessionsState',
  default: 0,
});

export const userDataState = atom({
  key: 'userDataState',
  default: [{ name: new Date().toLocaleDateString(), sessions: 0 }],
});
