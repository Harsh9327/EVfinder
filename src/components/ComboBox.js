import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MyLocation } from './MyLocation';
import  location from '../data/Location.json';

export default function ComboBox({setLocoid, position, setPosition}) {
    
   
    //   console.log(locoid);

     
  return (
    <>
    <div className="flex justify-evenly items-center py-2 bg-gray-300">
    <Autocomplete
    className=''  
      disablePortal
      id="combo-box-demo"
      options={location}
      // defaultValue={'Rajkot'}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search your city.." />}
      getOptionLabel={(option) => (option ? option.city : "")}
      onChange={(e,v) => {
        if(v)
        setLocoid(v.id);  
        else
        setLocoid("")
      }}
     />   
    <MyLocation  position={position} setPosition={setPosition}/>
    </div>
    
    </>
  );
}


