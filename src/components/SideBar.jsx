// import { FaListCheck ,FaClock,FaClover} from "react-icons/fa6";
// import { RiDoubleQuotesL } from "react-icons/ri";

// function SideBar(){
//     return(
        
//         <div className="fixed top-0  left-0 h-screen w-16 m-0 p-0
//         flex flex-col bg-gray-900 text-white shadow-lg
        
//         ">
       
//             <SideBarIcon text="To-Do ✔️" icon={<FaListCheck size='30'/>}/>
//             <SideBarIcon text="Pomodoro ⏱️" icon={<FaClock size='30'/>}/>
//             <SideBarIcon text="White Noise 🎧" icon={<FaClover size='30'/>}/>
//             <SideBarIcon text="Quote 🖇️" icon={<RiDoubleQuotesL size='30'/>} />



//         </div>
        
       
//     )
   
// }
// const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
//     <div className="sidebar-icon group">
//       {icon}
//       <span className="sidebar-tooltip group-hover:scale-100">
//         {text}
//       </span>
//     </div>
//   );


// export default SideBar;
import React, { useState } from 'react';
import { FaListCheck, FaClock, FaClover } from 'react-icons/fa6';
import { RiDoubleQuotesL } from 'react-icons/ri';
import {MdOutlineWavingHand} from 'react-icons/md'
import {TbBrandMatrix} from 'react-icons/tb'
import {ImLoop2} from 'react-icons/im'
function SideBar({ selectedComponent, onIconClick }) {
  return (
    
    <div className="fixed top-0 left-0 h-screen w-16 m-0 p-0 flex flex-col sidebar-background max-sm:hidden  ">
      <SideBarIcon
        text="To-Do ✔️" 
        icon={<FaListCheck size="30" />}
        onClick={() => onIconClick('todo')}
      />
      {/* <SideBarIcon
        text="Eisenhower Matrix 🧮 " 
        icon={<TbBrandMatrix size="30" />}
        onClick={() => onIconClick('Eisenhower')}
      /> */}
      <SideBarIcon
        text="Pomodoro ⏱️"
        icon={<FaClock size="30" />}
        onClick={() => onIconClick('pomodoro')}
      />
      {/* <SideBarIcon
        text="Habit tracker 📝"
        icon={<ImLoop2 size="30" />}
        onClick={() => onIconClick('HabitTracker')}
      /> */}
      {/* <SideBarIcon
        text="White Noise 🎧"
        icon={<FaClover size="30" />}
        onClick={() => onIconClick('whitenoise')}
      /> */}
      <SideBarIcon
        text="Quote 🖇️"
        icon={<RiDoubleQuotesL size="30" />}
        onClick={() => onIconClick('quote')}
      />
       <div className="flex-grow" /> {/* Empty flex item to push the last icon to the bottom */}
    <SideBarIcon
    text="About The App 👋"
    icon={<MdOutlineWavingHand size="30" />}
    // onClick={() => onIconClick('about')}
    onClick={()=>window.my_modal_2.showModal()}
  />

<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello! 👋</h3>
    <p className="py-4">i'm an indie developer, this is one of my personal projects 
I made this project to help me focus and concentrate more since i am always distracted if you have suggestions for features to add to the app 
email me at <br></br>

</p>
  </form>
   <form method="dialog" className="modal-backdrop">
     <button>close</button>
    </form>
   </dialog>
    </div>
  );
}

const SideBarIcon = ({ icon, text = 'tooltip 💡', onClick }) => (
  <div className="sidebar-icon group" onClick={onClick}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
