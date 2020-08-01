import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Context from './Context';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Context.Provider>
        <Router>
          <NavBar />
          <Home />
          <Footer />
        </Router>
      </Context.Provider>
    </div>
  );
}


export default App;