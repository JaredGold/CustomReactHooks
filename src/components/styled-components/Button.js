import styled from 'styled-components'

const Button = styled.button`
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 10px;
  cursor: pointer;
  border: 2px solid ${props => props.color ? props.color : "#6f03fc"};

  &:hover {
    background-color:${props => props.color ? props.color : "#6f03fc"};
    color: #ffffff;
    transition: 0.5s
  }

`

export default Button