import { useState } from "react";
import React, { useId } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]); // TodoList의 배열을 저장할 상태
  const [todo, setTodo] = useState(""); // TodoList의 내용을 저장할 상태
  const [todotitle, setTodotitle] = useState(""); // TodoList의 제목을 저장할 상태
  const [isdones, setIsdones] = useState([]); // TodoList 완료시 완료된 배열을 저장할 상태
  const [isDone, setIsDone] = useState(false); // TodoList의 완료 여부를 저장할 상태
  const id = useId(); // TodoList의 고유 id를 저장할 상태

  // Add 버튼을 눌렀을 때 실행되는 함수
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: { id }, todotitle: "", todo: "", isDone: false }]);
    // 중복되지 않는 id  
    setTodo("");
    setTodotitle("");
  };

  // Delete 버튼을 눌렀을 때 실행되는 함수
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  // Delete 버튼을 눌렀을 때 실행되는 함수 (Done 코너에서서)
  const deleteDone = (index) => {
    const newTodos = [...isdones];
    newTodos.splice(index, 1);
    setIsdones(newTodos);
  };


  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  // Done 버튼을 눌렀을 때 실행되는 함수
  const doneTodo = () => {

  };

  return (
    <div className="App">
      <h1>Do Something</h1>
      <form onSubmit={addTodo}>
        <input
          className="inputTitle"
          type="text"
          placeholder="What you gonna do?"
          value={todotitle}
          onChange={(e) => setTodotitle(e.target.value)}
        />
        <input
          className="inputTodo"
          type="text"
          placeholder="Tell me details"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="divideBox">
        <div className="dividerLeft">
          <h2>Do it!!!</h2>
        </div>
        <div className="dividerRight">
          <h2>Done!!!</h2>
        </div>
      </div>

      <div className="CardForm">
        <div className="cardDividerLeft">
          {
            todos.length > 0 ? (
              <ul className="todo-list">
                {todos.map((todo, id) => (
                  <div className="todo" key={id}>

                    <div className={todo.isCompleted ? "todo-row complete" : "todo-row"}>

                      <li key={id} onClick={() => completeTodo}>
                        <div className="cardTitle">{todo.title}</div>
                        {todo.todo}
                      </li>
                      <div className="icons">
                        <button onClick={() => doneTodo(id)}>Done</button>
                        <button onClick={() => deleteTodo(id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (<div className="empty">
              <p>Nothing to do?</p>
            </div>
            )
          }
        </div>
        <div className="cardDividerRight">
          {
            isdones.length > 0 ? (
              <ul className="todo-list">
                {isdones.map((isDone, index) => (
                  <div className="todo" key={index}>

                    <div className={todo.isCompleted ? "todo-row complete" : "todo-row"}>

                      <li key={index} onClick={() => completeTodo}>
                        <div className="cardTitle">{todo.title}</div>
                        {todo.todo}
                      </li>
                      <div className="icons">
                        <button onClick={() => deleteDone(index)}>Back</button>
                        <button onClick={() => deleteDone(index)}>Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (<div className="empty">
              <p>Nothing done yet?</p>
            </div>
            )
          }
        </div>
      </div>
    </div >

  );
};

export default App;
