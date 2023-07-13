

// const Modal=({modalOpen,children})=>{
//     return (
//       <div>
    
//   <dialog id="my_modal_3" onClick={()=>window.my_modal_3.showModal()} className={`modal ${modalOpen ? " modal-open":"" }`}>
//    <form method="dialog" className="modal-box">
//     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//     {children}
//   </form>
  
// </dialog>
//       </div>
//     )
      

// }

// export default Modal

const Modal = ({ modalOpen, children }) => {
  const showModal = () => {
    const dialog = document.getElementById("my_modal_3");
    if (!dialog) {
      dialog.close();

    }else{
      dialog.showModal
    }
  };
  const closeModal = () =>{
    const dialog = document.getElementById("my_modal_3");
    if (dialog) {
      dialog.close();

    }else{
      dialog.showModal
    }
  }
  return (
    <div>
      <dialog
        id="my_modal_3"
        onClick={showModal}
        className={`modal ${modalOpen ? "modal-open" : ""}`}
      >
        <div className="modal-box   ">
       <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
           {children}
        </div>

      </dialog>
    </div>
  );
};

export default Modal;
