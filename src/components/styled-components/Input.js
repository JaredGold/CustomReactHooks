import styled from 'styled-components'

const Input = styled.input`
  margin: 5px 10px 5px 0;
  border: ${props => props.error ? "1px solid red": "1px solid #dddddd"};
`

export default Input