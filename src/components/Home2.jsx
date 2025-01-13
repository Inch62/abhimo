import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home2() {
    const[name,setName]=useState('Inchara');
    const age='22'
    const greeting="hello everyone"
    
    const changename=()=>
    {
        setName('inch');
    };
      return (
        <div>
            <title>Title</title>
            <h2>Introduction</h2>
            <p>{greeting} My name is {name}. and age is {age}.</p>
            <button onClick={changename}>change name</button><br/>
            <Link to='/image'><button>Linkpage</button></Link>
            <Link to='/Signup'><button>Signup</button></Link>
            <h3>in</h3>
          hello
        </div>
  )
}
