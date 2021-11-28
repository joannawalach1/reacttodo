import React, { useState } from 'react';
import { FaCheckCircle, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import "./main.css";

function App() {
  const [toDoList, settoDoList]=useState([]);
  const [task, setTask]=useState('');
  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => (
    setTask(e.target.value),
    console.log(task)
  )

  const printTask = (props) => (
    settoDoList(toDoList.concat(task))
  )

  const complitedTask = () => (
    console.log("aaa")
  )

  function editTask(id) {
    const editedTask = toDoList.filter((id) => id !== id);
    setInputValue(editedTask)
    console.log("bbb")
  }

  function removeTask(id) {
    const selectedTask = toDoList.filter((id) => id !== id);
    console.log("rem")
    setInputValue(selectedTask)
  }


  return (
  <div className="container">
    <div className="inputbar">
      <input type="text" value={inputValue} onChange={addTask} />
      <button type="submit" onClick={printTask}>dodaj To do</button>
    </div>
    <div className="todolist">
          {toDoList.map((item) => 
          <ul key={item.id} >
            <li>
              <div className="task">{item}</div>
              <div className="icons">
            <FaCheckCircle id="check" onClick={complitedTask} />
            <FaPencilAlt id="pencil" onClick={() => editTask(item.id)} /> 
            <FaTrashAlt id="trash" onClick={() => removeTask(item.id)} />
            </div>
           </li> 
          </ul>)}
    </div>

      </div>
  );
}

export default App;
