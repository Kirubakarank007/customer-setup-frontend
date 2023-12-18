import React, { useEffect, useRef, useState } from "react";
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import Searchbar from "../components/Searchbar";
import CurrentLocation from "../components/currentLocation";
import CongratsPopUp from "../components/congratsPopUp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css"
import styled from "styled-components";

const Navbar=styled.div`
  height:59px;
  display:flex;
  align-items:center;
  background-color:#fff;
  z-index:1;
  position:absolute;
  width:100%;
  @media(width>678px){
    height:104px;
  }
`
const Image=styled.img`
height:24px;
width:24px;
margin-left:24px;
@media(width>678px){
  height:32px;
  width:32px;
}`

const HeaderText=styled.p`
font-size:20px;
color: var(--Fonts-N900, #0F1532);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 28px; /* 140% */
letter-spacing: 0.15px;
margin-left:8px;
@media(width>678px){
  font-size:24px;
}`
const SearchContainers=styled.div`
    margin-left:24px;
    margin-right:24px;
    @media(width>678px){
      width:100%;
      margin-left:156px;
      height:48px;
    }
`
const FacilityContainer=styled.div`
  background-color: white;
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px 10px 20px 6px rgba(121, 87, 0, 0.10);
    @media(width>678px){
      margin-right:156px;
      width:45%;
      height:auto;
      border-radius: 16px;
background: var(--Secondary-White, #FFF);
box-shadow: 0px 10px 20px 6px rgba(121, 87, 0, 0.10);
    }
  
`
const ButtonContainer=styled.div`
margin-left:24px;
margin-right:24px;
margin-bottom:24px;
@media(width>678px){
  margin-left:24px;
margin-right:24px;
margin-bottom:24px;
}`
const Button=styled.button
`width:100%;
height:56px;
text-align:center;
background-color:#0B30B2;
color:white;
border-radius:20px;
font-size:14px;
@media(width>678px){
    width:100%;
    font-size:16px;
}

`
const FacilitySearchWrap=styled.div`
width:100%;
 display:flex;
flex-direction:column;
 position:absolute;
 margin-top:74px;
 justify-content:space-between;
height:85vh;
@media(width>678px){
  flex-direction:row;
  height:auto;
  margin-top:130px;

}
`
const EntryField=styled.fieldset`
height:35px;
border-radius:14px;
margin-left:24px;
margin-top:24px;
margin-right:24px;
@media(width>678px){
  height:56px;
}
`
const EntryText=styled.input`
border:none;
outline:none;
width:100%;
background-color:white;
`
function AddFacilities() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
//   const [liveLocation, setLiveLocation] = useState<{lng:number, lat:number}>({lng: 0, lat: 0});
  const [zoom] = useState<number>(14);
  const [clickedLocation, setClickedLocation] = useState<string>("");
  const [currenLocation, setCurrentLocation] = useState<boolean>(false);
  const [confirmAddress, setConfirmAddress] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    facility_nickname: '',
    floor_number: '',
    location: '',
    service: '',
    
    // Add more form fields as needed
  }); 

  const [customValue, setCustomValue] = useState('');

  maptilersdk.config.apiKey = 'DIALvL1pmYZdL29IO9w0';

  interface MapOptions {
    container: string | HTMLElement;
    style: maptilersdk.ReferenceMapStyle | maptilersdk.MapStyleVariant;
    center: [number, number];
    zoom: number;
  }
  let marker: maptilersdk.Marker | null = null;

  async function reverseGeocoding(lng: number, lat: number) {
    if (!isNaN(lng) && !isNaN(lat)) {
      const result = await maptilersdk.geocoding.reverse([lng, lat]);
      console.log(result);
      const address = result.features[0]?.place_name || "Address not found";
      setClickedLocation(address);
      
      if (marker) {
        marker.setLngLat([lng, lat]);
      } else {
        marker = new maptilersdk.Marker({ color: "#FFD058", draggable: true })
          .setLngLat([lng, lat])
          .addTo(map.current!);
      }

      map.current!.flyTo({
        center: [lng, lat],
        essential: true,
      });
    }
  }

  useEffect(() => {
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {  
          if (map.current) return; // stops map from initializing more than once

            const options: MapOptions = {
              container: mapContainer.current!,
              style: maptilersdk.MapStyle.STREETS,
              center: [position.coords.longitude, position.coords.latitude],
              zoom: zoom,
            };
            
            map.current = new maptilersdk.Map(options);
            new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([position.coords.longitude, position.coords.latitude])
            .addTo(map.current!);

            reverseGeocoding(position.coords.longitude, position.coords.latitude);
             // Add a click event listener to the map
            map.current!.on("click", (e) => {
                const coordinates = e.lngLat;
                reverseGeocoding(coordinates.lng, coordinates.lat);
            });
        });
    }
  }, []);

  const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    // Use the value property of the target to set the state
    const selectedOptionValue = event.target.value;
    setCustomValue(selectedOptionValue);
    setSelectedOption(selectedOptionValue);

  };


  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    formData.location = clickedLocation;
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Now you have the form data in the formData state variable
    formData.service = customValue;
    console.log("Handle Submit Reached");
    try {
      const json=JSON.stringify(formData);
      console.log(json);
      const response = await axios.post('https://0432-122-186-163-190.ngrok-free.app/addfacility', json , {
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
      })
      if (!response.data) {
        throw new Error('Network response was not ok');
      }
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(formData);
  };
  const navigate=useNavigate();
  return (
    <>
        <Navbar>
          <Image src="./assets/ArrowLeft.png" onClick={()=>navigate("/")}/>
          <HeaderText >Add Facility</HeaderText>
        </Navbar>
    <div style={{
      width: "100%",
      height: "100vh",
    }}>
      <div ref={mapContainer} style={{
        position: "absolute",
        width: "100%",
        height: "100vh"
      }} />
        <FacilitySearchWrap>
          <SearchContainers>
                <Searchbar/>
          </SearchContainers>
          <FacilityContainer>
            {
              !currenLocation ? (
                <>
                  <CurrentLocation clickedLocation={clickedLocation}/>
                  <ButtonContainer >
                  <Button onClick={()=>{setCurrentLocation(true)}} >
                      Use this location
                  </Button>
                  </ButtonContainer>
                </>
              ):(
                <>
                  <form action="/addfacility" method="POST" onSubmit={handleSubmit} className="form">
                    <EntryField>
                      <legend>Facility nickname*</legend>
                      <EntryText id="facility_nickname" name="facility_nickname" value={formData.facility_nickname} onChange={handleInputChange} required type="text"/>
                    </EntryField>
                    <EntryField >
                      <legend>Unit number/floor</legend>
                      <EntryText id="floor_number" name="floor_number" value={formData.floor_number} onChange={handleInputChange} type="text"/>
                    </EntryField>
                    <EntryField >
                      <legend>Select an Option</legend>
                      <EntryText 
                        id="service"
                        name="service"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        list="optionsList"
                      />
                      <datalist id="optionsList">
                        <option value="Gym" />
                        <option value="Park" />
                        <option value="School" />
                        {/* Add more options as needed */}
                      </datalist>
                    </EntryField>
                    <CurrentLocation clickedLocation={clickedLocation}/>
                    <ButtonContainer>
                    <Button onClick={()=>{setConfirmAddress(true)}}>
                        Confirm address
                    </Button>  
                    </ButtonContainer>
                  </form>
                </>
              )
            }
            {
                (confirmAddress&&currenLocation)&&
                <CongratsPopUp facilityNickName={formData.facility_nickname}/>
            }
          </FacilityContainer>
        </FacilitySearchWrap>
    </div>
    </>
  );
}
export default AddFacilities;
