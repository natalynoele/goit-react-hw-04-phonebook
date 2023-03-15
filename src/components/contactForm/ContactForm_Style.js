import styled from 'styled-components';
const Form = styled.form`
  width: 600px;
  padding: 20px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  box-shadow: 1px 1px 3px 0px grey;

  button {
    padding: 10px;
    font-size: 25px;
    background-color: #34b4e8;
    border: none;
    border-radius: 7px;
    color: white;

    &:hover {
      background-color: #2681a7;
    }
  }
`;

const Label = styled.label`
  font-size: 25px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  font-size: 22px;
  padding: 10px;
  margin-bottom: 35px;
  border: 1px solid grey;
  border-radius: 7px;
`;

const Button = styled.button `
    padding: 10px;
    font-size: 25px;
    cursor: pointer;
    background-color: #34b4e8;
    border: none;
    border-radius: 7px;
    color: white;

    &:hover {
      background-color: #2681a7;
    }
`

export { Form, Label, Input, Button };
