import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicial from '../Pages/Inicial';
import Login from '../Pages/Login';
import Cadastrar from '../Pages/Cadastrar';



function Rotas() {
  return (

  <Router>
     

     <Routes>
        
        <Route path="/cadastrar-funcionario" element={<Cadastrar></Cadastrar>} ></Route>
        <Route path="/Login" element={<Login></Login>} ></Route>
        <Route path="/" element={<Inicial></Inicial>} ></Route>
        <Route path="*" element={<div>Not Found</div>}></Route>
    </Routes>


  </Router>


 )
}

export default Rotas

