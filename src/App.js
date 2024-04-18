import React, { useState } from 'react';

import './App.css';
import ClassLifeCycle from './ClassLifeCycle';
import FunctionLifeCycle from './FunctionLifeCycle'


function App() {
  const [flag, setFlag] = useState(true)
  return (
    <>
      
      <div className='App'>
      <button onClick={() => setFlag(false)}>Change The Falg</button>
      {flag ? <ClassLifeCycle background="Yellow" /> : <h1>Component Removed</h1>}
      </div>

      <hr />

      <div>
        <FunctionLifeCycle></FunctionLifeCycle>

      </div>

    </>
  );
}

export default App;
