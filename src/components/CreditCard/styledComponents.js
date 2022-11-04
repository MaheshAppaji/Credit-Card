import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#3b4b69, #d3d9e0);
  background-size: cover;
  min-height: 100vh;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 50px;
  }
`

export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const CardHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  line-height: 2;
  margin-bottom: 50px;
  border-bottom: 5px solid #ffd773;

  //   text-decoration: underline #ffd773;
`
// export const HrLine = styled.hr`
//   border: 2px solid #ffd773;
// `

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 30px;
  padding: 50px 30px 50px 30px;
  width: 50%;

  margin-bottom: 50px;
  background-size: cover;
`

export const CcNumber = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`

export const CardHolder = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`

export const CcName = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const DetailsContainer = styled.div`
  background-color: #ffffff;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  padding: 50px;
`

export const MainHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 26px;
  text-align: center;
  margin-bottom: 30px;
`

export const DetailsCard = styled.form`
  box-shadow: 0px 0px 10px 0px #bfbfbf;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 50px 30px 50px 30px;
`

export const InputField = styled.input`
  height: 45px;
  margin-bottom: 30px;
  border: 1px solid #c3cad9;
  width: 330px;
  border-radius: 5px;
  padding-left: 10px;
  color: #475569;
  outline: none;
`
