import React, { useState } from 'react';

import './App.css';
import ClassLifeCycle from './ClassLifeCycle';


function App() {
  const [flag, setFlag] = useState(true)
  return (
    <>
      
      <div className='App'>
      <button onClick={() => setFlag(false)}>Change The Falg</button>
      {flag ? <ClassLifeCycle background="Yellow" /> : <h1>Component Removed</h1>}
      </div>

      <hr />

      {/* <div>
        <FunctionLifeCycle></FunctionLifeCycle>

      </div>
      <hr /> */}
{/* 
      <Example/>
      <hr /> */}
      {/* <Example2/> */}

      {/* <Example3></Example3> */}
      {/* <hr /> */}
      {/* <Example4 /> */}
      {/* <Example5></Example5> */}
    </>
  );
}

export default App;
