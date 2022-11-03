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
`

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
    margin-top: 150px;
    margin-left: -100px;
    width: 600px;
    height: 600px;
`;

export const Card = styled.div`
    background: linear-gradient(163.95deg, #6348FE 4.74%, #610595 88.83%);
    border-radius: 10px;
    width: 400px;
    height: 250px;
`;
