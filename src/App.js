import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componets/navbar';
import  Home  from './Componets/Pages/home'; 
import About  from './Componets/Pages/about';
import Team from './Componets/Pages/team';

function App (){
  return (
    <div className='App'>
      <div className='Navbar'>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/ourTeam" element={<Team />}/>
        </Routes>
      </div>
  </div>  
  );
};

export default App;