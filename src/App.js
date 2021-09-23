import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light') //wether dark mode is enabled or not
  const [alert, setAlert] = useState(null)  //to show alerts when something happens

  // alert function 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    //to hide alert after some time
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  //toggle mode for fucntion dark mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
