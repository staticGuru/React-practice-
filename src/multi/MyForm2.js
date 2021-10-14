import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import validator from "validator";

function MyForm(props) {
  const [username, setUsername] = useState("");
  const [usernameerror, setusernameError] = useState(false);
  const [emailid, setEmailid] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [emailnullerror, setemailnullerror] = useState(false);
  const [passwordError, setpasswordError] = useState(false);

  const inputFile = useRef();
  const inputFile2 = useRef();
  const required = (value) => {
    console.log("data required");
    if (!value.toString().trim().length) {
      // We can return string or jsx as the 'error' prop for the validated Component
      return "required";
    }
  };

  const email = (value) => {
    if (!validator.isEmail(value)) {
      return `${value} is not a valid email.`;
    }
  };

  const number = (value) => {
    if (!Number(value)) {
      return `${value} is not a numeric value.`;
    }
  };
  function onButtonClick(e) {
    e.preventDefault();
    console.log("its worked in step2");
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let re=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (re.test(emailid) && username !== "" && password !== "") {
      localStorage.setItem("emailid", emailid);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      return inputFile.current.click();
    } else {
      if (username === "") {
        setusernameError(true);
      }
      if (emailid === "") {
        setemailnullerror(true);
      } else if (re.test(emailid) === false) {
        setEmailError(true);
      } else {
      }
      if (password === "") {
        setpasswordError(true);
      }
    }
  }

  function previous(e) {
    e.preventDefault();
    console.log("its worked in step1");
    return inputFile2.current.click();
  }
  return (
    <div>
      <Form>
        <div>
          <div>
            <label htmlFor="username">Username: </label>
            <Input
              type="text"
              value={username}
              className="inputvalue"
              placeholder="enter a username"
              onChange={({ target }) => setUsername(target.value)}
              validations={[required]}
            />
        {/*    {usernameerror && <p style={{ color: "red" }}>field is empty</p>}*/}
          </div>
          <div>
            <label htmlFor="emailid">Email id: </label>
            <Input
              className="inputvalue"
              type="text"
              title="numeric value only"
              value={emailid}
              placeholder="enter your Email Id"
              onChange={({ target }) => setEmailid(target.value)}
              validations={[required, email]}
            />
         {/*   {emailnullerror && (
              <p style={{ color: "red" }}>email id is mandory</p>
            )}
            {emailError && (
              <p style={{ color: "red" }}>Invalid Email Id, Plese check</p>
            )}*/}
          </div>
          <div>
            <label htmlFor="password">password: </label>
            <Input
              className="inputvalue"
              type="password"
              value={password}
              placeholder="enter a password"
              onChange={({ target }) => setPassword(target.value)}
              validations={[required]}
            />
           {/* {passwordError && <p style={{ color: "red" }}>field is empty</p>}*/}
          </div>

          <div>
          <button onClick={previous}>back</button>
            <button onClick={onButtonClick}>next</button>

            
          </div>
        </div>
      </Form>
      <button
        ref={inputFile}
        style={{ display: "none" }}
        onClick={props.nextStep}
      >
        next
      </button>
      <button
        ref={inputFile2}
        style={{ display: "none" }}
        onClick={props.previousStep}
      >
        back
      </button>
    </div>
  );
}

export default MyForm;

// import React from 'react';
// class MyForm2 extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         email: '',
//         age: null,
//         college:'',

//         errormessage1: '',
//         errormessage2:''
//       };
//     }

//     myChangeHandler = (event) => {
//       let nam = event.target.name;
//       let val = event.target.value;
//       let err1 = '';
//       let err2='';

//       if (nam === "email") {
//         let re =
//         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       // let re=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
//         if (val !=="" && !re.test(val)) {
//           err1 = <strong style={{color: 'red'}}>Your email address is invalid</strong>;

//         }
//         else{
//           localStorage.setItem("email",this.state.email)
//         }
//       }
//       if(nam==="password"){
//           if(val!==""&&val.length<8){

//           err2 = <strong style={{color: 'red'}}>Your password must be more than 8 characters</strong>;
//           }
//           localStorage.setItem("password",this.state.password)
//       }
//       if(nam==="college"){
//         localStorage.setItem("college",this.state.college)
//       }
//       this.setState({errormessage1: err1});
//       this.setState({errormessage2: err2});
//       this.setState({[nam]: val});
//     }
//     render() {
//       return (
//         <div>
//         <form>

//         <p>Enter your email address:</p>
//         <input
//           type='text'
//           name='email'
//           onChange={this.myChangeHandler}
//         />
//         {this.state.errormessage1}
//         <p>Enter your password:</p>
//         <input
//           type='password'
//           name='password'
//           placeholder="password must be more than 8 characters"
//           onChange={this.myChangeHandler}
//         />
//         {this.state.errormessage2}
//         <p>Enter your college:</p>
//         <input
//           type='text'
//           name='college'
//           onChange={this.myChangeHandler}
//         />
//         </form>
//         <p><button onClick={this.props.previousStep}>Previous Step</button></p>
//         <p><button onClick={this.props.nextStep}>Next Step</button></p></div>
//       );
//     }
//   }
//   export default MyForm2;
