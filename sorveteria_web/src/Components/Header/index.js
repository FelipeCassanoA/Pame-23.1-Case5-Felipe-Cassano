import React from 'react'
import { HeaderDiv, Logo } from './styles'
import LogoV from "../../Assets/Logo.png"
import ButtonComponent from '../Button'


function Header() {
  
      return (
    <HeaderDiv>

        <Logo src ={LogoV}></Logo>

        <ButtonComponent></ButtonComponent>

    </HeaderDiv>


 )
}

export default Header