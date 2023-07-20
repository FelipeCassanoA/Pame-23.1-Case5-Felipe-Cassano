import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';

const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CadastroForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 6%;
  background-color:transparent ;

`;

const CadastroInput = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CadastroButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CadastroFuncionarios = () => {
  return (
    <CadastroContainer>
      
    <Header></Header>
      <CadastroForm>
        <h2>Cadastro de Funcionários</h2>
        <CadastroInput type="email" placeholder="Email" />
        <CadastroInput type="password" placeholder="Senha" />
        <CadastroInput type="password" placeholder="Confirmar Senha" />
        <CadastroInput type="text" placeholder="Chave de Acesso" />
        <CadastroButton type="submit">Cadastrar</CadastroButton>
      </CadastroForm>
    
    </CadastroContainer>
  );
};

export default CadastroFuncionarios