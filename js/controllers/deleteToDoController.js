import { deleteToDo } from "../models/toDoListModel";
let dialog;
let deleteButton;
let exitButton;
let uid;

export function deleteToDoController(itemUid) {
  uid = itemUid
  dialog = document.querySelector('#delete-to-do');
  exitButton = dialog.querySelector('#exit');
  deleteButton = dialog.querySelector('#delete');
  configureListeners();
  dialog.showModal();
}

function configureListeners() {
  exitButton.addEventListener('click', onCloseDialog);
  deleteButton.addEventListener('click', onRemoveToDo)
}

function onCloseDialog(e) {
  dialog.close();
}

function onRemoveToDo(e) {
  deleteToDo(uid)
  onCloseDialog();
}