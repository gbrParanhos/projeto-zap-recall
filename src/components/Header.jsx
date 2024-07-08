import styled from 'styled-components'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <StyledHeader>
      <LogoZap src={logo} />
      <Title>ZapRecall</Title>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding-bottom: 50px;
`

const LogoZap = styled.img`
  height:60px;
`

const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  line-height: 44.7px;
  color: #FFFFFF;
`

export default Header