import { ref, update, child } from 'firebase/database'
import { db } from '../config/firebaseInit'

function edit(key, newToDoObject) {
	// update object
	const updateObj = {
		todo: 'test object todo',
		category: 'test object category',
		status: 'test object status',
		uid: 'test object uid',
	}

	// create a ref
	// const dbRef = ref(db, 'todosDB')

	// update the data for the ref path.
	// update(child(dbRef, 'a unique key'), updateObj)
	// return null

  const itemPath = `todosDB/${key}`;
  const dbRef = ref(db, itemPath)
  update(dbRef, updateObj)
}

export { edit }