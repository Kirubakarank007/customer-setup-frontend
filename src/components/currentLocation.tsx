import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
margin-left:24px;
margin-right:24px;
margin-top:24px;    
@media(width>678px){
    margin-left:24px;
    margin-right:24px;}
`
const Current=styled.b`
    color: var(--Fonts-N900, #0F1532);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 150% */
    letter-spacing: 0.15px;
    @media(width>678px){
        font-size: 16px;
        line-height: 24px; /* 157.143% */
        letter-spacing: 0.25px;
    }
`
const TextContainer=styled.div`
// margin-top:16px;
// background-color:red;
`
const Text=styled.p`
    color: var(--Fonts-N900, #0F1532);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.25px;
    @media(width>678px){
        color: var(--Fonts-N800, #292F4D);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Manrope;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; 
        letter-spacing: 0.15px;
}
`
function CurrentLocation(props:any){
    return (
        <Container>
            <Current>Current location </Current>
            <TextContainer><Text>{props.clickedLocation}</Text></TextContainer>
        </Container>

    )
}
export default CurrentLocation;