import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age
            }
        }
    }
    throw Error('Unkown action: ' +  action.type)
}

const intialState = {name: 'Louis', age: 5113};

let App = function Form(){
    const [state, dispatch] = useReducer(reducer, intialState);

    function handleButtonClick() {
        dispatch({ type: 'incremented_age'});
    }

    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        })
    }

    return (
        <>
            <input
                value={state.name}
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>
                Increment age
            </button>
            <p>Hello, {state.name}. You are {state.age}.</p>
        </>
    )
}

export default App;