import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="position1stheader">Your One Stop Shop</h1>
        <h1 className="position2ndheader">for Billiards Equipment</h1>
        <img className="background" src="./billiard-wallpapers.jpg" alt="Billiards"/>
      </div>
    );
  }
}

export default App;
