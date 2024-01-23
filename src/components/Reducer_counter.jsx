import { useReducer } from "react";

function reducer(state, action){
    const {type} = action
    switch(type) {
        case 'increment':{
            const newCount = state.count + 1
            const hasError = newCount > 10
            return {
                ...state, count: hasError ? state.count : newCount,
                error:hasError ? "Maxium reached" : null,
            }
        }
        case 'decrement':{
            const newCount = state.count - 1
            const hasError = newCount < 0
            return {
                ...state, count: hasError ? state.count : newCount,
                error:hasError ? "Minimum reached" : null,
            }
        }
        default: return state
    }
}

const intialState = {count: 0, error: ""};

let BigCounter = function Form(){
    const [state, dispatch] = useReducer(reducer, intialState);

    function handleButtonInc() {
        dispatch({ type: 'increment'});
    }

    function handleButtonDec() {
        dispatch({ type: 'decrement'});
    }

    return(
        <>
            {state.count}
            <button onClick={handleButtonInc}>increment</button>
            <button onClick={handleButtonDec}>decrement</button>
            {state.error}
        </>
    )
}

export default BigCounter