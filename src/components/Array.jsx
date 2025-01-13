import React from 'react'

export default function Array() {
    let arr1=[1,2,3,4,5]
    let arr2=['a','b','c']
    let arr3=[1,'a','inchara']
    let cars=['bmw','audi','jeep']
    console.log(arr1)
   let obj1=[{
    name:"veinal",
    age:25 

   },
   {
    name:"abc",
    age:23
   }]
   console.log(obj1)
  return (
    <div>
        <p>{arr1}</p>
       {/*} <p>{obj1.name},{obj1.age}</p>*/}
       {arr1.map((item)=>{
        return(
            <div>
            
                <p>1-{item}</p>
                <p>2-{item}</p>
            </div>
            
        )
       })}
       {cars.map((car)=>{
        return(
            <>
            <ul>
                <li>{car}</li>
            </ul>
            </>
        )
       })}
       {obj1.map((obj)=>{
        return(
            <>
            <ul>
                <li>{obj.name}</li>
                <li>{obj.age}</li>
            </ul>
            </>
        )
       })}

      
    </div>
  )
}
