import Modal from './Modal'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {FiEdit, FiTrash2} from 'react-icons/fi'
import {FcCheckmark} from 'react-icons/fc'
import TaskTable from './table'
import done from '../sounds/done.wav';

function AddTask(props){
    const [modalOpen, setModalOpen] =useState(false)
    const [newTaskValue, setNewTaskValue] = useState('')
    
    //  const [tasks, setTasks] = useState([]);
     const [tasks, setTasks] = useState(() => {
      const data = localStorage.getItem('TASKVALUE');
      return data ? JSON.parse(data) : [];
    });
     const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
      };

      const finishTask = (text) => {
        playClickSound(); // Play the click sound
        setTasks((prevTasks) => {
          const updatedTasks = prevTasks.map((task) =>
            task.text === text ? { ...task, finished: true } : task
          );
          const finishedTasks = updatedTasks.filter((task) => task.finished);
          const unfinishedTasks = updatedTasks.filter((task) => !task.finished);
          return [...unfinishedTasks, ...finishedTasks];
        });
      };
      


    const addTask = (newTaskValue) => {
    const newTask = {
     id: uuidv4(), // Generate a unique ID (you may use a library for this)
     text: [newTaskValue]
   };
   setTasks([...tasks, newTask]);
 };

 
    const handleSubmitNewTask = (e) =>{
        e.preventDefault()
        addTask(newTaskValue)
        closeModal()
        setNewTaskValue('');
    }
    const closeModal = () =>{
        const dialog = document.getElementById("my_modal_3");
        if (dialog) {
          dialog.close();
    
        }else{
          dialog.showModal
        }
      }
      

      
      useEffect(() => {
        window.localStorage.setItem('TASKVALUE', JSON.stringify(tasks));
      }, [tasks]);
  
      const playClickSound = () => {
        const audio = document.getElementById('clickSound');
        audio.play();
      };
      
      
    return(
         <div>
          <audio id="clickSound" src={done} />
          {/* <div className='flex  mb-2'>
          <button className='btn '>simple todo</button>
            <div className='grow'></div>
          < button className='btn '>eisenhower matrix</button>


</div> */}
        <button   onClick={()=>window.my_modal_3.showModal()} className="btn bg-bgk-5 w-full text-white ">
        {props.buttonText}


        </button>
        
        <Modal  modalOpen={modalOpen}>
            <form className='flex flex-col ' onSubmit={handleSubmitNewTask}>
                <h3 className="font-bold text-lg  "></h3>
                <div className="modal-action ">
                <input type="text" placeholder="Type here" className="input input-bordered  w-full" 
                value={newTaskValue} 
                onChange={e => setNewTaskValue(e.target.value)}
                />
                <div className='flex justify-end'>
                <button type="submit" className="btn ">Submit</button>
                </div>
                </div>
            </form>
        </Modal>
        
        


        <div className="overflow-x-auto">
        <TaskTable tasks={tasks} deleteTask={deleteTask} finishTask={finishTask} />
      </div>
</div>
)
            }
export default AddTask