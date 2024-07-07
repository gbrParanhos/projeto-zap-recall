import styled from "styled-components"
import FlashCard from "./FlashCard"

const Deck = () => {

  return (
    <StyledDeck>
      <FlashCard />
    </StyledDeck>
  )
}

const StyledDeck = styled.ol`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 25px;
`

export default Deck