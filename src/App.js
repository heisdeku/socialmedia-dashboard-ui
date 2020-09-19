import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Followers from './Components/Followers/followers';
import Overview from './Components/Platform-Overview/overview';

class App extends React.Component {
    state = {
      darkMode: false,
    }
    toggleMode = this.toggleMode.bind(this);
 
  toggleMode() {
    this.setState({
      darkMode: !this.state.darkMode
    })     
  } 
  render() {
    const { toggleMode } = this;
    const { darkMode } = this.state;
    let bodyElement = document.body;
    const dark = "dark";
    return (
      <div className="App">
      { darkMode ? bodyElement.classList.add(dark) : bodyElement.classList.remove(dark)}
        <Header 
          mode={darkMode}
          toggleDarkMode={toggleMode}
        />
        <Followers mode={darkMode} />
        <Overview mode={darkMode} />
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
