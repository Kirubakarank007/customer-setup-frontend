
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div`

  width: 50%;
  height:auto;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--Secondary-White, #FFF);
  box-shadow: 0px -4px 20px 0px rgba(84, 75, 42, 0.15);
  position:relative;
  @media(width<678px){
    width:90%;
    margin-left:24px;
    margin-right:24px;
    height:500px;
    background-color:none ;
  }
`
const InnerBox=styled.div`
  height: 390px;
  flex-shrink: 0;
  background-color:#FFEDBF;
  border-radius: 24px;
  @media(width<678px){
    height:324px;
  }
`
const Cancel=styled.div`
  position:absolute;
  right:3%;
  top:-3%;
`
const InsideInnerBoxWrapper=styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  position:absolute;
  align-items:center;
`
const PicHolder=styled.div`
  margin-top:48px;
  @media(width<678px){
    margin-top:-55px;
  }
`

const Congrats=styled.b`
  color: var(--Fonts-N900, #0F1532);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  margin-top:40px;
  @media(width<678px){
    margin-top:34px;
    font-size: 20px;
    line-height: 28px; 
    letter-spacing: 0.15px;
  }
`

const Detail=styled.p`
  margin-top:40px;
  margin-bottom:0px;
  color: var(--Fonts-N800, #292F4D);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.15px;
  @media(width<678px){
    font-size: 16px;
    font-weight: 500;
    line-height: 24px; 
  }
`

const Bold=styled.b`
  color:#0F1532;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.15px;
  @media(width<678px){
    font-size: 16px;
    line-height: 24px;
  }
`

const WrapButton=styled.div`
  display:flex;
  margin-top:40px;
  padding-bottom:40px;
  justify-content:center;
  gap:24px;
  flex-wrap:wrap;
  @media(width<678px){
    margin-top:35px;
  }
`

const Button=styled.button`
  display: flex;
  height: 56px;
  padding: 17px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  border: 1px solid var(--Primary-Blue, #0B30B2);
  @media(width<678px){
    width:100%
  }
`

const ButtonText=styled.b`
  color: #0B30B2;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; 
  letter-spacing: 0.15px;
  @media(width<678px){
    font-size: 14px;
    line-height: 22px; 
    letter-spacing: 0.2px;
  }
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 40%);
  backdrop-filter: blur(1px); /* Adjust the blur intensity as needed */
  z-index: 999; /* Ensure the backdrop stays behind the popup */
  @media(width<678px){
    background-color:#fff;
    height:100vh;
  }
`

const Wrapper=styled.div`
  display:flex;
  height:100%;
  justify-content:center;
  align-items:center;
`

function CongratsPopUp(props:{facilityNickName:string}){
  
  const [windowwidth,Setwindowwidth]=useState(window.innerWidth);
  const navigator=useNavigate();
  useEffect(()=>{
    const handleResize=()=>{
      Setwindowwidth(window.innerWidth);
    };
    window.addEventListener('resize',handleResize);
    const fetchData=async()=>{
      try{
        const response=await axios.get("https://e14b-122-186-163-190.ngrok-free.app/addfacility", {
          headers: {
            'Accept': '*/*'
          },
        });
        const data=response.data;
        console.log("fetched: ",data);

      }catch(error){
        console.log(error);
      }
    }
    fetchData();
    return ()=>{window.removeEventListener('resize',handleResize);};
  },[]);
  return (
  <Backdrop>
    {
        windowwidth<678?(<img onClick={()=>navigator("/")} src="./assets/Arrow---Left.png" alt="" width={24} height={24} style={{marginTop:50,marginLeft:24}}/>):(null)
    }
   <Wrapper>
      <Box>
        <InnerBox>
          {
            windowwidth>678?(<Cancel onClick={()=>navigator('/')}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{backgroundColor:'white',borderRadius:'100%  '}}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.0003 20C35.0003 28.2842 28.2846 35 20.0003 35C11.7161 35 5.00033 28.2842 5.00033 20C5.00033 11.7157 11.7161 4.99996 20.0003 4.99996C28.2846 4.99996 35.0003 11.7157 35.0003 20ZM38.3337 20C38.3337 30.1252 30.1255 38.3333 20.0003 38.3333C9.8751 38.3333 1.66699 30.1252 1.66699 20C1.66699 9.87474 9.8751 1.66663 20.0003 1.66663C30.1255 1.66663 38.3337 9.87474 38.3337 20ZM17.0122 14.6548C16.3613 14.0039 15.306 14.0039 14.6551 14.6548C14.0043 15.3057 14.0043 16.3609 14.6551 17.0118L17.6433 20L14.6551 22.9881C14.0043 23.639 14.0043 24.6943 14.6551 25.3451C15.306 25.996 16.3613 25.996 17.0122 25.3451L20.0003 22.357L22.9885 25.3451C23.6394 25.996 24.6946 25.996 25.3455 25.3451C25.9964 24.6943 25.9964 23.639 25.3455 22.9881L22.3573 20L25.3455 17.0118C25.9964 16.3609 25.9964 15.3057 25.3455 14.6548C24.6946 14.0039 23.6394 14.0039 22.9885 14.6548L20.0003 17.6429L17.0122 14.6548Z" fill="black"/>
          </svg></Cancel>):(null)
          }
          <InsideInnerBoxWrapper>  
            <PicHolder>
              <svg xmlns="http://www.w3.org/2000/svg" width="198" height="96" viewBox="0 0 198 96" fill="none" >
                <ellipse cx="100.27" cy="49.727" rx="33.027" ry="32.9066" fill="#148740"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M112.601 41.2383C113.097 41.7325 113.097 42.5339 112.601 43.0281L97.8066 57.7683C97.0625 58.5097 95.8561 58.5097 95.1119 57.7683L87.9394 50.622C87.4434 50.1277 87.4434 49.3263 87.9394 48.8321C88.4355 48.3378 89.2398 48.3378 89.7359 48.8321L96.4593 55.531L110.804 41.2383C111.3 40.744 112.105 40.744 112.601 41.2383Z" fill="white"/>
                <path d="M192.513 27.9491L192.618 28.587C192.92 26.0979 194.945 24.1672 197.446 23.9892C194.945 23.8112 192.92 21.8805 192.618 19.3914L192.513 20.0292C192.157 22.1774 190.387 23.809 188.217 23.9892C190.387 24.1694 192.157 25.801 192.513 27.9491Z" fill="#148740" stroke="#148740" stroke-linejoin="round"/>
                <path opacity="0.6" d="M4.85065 66.7752L4.95636 67.4131C5.25835 64.9239 7.28291 62.9932 9.78399 62.8152C7.28291 62.6372 5.25835 60.7066 4.95636 58.2174L4.85065 58.8553C4.49468 61.0034 2.72464 62.635 0.554688 62.8152C2.72464 62.9955 4.49468 64.6271 4.85065 66.7752Z" fill="#148740" stroke="#148740" stroke-linejoin="round"/>
                <path d="M137.615 10.5086L137.733 11.2174C138.068 8.45166 140.318 6.30647 143.097 6.1087C140.318 5.91092 138.068 3.76573 137.733 1L137.615 1.70874C137.22 4.09556 135.253 5.90844 132.842 6.1087C135.253 6.30895 137.22 8.12183 137.615 10.5086Z" fill="#FFD058" stroke="#FFD058" stroke-linejoin="round"/>
                <path opacity="0.4" d="M54.3067 87.3795L54.9056 87.3369L54.3067 87.2942C50.486 87.0223 47.3942 84.0804 46.9328 80.2779L46.8596 79.6738L46.6834 80.7369C46.0901 84.3172 43.14 87.0365 39.5234 87.3369C43.14 87.6373 46.0901 90.3566 46.6834 93.9368L46.8596 94.9999L46.9328 94.3958C47.3942 90.5933 50.486 87.6514 54.3067 87.3795Z" fill="#148740" stroke="#148740" stroke-linejoin="round"/>
                <path d="M161.607 65.4699L161.759 66.3913C162.196 62.7958 165.12 60.0071 168.733 59.7499C165.12 59.4928 162.196 56.7041 161.759 53.1086L161.607 54.03C161.092 57.1329 158.536 59.4896 155.401 59.7499C158.536 60.0103 161.092 62.367 161.607 65.4699Z" fill="#FFD058" stroke="#FFD058" stroke-linejoin="round"/>
                <path d="M28.4376 27.9491L28.5433 28.587C28.8453 26.0979 30.8698 24.1672 33.3709 23.9892C30.8698 23.8112 28.8453 21.8805 28.5433 19.3914L28.4376 20.0292C28.0816 22.1774 26.3116 23.809 24.1416 23.9892C26.3116 24.1694 28.0816 25.801 28.4376 27.9491Z" fill="#FFD058" stroke="#FFD058" stroke-linejoin="round"/>
              </svg>
            </PicHolder>
            <Congrats>Congratulations!</Congrats>
            <Detail>Your facility <Bold>{props.facilityNickName}</Bold> has been added!</Detail>
            <Detail style={{marginTop:'16px'}}>You can find in under <Bold>‘My company’</Bold></Detail>
          </InsideInnerBoxWrapper>
      </InnerBox>
      <WrapButton>
          <Button style={{backgroundColor:'#fff'}} onClick={()=>navigator('/')}><ButtonText>Add another facility</ButtonText></Button>
          <Button style={{backgroundColor:'#0B30B2'}} onClick={()=>navigator("/")}><ButtonText style={{color:'#FFFFFF'}}>Go to My company</ButtonText></Button>
        </WrapButton>
      </Box>
    </Wrapper>
  </Backdrop>
  )
}
export default CongratsPopUp;