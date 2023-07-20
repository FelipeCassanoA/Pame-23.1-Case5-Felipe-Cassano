import { styled } from "styled-components";



export const HeaderDiv = styled.div`
display:flex;
flex-direction: row;
width: 100%;
height: 12vh;
background-color: yellow;
align-items: center;
justify-content: space-between;


@media (max-width:600px) {
    flex-wrap: wrap;
    
}
`



export const ButtonDiv = styled.div`



` 



/* Export para alterar a Logo do header */

export const Logo = styled.h1`
width:3vw ;
height: 3vw;
padding-left: 2vw;
@media (max-width: 1300px){
    width: 60px;
    height: 40px;


}



`
