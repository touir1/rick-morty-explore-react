import { useState, useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function DemoReducerPage() {
    const [state, setState] = useState(initialState);
    const [state2, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Demo Reducer</h1>
            <div>
                <p>Count (useState): {state.count}</p>
                <button onClick={() => setState((state) => ({ ...state, count: state.count + 1 }))}>+</button>
                <button onClick={() => setState((state) => ({ ...state, count: state.count - 1 }))}>-</button>
            </div>
            <div>
                <p>Count (useReducer): {state2.count}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            </div>
        </div>
    )
}

export default DemoReducerPage;