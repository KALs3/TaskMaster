import axios from 'axios';
import { useEffect,useState } from 'react';

function Qoute(){
    const [Qoute, setQoute] = useState('');
    const baseURL = 'https://api.quotable.io/random'
    
  useEffect(() => {


    axios.get(baseURL)
      .then((res) => {
        
        console.log(res.data);
        setQoute(res.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
    
    
    return(
        <div>
            <div className="artboard artboard-horizontal phone-6  m-auto flex justify-center items-center  rounded-3xl 
            bg-bgk-5  text-white  btn text-lg font-sans hover:bg-cool-100 h-screen
          mt-32 r w-full text-lg  justify-evenly 
            ">
            
            <span className='text-3xl'>❝</span>
            <p >{Qoute.content}</p>    
            <span className='text-3xl'>❞</span>
           
            

            </div>
        </div>
    )
}

export default Qoute