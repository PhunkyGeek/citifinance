import React from "react";
import styled from 'styled-components';
import buisness from '../assets/marketing.mp4';
import circles from '../assets/circles.svg';
import { innerLayout } from "../styles/Layouts";
import Content from './Content';

const MainArea = () => {
    return ( 
        <MainAreaStyled>
            <video src={buisness} muted autoPlay playsInline loop></video>
            <img src={circles} alt="" className="overlay" />
            <InnerLayoutStyled>
                <Content/>
            </InnerLayoutStyled>
            
        </MainAreaStyled>
    );
}

const MainAreaStyled = styled.div`
    width: 100%;
    height: 600px;
    position: relative;
    overflow: hidden;
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        right: -400px;
        top: -200px;
    }

    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
    }

    @media screen and (max-width: 768px) {
        .overlay {
            right: -200px;
            top: -100px;
        }
    }
`;

const InnerLayoutStyled = styled(innerLayout)`
    @media screen and (max-width: 768px) {
        padding: 2rem;
    }
`;

export default MainArea;
