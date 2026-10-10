import React from 'react'
import { useState } from 'react'

function Home(props) {
  const [count, setCount] = useState(0)

  return (

  <div>
    <h1>Welcome to the Home Component</h1>
    <h1> My name is {props.name}</h1>
    <h2> I am learning React!</h2>
    <p> This is a simple React component.</p>
    <h2> Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <image src="https://via.placeholder.com/150" alt="Placeholder Image" />
   
</div>

  )
}

export default Home
