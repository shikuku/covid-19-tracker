import React, {useState, useEffect} from "react";
import styled from "styled-components";
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import Cards from "./Cards";
import CountrySelect from "./CountrySelect";

const HeaderTitle=styled.div`display:flex;
flex-direction:row;
justify-content:center;
align-items:centre;
font-size:5rem;
gap:1em;
padding-top:.5em;

`
const Logo=styled.div` 
color:red;

`
const Title=styled.div`
font-family: 'Rubik Beastly', cursive;
font-weight:300px

`
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:1em;
`
;
const SummaryContainer=styled.div`
display:flex;
flex-direction:row
align-items:center;
justify-content:center;
text-align:center;
gap:2em;
`


    
  





const Header=()=>{
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();

        useEffect(() => {
          fetchCountries()
        },[])

        


    const fetchCountries=()=>{
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.covid19api.com/countries", requestOptions)
        .then(response => response.json())
        .then(result =>setCountries((result)))
        .catch(error => console.log('error', error));
}

    return(
        <Container>
    <HeaderTitle>
        <Logo><CoronavirusIcon style={{fontSize:"5rem"}}/></Logo>
        <Title><span style={{color:"green"}}>Covid-19</span><span style={{color:"red"}}>Tracker</span></Title>
        
    </HeaderTitle>
    <CountrySelect countries={countries} setSelectedCountry={setSelectedCountry} />
    <SummaryContainer>
    <Cards title="500,000" cases="Confirmed Cases" update="30" color="red" type="New Cases"/>
    <Cards  title="200,000" cases="Recovered" update="20" color="green" type="Recovered"/>
    <Cards   title="100,000" cases="Deaths" update="5" color="grey" type="Deaths"/>
    </SummaryContainer>
    {console.log(selectedCountry)}
</Container>


    )
}
export default Header;