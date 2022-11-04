import {useState} from 'react'

import {
  BgContainer,
  CreditCardContainer,
  CardHeading,
  CardContainer,
  CcNumber,
  CardHolder,
  CcName,
  DetailsContainer,
  DetailsCard,
  MainHeading,
  InputField,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')

  const nameOnCard = cardName.toUpperCase()

  const onChangeCardNum = e => {
    setCardNum(e.target.value)
  }

  const onChangeCardName = e => {
    setCardName(e.target.value)
  }

  return (
    <BgContainer>
      <CreditCardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <CardContainer data-testid="creditCard">
          <CcNumber>{cardNum}</CcNumber>
          <CardHolder>CARDHOLDER NAME</CardHolder>
          <CcName>{nameOnCard}</CcName>
        </CardContainer>
      </CreditCardContainer>
      <DetailsContainer>
        <DetailsCard>
          <MainHeading>Payment Method</MainHeading>
          <InputField
            type="text"
            value={cardNum}
            onChange={onChangeCardNum}
            placeholder="Card Number"
            maxLength="16"
          />
          <InputField
            type="text"
            value={cardName}
            onChange={onChangeCardName}
            placeholder="Cardholder Name"
          />
        </DetailsCard>
      </DetailsContainer>
    </BgContainer>
  )
}

export default CreditCard
