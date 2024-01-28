import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 40%;
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #800080;
  background-color: purple;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  width: 90px;
  border: none;
  border-radius: 6px;

  text-decoration: none;
  color: white;
  background: #0b63f6;
  box-shadow: 0 3px 0 #003cc5;
  transition: background 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    background: #003cc5;
    box-shadow: 0 2px 0 #003cc5;
    position: relative;
    top: 1px;
  }
`;

export const Input = styled.input`
  height: 30px;
  border: none;
  border-radius: 4px;
`;

export const ButtonText = styled.p`
  margin-bottom: 10px;
  color: white;
`;
