import {useState} from 'react'

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [people, setPeople] = useState([])

    // New hanlde submit for forms
    const handleSubmit = (e) => {
        e.preventDefault()
        if(firstName && email){
            const person = {id: new Date().getTime().toString(), firstName,email}
            console.log(person);
            setPeople(() => {
                return [...people, person];
            })
            setFirstName("");
            setEmail("");
        } else {
            console.log('Empty Value firstName or email')
        }

    }
  return (
    <>
        <article>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-control">
                    <label htmlFor="firstName">Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} name="firstName" id="firstName"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email"></input>
                </div>
                <button type="submit">add person</button>
            </form>
            {people.map((person, index)=>{
                const {id, firstName, email} = person;
                return(
                    <div className="item" key={id}>
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                    </div>
                )
            })}
        </article>
    </>
  )
}

export default ControlledInputs