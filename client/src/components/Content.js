import React from "react";
import styled from "styled-components";
import SmallHead from "./SmallHead";
import blockchain from '../assets/bchain.png';
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core';

const Content = () => {
    const navigate = useNavigate();

    const register = () => {

        navigate('/register')

    }

    return ( 
        <ContentStyle>
            <div className="content">
                <div className="left">
                    <SmallHead title={"Welcome to Citizen Bank"} identifier={'Before'}/>
                    <h1 style={{ color: 'black'}}>
                        We offer the best services to our customers from the convenience of their homes.
                        The one stop for everything banking
                    </h1>
                    <p style={{ color: 'black'}}>
                        Just register yourself and gain access to features like transferring funds, depositing money and long term low interest loans
                    </p>
                    <Button variant="contained" style={{ marginTop: '20px', color: 'white', backgroundColor: '#821a1b',  borderRadius: "10px" }} size="large" onClick={register}>Get started</Button>
                </div>
                <div className="right">
                    <img src={blockchain} alt="" />
                </div>
            </div>
        </ContentStyle>
    );
}

const ContentStyle = styled.div`
    position: absolute;
    top: 0;
    left: 45%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .left{
        text-align: left;
    }
    
    

    .content{
        color: white;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
                font-size: 1.5em;
            }
        }

        @media screen and (max-width: 768px) {
            .left {
                display: flex;
                justify-content: center;
                flex-direction: column;
    
                h1 {
                    padding: 0.5rem 0;
                    font-size: 0.9em;
                }
    
                p {
                    font-size: 0.7em;
                }
            }
        }

        

        .right{
            position: absolute;
            right: -11%;
            bottom: -1%;
            width: 60%;
        }
    }
`;

export default Content ;