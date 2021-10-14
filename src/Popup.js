import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-awesome-modal";
import "./PopUp.css";
function PopUp(props) {
  const [visible, setVisible] = useState(true);
  const [findPassword, setfindPassword] = useState("");
  const [findUsername, setFindUsername] = useState("");
  const [state, setState] = useState("Login");
  const [validation, setvalidation] = useState("");
  const [slace, setSlace] = useState("");
  const [error1, seterror1] = useState("");
  const [usernameerror, setusernameError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  // const[toggle,settoggle]=useState(props.toggle);

  let history = useHistory();
  useEffect(
    (e) => {
      //setting forloop

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

  function Profile(e) {
    e.preventDefault();
    console.log(state);
    console.log(slace);
    console.log(validation);
    setusernameError(false);
    setpasswordError(false);
    seterror1("");
    if (findUsername === "" || findPassword === "") {
      if (findUsername === "") {
        setusernameError(true);
      }
      if (findPassword === "") {
        setpasswordError(true);
      }
    } else {
      if (validation !== findUsername) {
        seterror1("fail");
      } else if (sessionStorage.length === 1) {
        history.push(`/${state}${slace}${validation}`);
      } else {
      }
    }
  }
  function close() {
    return setVisible(false);
  }

  // function closeModal() {
  //     setVisible(false);
  //     // settoggle(!props.toggle)

  // }

  return (
    <div className="popup">
      <Modal
        visible={visible}
        width="500"
        height="500"
        effect="fadeInUp"
        onClickAway={Profile}
      >
        <div className="signupScreen">
          <h1>EMPLOYEE DETAIL SCREEN</h1>

          <form>
            <input
              className="inputvalue"
              type="text"
              value={findUsername}
              placeholder="username"
              onChange={({ target }) => setFindUsername(target.value)}
            />
            {usernameerror && <p className="error">field is empty</p>}

            <input
              className="inputvalue"
              type="password"
              value={findPassword}
              placeholder="password"
              onChange={({ target }) => setfindPassword(target.value)}
            />
            {passwordError && <p className="error">field is empty</p>}
            <button type="submit" onClick={Profile} className="btn">
              login
            </button>
          </form>

          {error1 === "fail" ? (
            <p className="error">Data not available</p>
          ) : null}

          <button type="button" onClick={close} className="btnc">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default PopUp;
