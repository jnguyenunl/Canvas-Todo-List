import { useSelector, useDispatch } from 'react-redux';
import styles from './canvastodo.module.css';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

import { 
  addTask, 
  selectTask,
  setItem,
  selectListOfTask,
  removeTask,
  editNotes,
} from './canvastodoSlice.js';

var taskItem = undefined;

export function CanvasTodo () {
  const todo = useSelector(selectTask);
  const listOfToDo = useSelector(selectListOfTask);
  const dispatch = useDispatch();

  const addtoList = () => {
    if(todo !== '' && todo !== undefined){
      let currentTask = {
        task: todo, 
        id: Date.now(), 
        done: false, 
        notes: ""
      };
      dispatch(addTask({
        todo: currentTask,
      }));
    } 
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
  const changeNotes = (item, note) => {
    setIsOpen(!isOpen)
    dispatch(editNotes({
      task: item,
      notes: note,
    }));
  };

  const [isOpen, setIsOpen] = useState(false);
  const [importIsOpen, importSetIsOpen] = useState(false);
  
  const toggleComment = (item) => {
    taskItem = item
    setIsOpen(!isOpen);
  }

  const toggleImport = () => {
    importSetIsOpen(!importIsOpen);
  }

  function TaskComment(props) {
    return(
      <>
        <div className={styles.popupbox}>
          <div className={styles.box}>
            <span className={styles.closeicon} onClick={props.closeComment}>x</span>
            {props.content}
          </div>
        </div>
      </>
    );
  }

  function TaskImport(props) {
    return(
      <>
        <div className={styles.popupbox}>
          <div className={styles.box}>
            <span className={styles.closeicon} onClick={props.closeImport}>x</span>
            {props.content}
          </div>
        </div>
      </>
    );
  }

  return (
    <main>
      <div className={styles.spacer}>
        <label className={styles.header} >Canvas ToDo List</label><br/>
      </div>
      <div className={styles.taskbar}>
        <input  className={styles.padder} type="text" value={todo} onChange={(event) => textChange(event.target.value)}/>
        <button className={styles.button} onClick={addtoList}>  Add ToDo </button>
        <button className={styles.button} onClick={() => toggleImport()}>  Import </button> <br/>
      </div>
        <div>
            <ul>
            {
              listOfToDo.map(
              (item) => 
              <Draggable>
              <li key={item.id}> 
              <ToDoTask value={item.task} onClick={() => removeToDo(item.id)} onPress={() => toggleComment(item)}/> </li>
              </Draggable>)
            }  
              {/* <ListOfTask  listOfTodo={listOfTodo} /> */}
            </ul>      
        </div>
      <div>  
        <label>
          Total Number of Tasks Uncompleted: {listOfToDo.filter(item => item.done === false).length}
        </label>
      </div>
      <div>
        {
          isOpen && <TaskComment content={
            <>
              <b>{taskItem.task.replace(/[\u0336]/g, '')}</b>
              <br/>
              <textarea id="txt" rows="4" cols="150">{taskItem.notes}</textarea>
              <br/>
              <button onClick={() => changeNotes(taskItem.id, document.getElementById("txt").value)}>Save Task Commment</button>
            </>
          }
          closeComment={toggleComment}
          />
        }
    </div>
    <div>
        {
          importIsOpen && <TaskImport content={
            <>
              <b>Canvas Login</b>
              <br/>
              <input type="text" placeholder="Canvas Username" id="username"/>
              <br/>
              <input type="password" placeholder="Password" id="password"/>
              <br/>
              <button>Import Tasks</button>
            </>
          }
          closeImport={toggleImport}
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



