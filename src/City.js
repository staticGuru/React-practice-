import React from 'react'
import { Dropdown } from 'react-dropdown-now'
import csc from 'country-state-city';
import 'react-dropdown-now/style.css';
function City(props) {
    
    let state=props.value.value;
    
    const countrydata1= csc.getAllStates().filter((s)=>(s.name ===state));
      const isocode1=countrydata1.map(c=>c.countryCode).toString();
      const isocode2=countrydata1.map(c=>c.isoCode).toString();
    
    
      
      
  let statesdata=csc.getCitiesOfState(isocode1, isocode2)
   let cityArr=[];
   
        statesdata.map(s=>(cityArr.push(s.name)))
  return (
    <div style={{display:"flex",}}>
    <Dropdown
    placeholder="Select an option"
    className="my-className"
    options={cityArr}
    value="select city"
    onChange={(value) => console.log('change!', value)}
    onSelect={(value) => console.log('change!', value) } // always fires once a selection happens even if there is no change
    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
    />
      
    </div>
  )
}

export default City
