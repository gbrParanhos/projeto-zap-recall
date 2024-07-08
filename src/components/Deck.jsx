import styled from "styled-components"
import FlashCard from "./FlashCard"
import { useState } from "react"

const Deck = ({cards,setCards}) => {
  const [playing, setPlaying] = useState(false)
  return (
    <StyledDeck>
      {cards.map((card, i) => (
        <FlashCard
          key={card.question}
          i={i}
          card={card}
          cards={cards}
          setCards={setCards}
          playing={playing}
          setPlaying={setPlaying}
        />
        ))}
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