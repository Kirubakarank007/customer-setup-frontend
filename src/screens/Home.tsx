
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Searchbar from '../components/Searchbar';
import Features from '../components/Features';

const Container=styled.div`
    margin-left:24px;
    margin-right:24px;
    @media(width>768px){
        margin-left:156px;
        margin-right:156px;
    }
`;

const HeaderWraper=styled.div`
    display:flex;
    flex-direction:row;
    margin-top:17px;
    width:100%;
    align-items:center;
    justify-content:space-between;
`;
const LogoText=styled.text`
    margin-left:8px;
    color:#000;
    font-family:Futura PT;
    font-size:24px;
    font-style:normal;
    font-weight:500;
    line-height:28px;
    letter-spacing:0.15px;
`;

const InfoText=styled.div`
    width:100%;
    color: var(--fonts-n-900, #0F1532);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; 
    letter-spacing: 0.25px;
    margin-top:24px;
    @media(width>768px){
        color: var(--fonts-n-900, #0F1532);
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 20px;
        line-height: 32px; 
        text-align:start;
    }
`;

const VideoHolder = styled.div`
    position: relative;
    width: 100%;
    height: 140px;
    // margin-top: 24px;
    border-radius: 16px;
    background-color: #ebebeb;
    @media(width>678px){
        width: 70%;
        height: 500px;
        flex-shrink: 0;
    }
`;
const VideoPlayer = styled.video`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: fit;
`;

const PlayButtonHolder = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:#fff;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PlayButton = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const Notification=styled.div`
    width:100%;
    background-color:#fff;
    justify-content:center;
    margin-top:25px;
    width:56px;
    height:56px;
    border-radius:20px;
    box-shadow: 0px 6px 20px 4px rgba(121, 87, 0, 0.06);
`;

const WrapFeatures=styled.div`
    display:flex;
    width:100%;
    
    // background-color:black;
    margin-top:44px;
    justify-content:space-between;
    row-gap:28px!important;
    // gap:px;
    flex-wrap:wrap;
    @media(width>678px){
        dispaly:flex;
        gap:44px!important;
        margin-top:20px;
    }
`;

const WrapVideoFeatures=styled.div`
    @media(width>678px){
      width:100%;
      display:flex;
      margin-top:44px;
      align-items:stretch;
      justify-content:space-between;
    }
`;

const WrapSearchNotification=styled.div`
    display:flex;
    justify-content:space-between;
`;

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [windowwidth,Setwindowwidth]=useState(window.innerWidth);

  useEffect(()=>{
    const handleResize=()=>{
      Setwindowwidth(window.innerWidth);
    };
    window.addEventListener('resize',handleResize);
    return()=>{
   window.removeEventListener('resize',handleResize);};},[]);
  
  const handlePlayClick = () => {
    const video:any = document.getElementById("videoPlayer");

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

    return (
        <Container>
            {
                windowwidth<678 ?(
                <>
                    <HeaderWraper>
                        <div style={{display:'flex'}}>
                             <img src='./assets/logo.png' width={32} height={24}/>
                             <LogoText>APK</LogoText>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_544_98446)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75914 4.79455C6.90217 5.86799 6.45771 7.29647 6.32284 8.6246C6.24522 9.38907 6.00425 10.1542 5.57834 10.8302C4.61997 12.3513 4.42081 13.3841 4.51638 14.0525C4.60512 14.6731 4.97667 15.1679 5.66731 15.5739C6.37962 15.9926 7.36291 16.2686 8.46793 16.4128C9.56084 16.5555 10.7043 16.5606 11.6865 16.485L11.7247 16.482H11.763C13.6682 16.482 15.2391 16.395 16.4746 16.1849C17.7301 15.9714 18.5187 15.6497 18.9674 15.2734C19.3507 14.9519 19.5476 14.5434 19.4983 13.867C19.444 13.121 19.0844 12.074 18.2634 10.6357C17.9459 10.0795 17.7564 9.46336 17.6903 8.84199C17.3897 6.01728 16.3709 4.63002 15.3161 3.90829C14.2162 3.15573 12.8939 2.99768 11.763 2.99768C9.83608 2.99768 8.58603 3.7588 7.75914 4.79455ZM6.20144 3.54696C7.39868 2.04731 9.21714 1 11.763 1C13.0297 1 14.8429 1.16529 16.4411 2.25874C18.0842 3.38301 19.326 5.36441 19.6735 8.6303C19.7121 8.99303 19.8219 9.34118 19.9948 9.64413C20.8702 11.1776 21.4011 12.5341 21.4875 13.7217C21.5791 14.9789 21.167 16.0342 20.2478 16.8051C19.3939 17.5211 18.1864 17.9201 16.8084 18.1544C15.4193 18.3906 13.7322 18.4786 11.8009 18.4797C10.7145 18.561 9.44674 18.5552 8.21017 18.3937C6.97104 18.232 5.69266 17.9051 4.65772 17.2967C3.6011 16.6755 2.73981 15.7187 2.54205 14.3358C2.35114 13.0006 2.81184 11.478 3.89162 9.7641C4.13694 9.37472 4.28896 8.91133 4.3386 8.42247C4.49901 6.84279 5.03429 5.00892 6.20144 3.54696ZM15.3932 19.71C15.8163 20.0632 15.8734 20.693 15.5208 21.1168C14.9944 21.7495 14.0276 22.5078 12.7751 22.7339C11.4523 22.9727 9.96762 22.5887 8.56478 21.1837C8.17533 20.7936 8.17533 20.1612 8.56478 19.7711C8.95422 19.381 9.58564 19.381 9.97509 19.7711C10.9656 20.7632 11.8078 20.8787 12.4213 20.7679C13.1051 20.6444 13.684 20.2041 13.9886 19.8379C14.3412 19.4142 14.97 19.3569 15.3932 19.71Z" fill="black"/>
                                <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" fill="#FFD058" stroke="black" stroke-width="2"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_544_98446">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                             </defs>
                        </svg>
                    </HeaderWraper>
                    <Searchbar/>
                </> 
                ):(
                <>
                    <WrapSearchNotification >
                        <Searchbar/>
                        <Notification >
                            <div style={{marginTop:'17px',marginLeft:'15px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_544_98446)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75914 4.79455C6.90217 5.86799 6.45771 7.29647 6.32284 8.6246C6.24522 9.38907 6.00425 10.1542 5.57834 10.8302C4.61997 12.3513 4.42081 13.3841 4.51638 14.0525C4.60512 14.6731 4.97667 15.1679 5.66731 15.5739C6.37962 15.9926 7.36291 16.2686 8.46793 16.4128C9.56084 16.5555 10.7043 16.5606 11.6865 16.485L11.7247 16.482H11.763C13.6682 16.482 15.2391 16.395 16.4746 16.1849C17.7301 15.9714 18.5187 15.6497 18.9674 15.2734C19.3507 14.9519 19.5476 14.5434 19.4983 13.867C19.444 13.121 19.0844 12.074 18.2634 10.6357C17.9459 10.0795 17.7564 9.46336 17.6903 8.84199C17.3897 6.01728 16.3709 4.63002 15.3161 3.90829C14.2162 3.15573 12.8939 2.99768 11.763 2.99768C9.83608 2.99768 8.58603 3.7588 7.75914 4.79455ZM6.20144 3.54696C7.39868 2.04731 9.21714 1 11.763 1C13.0297 1 14.8429 1.16529 16.4411 2.25874C18.0842 3.38301 19.326 5.36441 19.6735 8.6303C19.7121 8.99303 19.8219 9.34118 19.9948 9.64413C20.8702 11.1776 21.4011 12.5341 21.4875 13.7217C21.5791 14.9789 21.167 16.0342 20.2478 16.8051C19.3939 17.5211 18.1864 17.9201 16.8084 18.1544C15.4193 18.3906 13.7322 18.4786 11.8009 18.4797C10.7145 18.561 9.44674 18.5552 8.21017 18.3937C6.97104 18.232 5.69266 17.9051 4.65772 17.2967C3.6011 16.6755 2.73981 15.7187 2.54205 14.3358C2.35114 13.0006 2.81184 11.478 3.89162 9.7641C4.13694 9.37472 4.28896 8.91133 4.3386 8.42247C4.49901 6.84279 5.03429 5.00892 6.20144 3.54696ZM15.3932 19.71C15.8163 20.0632 15.8734 20.693 15.5208 21.1168C14.9944 21.7495 14.0276 22.5078 12.7751 22.7339C11.4523 22.9727 9.96762 22.5887 8.56478 21.1837C8.17533 20.7936 8.17533 20.1612 8.56478 19.7711C8.95422 19.381 9.58564 19.381 9.97509 19.7711C10.9656 20.7632 11.8078 20.8787 12.4213 20.7679C13.1051 20.6444 13.684 20.2041 13.9886 19.8379C14.3412 19.4142 14.97 19.3569 15.3932 19.71Z" fill="black"/>
                                        <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" fill="#FFD058" stroke="black" stroke-width="2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_544_98446">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </Notification>
                    </WrapSearchNotification>
                </>
            )}
            <InfoText>See how easy it is to setup your facility</InfoText>
            <WrapVideoFeatures>
                <VideoHolder>
                    <VideoPlayer id='videoPlayer' src="./assets/vdo.mp4"/>
                    {!isPlaying && (
                        <PlayButtonHolder>
                            <PlayButton src="./assets/Play.png" alt="Play Button" onClick={handlePlayClick}/>
                            </PlayButtonHolder>
                    )}
                </VideoHolder>
                <WrapFeatures>
                    <Features name="Add Facility" pic="./assets/Facility.png" path="/Facility"/>
                    <Features name='Add Users' pic='./assets/Team.png' path='/'/>
                    <Features name='Activate ARK Wallet' pic='./assets/Payment.png' path='/'/>
                </WrapFeatures>
            </WrapVideoFeatures>
        </Container>
    );
}

export default Home;
