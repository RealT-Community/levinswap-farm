import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://blockscout.com/address/0xc2edad668740f1aa35e4d8f227fb8e17dca888cd#code"
      >
        Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://info.levinswap.org/pair/0x4eeb519888b027b50d3d221abdb47d9072e2e838"
      >
        LEVIN-XDAI
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/F6pKMPNHE7">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/levinswap">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/levinswap">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  transition: 0.3s ease;
  
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
