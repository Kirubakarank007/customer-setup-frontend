import React from "react";
import styled from "styled-components";
const Search=styled.div`
    width: 100%;
    height: 48px;
    flex-shrink: 0;
    border-radius: 14px;
    background: var(--secondary-white, #FFF);
    box-shadow: 0px 4px 16px 0px rgba(84, 75, 42, 0.20);
    margin-top:24px;
    @media(width>678px){
        width:90%;
        height:56px;
        border:20px;
    }
`;

const InnerSearchWrapper=styled.div`
    margin-left:16px;
    margin-right:16px;
    display:flex;
    justify-content:space-between;
`;

const InnerSearch=styled.input`
    margin-top:9px;
    border:none;
    width:100%;
    font-size:14px;
    @media(width>678px){
        margin-top:15px;
        font-size:16px;
    }
`;

const ImageSearch=styled.div`
    margin-top:12px;
    @media(width>678px){
        margin-top:15px;
    }
`;

const Searchbar=()=>{
    return (
        <>
            <Search>
                <InnerSearchWrapper >
                    <InnerSearch type='text' placeholder='Search' />
                    <ImageSearch >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_7166_5341)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18.0493 19.9635C16.3696 21.2414 14.2734 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.5288 21.0614 16.8383 19.5135 18.5993L22.2071 21.2929C22.5976 21.6834 22.5976 22.3166 22.2071 22.7071C21.8166 23.0976 21.1834 23.0976 20.7929 22.7071L18.0493 19.9635Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_7166_5341">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </ImageSearch>
                </InnerSearchWrapper>
            </Search>
        </>
    )
}
export default Searchbar;