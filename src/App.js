import React, { Component } from 'react';
import Profile from './component/Profile'


class App extends Component {
  state = {
    artistName: "",
    songName: ""
  }

  
  render() {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default App;
