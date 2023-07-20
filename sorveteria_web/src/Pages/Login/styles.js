import styled from 'styled-components';
import imagem from '../../Assets/Fundo.jfif'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.507), rgba(0, 0, 0, 0.76), rgb(0, 0, 0)), url(${imagem});
  background-size: cover;
  background-repeat: no-repeat;
  margin:0;


`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 6%;
  background-color:white ;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`;


export const LoginInput = styled.input`
  padding: 5%;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15%;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LoginTitle = styled.h2`
  margin-bottom: 20%; /* Ajuste o valor conforme desejado */
  display: flex;
  margin-top: 1%;


`;


export const LoginLabel = styled.label`
display: flex;
margin-right: 75%;


`