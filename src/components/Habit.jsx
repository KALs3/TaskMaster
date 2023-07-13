import React from 'react';

const Habit = ({ name, days, onToggleDay }) => {
  return (
    <div>
      <h3>{name}</h3>
      {days.map((day, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={day.completed}
            onChange={() => onToggleDay(index)}
          />
          {day.name}
        </label>
      ))}
    </div>
  );
};

export default Habit;
