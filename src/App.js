import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]); // TodoList의 배열을 저장할 상태
  const [todo, setTodo] = useState(""); // TodoList의 내용을 저장할 상태
  const [todotitle, setTodotitle] = useState(""); // TodoList의 제목을 저장할 상태
  const [isdones, setIsdones] = useState([]); // TodoList 완료시 완료된 배열을 저장할 상태
  const [isDone, setIsDone] = useState(false); // TodoList의 완료 여부를 저장할 상태 TodoList의 고유 id를 저장할 상태

  const addTodo = () => {
    if (todo === "") {
      alert("할 일을 입력해주세요.");
      return;
    }
    if (todotitle === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    setTodos([...todos, { id: uuidv4(), todo: todo, todotitle: todotitle, isDone: isDone }]);
    setTodo("");
    setTodotitle("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const doneTodo = (id) => {
    setIsdones([...isdones, { id: uuidv4(), todo: todo, todotitle: todotitle, isDone: isDone }]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteDone = (id) => {
    setIsdones(isdones.filter((isDone) => isDone.id !== id));
  };


  // const addTodo = (e) => {
  //   e.preventDefault();
  //   setTodos([...todos, { id: uuidv4(), todo: todo, todotitle: todotitle, isDone: false }]); // todos에 새로운 TodoList를 추가
  //   setTodo(""); // todo를 초기화
  //   setTodotitle(""); // todotitle을 초기화
  //   setIsDone(false); // isDone을 초기화
  // };
  // Delete 버튼을 눌렀을 때 실행되는 함수
  // const deleteTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };
  // Delete 버튼을 눌렀을 때 실행되는 함수 (Done Part에서)
  // const deleteDone = (index) => {
  //   const newTodos = [...isdones];
  //   newTodos.splice(index, 1);
  //   setIsdones(newTodos);
  // };
  // Done 버튼을 눌렀을 때 실행되는 함수, 고유 ID값을 가진 데이터 Done Part로 이동
  // const doneTodo = () => {
  //   const newTodos = [...todos];
  //   const newIsdones = [...isdones];
  //   newTodos[index].isdone = true;
  //   newIsdones.push(newTodos);
  //   setIsdones(newIsdones);
  //   setTodos([]);
  // };

  return (
    <div className="App">
      <div className="todo">
        <div className="headTodoList">
          <h1>Do Something</h1>
        </div>
        <input
          type="text"
          placeholder="What you gonna do?"
          value={todotitle}
          onChange={(e) => setTodotitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tell me details"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
        <ul className="todo-list">
          {todos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <li>
                <div className="cardTitle">{todo.todotitle}</div>
                <p>{todo.todo}</p>
              </li>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => doneTodo(todo.id)}>Done</button>
            </div>
          ))}
        </ul>
      </div>

      <div className="done">
        <h1>Done List</h1>
        <ul className="done-list">
          {isdones.map((isdone) => (
            <li className="done-item" key={isdone.id}>
              <h3>{isdone.todotitle}</h3>
              <p>{isdone.todo}</p>
              <button onClick={() => deleteDone(isdone.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//   return (
//     <div className="App">
//       <h1>Do Something</h1>
//       <form onSubmit={addTodo}>
//         <input
//           className="inputTitle"
//           type="text"
//           placeholder="What you gonna do?"
//           value={todotitle}
//           onChange={(e) => setTodotitle(e.target.value)}
//         />
//         <input
//           className="inputTodo"
//           type="text"
//           placeholder="Tell me details"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//         />
//         <button type="submit">Add</button>
//       </form>
//       <div className="divideBox">
//         <div className="dividerLeft">
//           <h2>Do it!!!</h2>
//         </div>
//         <div className="dividerRight">
//           <h2>Done!!!</h2>
//         </div>
//       </div>
//       <div className="CardForm">
//         <div className="cardDividerLeft">
//           {
//             todos.length > 0 ? (
//               <ul className="todo-list">
//                 {todos.map((todo, index) => (
//                   <div className="todo" key={index}>
//                     <div className={todo.isdone ? "todo-row complete" : "todo-row"}>
//                       <li key={index} onClick={() => doneTodo}>
//                         <div className="cardTitle">{todo.title}</div>
//                         {todo.todo}
//                       </li>
//                       <div className="icons">
//                         <button onClick={() => doneTodo(index)}>Done</button>
//                         <button onClick={() => deleteTodo(index)}>Delete</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </ul>
//             ) : (<div className="empty">
//               <p>Nothing to do?</p>
//             </div>
//             )
//           }
//         </div>
//         <div className="cardDividerRight">
//           {
//             isdones.length > 0 ? (
//               <ul className="todo-list">
//                 {isdones.map((isDone, index) => (
//                   <div className="todo" key={index}>
//                     <div className={todo.isCompleted ? "todo-row complete" : "todo-row"}>
//                       <li key={index} onClick={() => completeTodo}>
//                         <div className="cardTitle">{todo.title}</div>
//                         {todo.todo}
//                       </li>
//                       <div className="icons">
//                         <button onClick={() => deleteDone(index)}>Back</button>
//                         <button onClick={() => deleteDone(index)}>Delete</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </ul>
//             ) : (<div className="empty">
//               <p>Nothing done yet?</p>
//             </div>
//             )
//           }
//         </div>
//       </div>
//     </div >
//   );
// };

export default App;
