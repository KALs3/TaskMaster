import React, { useState } from 'react';
import Habit from './Habit';

const HabitTracker = () => {
  const [habits, setHabits] = useState([
    {
      name: 'Exercise',
      days: [
        { name: 'Mon', completed: false },
        { name: 'Tue', completed: false },
        { name: 'Wed', completed: false },
        { name: 'Thu', completed: false },
        { name: 'Fri', completed: false },
        { name: 'Sat', completed: false },
        { name: 'Sun', completed: false },
      ],
    },
    // Add more habit objects here
  ]);

  const toggleDay = (habitIndex, dayIndex) => {
    setHabits((prevHabits) => {
      const updatedHabits = [...prevHabits];
      updatedHabits[habitIndex].days[dayIndex].completed = !updatedHabits[habitIndex].days[dayIndex].completed;
      return updatedHabits;
    });
  };

  return (
    <div>
      {habits.map((habit, index) => (
        <Habit
          key={index}
          name={habit.name}
          days={habit.days}
          onToggleDay={(dayIndex) => toggleDay(index, dayIndex)}
        />
      ))}
    </div>
  );
};

export default HabitTracker;
