import React, { Component } from 'react';
import './App.scss';
import Introduction from './components/Introduction/Introduction';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Eduction';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Introduction />
        <hr />
        <AboutMe />
        <Education />
      </main>
    );
  }
}

export default App;
