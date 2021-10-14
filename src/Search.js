import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TodoList from "./Todotest/TodoList";
// import './Search.css';
function Search({ match }) {
  let history = useHistory();
  const [state, setState] = useState();
  const [age, setAge] = useState(null);
  const [dept, setDept] = useState("");
  const [dob, setDob] = useState(null);
  const [native, setNative] = useState("");
  const [role, setRole] = useState("");
  const [emailid, setEmailid] = useState("");
  const [result, setresult] = useState(false);
  // const [logout,setLogout] = useState("login");
  const [emp, setemp] = useState(true);
  useEffect(() => {
    if (sessionStorage.length === 1) {
      const data = JSON.parse(sessionStorage.getItem(match.params.id));
      const value = JSON.stringify(data);
      const obj = JSON.parse(value);
      // const data1=JSON.parse(sessionStorage.getItem(match.params.id))
      // const value1=JSON.stringify(data1);
      // const obj1=JSON.parse(value1);

      if (!match.params.id) {
        setemp(false);
      }

      if (data != null) {
        setState(obj.username);
        setAge(obj.age);
        setDept(obj.dept);
        setDob(obj.dob);
        setNative(obj.native);
        setRole(obj.role);
        setEmailid(obj.emailid);
      } else {
        setresult(true);
        history.push("/");
      }
    } else {
      history.push("/");
    }
  }, [history, match]);
  const logout1 = () => {
    if (sessionStorage.length === 1) {
      sessionStorage.removeItem(match.params.id);
    }
    history.push("/");
  };

  return (
    <div className="container">
      {state && (
        <div>
          <h1>Employee data available</h1>
          <p>Username: {state}</p>
        </div>
      )}
      {emailid && <p>Email id: {emailid}</p>}
      {age && <p>Age: {age}</p>}
      {dept && <p>Department:{dept}</p>}
      {dob && <p>date of birth: {dob}</p>}
      {native && <p>Native: {native}</p>}
      {role && <p>Job Role: {role}</p>}
      {result && (
        <p className="tryagain">Employee data not available. Try again.</p>
      )}
      <TodoList />

      {emp && <button onClick={logout1}>Log out</button>}
      {/*{emp&&<button onClick={Home}>Home</button>}*/}
    </div>
  );
}

export default Search;
