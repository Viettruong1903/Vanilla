// index.js
import { getToDoData } from "./models/toDoListModel";
import { toDoListView } from "./views/toDoListView";

async function appInit() {
  getToDoData();
  toDoListView();
}

appInit();