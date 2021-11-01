import { createSlice } from "@reduxjs/toolkit";

function line(text){
  return text
  .split('')
  .map(char => char + '\u0336')
  .join('')
}

const canvastodoSlice = createSlice({
  name: 'canvasTodo',
  initialState: {
    todolist: [],
    item: '',
  },
  reducers: {
    removeTask: (canvasTodo, action) => {
      const {
        task,
      } = action.payload;
      let listTask = canvasTodo.todolist.find(t => t.id === task)
      if (a.done === true) {
        a.task = a.task.replace(/[\u0336]/g, '')
        a.done = false
        task.id = a.id
      } else {
        a.task = line(a.task)
        a.done = true
        task = a.id
      }
    },
    addTask: (canvasTodo, action) => {
      const {
        todo,
      } = action.payload;
      canvasTodo.todolist.push(todo);
    },
    setItem: (canvasTodo, action) => {
      const {
        item,
      } = action.payload
      canvasTodo.item = item;
    },
    editNotes: (canvasTodo, action) => {
      let {
        task,
        notes,
      } = action.payload
      let listTask = canvasTodo.todolist.find(t => t.id === task)
      listTask.notes = notes
      task = listTask.id
    },
  },
});

export function selectTask(state) {
  return state.canvasTodo.item;
}
export function selectListOfTask(state) {
  return state.canvasTodo.todolist;
}
export const {
  addTask,
  setItem,
  removeTask,
  editNotes,
} = canvastodoSlice.actions;

export default canvastodoSlice;