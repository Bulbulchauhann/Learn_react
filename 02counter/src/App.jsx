import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);  //setCounter is a method/function to update the value of counter
  //setCounter is a function to update the value of counter

  // let counter = 15;

  // const addValue = () => {
  //   console.log("Value Added", Math.random());
  // }

  const addValue = () => {
    // console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    // console.log("clicked", counter);
    // counter = counter - 1
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
