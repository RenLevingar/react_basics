import {useState} from 'react'

const MultipleInputs = () => {
    const [person, setperson] = useState({firstName: "", email:"", age: ""})
    const [people, setpeople] = useState([])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setperson({...person,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(person.firstName && person.email && person.age){
            const newPerson = {...person,id:new Date().toString()}
            setpeople([...people, newPerson])
            setperson({firstName: "", email: "", age: ""})
        }
    }
  return (
    <>
    <article className='form'>
        <form onSubmit={handleSubmit} className='form'>
            <div className='form-control'>
                <label htmlFor="firstName">Name:</label>
                <input type="text" onChange={handleChange} name='firstName' id='firstName' />
            </div>
            <div className='form-control'>
                <label htmlFor="email">email:</label>
                <input type="email" onChange={handleChange}  name='email' id='email' />
            </div>
            <div className='form-control'>
                <label htmlFor="age">age:</label>
                <input type="age" onChange={handleChange}  name='age' id='age' />
            </div>
            <button type='submit' onSubmit={handleSubmit}>login</button>
        </form>
     </article>
        <article>
        {people.map((person)=>{
            const {id,firstName,email,age} = person
            return(
                <div className='item' key={id}>
                    <h4>{firstName}</h4>
                    <p>{email}</p>
                    <p>{age}</p>
                </div>
            )
        })}
    </article>
    </>
  )
}

export default MultipleInputs