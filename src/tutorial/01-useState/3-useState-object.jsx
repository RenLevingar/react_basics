import {useState} from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: "random message",
    });

    // const [name, setName] = useState('peter')
    // const [age, setAge] = useState(24)
    // const [message, setMessage] = useState('random message')

    const changeMessage = () => {
        const msg = person.message == 'hello world' ? 'this is false' : 'hello world';
        setPerson({...person, message: msg})
    };

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>{person.message}</h4>
            <button className='btn' onClick={changeMessage}>
                change message
            </button>
        </>
    )
}

export default UseStateObject;