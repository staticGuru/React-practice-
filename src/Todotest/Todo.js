import React from "react";
import Popup from "reactjs-popup";
import "./Todo.css";
import "reactjs-popup/dist/index.css";

const Todo = (props) => (
  <div style={{ display: "flex" }}>
    <div
      style={{
        // textDecoration: props.todo.complete ? "line-through" : ""
        border: "1px solid red",
        cursor: "pointer",
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <Popup trigger={<button className="button"> x </button>} modal>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Confirmation</div>
          <div className="content">Do you want delete this todo?</div>
          <div className="actions">
            <button className="button" onClick={props.onDelete}>
              Yes
            </button>
          </div>
        </div>
      )}
    </Popup>
  </div>
);
export default Todo;
// // import React from 'react';
