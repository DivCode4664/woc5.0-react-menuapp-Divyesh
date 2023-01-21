import './App.css';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import Dinner from './components/Dinner';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';
import { createContext } from 'react';
import { Home } from './components/HomePage';

export const Appcontext = createContext();

function App() {
  const [displayHome, SetDisplayHome] =useState(true);

  return (
    <div>
      <Appcontext.Provider value={{displayHome,SetDisplayHome}}>
      {/* <Frontpage/> */}
      <Router>
      { displayHome && <Home />}
        <Routes>
          <Route exact path = '/' element = {<Home/>} />
          <Route exact path = '/breakfast' element = {<Breakfast/>} />
          <Route exact path = '/lunch' element = {<Lunch/>} />
          <Route exact path = '/dinner' element = {<Dinner/>} />
        </Routes>
      </Router>
      </Appcontext.Provider>
    </div>
  );
}

export default App;
