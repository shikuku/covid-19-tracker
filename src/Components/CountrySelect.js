import React, { useState , useEffect} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CountrySelect=({countries, setSelectedCountry})=>{
    
    
                   


        const handleChange = (event) => {
         setSelectedCountry(event.target.value);
        };

  

      
        return (
          <div>

            {/* {
            countries.map(country=>console.log(`${country.ISO2} : ${country.Country}`))
            } */}
            
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">Countries</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={handleChange}
                label="Country"
              >
              

{countries.map(country=><MenuItem key={country.ISO2} value={`${country.ISO2} : ${country.Country}`}>{country.ISO2} | {country.Country}</MenuItem>)}






              </Select>
            </FormControl>
          </div>
            );
}
export default CountrySelect;