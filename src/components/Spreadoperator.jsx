import React from 'react'

export default function Spreadoperator() {
    let arr1=[1,2,3,4,5]
    let arr2=[6,7,8,9]
    let spredarray=[0,...arr1,11,12,12,...arr2]
    let obj1={
        msg1:"hello there"
    }
    let obj2={
        msg2:"hai there"
    }
    let obj3=
    {
        msg3:"hello",
        msg4:"evryone"
    }
    let obj4=
    {
        msg5:"I am",
        msg6:"Inchara"
    }
    let spreadarray2={...obj1,...obj2}
    let spreadarray3={...obj3,...obj4}

    console.log(spredarray)
    console.log(spreadarray2)
    console.log(spreadarray3)

  return (
    <div>
        <p>{spredarray}</p>
 

      
    </div>
  )
}
