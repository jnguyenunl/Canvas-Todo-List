import { useSelector, useDispatch } from 'react-redux';
import styles from './canvastodo.module.css';
import React, { useState } from 'react';
import { 
  addTask, 
  selectTask,
  setItem,
  selectListOfTask,
  removeTask,
} from './canvastodoSlice.js';



export function CanvasTodo () {
  const todo = useSelector(selectTask);
  const listOfToDo = useSelector(selectListOfTask);
  const dispatch = useDispatch();

  const addtoList = () => {
    let currentTask = {task:todo, id:Date.now(),done:false,notes:""};
    dispatch(addTask({
      todo: currentTask,
    }));
  };
  
  const textChange = (input) => {
    dispatch(setItem({
      item: input,
    }));
  };
  const removeToDo = (item) => {
    dispatch(removeTask({
      task: item,
    }));
  };

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  function TaskComment(props) {
    return(
      <>
        <div className={styles.popupbox}>
          <div className={styles.box}>
            <span className={styles.closeicon} onClick={props.handleClose}>x</span>
            {props.content}
          </div>
        </div>
      </>
    );
  }

  return (
    <main>
      <div>
        <label>Canvas ToDo List</label><br/>
        <input type="text" value={todo} onChange={(event) => textChange(event.target.value)}/>
        <button onClick={addtoList}>  add todo </button> <br/>
      </div>
      <div>
        <ul>
        {
          listOfToDo.map(
          (item) => 
          <li key={item.id}> 
          <ToDoTask value={item.task} onClick={() => removeToDo(item.id)} onPress={() => togglePopup()}/> </li>)
        }
          {/* <ListOfTask  listOfTodo={listOfTodo} /> */}
        </ul>
      </div>
      <div>
        <label>
          Total Number of Tasks Uncompleted: {listOfToDo.length}
        </label>
      </div>
      <div>
        {
          isOpen && <TaskComment
          content={
            <>
              <b>Task </b>
              <p> Task Outline</p>
              <button>Save Task Commment</button>
            </>
          }
          handleClose={togglePopup}
          />
        }
    </div>
    </main>
  );
}



export function ToDoTask(props) {

  return (
    <>
      <input type="text" value={props.value}/>
      <button onClick={props.onClick}>Done</button>
      <input type="button" value="Comment" onClick={props.onPress} />
    </>
  );
}  

//how to talk to the main function if you have nested compents
// export function ListOfTask(props) {
//   return (
//     <>
//     {
//       props.listOfTodo.map(
//         (item) => <li key={item.id}> <ToDoTask value={item.task} onClick={() => removeTodo(item.id)}/> </li>)
//     }
//     </>
//   );
  
// }



