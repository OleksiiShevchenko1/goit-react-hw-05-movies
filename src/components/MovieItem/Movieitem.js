import styled from 'styled-components';

export const MovieStyled = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

export const AditionalStyled = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  box-shadow: 0px 6px 5px #888, 0px 0 5px #888;
  padding: 0 16px;
  color: #040464;
  font-size: 16px;
`;

export const ButtonBack = styled.button`
  padding: 8px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: white;
  background-color: #040464;
  cursor: pointer;

  &.hover,
  &.focus {
    background-color: #282881;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  input {
    width: 300px;
    height: 28px;
    font-size: 16px;
  }

  button {
    padding: 10px 16px;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: #040464;
    cursor: pointer;
  }
`;
