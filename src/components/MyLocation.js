import { useState, useEffect } from "react";

export const MyLocation = ({position, setPosition}) => {
    const [city,setCity]=useState("")
  
    var cityName = async () => {
      var res = await fetch('https://api.opencagedata.com/geocode/v1/json?key=711e6838c0ff4ac4ad1670cf47114668&q='+position.latitude+','+position.longitude+'&pretty=1')
      // var res = await fetch('https://api.opencagedata.com/geocode/v1/json?key=711e6838c0ff4ac4ad1670cf47114668&q='+23.23634+','+72.653552+'&pretty=1')
      var result = await res.json();     
      setCity(result.results[0].components.city || result.results[0].components.state_district + " " + (result.results[0].components.suburb || " ") ) ;

    }
    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        // cityName();
        
      },null,options);
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  },[]);
  // useEffect(() => {
  //   cityName()
  //   console.log(city);
  // },[position.longitude])
  return (
    <>
     <div>
    {/* <h2>My Current Location</h2> */}
    {city === "" || city ===undefined ? (
    
        <button onClick={cityName} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Know your location</button>
      ) : (
        <p>{city} </p>
    )}
    

  </div>
  </>  
)}
