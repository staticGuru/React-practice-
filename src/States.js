import React, { useState } from 'react'
import csc from 'country-state-city';

import { Dropdown} from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import City from './City';



function States(props) {
    const[value,setValue]= useState();
    const[city2,setCity]= useState(false);
    console.log(props.value);
    let country=props.value.value;
    const countrydata1= csc.getAllCountries().filter((s)=>s.name ===country);
      const isocode=countrydata1.map(c=>c.isoCode).toString();
    // console.log(countrydata1);
  let statesdata=csc.getStatesOfCountry(isocode)
   let statesArr=[];
   
        statesdata.map(s=>(statesArr.push(s.name)))
    function city1(value){
        setCity(true);
        setValue(value);

    }

        
  return (
    <div style={{display:"flex",}}>
    <Dropdown
    placeholder="Select an option"
    className="my-className"
    options={statesArr}
    value="select country"
    onChange={(value) => console.log('change!', value)}
    onSelect={(value) =>  city1(value)} // always fires once a selection happens even if there is no change
    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
    />
    {city2&&<City value={value} />}
      
    </div>
  )
}

export default States;
