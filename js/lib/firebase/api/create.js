import { ref, push } from 'firebase/database';
import { db } from '../config/firebaseInit';
import { testObject } from './testObject';

async function create(newToDoObject) {
	const dbRef = ref(db, '/todosDB')
	const newItem = testObject
	const key = push(dbRef, newItem).key
  console.log(key)
  return null;
}

export { create }