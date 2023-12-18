import React from 'react';
import styled from 'styled-components';
const Text=styled.p`
color: var(--Fonts-N900, #0F1532);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 22px;
letter-spacing: 0.25px;
margin-left:24px;
margin-right:24px;
@media(width>678px){
    color: var(--Fonts-N800, #292F4D);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
letter-spacing: 0.15px;
margin-right:24px;
}
`
function CurrentLocation(props:any){
    return (
        <>
            <Text>Current location </Text>
            <Text>{props.clickedLocation}</Text>
        </>
    )
}
export default CurrentLocation;