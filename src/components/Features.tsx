import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card=styled.div`
    height:auto; 
    width:48%;
    border-radius:16px;
    position:relative;
    background-color:#fff;
    box-shadow: 0px 16px 20px 0px rgba(58, 42, 0, 0.12);
    margin:0px;
    @media(width>678px){
        width:100%;
        height:128px;
        margin-left:24px;
    }
`;

const Circle=styled.div`
    width:48px;
    height:48px;
    position: absolute;
    right: 5%;
    top: -24px;
    background-color:#FFE5A0;
    border-radius:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    @media(width>678px){
        width:64px;
        height:64px;
        left: 5%;
    }
`;

const Image=styled.img`
    height:24px;
    width:24px;
    @media(width>678px){
        height:32px;
        width:32px;
    }
`;

const TextArrowWrap=styled.div`
    width:90%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:41px;
    @media(width>678px){
        width:90%;
        justify-content:space-between;
    }
`;

const Text=styled.div`
    margin-left:16px;
    margin-bottom:16px;
    color:#0F1532;
    font-family:Manrope;
    font-size:18px;
    font-style:normal;
    font-weight:700!important;
    line-height:22px;
    letter-spacing:0.15px;
    @media(width>678px){
        margin-left:32px;
        margin-top:16px;
        color: var(--fonts-n-900, #0F1532);
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px; /* 133.333% */
    }
`;

const Arrow=styled.div`
    disply:flex;
    @media(width>375px){
        margin-top:15px;
    }
    @media(width>678px){
        margin-top:20px;
    }
`;

const Features=(props: {name:string, pic:string, path:string})=>{
    const Navigator=useNavigate();
    return (
        <Card onClick={()=>Navigator(props.path)} >
            <Circle>
                <Image src={props.pic}/>
            </Circle>
            <TextArrowWrap >
                <Text>{props.name}</Text>
                <Arrow >
                    <Image  src='./assets/ArrowRight.png'/>
                </Arrow>
            </TextArrowWrap>
        </Card>
    )
}
export default Features;
