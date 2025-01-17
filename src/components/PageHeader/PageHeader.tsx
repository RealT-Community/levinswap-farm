import React from 'react'
import styled from 'styled-components'
import './../../fonts/fonts.css'

import Container from '../Container'

interface PageHeaderProps {
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ subtitle, title }) => {
  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div` 
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  font-size: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  width: 120px;
`

const StyledTitle = styled.h1`
  font-family: 'GT Haptik Regular';
  color: #232a34;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color: #463e53;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default PageHeader
