import React from "react";
import styled from "styled-components";

function SmallHead({title, identifier}){
    return (
        <SmallHeadStyled>
            <h3>
                {title}
            </h3>
        </SmallHeadStyled>
    );
}

const SmallHeadStyled = styled.div`
    h3{
        background: linear-gradient(10deg, rgb(130, 26, 27), rgb(207, 63, 61));
        background-clip: text;
        display: inline-block;
        font-weight: bold;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
`;

export default SmallHead;