import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';
import SlideInNav from './SlideInNav';

function App() {
  const [winWidth, setWinWidth] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    window.innerWidth > 768 ?
      setWinWidth('desktop')
      :
      setWinWidth('mobile')
  }, []);

  return (
    <div className="App">
      <Router>
        {winWidth === 'desktop' ?
          <NavBar />
          :
          <SlideInNav />
        }
        <Home />
        <Footer />
      </Router>
    </div>
  );
}


export default App;