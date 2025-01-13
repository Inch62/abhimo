import React, { use, useEffect,useState } from 'react'

export default function Useeffect() {
    
        const [count,setCount]=useState(0)
        const [count1,setCount1]=useState(0)
        useEffect(()=>{
            setCount(count+1)
        },[count])

        useEffect(()=>{
            setTimeout(()=>{
                setCount1(count1+1)
            },[2000])
        },[count1])

    
  return (
    
    <div>
        <p>{count}</p>
        <p>Increemnt in seconds: {count1}</p>

      
    </div>
  )
}
