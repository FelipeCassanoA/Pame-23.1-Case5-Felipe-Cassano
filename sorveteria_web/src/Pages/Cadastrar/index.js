import React from 'react';
import Header from '../../Components/Header';
import {CadastroContainer, CadastroForm, CadastroInput, CadastroButton, CadastroSubtitle} from './styles'

const CadastroFuncionarios = () => {
  return (
    <CadastroContainer>
      
    <Header></Header>
      <CadastroForm>
        <h2>Cadastro de Funcionários</h2>
        <CadastroSubtitle><label>Email:</label></CadastroSubtitle>
        <CadastroInput type="email" placeholder="Email" />
        
        <CadastroSubtitle><label>Senha:</label></CadastroSubtitle>
        <CadastroInput type="password" placeholder="Senha" />
        <CadastroInput type="password" placeholder="Confirmar Senha" />
        
        <CadastroSubtitle><label>Chave:</label></CadastroSubtitle>
        <CadastroInput type="text" placeholder="Chave de Acesso" />
        <CadastroButton type="submit">Cadastrar</CadastroButton>
      </CadastroForm>
    
    </CadastroContainer>
  );
};

export default CadastroFuncionarios