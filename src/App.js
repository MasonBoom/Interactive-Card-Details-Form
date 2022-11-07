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
  CircleRow,
  WhiteCircle,
  TransparentCircle,
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
import whiteCircle from './assets/whiteCircle.svg';

function App() {
  const [page, setPage] = useState('main')
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cvc, setCvc] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  // formats credit card number

  const cardNumberFormat = (number) => {
    return number.replace(/(\d{4})/g, '$1 ').trim()
  }

  // checks if form is complete before going to the confirmation page

  const validateAndSubmit = () => {
    if (name === '' || cardNumber.length < 16 || expMonth.length < 2 || expYear.length < 2 || cvc.length < 3) {
      alert('Please fill out all fields')
    } else {
      setPage('confirmPage')
    }
  }

  // all fields are reset when the 'confirm' button is pressed after submitting form

  const resetAllFields = () => {
    setName('')
    setCardNumber('')
    setExpMonth('')
    setExpYear('')
    setCvc('')
    setPage('main')
  }

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
            onClick={() => resetAllFields()}
          >
            Continue
          </ConfirmButton>
        </MainConfirmation>
      </UserContainer>
    )
  }

  return (
    <Main>
      <ColoredBackground />
      <CardDiv>
        <CardFront>
          <CircleRow>
            <WhiteCircle src={whiteCircle} alt='White Circle' />
            <TransparentCircle />
          </CircleRow>
          <CardNumber>{cardNumber.length < 16 ? '0000 0000 0000 0000' : cardNumberFormat(cardNumber)}</CardNumber>
          <CardName>{name === '' ? 'Card Holder' : name}
            <span>{expMonth === '' ? '00' : expMonth}/{expYear.length < 2 ? '00' : expYear}</span>
          </CardName>
        </CardFront>
        <CardBack>
          <CardSwipe />
          <CvcSection>
            <span>{cvc.length < 3 ? '000' : cvc}</span>
          </CvcSection>
          <CardBackImg src={cardBackImg} alt="Back of card image writing" />
        </CardBack>
      </CardDiv>
        {page === 'main' ?
          <UserContainer>
            <Label>Cardholder Name</Label>
            <InputField 
              placeholder="e.g. John Doe" 
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
            <Label>Card Number</Label>
            <InputField 
              type="tel" 
              inputmode="numeric" 
              pattern="[0-9]*" 
              autocomplete="cc-number" 
              maxLength="16" 
              placeholder="xxxx xxxx xxxx xxxx"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber((v) => (e.target.validity.valid ? e.target.value : v))
              }
              required
            >
            </InputField>
            <FinalInputRow>
              <ExpDate>
                <Label>Exp. Date</Label>
                <DateInputs>
                  <InputField
                    className="mm"
                    type="text"
                    pattern="[0-9]*"
                    autocomplete="cc-exp"
                    maxLength="2"
                    placeholder="MM"
                    value={expMonth}
                    onChange={(e) =>
                      setExpMonth((v) => (e.target.validity.valid ? e.target.value : v))
                    }
                    required
                  />
                  <InputField
                    className="yy"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="cc-exp"
                    maxLength="2"
                    placeholder="YY"
                    value={expYear}
                    onChange={(e) =>
                      setExpYear((v) => (e.target.validity.valid ? e.target.value : v))
                    }
                    required
                  />
                </DateInputs>
              </ExpDate>
              <CVC>
                <Label>CVC</Label>
                <InputField
                  className="cvc"
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxLength="3"
                  placeholder="xxx"
                  onChange={(e) =>
                    setCvc((v) => (e.target.validity.valid ? e.target.value : v))
                  }
                  required
                />
              </CVC>
            </FinalInputRow>
            <ConfirmButton onClick={() => validateAndSubmit()}>Confirm</ConfirmButton>
          </UserContainer>
        : 
          <Confirmation />
        }
    </Main>
  );
}

export default App;
