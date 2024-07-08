import styled from "styled-components";

const CardOptions = ({i, completeCard}) => {
  return(
    <Options>
      <Option onClick={() => completeCard(i,'fail')} backgroundcolor='#FF3030' >
        <NameOption>Não Lembrei</NameOption>
      </Option>
      <Option onClick={() => completeCard(i,'half')} backgroundcolor='#FF922E' >
        <NameOption>Quase não Lembrei</NameOption>
      </Option>
      <Option onClick={() => completeCard(i,'done')} backgroundcolor='#2FBE34' >
        <NameOption>Zap!</NameOption>
      </Option>
    </Options>
  )
}

const Options = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  width: 100%;
  padding-top: 15px;
`

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({backgroundcolor}) => backgroundcolor};
  border-radius: 5px;
  height: 38px;
  width: calc(100% / 3);
  padding: 0 10px;
`

const NameOption = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`

export default CardOptions