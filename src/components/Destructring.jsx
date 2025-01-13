import React from 'react'


export default function Destructring() {
    let nums=[1,2,3,4,5]
    let a=nums[0]
    let b=nums[1]
    let c=nums[2]
    let d=nums[3]

    let [w,x,y,z]=nums

    let obj1={
        brand:"bmw",
        price:10000
    }
    let {brand,price}=obj1
    console.log(a)
    console.log(w,x,y,z)
  return (
    <div>
      <p>{a}</p>
      <p>{w}</p>
      <p>{brand}</p>
      <p>{price}</p>
    </div>
  )
}
