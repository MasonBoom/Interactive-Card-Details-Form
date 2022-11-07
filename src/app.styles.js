import styled, { keyframes } from "styled-components"
import mainBackgroundColor from "./assets/mainBackgroundColor.png"

// animations

const gradientMovement = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 0;
    }
`;

const gradientMovementCheckmark = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 100%;
    }
`;

// main styles

export const Main = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const ColoredBackground = styled.div`
    height: 100vh;
    width: 35%;
    background: url(${mainBackgroundColor});
    margin-top: -10px;
    margin-left: -10px;
    margin-bottom: -12px;
    background-size: cover;

    @media (max-width: 1000px) {
        height: 30vh;
        width: 103%;
    }
`;

export const CardDiv = styled.section`
    margin: auto -25vh;
    width: 600px;
    height: 700px;

    @media (max-width: 1200px) {
        width: 350px;
    }

    @media (max-width: 1000px) {
        margin: auto;
        margin-top: -100px;
        width: 350px;
    }
`;

export const CardFront = styled.div`
    background: linear-gradient(90deg, #47A2FF, #610595, #47A2FF, #610595);
    border-radius: 10px;
    width: 500px;
    height: 275px;
    animation: ${gradientMovement} 3s linear infinite;
    background-size: 300% 100%;
    padding-top: 25px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: 300px;
        height: 150px;
    }

    @media (max-width: 1000px) {
        position: absolute;
    }
`;

export const CircleRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const WhiteCircle = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left: 25px;

    @media (max-width: 1200px) {
        width: 30px;
        height: 30px;
    }
`;

export const TransparentCircle = styled.div`
    background: transparent;
    border: 1px solid white;
    width: 25px;
    height: 25px;
    margin-left: 25px;
    margin-top: 12px;
    border-radius: 50%;

    @media (max-width: 1200px) {
        width: 15px;
        height: 15px;
        margin-top: 7px;
        margin-left: 10px;
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

    @media (max-width: 1200px) {
        font-size: 18px;
        letter-spacing: 4px;
        margin-top: 30px;
    }
`;

export const CardName = styled.div`
    letter-spacing: 2px;
    margin-top: 60px;
    font-size: 20px;
    font-family: 'Arial', sans-serif;
    color: #FFFFFF;
    margin-left: 30px;

    span {
        float: right;
        margin-left: auto;
        margin-right: 35px;
    }

    @media (max-width: 1200px) {
        font-size: 12px;
        margin-top: 40px;
        margin-left: 20px;

        span {
            margin-right: 20px;
        }
    }
`;

export const CardBack = styled.div`
    background: #D2D3D9;
    width: 500px;
    height: 300px;
    margin-top: 100px;
    border-radius: 10px;
    float: right;

    @media (max-width: 1200px) {
        width: 300px;
        height: 175px;
        margin-top: 50px;
    }

    @media (max-width: 1000px) {
        margin-top: -100px;
    }
`;

export const CardSwipe = styled.div`
    background: #2F2F2F;
    margin-top: 30px;
    width: 100%;
    height: 50px;

    @media (max-width: 1200px) {
        height: 20px;
        margin-top: 15px;
    }
`;

export const CvcSection = styled.div`
    height: 50px;
    width: 75%;
    background: grey;
    border-radius: 4px;
    margin: 25px auto;

    span {
        font-family: 'Arial', sans-serif;
        font-style: normal;
        font-size: 30px;
        color: #FFFFFF;
        margin-right: 10px;
        letter-spacing: 2px;
        float: right;
        margin-top: 8px;
    }

    @media (max-width: 1200px) {
        height: 20px;

        span {
            font-size: 15px;
            margin-top: 1px;
            margin-right: 5px;
        }
    }
`;

export const CardBackImg = styled.img`
    width: 50%;
    display: block;
    margin: 40px auto;

    @media (max-width: 1200px) {
        margin: 20px auto;
    }
`;

export const UserContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 50vh;
    margin-top: 29vh;
    margin-left: 40vh;

    @media (max-width: 1200px) and (min-width: 1000px) {
        margin-left: 30vh;
        width: 40vh;
        height: 350px;
        margin-top: 22vh;
    }

    @media (max-width: 1000px) {
        margin: auto auto;
        margin-top: -400px;
        width: 90%;
    }
`;

export const Label = styled.span`
    font-family: 'Arial', sans-serif;
    color: #21092F;
    font-size: 22px;
    letter-spacing: 2px;
    margin-bottom: 10px;

    @media (max-width: 1200px) and (min-width: 1000px) {
        font-size: 14px;
        margin-bottom: 5px;
    }
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
    overflow: hidden;

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
        letter-spacing: 10px;
        font-size: 32px;
    }

    &.cvc {
        width: 30vh;
    }

    @media (max-width: 1200px) and (min-width: 1000px) {
        width: 30vh;
        height: 25px;

        &.mm, &.yy {
            width: 5vh;
            letter-spacing: 5px;
            font-size: 22px;
        }

        &.cvc {
            width: 10vh;
        }
    }

    @media (max-width: 1000px) {
        width: 100%;

        &.cvc {
            width: 100%;
        }
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

    @media (max-width: 1200px) and (min-width: 1000px) {
        width: 15vh;
    }
`;

export const DateInputs = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CVC = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vh;

    @media (max-width: 1200px) and (min-width: 1000px) {
        width: 20vh;
        float: right;
        margin-left: auto;
    }

    @media (max-width: 1000px) {
        width: 100%;
        margin-left: 15px;
    }
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

    &.confirmPage {
        margin-top: 11vh;
    }

    @media (max-width: 1200px) and (min-width: 1000px) {
        width: 32vh;

        &.confirmPage {
            align-self: center;
        }
    }

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const MainConfirmation = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: 1200px) and (min-width: 1000px) {
        margin-left: -80px;
    }
`;

export const CheckmarkContainer = styled.div`
    background: linear-gradient(0deg, #6348FE, #610595, #6348FE, #610595);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: ${gradientMovementCheckmark} 1s linear infinite;
    background-size: 100% 300%;
    margin: auto;
    text-align: center;
`; 

export const CheckmarkImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 25px auto;
`;

export const Header = styled.h2`
    color: #21092F;
    font-weight: 500;
    font-size: 32px;
    font-family: 'Arial', sans-serif;
    text-align: center;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    margin-top: 50px;
`;

export const SubHeader = styled.h3`
    font-weight: 500;
    font-size: 32px;
    font-family: 'Arial', sans-serif;
    text-align: center;
    font-size: 24px;
    color: #8F8694;
    margin-top: 10px;
`;

