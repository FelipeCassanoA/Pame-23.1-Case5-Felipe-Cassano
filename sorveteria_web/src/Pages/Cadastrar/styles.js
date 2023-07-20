import styled from 'styled-components';



export const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const CadastroForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 6%;
  background-color:transparent ;

`;

export const CadastroInput = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const CadastroButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10%;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CadastroSubtitle = styled.label`
display: flex;
margin-right: 55%;



`;
