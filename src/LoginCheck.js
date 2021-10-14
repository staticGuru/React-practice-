import React, { useState, useEffect } from "react";
import "./LoginCheck.css";

import { useHistory } from "react-router-dom";

function Login({ empId }) {
  const [findPassword, setfindPassword] = useState();
  const [findUsername, setFindUsername] = useState("");
  const [state, setState] = useState("Login");
  const [validation, setvalidation] = useState("");
  const [slace, setSlace] = useState("");
  const [error1, seterror1] = useState("");

  let history = useHistory();
  useEffect(
    (e) => {
      //setting forloop
      console.log(sessionStorage.length);

      if (sessionStorage.length === 0) {
        console.log("no user available");
        for (var i = 0; i < localStorage.length; i++) {
          var key = JSON.parse(localStorage.getItem(localStorage.key(i)));

          if (key.username === findUsername) {
            if (key.password === findPassword) {
              setvalidation(findUsername);
              setState("Search");

              setSlace("/");
              sessionStorage.setItem(findUsername, JSON.stringify(key));

              break;
            }
            setState("Login");
          }
          setState("Login");
        }
      } else {
        //  console.log((JSON.parse(sessionStorage.getItem(findUsername))));
        const size = sessionStorage.length - 1;
        const size1 = sessionStorage.key(size);
        const size2 = sessionStorage.getItem(size1);
        const path = JSON.parse(size2).username;
        history.push(`/Search/${path}`);
      }
    },
    [findUsername, findPassword, history]
  );

  // let answer=((validation!=="") ? findUsername:'')

  function Profile() {
    console.log(state);
    console.log(slace);
    console.log(validation);
    if (validation !== findUsername) {
      seterror1("fail");
    } else if (sessionStorage.length === 1) {
      history.push(`/${state}${slace}${validation}`);
    } else {
    }
  }

  return (
    <div className="container">
      <div>
        <h1>EMPLOYEE DETAIL SCREEN</h1>
      </div>
      <form>
        <div>
          <label htmlFor="findUsername">Username: </label>
          <input
            className="inputvalue"
            type="text"
            value={findUsername}
            placeholder="enter the unique username"
            onChange={({ target }) => setFindUsername(target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            className="inputvalue"
            type="password"
            value={findPassword}
            placeholder="enter the unique password"
            onChange={({ target }) => setfindPassword(target.value)}
            required
          />
        </div>
      </form>

      {error1 === "fail" ? (
        <p>Data not available,if you click login you will redirect same page</p>
      ) : null}

      <button type="button" onClick={Profile}>
        login
      </button>
    </div>
  );
}

export default Login;
