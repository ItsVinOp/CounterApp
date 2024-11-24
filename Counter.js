import React, { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter+1);
  }
  function decrement(){
    setCounter(counter-1);
  }
  function restart(){
    setCounter(0);
  }

  return (
    <div class="text-center" >
      <h1>Counter<span class=" mx-2 style={{ color: 'blue' }}  ">{counter}</span></h1>

      <button type="button" onClick={increment} class="btn btn-success btn-lg mx-2 my-3">+</button>
      <button type="button" onClick={restart} class="btn btn-warning btn-lg mx-2">Restart</button>
      <button type="button" onClick={decrement} class="btn btn-danger btn-lg">-</button>
    </div>
  )
}

export default Counter