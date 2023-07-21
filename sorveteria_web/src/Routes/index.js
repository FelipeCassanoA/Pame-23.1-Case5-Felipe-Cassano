import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from '../Pages/Home';
import Estoque from '../Pages/Estoque'
import Inventario from '../Pages/Inventario'
import Login from '../Pages/Login';
import Cadastrar from '../Pages/Cadastrar';



function Rotas() {
  return (

  <Router>
     

     <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/estoque" element={<Estoque></Estoque>} ></Route>
        <Route path="/inventario" element={<Inventario></Inventario>} ></Route>
        <Route path="/cadastrar-funcionario" element={<Cadastrar></Cadastrar>} ></Route>
        <Route path="/Login" element={<Login></Login>} ></Route>
        <Route path="*" element={<div>Not Found</div>}></Route>
    </Routes>


  </Router>


 )
}

export default Rotas

