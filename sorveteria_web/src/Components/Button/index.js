import React from 'react'
import { ButtonWrapper } from './styles'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';



const Button = styled(Link)`
text-decoration: none;
font-size: 1.0rem;
font-weight: bold;
color: white;
display: flex;
background-color: none;
color: black;
cursor: pointer;
margin-top: 2%;
margin: 1%;


`

const Button1 = styled(Link)`
  padding: 10px 20px;
  background-color: black;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
  }
`;



const ButtonComponent = () => {
  return (


    <ButtonWrapper>

      <Button to='/'>Home</Button> 
      <Button1 to="/estoque">Estoque</Button1>
      <Button1 to="/inventario">Inventário</Button1>
      <Button1 to="/cadastrar-funcionario">Cadastrar funcionário</Button1>
      <Button1 to="/login">Login</Button1>

    </ButtonWrapper>
  );
};

export default ButtonComponent;
