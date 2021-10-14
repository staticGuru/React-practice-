import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
// import SimpleReactValidator from "simple-react-validator";

import PopUp from "./Popup";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
// import Slider from './Slider';
// import images from "./images";

import Carousel from "./MainCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SimpleReactValidator from "simple-react-validator";

function Register() {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [emailid, setEmailid] = useState("");
  const [empId, setEmpId] = useState("");
  const [age, setAge] = useState("");
  const [dept, setDept] = useState("");
  const [dob, setDob] = useState("");
  const [native, setNative] = useState("");
  const [role, setRole] = useState("");
  const [number1, setNumber1] = useState(false);
  const [number2, setNumber2] = useState(false);
  const [numbererror, setnumberError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ageError, setageError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailnullerror, setemailnullerror] = useState(false);
  const [usernameerror, setusernameError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);

  const [signIn, setSignIn] = useState(false);
  const validator1 = new SimpleReactValidator();
  //react form validation for the checkingsimport validator from 'validator';

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

  // let history = useHistory();
  const responseFacebook = (response) => {
    console.log(response);
    // console.log("Name" + response.name);
    // console.log("Email" + response.email);
  };
  const responseGoogle = (response) => {
    console.log(response);
    // console.log("Name:" + response.profileObj.name);
    // console.log("Email: " + response.profileObj.email);
  };
  useEffect(() => {
    setSuccess(false);
    // setSignIn(false);

    if (sessionStorage.length === 1) {
      const size = sessionStorage.length - 1;
      const size1 = sessionStorage.key(size);
      const size2 = sessionStorage.getItem(size1);
      const path = JSON.parse(size2).username;
      history.push(`/Search/${path}`);
    }

    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, [history]);

  // login the user
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setEmailError(false);
    setemailnullerror(false);
    setnumberError(false);
    setNumber1(false);
    setNumber2(false);
    setusernameError(false);
    setageError(false);
    setpasswordError(false);

    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let re=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    console.log(re.test(emailid));
    console.log(validator.isEmail(emailid));
    if (
      Number(empId) &&
      Number(age) &&
      re.test(emailid) &&
      username !== "" &&
      password !== ""
    ) {
      console.log(validator.isEmail(emailid));
      setSuccess(true);
      const user1 = {
        empId,
        username,
        age,
        dept,
        dob,
        native,
        role,
        password,
        emailid,
      };

      localStorage.setItem(user1.username, JSON.stringify(user1));
      // set the state of the user
      setUser([...user, user1]);
      setUsername("");
      setPassword("");
      setEmpId("");
      setAge("");
      setDept("");
      setDob("");
      setNative("");
      setRole("");
      setEmailid("");
    } else {
      //   setNumber(false);
      if (empId === null) {
        setnumberError(true);
      } else if (!Number(empId)) {
        setNumber1(true);
      } else {
      }

      if (age === null) {
        setageError(true);
      } else if (!Number(age)) {
        setNumber2(true);
      } else {
      }

      //  setNumber(false);

      //  (emailid === null)?setemailnullerror(true):
      if (emailid === "") {
        setemailnullerror(true);
      } else if (re.test(emailid) === false) {
        setEmailError(true);
      } else {
      }
      // else
      // {setEmailError(true)}
      if (username === "") {
        setusernameError(true);
      }

      //  if((re.test(emailid))===false){setEmailError(true)}
      if (password === "") {
        setpasswordError(true);
      }
    }
  };

  function Login() {
    setSignIn(true);
  }
  const submitForm = (e) => {
    // e.preventDefault();
    // // if (validator1.fieldValid('empId')) {
    // //   // booya this field is valid!
    // //   <h1>this is not valid</h1>
    // // }
    // if (validator1.allValid()) {
    //   alert("You submitted the form and stuff!");
    // } else {
    //   validator1.showMessages();
    //   // rerender to show messages for the first time
    //   // you can use the autoForceUpdate option to do this automatically`
    //   // this.ForceUpdate();
    //   // forceUpdate();
    // }
  };

  return (
    <div>
      <Carousel />
      {signIn && <PopUp toggle={signIn} />}

      <div className="container1">
        <h1>EMPLOYEE REGISTRATION SCREEN</h1>

        <div className="register">
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="empid">Employee id: </label>
              <Input
                className="inputvalue"
                type="text"
                value={empId}
                placeholder="enter your UNIQUE employee id"
                onChange={({ target }) => setEmpId(target.value)}
                validations={[required, number]}
              />
              {/*validator1.message('empId', empId, 'required', { className: 'text-danger' })*/}
              {/* {number1 && <p>enter only numbric only</p>}
  {numbererror && <p>field is empty</p>}*/}
            </div>
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
              {/*        {usernameerror && <p>field is empty</p>}*/}
            </div>
            <div>
              <label htmlFor="emailid">Email id: </label>
              <Input
                validations={[required, email]}
                className="inputvalue"
                type="text"
                title="numeric value only"
                value={emailid}
                placeholder="enter your Email Id"
                onChange={({ target }) => setEmailid(target.value)}
              />
              {/*  {emailnullerror && <p>email id is mandory</p>}
{emailError && <p>Invalid Email Id, Plese check</p>}*/}
            </div>
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
              {/*  {ageError && <p> field mandotry</p>}
              {
                number2 && <p>numeric value only accepted</p>

                //  (empId === null) ? (Number(empId)? <p>numeric value only accepted</p>:null):null
              }*/}
            </div>
            <div>
              <label htmlFor="dept">Department: </label>
              <Input
                className="inputvalue"
                type="text"
                value={dept}
                placeholder="enter your Department"
                onChange={({ target }) => setDept(target.value)}
              />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth: </label>
              <Input
                className="inputvalue"
                type="date"
                value={dob}
                placeholder="enter your Date of Birth"
                onChange={({ target }) => setDob(target.value)}
              />
            </div>
            <div>
              <label htmlFor="native">Native: </label>
              <Input
                className="inputvalue"
                type="text"
                value={native}
                placeholder="enter your native"
                onChange={({ target }) => setNative(target.value)}
              />
            </div>
            <div>
              <label htmlFor="role">Job Role: </label>
              <Input
                className="inputvalue"
                type="text"
                value={role}
                placeholder="enter your Job Role"
                onChange={({ target }) => setRole(target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">password: </label>
              <Input
                validations={[required]}
                className="inputvalue"
                type="password"
                value={password}
                placeholder="enter a password"
                onChange={({ target }) => setPassword(target.value)}
              />

              {/* {passwordError && <p>field is empty</p>}*/}
            </div>

            <button type="submit">Register</button>
          </Form>
          {success && (
            <h1>
              Your data registred successfully, You can add another record
            </h1>
          )}
          {/* <Link type="button" to="/Login" empid={empId}>LOGIN</Link>*/}
          <button type="button" onClick={Login}>
            LOGIN
          </button>
          <div className="socialmedia">
            <div className="FacebookLogin">
              <FacebookLogin
                appId="907309983180248" //APP ID NOT CREATED YET
                fields="name,email,picture"
                callback={responseFacebook}
                size="small"
                icon="fa-facebook"
              />
            </div>

            <GoogleLogin
              clientId="1080847718846-028f4929917jroepp7f3ced9m1a1msss.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
              //   buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
