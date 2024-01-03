import { useState } from "react";
import styled from "styled-components";

const FieldSet = styled.fieldset`
  border-radius: 14px;
  border: 1px solid #D9D4C5;
`;

const Legend = styled.legend`
  color: var(--Fonts-N800, #292F4D);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.25px;
  @media (width > 678px) {
    color: var(--Fonts-N800, #292F4D);
    font-family: Manrope;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.4px;
  }
`;

const InputArea = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background-color: white;
  height: 35px;
  color: var(--Fonts-N900, #0F1532);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  @media (width > 678px) {
    font-size: 16px;
    letter-spacing: 0.15px;
  }
`;

const InnerSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const ImageSearch = styled.div`
  margin-top: 12px;
  @media (width > 678px) {
    margin-top: 5px;
  }
`;

const OptionItem = styled.div`
  cursor: pointer;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 24px;
  color: #292F4D; // Default text color
  &:hover {
    background-color: #FFFAE8; // Change the background color on hover
  }
`;

const CustomScrollbar = styled.div`
scrollbar-width: thin;
scrollbar-color: #3F4756 #EDEDED;


&::-webkit-scrollbar {
  width: 8px;

}

&::-webkit-scrollbar-thumb {
  background-color: #C8CDDF;
  border-radius: 6px;
  border: 3px solid #EDEDED;
}

&::-webkit-scrollbar-track {
  background-color: #EDEDED;
  border-radius: 6px;
}

overflow-y: scroll;
height: 150px;  /* Set the height as needed */
border-radius: 20px;  /* Add your border-radius here */
background-color: #fff;  /* Set the background color as needed */
width: 50%;
// display: flex;
// flex-direction: column;
`;

const Warning = styled.div`
    padding: 16px;
    gap: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF4E5;
    border-radius: 20px;
`;

const WarnText = styled.p`
    color: var(--Secondary-Black, #000);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.15px;
`;

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
const CustomInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  

  const toggleDropdown = () => {
    setShowDropdown(true);
  };

  const toggleDropup = () => {
    setShowDropdown(false);
  }

  const handleSearchInputChange = (e:any) => {
    setSearchText(e.target.value);
    setShowWarning(true);
    setSelectedOption(""); // Clear the selected option when typing in the input
  };

  const handleSelectOption = (option:any) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleCancel = () => {
    setSelectedOption("");
    setSearchText("");
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
    <FieldSet style={{ backgroundColor: "white", width: "50%", borderRadius: 20 }}>
      {isFocused ? (
        <>
          <Legend>Facility Type</Legend>
          <InnerSearchWrapper>
            <ImageSearch>
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
            <InputArea
              type="text"
              placeholder="Search"
              onBlur={() => setIsFocused(true)}
              value={selectedOption || searchText}
              onChange={handleSearchInputChange}
              onFocus={toggleDropdown}
            />
            
            
            {showDropdown?(
                
                <img
                    src={selectedOption ? "./assets/Cancel.svg" : "./assets/Dropup.png"}
                    alt={selectedOption ? "Cancel" : "Arrow"}
                    onClick={selectedOption ? handleCancel : toggleDropup}
                    style={{ cursor: selectedOption ? "pointer" : "default", width: 24, height: 24, marginTop:5 }}
                />
                ):(<img src="./assets/Dropdown.png" alt="Down" onClick={toggleDropdown} style={{ cursor: selectedOption ? "pointer" : "default", width: 24, height: 24, marginTop:5 }}/>)
            }   
          </InnerSearchWrapper>
          
        </>
      ) : (
        <InputArea
          type="text"
          placeholder="Facility Type"
          onFocus={() => setIsFocused(true)}
        />
      )}
    </FieldSet>
    {showWarning && <div style={{width:"50%", backgroundColor:"#fff", padding:8, borderRadius:20}}><Warning><img src="./assets/info.png" alt="info" style={{width:24, height:24}}/><WarnText>This facility type is not on our list. Modify your search or select ‘other’ option from the list below.</WarnText></Warning></div>}
    
    {showDropdown && (
        
    
        <CustomScrollbar>
        
            <div>
            {filteredOptions.map((option) => (
                <>
                    <hr style={{border:"1px solid #C8CDDF"}}></hr>
                    <OptionItem
                    key={option}
                    onClick={() => handleSelectOption(option)}
                    >
                    
                    <p style={{margin:0, color:"#292F4D"}}>{option}</p>
                    </OptionItem>
                </>

            ))}
            {filteredOptions.length === 0 && (
                <OptionItem onClick={() => {handleSelectOption("Other");setShowWarning(false);}} style={{ cursor: "pointer" }}>
                    Other
                </OptionItem>

            )}
            </div>
        </CustomScrollbar>
      
    )}
    </>
  );
};

export default CustomInput;
