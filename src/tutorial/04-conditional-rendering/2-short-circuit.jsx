import {useState} from 'react'
//Reviewing:
//short-circuit evalutation and ternary operations
const ShortCircuit = () => {
    const [text, setText] = useState("")
    const [isError, setIsError] = useState(false)
    //Ternary Playerground
    // const firstValue = text || 'hello world' 
    // const secondValue = text && 'hello world'

  return (
    <>
        {/* <h1>{firstValue}</h1>
        <h1>Value: {secondValue}</h1> */}
        {/* { if(){console.log('hello world')}} */}
        <h1>{text || "John Doe"}</h1>
        <button className='btn' onClick={()=>setIsError(!isError)}>Toggle Error</button>
        {isError && <h1>Error...</h1>}
        {
            isError ? (<p>there is an error...</p>) : (<div><h2>There is NO error</h2></div>)
        }
    </>
  )
}

export default ShortCircuit;