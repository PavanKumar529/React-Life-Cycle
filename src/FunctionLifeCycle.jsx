import React, { useEffect, useState } from 'react'

const FunctionLifeCycle = () => {
    const [ count, setCount ] = useState(0);
    const [ color, setColor ] = useState(true);
    const [ count1, setCount1 ] = useState(0 )

    useEffect(() => {    // executes after every render of the component
        console.log("This is useEffect() without Second argument")
    })

    useEffect(() => {  // executes once after the initial render       // This similar to componentDidMount method
        console.log("This is useEffect() with Second argument that is empty argument")
        console.log("useEffect with Empty Dependence")
    })

    useEffect(() => {  //excutes after every dependencies updation    // This is similar to componentDidUpadation
        console.log("useEffect with count State dependence");
    })

    useEffect(() => { // 
        // console.log("This is a useEffect with return function")
        // setCount1( count * 100 );
        let interval = setTimeout(() => {
        console.log("This is a useEffect with return function")
        setCount1( count * 100 );        
    }, 1000)
        return () => {  // clean-up function
            console.log("This is a Clean-up Operation / Function")
            // setCount1(0)
            clearTimeout(interval);

        }
    })

  return (
    <>
      <h1>useEffect() Hook </h1>
      { console.log("Render Method") }
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <div style={{background: color ? "blue" : "red", height: "300px", width: "400px"}}>
        <button onClick={() => setColor(!color)}>Change Color</button>
      </div>
      <h1>{count1}</h1>
    </>
  )
}

export default FunctionLifeCycle
