'use strict'

import React from 'react'

const Counter = ({ counter, increment, decrement, removeCounter }) => (
  <div style={{ position: 'relative' }}>
    <h1>{counter}</h1>
    <button style={{ color: 'white', backgroundColor: 'blue', border: 0, margin: 3 }} onClick={decrement}>-</button>
    <button style={{ color: 'white', backgroundColor: 'blue', border: 0, margin: 3 }} onClick={increment}>+</button>
    <button style={{ color: 'white', backgroundColor: 'red', border: 0, margin: 3 }} onClick={removeCounter}>&times;</button>
  </div>
)

export default Counter
