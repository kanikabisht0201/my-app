
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alert alert={alert}></Alert>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyse: " mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
