import styled from 'styled-components'
import deviceSize from '../../utils/device-size'

const FlexContainer = styled.div`
  // mobile first
  display: flex;
  flex-direction: column;


  // make this a row on larger devices
  @media ${deviceSize.laptop}{
    flex-direction: row;
    justify-content: space-evenly;

  }

`

export default FlexContainer