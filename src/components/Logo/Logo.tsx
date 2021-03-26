import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <StyledText>
        Levinfarm
      </StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledText = styled.span`
  color: #2a2e3a;
  font-family: 'Reem Kufi', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;
  @media (max-width: 400px) {
    display: none;
  }
`

const MasterChefText = styled.span`
  font-family: 'Kaushan Script', sans-serif;
`

export default Logo
