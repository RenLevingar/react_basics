import {useRef,useEffect} from 'react'
/*UseRef
preserves value(s)
DOES NOT trigger re-render
target DOM nodes/elements*/


const UseRefBasics = () => {
    const refContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    }
    useEffect(()=>{
        console.log(refContainer.current)
        refContainer.current.focus()
    }, []);

  return (
    <form onSubmit={handleSubmit} className="form">
        <div>
            <input type="text" ref={refContainer}/>
        </div>
        <button type='submit'>submit</button>
    </form>
  )
}

export default UseRefBasics