import React, { useState } from 'react';
import Seconds from './Seconds';
import './App.css';

function App() {
  const [ showTimer, setShowTimer ] = useState(false);

  return (
    <div className="App">
      <h1>Learning Hooks</h1>
      <button onClick={() => setShowTimer(!showTimer)}>
        {
          !showTimer
            ? "Chronometer activated"
            : "Chronometer desactivated"
        }
      </button>
      {
        !showTimer
          ? (
              <div className="alert alert-danger">
                Chronometer desactivated
              </div>
            )
          : (
              <div className="alert alert-success">
                Active! <Seconds/> seconds
              </div>
          )
      }
    </div>
  );
}

export default App;
