import React, { useState } from 'react'

const Counter = function() {
    const [likes, setLikes] = useState (7);

    function increment() {
        setLikes(likes +1);
      }
    function decrement() {
        setLikes(likes -1);
      }
      
    

  return (
    <div>
        <h1>{likes}</h1>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
    </div>
  )
}

export default Counter