import React, { createContext, useState } from 'react';
// import  './App.css';
import Parent from './Components/Parent';

// create context  
export const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = (value) => {
    setTheme(value === 'dark' ? 'white':'dark')
  }

  // const state = {
  //   them,
  //   toggleTheme
  // }

  // bothe are same 

  const state = {
    theme:theme,
    toggleTheme:toggleTheme 
  }

  return (
    <div className='app'>
      {/* useContext api example pass the data parent component to grand child component */}

      <ThemeContext.Provider value={state}>
        <Parent/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;


// steps - 1 create a context api in app.jsx file
// state to using useState pass the data
// wrap parent component using ThemContext.Provider 
// set the values which value pass the other component setting inside the state object 
// like  

  // const state = {
  //     theme:them,
  //    toggleTheme:toggleTheme 
//  }