import React, { useState,useEffect } from 'react'

const Example3 = () => {
    const [users, setUsers ] = useState([])

    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res=>res.json())
        // // .then(data=>console.log(data))
        // .then(data=>setUsers(data))
        // .catch(error=>console.log(error))

        fetchData()
    }, [])

    async function fetchData() {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json()
        setUsers(data)
    }
    // fetchData()

  return (
    <div>
      <h1>This is a fetch API Component</h1>
      {/* {users.map( e => {
         return <li>{e.name}</li>
      })} */}
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>User name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>City</th>
            </tr>
            {
              users.map((e) => {
                return (
                  <tr>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{e.name}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{e.username}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{e.address.city}</td>
                </tr>
                )
              })
            }
          </table>
    </div>
  )
}

export default Example3
