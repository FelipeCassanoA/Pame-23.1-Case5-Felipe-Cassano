import { styled } from "styled-components";





export const ButtonText = styled.h1`
text-decoration: none;
font-size: 1.2rem;
font-weight: bold;
color: white;

`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1%;
  margin: 2%;
  width: 80%;
  @media  (max-width: 690px){
    width: 40%;
    gap: 1%;
    margin: 2%;

  
}
`

