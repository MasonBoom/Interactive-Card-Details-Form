import React, { useState } from "react";
import {
  Main,
  ColoredBackground,
  CardDiv,
  CardFront,
  CardBack,
  CardSwipe,
  CvcSection,
  CardBackImg,
  WhiteCircle,
  CardNumber,
  CardName,
  UserContainer,
  Label,
  InputField,
  FinalInputRow,
  ExpDate,
  DateInputs,
  CVC,
  ConfirmButton,
  MainConfirmation,
  CheckmarkContainer,
  CheckmarkImg,
  Header,
  SubHeader,
} from './app.styles';
import cardBackImg from './assets/cardBack.svg';
import checkmark from './assets/checkmark.svg';

function App() {
  const [page, setPage] = useState('main')

  const Confirmation = () => {

    return (
      <UserContainer>
        <MainConfirmation>
          <CheckmarkContainer>
              <CheckmarkImg src={checkmark} alt="checkmark" />
          </CheckmarkContainer>
          <Header>Thank you!</Header>
          <SubHeader>We've added your card details</SubHeader>
          <ConfirmButton 
            className={page} 
            onClick={() => setPage('main')}
          >
            Continue
          </ConfirmButton>
        </MainConfirmation>
      </UserContainer>
    )
  }

  const UserForm = () => {

    return (
      <UserContainer>
        <Label>Cardholder Name</Label>
        <InputField 
          placeholder="e.g. John Doe" 
          type="text"
          required
        />
        <Label>Card Number</Label>
        <InputField 
          type="tel" 
          inputmode="numeric" 
          pattern="[0-9\s]{16}" 
          autocomplete="cc-number" 
          maxlength="16" 
          placeholder="xxxx xxxx xxxx xxxx"
          required
        >
        </InputField>
        <FinalInputRow>
          <ExpDate>
            <Label>Exp. Date</Label>
            <DateInputs>
              <InputField
                className="mm"
                type="tel"
                inputmode="numeric"
                pattern="[0-9\s]{2}"
                autocomplete="cc-exp"
                maxlength="2"
                required
              />
              <InputField
                className="yy"
                type="tel"
                inputmode="numeric"
                pattern="[0-9\s]{2}"
                autocomplete="cc-exp"
                maxlength="2"
                required
              />
            </DateInputs>
          </ExpDate>
          <CVC>
            <Label>CVC</Label>
            <InputField
              className="cvc"
              type="tel"
              inputmode="numeric"
              pattern="[0-9\s]{3}"
              maxlength="3"
              placeholder="xxx"
              required
            />
          </CVC>
        </FinalInputRow>
        <ConfirmButton onClick={() => setPage('confirmPage')}>Confirm</ConfirmButton>
      </UserContainer>
    )
  }




  return (
    <Main>
      <ColoredBackground />
      <CardDiv>
        <CardFront>
          <WhiteCircle>
            <WhiteCircle className="transparentcircle"></WhiteCircle>
          </WhiteCircle>
          <CardNumber>0000 0000 0000 0000</CardNumber>
          <CardName>Card Holder
            <span>00/00</span>
          </CardName>
        </CardFront>
        <CardBack>
          <CardSwipe />
          <CvcSection>
            <span>000</span>
          </CvcSection>
          <CardBackImg src={cardBackImg} alt="Back of card image writing" />
        </CardBack>
      </CardDiv>
        {page === 'main' ? <UserForm /> : <Confirmation />}
    </Main>
  );
}

export default App;
