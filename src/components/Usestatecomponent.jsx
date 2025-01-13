import React, { useState } from 'react'

export default function Usestatecomponent() {
    const [name, setName] = useState('hello');
    const changeowrd = () => {
        setName('haiiii');
    };
  return (
    <div>
      <p>{name}</p>
      <button onClick={changeowrd}>Changeword</button>
    </div>
  );
}
