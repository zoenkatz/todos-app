import React, {useContext, useReducer} from 'react';
import './App.css';
import {UserContext} from './index';

const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1
      }
    case "Decrement":
      return {
        count: state.count - 1
      }
    case "Reset":
      return initialState

    default:
      return initialState
  }
}

export default function App(){
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useContext(UserContext);
  return (
      <div>
        <div>Hello, {value}</div>
        Count: {state.count}
        <button className="border m-1 p-1" onClick={() => dispatch({type: "Increment"})}>Increment</button>
        <button className="border m-1 p-1" onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
        <button className="border m-1 p-1" onClick={() => dispatch({ type:"Reset" })}>Reset</button>
      </div>
  )
}
