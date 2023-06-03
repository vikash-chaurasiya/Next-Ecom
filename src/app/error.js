'use client';

import React, { useEffect } from 'react'


const Error = ({error,reset}) => {


    useEffect(()=>{
        console.log(error)
    },[error])

  return (
    <div>
        <h3>Something went wrong</h3>
        <button onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default Error