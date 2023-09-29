import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home.jsx";
import Portfolio from "./AppExplore.jsx";

function App() {

  const [welcomeAnimationLoaded, setWelcomeAnimationLoaded] = useState(true);


  useEffect(() => {
      setTimeout(() =>{
        setWelcomeAnimationLoaded(true);
      },5000)

  }, [])

  return (
<React.Fragment>
  
    <Router>
      <Routes>
        <Route path="/" exact  element={<Home />}/>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
