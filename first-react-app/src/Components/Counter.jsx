import React, { useState } from "react";

const Counter = function() {
    const [count, setcouunt] = useState(0)
    function increment(){
        setcouunt(count + 1)
      }
    
      function decrement(){
        setcouunt(count - 1)
      }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;