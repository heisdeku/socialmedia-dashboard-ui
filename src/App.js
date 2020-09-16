import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header/header';
import Followers from './Components/Followers/followers';
import Overview from './Components/Platform-Overview/overview';

class App extends React.Component {
  state = {
    darkMode: false,
  }
  toggleMode(e) {

  }
  render() {
    return (
      <div className="App">
        <Header />
        <Followers />
        <Overview />
      </div>
    );
  }
}
/*
function App() {
  const [darkState, setDarkState] = useState(false);
  
}
*/
export default App;
