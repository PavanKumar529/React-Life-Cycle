import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Example4 = () => {
    const [ photos, setPhotos ] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(data=>setPhotos(data.data))
        .catch(error=>console.log(error))
    })
  return (
    <div>
      <h1>axios</h1>
      {
        photos.map((e) => {
            return (
                <img src={e.url} alt="img" height={"200px"} width={"200px"}/>
            )
        })
      }
    </div>
  )
}

export default Example4
