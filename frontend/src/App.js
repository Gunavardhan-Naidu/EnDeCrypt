import logo from './logo.svg';
import './App.css';
import React from 'react';
import EncryptionForm from './components/EncryptionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>EnDecrypt</h1>
        </p>
        <a
          className="App-link"
          href="https://gunavardhan-naidu.github.io/EnDeCrypt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App link
        </a>
        <EncryptionForm />
      </header>
    </div>
  );
}

export default App;
