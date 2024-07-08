import styled from 'styled-components'
import CardOptions from './CardOptions'
import play from '../assets/seta_play.svg'
import flip from '../assets/seta_virar.svg'
import fail from '../assets/icone_erro.svg'
import done from '../assets/icone_certo.svg'
import half from '../assets/icone_quase.svg'

const FlashCard = ({i,card,cards,setCards,playing,setPlaying}) => {
  const {question,answer,status} = card;

  const playCard = (ind) => {
    const prevCards = [...cards];
    prevCards[ind].status = 'playing';
    setCards(prevCards);
    setPlaying(true);
  }
  const flipCard = (ind) => {
    const prevCards = [...cards];
    prevCards[ind].status = 'revealed';
    setCards(prevCards);
  }
  const completeCard = (ind,choice) => {
    const prevCards = [...cards];
    prevCards[ind].status = `complete ${choice}`;
    setCards(prevCards);
    setPlaying(false);
  }

  return (
    <StyledFlashCard 
      status={status}
    >
      <TitleQuestion
        status={status}
      >
        {(!status || status.includes('complete')) && `Pergunta ${i+1}`}
        {status === 'playing' && question}
        {status === 'revealed' && answer}
      </TitleQuestion>
      {!status && (<ArrowPlay onClick={()=> {!playing && playCard(i)}} src={play} />)}
      {status === 'playing' && (<ArrowFlip onClick={()=> flipCard(i)} src={flip} />)}
      {status === 'complete fail' && <ChoiceImg src={fail} />}
      {status === 'complete half' && <ChoiceImg src={half} />}
      {status === 'complete done' && <ChoiceImg src={done} />}
      {status === 'revealed' && (<CardOptions i={i} completeCard={completeCard} />)}
    </StyledFlashCard>
  )
}

const StyledFlashCard = styled.li`
  display: flex;
  padding: ${({status}) => !status || status.includes('complete') ? '0 15px' : '20px 15px 10px' };
  justify-content: space-between;
  align-items: center;
  background-color: ${({status}) => !status || status.includes('complete') ? 'white' : '#FFFFD4' };
  min-height: ${({status}) => !status || status.includes('complete') ? '65px' : '130px' };
  flex-direction: ${({status}) => !status || status.includes('complete') ? 'row' : 'column' };
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
  transition: all 500ms;
`

const TitleQuestion = styled.p`
  font-size: ${({status}) => !status || status.includes('complete') ? '16px' : '18px' };
  font-weight: ${({status}) => !status || status.includes('complete') ? '700' : '400' };
  align-self: ${({status}) => !status || status.includes('complete') ? '' : 'flex-start' };
  color: ${({status}) => {
    if(!status) return '#333333'
    if(status.includes('fail')) return '#FF3030';
    if(status.includes('half')) return '#FF922E';
    if(status.includes('done')) return '#2FBE34';
    }};
  text-decoration: ${({status}) => !status || !status.includes('complete') ? 'none' : 'line-through'};
`

const ArrowPlay = styled.img`
  width: 20px;
`

const ArrowFlip = styled.img`
  width: 30px;
  align-self: flex-end;
`

const ChoiceImg = styled.img`
  width: 25px;
`

export default FlashCard