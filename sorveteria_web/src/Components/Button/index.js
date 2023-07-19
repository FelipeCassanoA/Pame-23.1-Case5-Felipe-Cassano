import React from 'react'
import { ButtonText } from './styles'
import { Link } from 'react-router-dom'



function Button({name, Routes}) {
  return (
    <Button>
        <Link to={Routes}></Link>
        <ButtonText>{name}</ButtonText>


    </Button>



    
  )
}

export default Button