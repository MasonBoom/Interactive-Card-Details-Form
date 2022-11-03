import React from "react";
import {
  AppContainer,
  ColoredBackground,
  CardDiv,
  CardFront,
  CardBack,
  CardSwipe,
  CvcSection,
} from './app.styles'

function App() {
  return (
    <AppContainer>
      <ColoredBackground>
        <div></div>
      </ColoredBackground>
      <CardDiv>
        <CardFront>

        </CardFront>
        <CardBack>
          <CardSwipe />
          <CvcSection>
            <span>000</span>
          </CvcSection>
        </CardBack>
      </CardDiv>
    </AppContainer>
  );
}

export default App;
