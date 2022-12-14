import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application /Application';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={['html', 'css', 'js']} />
    </div>
  );
}

export default App;
