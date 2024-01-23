import { set } from 'mongoose';
import {useState, useRef, useEffect} from 'react'

console.log('I Re-Rendered***********************')

const StopWatch = () => {
    const timerIdRef = useRef(0);
    const [count, setCount] = useState(0)

    const startHandler = () => {
        if(timerIdRef.current){
            return 
        }
        setCount(0)
        timerIdRef.current = setInterval(() => setCount((c)=>c+1),1000);
    }
    const stopHandler = () => {
        clearInterval(timerIdRef.current)
        timerIdRef.current = 0;
    }
    const resumeHandler = () => {
        timerIdRef.current = setInterval(() => setCount((c)=>c+1),1000);
    }
    const resetHandler = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = setCount(0);
    }

    useEffect(()=>{
        return () => clearInterval(timerIdRef.current)
    },[])

  return (
    <div>
        <div>Timer: {count}s</div>
        <div>
            <button onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button>
            <button onClick={resumeHandler}>Resume</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch;