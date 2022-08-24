
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('dark'); //Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');

    }
    else {
      setMode('light');

    }
  }
  return (
    <>
      <Navbar title="Texttutils" mode={mode} togglemode={toggleMode} />

      <div className="container my-3">

        <TextForm heading="Enter the text to analayze below" />

      </div>




    </>

  );
}
export default App;
