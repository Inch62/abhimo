import React from 'react'
import TextField from '@mui/material/TextField';

export default function login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

   
    if (name === "abc" && password === "123") {
      alert("Login Successful!");
    } else {
      alert("Incorrect Username or Password");
    }
  };
  
  return (
    <center>
    <div>
      <title>Whatsapp</title>
      
      <h1 style={{ color: 'green' }}>Welcome to circular App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label><br/>
        <input type="text" id="name" name="name"/><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="password" name="password"/><br/>
        

        <button type="submit">Login</button><br/>
        <TextField id="outlined-basic" label="Any queries" variant="filled" />
        </form>
    </div>
    </center>
  );
}
