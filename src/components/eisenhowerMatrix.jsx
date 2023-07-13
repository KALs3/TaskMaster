
import AddTask from "./AddTask";

function Eisenhower(){

return(
    <div className="flex justify-center mt-4">
    <div className="max-w-4xl w-full grid grid-cols-2 gap-4">
      <AddTask buttonText="DO first" />
      
      <AddTask buttonText="schedule" />
      <div className="mt-60">
        
        <AddTask buttonText="delegate" />
      </div>

      <div className="mt-60">
        <AddTask buttonText="eliminate" />
      </div>
    </div>
  </div>
  

)

}


export default Eisenhower;