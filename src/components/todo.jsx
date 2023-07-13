import React, { useState } from 'react';
import AddTask from './AddTask'
import List from './List'
const TodoList = () => {

 
  return (

   <main className=' max-w-4xl w-full mx-auto mt-4  max-sm:w-72 max-md:w-72'>
      <div className='text-center my-5 flex flex-col gap-4  '>
      <AddTask buttonText="Add new task" />
      </div>
      {/* <List /> */}
   </main>
  );
};

export default  TodoList;
