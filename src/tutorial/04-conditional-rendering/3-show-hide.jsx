import {useState,useEffect} from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(false)
  return (
    <>
        <buttton className="btn" onClick={()=>setShow(!show)}>
            Show/Hide
        </buttton>
        {/* {show && <h1>Whatever, Whatever I do what I want</h1>} */}
        {show && <Item />}
    </>
  )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, [])

    return (
        <div style={{marginYop:'2rem'}}>
            <h1>Window</h1>
            <h2>Size: {size}</h2>
        </div>
    )
}

export default ShowHide