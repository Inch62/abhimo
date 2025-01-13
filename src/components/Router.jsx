import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home2 from './Home2.jsx';

import Image from './Image';
import Array from './Array';
import Funct from './functions';
import Des from './Destructring';
import Spe from './Spreadoperator';
import Us from './Usestatecomponent';
import Ef from './Useeffect';
import Mu from './Muicomps';
import Tb from './Table';
import Log from './Login.jsx';
import Tail from './Tailwind.jsx';
import Te from './Text.jsx';
import Signup from './Signup.jsx';
export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home2/>}/>
            <Route path='/image' element={<Image/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Table' element={<Tb/>}/>
            </Routes></BrowserRouter>
      
    </div>
  )
}
