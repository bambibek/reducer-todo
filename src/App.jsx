
import './App.css';
import Input from './Component/Input';

import Profile from './Component/Profile';
import Skills from './Component/Skills';
import { ThemeContext } from './ThemeContext'
import { useState } from 'react';

function App() {

  const [lightMode, setlightMode] = useState(true)

  const handleChange = () => {

    return setlightMode(!lightMode)
  }



  return (
    <div className="App">
      <ThemeContext.Provider value={{ lightMode }}>
        <button className={lightMode ? "" : "btnDark"} onClick={handleChange}>{lightMode ? 'Light Mode' : 'Dark Mode'}</button>
        <Profile />
        <Skills />
      </ThemeContext.Provider>
      {/* <Input /> */}
    </div>
  );
}

export default App;
