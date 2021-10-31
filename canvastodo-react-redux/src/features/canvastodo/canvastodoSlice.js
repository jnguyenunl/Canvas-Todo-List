import { createSlice } from "@reduxjs/toolkit";

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
      canvasTodo.todolist = canvasTodo.todolist.filter(tasks => tasks.id !== task);
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