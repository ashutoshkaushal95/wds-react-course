import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Class Counter
      <Counter initialCount={0} />
      hooks Counter
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => { 
      return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
    
  )
}

export default App;
