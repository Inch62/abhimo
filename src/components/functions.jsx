import React from 'react'

export default function functions() {
    function func1()
    {
        console.log("hello")
        return "hi"
    }
    let func2=()=>{
        return "text from arrow"
    }

    let Greetings=(name)=>
    {
        alert(`succfully,${name}`)
    }
  return (
    <div>
        
       {func1()} 
       <br/>
       {func2()}

 <button onClick={()=>Greetings("Inchara")}>click here</button>     
    </div>
  );
}
