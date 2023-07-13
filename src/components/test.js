<table className="table">
          {/* head */}
          <thead >
            <tr >
              <th className='max-w-4xl w-full mx-auto mt-4'>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='text-xl font-bold capitalize'>
            {tasks.map(task =>(
                 <tr key={task.id}>
                  <td className={`${
              task.finished ? 'line-through' : ''
            }`}>{task.text}</td>

                 <td className='flex flex-row-reverse gap-5 '>
                
                    <FcCheckmark 
                    
                     onClick={() => finishTask(task.text)}
                     className="text-red-300 cursor-pointer"
                     size={25}
                    />
                    <FiTrash2
                    onClick={() => deleteTask(task.id)}
                    className="text-red-300 cursor-pointer"
                    size={25}
                  />
                 </td>
               </tr>
            ))}
           
          
          </tbody>
        </table>