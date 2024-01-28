import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #800080;
  border-radius: 10px;
  padding: 15px;
  width: 800px;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContainerTask = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
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
  border: none;
  width: 400px;
  border-radius: 4px;
  margin-top: 7px;
`;

export const ButtonText = styled.p`
  color: white;
  margin-bottom: 10px;
`;
