import React, { useState } from 'react';

import './App.css';
import ClassLifeCycle from './ClassLifeCycle';
import FunctionLifeCycle from './FunctionLifeCycle'
 import Example from './Example';
import Example2 from './Example2';

import Example3 from './Example3';
import Example4 from './Example4';
import Example5 from './Example5';

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
      <hr />

      <Example/>
      <hr />
      <Example2/>

      <Example3></Example3>
      <hr />
      <Example4 />
      <Example5></Example5>
    </>
  );
}

export default App;
