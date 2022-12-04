import React from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

function App() {
  return (
    <>
      Class Counter
      <Counter initialCount={0} />
      hooks Counter
      <CounterHooks initialCount={0} />
    </>
    
  )
}

export default App;
