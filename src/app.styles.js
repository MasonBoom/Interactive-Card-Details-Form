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
    margin-top: 10%;
    margin-left: -25vh;
    width: 600px;
    height: 700px;
`;

export const CardFront = styled.div`
    background-image: linear-gradient(90deg, #47A2FF, #610595, #47A2FF, #610595);
    border-radius: 10px;
    width: 500px;
    height: 300px;
    animation: ${gradientMovement} 3s linear infinite;
    background-size: 300% 100%;
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

