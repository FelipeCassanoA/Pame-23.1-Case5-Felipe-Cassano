import React from 'react'
import { ButtonWrapper } from './styles'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';


const Button = styled(Link)`
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
      <Button to="/estoque">Estoque</Button>
      <Button to="/inventario">Inventário</Button>
      <Button to="/cadastrar-funcionario">Cadastrar funcionário</Button>
      <Button to="/login">Login</Button>

    </ButtonWrapper>
  );
};

export default ButtonComponent;
