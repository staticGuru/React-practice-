import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

import "reactjs-popup/dist/index.css";

/*
  TodoMVC
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

export default class TodoList extends React.Component {
  state = {
    todos: window.localStorage.getItem("items")
      ? JSON.parse(window.localStorage.getItem("items"))
      : [],
    todoToShow: "all",
    toggleAllComplete: true,
  };

  addTodo = (todo) => {
    const updatedItems = [...this.state.todos, todo];
    window.localStorage.setItem("items", JSON.stringify(updatedItems));
    this.setState((state) => ({
      todos: updatedItems,
    }));
    // console.log(`updatedItems.${0}.id`)
  };

  // toggleComplete = id => {
  //   this.setState(state => ({
  //     todos: state.todos.map(todo => {
  //       if (todo.id === id) {
  //         // suppose to update
  //         return {
  //           ...todo,
  //           complete: !todo.complete
  //         };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   }));
  // };

  // updateTodoToShow = s => {
  //   this.setState({
  //     todoToShow: s
  //   });
  // };

  handleDeleteTodo = (id) => {
    console.log(this.state.todos.filter((todo) => todo.id === id));
    const deleteUpdate = this.state.todos.filter((todo) => todo.id !== id);
    window.localStorage.setItem("items", JSON.stringify(deleteUpdate));

    this.setState((state) => ({
      todos: deleteUpdate,
    }));
  };

  // removeAllTodosThatAreComplete = () => {
  //   this.setState(state => ({
  //     todos: state.todos.filter(todo => !todo.complete)
  //   }));
  // };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
      //  localStorage.setItem("todos",JSON.stringify(todos));
      //  let size=localStorage.getItem("todos");
    }
    // else if (this.state.todoToShow === "active") {
    //   todos = this.state.todos.filter(todo => !todo.complete);
    // } else if (this.state.todoToShow === "complete") {
    //   todos = this.state.todos.filter(todo => todo.complete);
    // }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            // toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        {/* <div>
          todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>all</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            complete
          </button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
          <div>
            <button onClick={this.removeAllTodosThatAreComplete}>
              remove all complete todos
            </button>
          </div>
        ) : null}
        <div>
          <button
            onClick={() =>
              this.setState(state => ({
                todos: state.todos.map(todo => ({
                  ...todo,
                  complete: state.toggleAllComplete
                })),
                toggleAllComplete: !state.toggleAllComplete
              }))
            }
          >
            toggle all complete: {`${this.state.toggleAllComplete}`}
          </button>
          </div>*/}
      </div>
    );
  }
}
