
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Context from './Context';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Context.Provider>
        <Router>
          <NavBar />
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch> */}
          <Home />
        </Router>
      </Context.Provider>
    </div>
  );
}


export default App;