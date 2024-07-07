import styled from 'styled-components'
import play from '../assets/seta_play.png'

const FlashCard = () => {

  return (
    <>
    <StyledFlashCard>
      <Question>Pergunta 1</Question>
      <SetaPlay src={play} />
    </StyledFlashCard>
    <StyledFlashCard>
      <Question>Pergunta 1</Question>
      <SetaPlay src={play} />
    </StyledFlashCard>
    </>
  )
}

const StyledFlashCard = styled.li`
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 65px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
`

const Question = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  color: #333333;
`

const SetaPlay = styled.img`
  width: 20px;
`

export default FlashCard