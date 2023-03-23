import { createContext, useReducer } from 'react';

import './App.css';
import HomePage from './pages/HomePage';

export const MyContext = createContext(null)

function App()
{
  const initialState = 0
  // useReducer needs reducer function and initial state
  const [count, dispatchCount] = useReducer(countReducer, initialState)

  // reducer function which will have all logic to update the state
  function countReducer(state, action)
  {
    const { type, payload } = action
    console.log(payload)

    switch (type)
    {
      case 'add': return state + payload
      case 'sub': return state - payload
      case 'mult': return state * payload
      default: return state
    }
  }

  console.log('render app')

  return (
    <MyContext.Provider value={{ state: count, dispatch: dispatchCount }}>
      <div className="App">
        <h1>Hello Counter</h1>
        <HomePage />
      </div>
    </MyContext.Provider>
  );
}

export default App;
