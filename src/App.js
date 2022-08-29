import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title='Textutils- Dark mode'   // for changing title 
      // setInterval(() => {
      //   document.title= 'Texttutils is Amazing app';
      // }, 2000);
      // setInterval(() => {
      //   document.title= 'Install textutils now !';
      // }, 1500);  //for evil app
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils- light mode'
    }
  }
  
  return ( 
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>

        <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            {/* /users --> Components 1
            /user/home ---> --> Components 2 */}
            <Route exact path="/about">
              <About heading="About" mode={mode}/>
            </Route>

            <Route exact path="/">

              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}
export default App; 