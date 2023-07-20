import React from 'react'
import { LoginContainer, LoginInput, LoginButton, LoginForm, LoginTitle, LoginLabel } from './styles'
import Header from '../../Components/Header'




function Login() {
  return (

    

    <LoginContainer>
        <Header></Header>
      
      <LoginForm>
        
        <LoginTitle>Login</LoginTitle>
        
        <LoginLabel><label>Nome:</label></LoginLabel>
        
        <LoginInput type="text" placeholder="Email ou Nome de usuário" />
      
        <LoginLabel><label>Senha:</label></LoginLabel>
        <LoginInput type="password" placeholder="Senha" />
      
        <LoginButton>Entrar</LoginButton>
      </LoginForm>
    
    </LoginContainer>  
  
  )
}

export default Login