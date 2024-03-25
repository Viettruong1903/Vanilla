import { ref, remove, child } from 'firebase/database';
import { db } from '../config/firebaseInit';

async function deleteItem(key) {
	// update object
	const tempKey = 'key from real time data base'
	// create a ref
	const dbRef = ref(db, 'todosDB')

	// update the data for the ref path.
	remove(child(dbRef, tempKey))
	return null
}

export { deleteItem }