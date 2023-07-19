import React from 'react'
import { LoginContainer, LoginInput, LoginButton, LoginForm, LoginTitle } from './styles'
import Header from '../../Components/Header'




function Login() {
  return (

    

    <LoginContainer>
        <Header></Header>
      
      <LoginForm>
      <LoginTitle>Login</LoginTitle>
      <label>Nome</label>
      <LoginInput type="text" placeholder="Email ou Nome de usuário" />
      
      <label>Senha</label>
      <LoginInput type="password" placeholder="Senha" />
      
      <LoginButton>Entrar</LoginButton>
      </LoginForm>
    
    </LoginContainer>  
  
  )
}

export default Login