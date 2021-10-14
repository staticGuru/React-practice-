


import React, { useEffect, useState } from 'react'
import csc from 'country-state-city';

import { Dropdown} from 'react-dropdown-now';
import 'react-dropdown-now/style.css';



import States from './States';
import { useHistory } from 'react-router-dom';

function Country() {
    const[value,setValue]= useState();
    const[state,setState]= useState(false);
   let history = useHistory();
    const countrydata= csc.getAllCountries();
    // let statesdata;
    let country=[]

 useEffect(()=>{
     if(sessionStorage.length===1){
        countrydata.map(c=> (country.push(c.name))) 

     }
     else{
         history.push("/")
     }
   
 },[countrydata])
     
 


   //for states(value)

  
       
       
  




   function states1(value){
       setState(true);
      setValue(value);
       
       
   }    
  
      
  

   
    return(
        <div style={{display:"flex",}}>
        <h1>Drop down list</h1>
        <Dropdown
  placeholder="Select an option"
  className="my-className"
  options={country}
  value="select country"
  onChange={(value) => console.log('change!', value)}
  onSelect={(value) => states1(value)} // always fires once a selection happens even if there is no change
  onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
  onOpen={() => console.log('open!')}
/>
{state&&<States value={value}/>}



</div>
      
    )
    
    }


export default Country;

// import { Dropdown, Selection } from 'react-dropdown-now';
// import 'react-dropdown-now/style.css';

// // normal usage
// <Dropdown
//   placeholder="Select an option"
//   className="my-className"
//   options={['one', 'two', 'three']}
//   value="one"
//   onChange={(value) => console.log('change!', value)}
//   onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
//   onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
//   onOpen={() => console.log('open!')}
// />;




