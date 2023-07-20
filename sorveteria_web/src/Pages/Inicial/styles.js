import { styled } from "styled-components";
import imagem from '../../Assets/Fundo.jfif'


export const Page = styled.div`
width: 100%;
height: 100vh;
display: flex;
overflow-y: auto;
background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.507), rgba(0, 0, 0, 0.76), rgb(0, 0, 0)), url(${imagem});
background-size: cover;
background-repeat: no-repeat;
margin:0;



`