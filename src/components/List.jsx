
import React, { useState } from 'react';
function List(){


      const [tasks, setTasks] = useState([]);
       const addTask = (newTaskValue) => {
       const newTask = {
        id: Date.now(), // Generate a unique ID (you may use a library for this)
        text: {newTaskValue}
      };
      setTasks([...tasks, newTask]);
    };
    return <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task =>(
             <tr key={task.id}>
             <td>{task.text}</td>
           </tr>
        ))}
       
      
      </tbody>
    </table>
  </div>
}

export default List