import React, { useRef, useState } from "react";

function MyForm3(props) {
  const [native, setNative] = useState("");
  const [role, setRole] = useState("");
  const [empId, setEmpId] = useState("");
  const [number1, setNumber1] = useState(false);
  const [age, setAge] = useState(null);
  const [dept, setDept] = useState("");
  const [dob, setDob] = useState(null);
  const [number2, setNumber2] = useState(false);
  const [ageError, setageError] = useState(false);
  const [numbererror, setnumberError] = useState(false);
  const inputFile = useRef();
  const number = (value) => {
    if (!Number(value)) {
      return `${value} is not a numeric value.`;
    }
  };
  const required = (value) => {
  
    if (!value.toString().trim().length) {
      // We can return string or jsx as the 'error' prop for the validated Component
      return "required";
    }
  };

  function onButtonClick(e) {

    console.log("its worked in step 3");
    if (Number(empId) && empId !== null) {
      localStorage.setItem("empId", empId);
      localStorage.setItem("role", role);
      localStorage.setItem("native", native);

      let username1 = localStorage.getItem("username");
      let role1 = localStorage.getItem("role");
      let age1 = localStorage.getItem("age");
      let empId1 = localStorage.getItem("empId");
      let dob1 = localStorage.getItem("dob");
      let college1 = localStorage.getItem("role");
      let email1 = localStorage.getItem("emailid");
      let native1 = localStorage.getItem("native");
      let user1 = [
        username1,
        role1,
        age1,
        empId1,
        dob1,
        college1,
        email1,
        native1,
      ];
      localStorage.setItem("user1", user1);
      localStorage.removeItem("role");
      localStorage.removeItem("age");
      localStorage.removeItem("empId");
      localStorage.removeItem("username");
      localStorage.removeItem("dob");
      localStorage.removeItem("native");

      localStorage.removeItem("emailid");
      localStorage.removeItem("password");
      localStorage.removeItem("dept");
      setNative("");
      setRole("");
      setEmpId("");
      return inputFile.current.click();
    } else {
      if (!Number(empId)) {
        setNumber1(true);
      } else if (empId === null) {
        setnumberError(true);
      } else {
      }
    }
  }
  const inputFile2 = useRef();
  function previous(e) {
    e.preventDefault();
    console.log("its worked in step1");
    return inputFile2.current.click();
  }
  return (
    <div>
      <form>
        <div>
          <label htmlFor="age">role: </label>
          <input
            className="inputvalue"
            type="text"
            value={role}
            placeholder="enter your role"
            onChange={({ target }) => setRole(target.value)}
          />
        </div>
        <div>
          <label htmlFor="native">Native: </label>
          <input
            className="inputvalue"
            type="text"
            value={native}
            placeholder="enter your native"
            onChange={({ target }) => setNative(target.value)}
          />
        </div>
        <div>
          <label htmlFor="empid">Employee id: </label>
          <input
            className="inputvalue"
            type="text"
            value={empId}
            placeholder="enter your UNIQUE employee id"
            onChange={({ target }) => setEmpId(target.value)}
            validations={[required,number]}
          />
         {/* {number1 && <p style={{ color: "red" }}>enter only numbric only</p>}
  {numbererror && <p style={{ color: "red" }}>field is empty</p>}*/}
        </div>
        <div>
        <button onClick={previous}>previous</button>
          <button onClick={onButtonClick}>submit</button>
        </div>
      </form>
      <button ref={inputFile2} style={{display: 'none'}} onClick={props.previousStep}>next</button>
  
   <button ref={inputFile} style={{display: 'none'}} onClick={props.lastStep}>next</button>
    </div>
  );
}

export default MyForm3;

// import React from 'react';
// class MyForm3 extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         dob: '',
//         salary: null,
//         err:'',
//         errormessage: ''

//       };
//     }
//     myChangeHandler = (event) => {
//       let nam = event.target.name;
//       let val = event.target.value;
//       let err = '';

//       if (nam === "salary") {

//         if (val !=="" && !Number(val)) {
//           err = <strong style={{color: 'red'}}>numeric value only allowed</strong>;
//         }
//         localStorage.setItem("salary",this.state.salary)
//       }
//       if(nam==="dob"){
//         localStorage.setItem("dob",this.state.dob)
//       }
//       if(nam==="role"){
//         localStorage.setItem("role",this.state.role)
//       }

//       this.setState({errormessage: err});

//       this.setState({[nam]: val});
//     }
//     submit(){

//     }
//     render() {
//       return (
//         <div>
//         <form>

//         <p>Enter your date of birth</p>
//         <input
//           type='date'
//           name='dob'
//           onChange={this.myChangeHandler}
//         />

//         <p>Enter your salary:</p>
//         <input
//           type='text'
//           name='salary'
//           placeholder="your salary"
//           onChange={this.myChangeHandler}
//         />
//         {this.state.errormessage}
//         <p>Enter your Job role:</p>
//         <input
//           type='text'
//           name='role'
//           onChange={this.myChangeHandler}
//         />

//         </form>
//         <p><button onClick={this.submit}>submit</button></p>

//         </div>

//       );
//     }
//   }
//   export default MyForm3;
