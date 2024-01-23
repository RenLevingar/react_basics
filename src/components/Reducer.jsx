import { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment': {
            const newCount = state.age + 1
            const hasError = newCount > 10
            return {
                ...state, age: hasError ? state.age : newCount,
                name: state.name,
                error:hasError ? "Maxium reached" : null,
            }
        }
        case 'decrement': {
            const newCount = state.age - 1
            const hasError = newCount < 0
            return {
                ...state, age: hasError ? state.age : newCount,
                name: state.name,
                error:hasError ? "Minimum reached" : null,
            }
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

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {name:"Louis", age: 5, error:""});

    function handleButtonInc() {
        dispatch({ type: 'increment'});
    }

    function handleButtonDec() {
        dispatch({ type: 'decrement'});
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
            <button onClick={handleButtonInc}>
                Increment age
            </button>
            <button onClick={handleButtonDec}>
                Decrement age
            </button>
            <p>Hello, {state.name}. You are {state.age}.</p>
            {state.error}
        </>
    )
}

export default Reducer