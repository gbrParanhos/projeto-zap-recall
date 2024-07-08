import styled from "styled-components"

const Footer = ({cards}) => {
  const completedCards = cards.filter(({status}) => status && status.includes('complete'))

  return (
    <StyledFooter>
      <Progression>{completedCards.length}/{cards.length} CONCLUÍDOS</Progression>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  bottom: 0;
  height: 70px;
  width: 100vw;
  background-color: white;
  box-shadow: 0px -4px 6px 0px #0000000D;
  justify-content: center;
  align-items: center;
`
const Progression = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
`

export default Footer