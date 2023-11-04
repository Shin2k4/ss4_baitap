import React, { useState } from 'react'

export default function Count_click() {
    const [count,setCount] = useState(0);
    
  return (
    <div>
        <h2> {count} </h2>
          <button onClick={() => {
            setCount(count + 1)
          }}>click me!</button>
    </div>
  )
}
