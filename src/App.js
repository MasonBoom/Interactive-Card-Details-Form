import React from "react";
import {
  AppContainer,
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
} from './app.styles';
import cardBackImg from './assets/cardBack.svg';

function App() {

  return (
    <AppContainer>
      <ColoredBackground>
        <div></div>
      </ColoredBackground>
      <CardDiv>
        <CardFront>
          <WhiteCircle>
            <WhiteCircle className="transparentcircle"></WhiteCircle>
          </WhiteCircle>
          <CardNumber>0000 0000 0000</CardNumber>
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
    </AppContainer>
  );
}

export default App;
