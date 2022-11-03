import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width:576px){
      display:flex;
      flex-direction:column;
      

`

export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  background-size: cover;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-bottom: 35px;
`

export const CardHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  line-height: 2;
  margin-bottom: 150px;
  border-bottom: 5px solid #ffd773;

  //   text-decoration: underline #ffd773;
`
// export const HrLine = styled.hr`
//   border: 2px solid #ffd773;
// `

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  padding: 100px 60px 100px 60px;
  width: 60%;
  border-radius: 30px;
  margin-bottom: 30px;
`

export const CcNumber = styled.p`
  color: white;
  font-size: 35px;
  font-weight: 400px;
  margin-bottom: 60px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`

export const CardHolder = styled.p`
  color: white;
  font-size: 15px;
  margin-bottom: 20px;
  text-align: center;
`

export const CcName = styled.p`
  color: white;
  font-size: 25px;
`

export const DetailsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 26px;
  text-align: center;
`

export const DetailsCard = styled.form`
  box-shadow: 0px 0px 10px 0px #bfbfbf;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  justify-content: center;
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
