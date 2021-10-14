import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";

function MyForm(props) {
  const [age, setAge] = useState(null);
  const [dept, setDept] = useState("");
  const [dob, setDob] = useState("");

  const [number2, setNumber2] = useState(false);
  const [ageError, setageError] = useState(false);
  const [ageError1, setageError1] = useState(false);
  const [ageError2, setageError2] = useState(false);
  const [err,seterror]=useState(false);
  const inputFile = useRef(null);
// let err;

// const required=()=>{
//   return 'required';
// }
  const required = (value) => {
   

    if (!value.toString().trim().length) {
    
      // We can return string or jsx as the 'error' prop for the validated Component
      return 'required';
    
    }
  };

  // const email = (value) => {
  //   if (!validator.isEmail(value)) {
  //     return `${value} is not a valid email.`;
  //   }
  // };
  // "  function reset(){
  //     setAge("");
  //     setDept("");
  //     setDob("");

  //   }"
  // const number=()=>{
  //   return 'number is needed'
  // }

  const number = (value) => {
    if (!Number(value)) {
      return `${value} is not a numeric value.`;
    }
  };

  function onButtonClick(e) {
    e.preventDefault();

    console.log("its worked");
    setNumber2(false);
    setageError(false);
    setageError1(false);
    setageError2(false);
    if (Number(age) && age !== null && dept !== "" && dob !== "") {
      localStorage.setItem("age", age);
      localStorage.setItem("dept", dept);
      localStorage.setItem("dob", dob);

      inputFile.current.click();
    } else {
      if (age !== null && !Number(age)) {
        // setNumber2(true);
        <number/>
      }
      if (age === null) {
        // setageError(true);
      //  return  err=<p>required</p>
      //  seterror(true);
        // return <required />;
        // return "required";
        return 'required'
      }
      if (dept === "") {
        // setageError1(true);
        return required();
      }
      if (dob === "") {
        // required();
      }
    }
  }
  return (
    <div>
      <Form onSubmit={onButtonClick}>
        <div>
          <label htmlFor="age">Age: </label>
          <Input
            className="inputvalue"
            type="text"
            value={age}
            placeholder="enter your age"
            onChange={({ target }) => setAge(target.value)}
            validations={[required, number]}
          />
          {err && <p>required</p>}
          {/*       {ageError && <p style={{color:'red'}}> field mandotry</p>}
  {number2 && <p style={{color:'red'}}>numeric value only accepted</p>}*/}
        </div>
        <div>
          <label htmlFor="dept">Department: </label>
          <Input
            className="inputvalue"
            type="text"
            value={dept}
            placeholder="enter your Department"
            onChange={({ target }) => setDept(target.value)}
            validations={[required]}
          />
        </div>
        {/*  {ageError1 && <p style={{color:'red'}}> field mandotry</p>}*/}

        <div>
          <label htmlFor="dob">Date of Birth: </label>
          <Input
            className="inputvalue"
            type="date"
            value={dob}
            placeholder="enter your Date of Birth"
            onChange={({ target }) => setDob(target.value)}
            validations={[required]}
          />
        </div>
        {/* {ageError2 && <p style={{color:'red'}}> field mandotry</p>}*/}
 
        
        <button type="submit">Next</button>
      </Form>
    
      <button
        onClick={props.nextStep}
        ref={inputFile}
        style={{ display: "none" }}
      >
        next
      </button>
    </div>
  );
}

export default MyForm;
