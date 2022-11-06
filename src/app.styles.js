import styled, { keyframes } from "styled-components"
import mainBackgroundColor from "./assets/mainBackgroundColor.png"

//animation

const gradientMovement = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 0;
    }
`;

//main styles

export const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ColoredBackground = styled.div`
    height: 100vh;
    width: 35%;
    background: url(${mainBackgroundColor});
    margin-top: -10px;
    margin-left: -10px;
    margin-bottom: -12px;
    background-size: cover;
`;

export const CardDiv = styled.section`
    margin: auto -25vh;
    width: 600px;
    height: 700px;
`;

export const CardFront = styled.div`
    background: linear-gradient(90deg, #47A2FF, #610595, #47A2FF, #610595);
    border-radius: 10px;
    width: 500px;
    height: 275px;
    animation: ${gradientMovement} 2s linear infinite;
    background-size: 300% 100%;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
`;

export const WhiteCircle = styled.div`
    background: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left: 25px;

    &.transparentcircle {
        background: transparent;
        border: 1px solid white;
        width: 25px;
        height: 25px;
        margin-left: 65px;
        margin-top: 12px;
    }
`;

export const CardNumber = styled.span`
    letter-spacing: 5px;
    color: #FFFFFF;
    font-size: 36px;
    font-family: 'Arial', sans-serif;
    margin-top: 70px;
    align-text: center;
    margin-left: auto;
    margin-right: auto;
`;

export const CardName = styled.div`
    letter-spacing: 2px;
    margin-top: 60px;
    font-size: 20px;
    font-family: 'Arial', sans-serif;
    color: #FFFFFF;
    margin-left: 30px;

    span {
        margin-left: 245px;
    }
`;

export const CardBack = styled.div`
    background: #D2D3D9;
    width: 500px;
    height: 300px;
    margin-top: 100px;
    border-radius: 10px;
    float: right;

`;

export const CardSwipe = styled.div`
    background: #2F2F2F;
    margin-top: 30px;
    width: 100%;
    height: 50px;
`;

export const CvcSection = styled.div`
    height: 50px;
    width: 75%;
    background: grey;
    border-radius: 4px;
    margin: 25px auto;

    span{
        font-family: 'Arial', sans-serif;
        font-style: normal;
        font-size: 30px;
        color: #FFFFFF;
        margin-right: 10px;
        letter-spacing: 2px;
        float: right;
        margin-top: 8px;
    }
`;

export const CardBackImg = styled.img`
    width: 50%;
    display: block;
    margin: 40px auto;
`;

export const UserInputs = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 50vh;
    margin-top: 29vh;
    margin-left: 40vh;
`;

export const Label = styled.span`
    font-family: 'Arial', sans-serif;
    color: #21092F;
    font-size: 22px;
    letter-spacing: 2px;
    margin-bottom: 10px;
`;

export const InputField = styled.input`
    border: 1px solid #DFDEE0;
    border-radius: 8px;
    height: 40px;
    width: 50vh;
    margin-bottom: 20px;
    padding-left: 20px;
    font-size: 20px;
    font-family: 'Arial', sans-serif;
    color: black;

    &::placeholder {
        font-size: 20px;
        font-family: 'Arial', sans-serif;
        color: #DFDEE0;
    }

    &.mm {
        width: 6vh;
        margin-right: 1vh;
        letter-spacing: 10px;
        font-size: 32px;
    }

    &.yy {
        width: 6vh;
        letter-spacing: 5px;
        letter-spacing: 10px;
        font-size: 32px;
    }

    &.cvc {
        width: 30vh;
    }
`;

export const FinalInputRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ExpDate = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vh;
`;

export const DateInputs = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CVC = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vh;
`;

export const ConfirmButton = styled.button`
    background: #21092F;
    border-radius: 8px;
    width: 51vh;
    height: 75px;
    margin-top: auto;
    font-family: 'Arial', sans-serif;
    color: #FFFFFF;
    font-size: 48px;

    &:hover {
        background: #9C51C7;
        border: none;
        box-shadow: 5px 10px 8px #888888;
    }
`;
