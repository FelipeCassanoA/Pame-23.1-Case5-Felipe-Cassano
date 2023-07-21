import { styled } from "styled-components";
import imagem from '../../Assets/Fundo.png'


export const Page = styled.div`
flex-direction: column;
width: 100%;
height: 100vh;
display: flex;
overflow-y: auto;
background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.507), rgba(0, 0, 0, 0.70), rgb(0, 0, 0, 0.9)), url(${imagem});
background-size: cover;
background-repeat: no-repeat;




`

export const TitleForm = styled.form`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6%;
  margin-top: 8%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial Black, sans-serif;
  color: white;

`;

export const Subtitle = styled.div`
flex-direction: column;
font-family: Arial ;



`;
