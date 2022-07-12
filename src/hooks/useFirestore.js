import { useReducer } from "react";
import {
	collection,
	addDoc,
	updateDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase.confiq";

const initialState = {
	document: null,
	error: null,
	isLoading: null,
	success: null,
};

const fireStoreReducer = (state, { type, payload }) => {
	switch (type) {
		case "IS_LOADING":
			return { document: null, error: null, isLoading: true, success: null };
		case "ADD_DOCUMENT":
			return {
				document: payload,
				error: null,
				isLoading: false,
				success: true,
			};
		case "UPDATE_DOCUMENT":
			return {
				document: payload,
				error: null,
				isLoading: false,
				success: true,
			};
		case "DELETE_DOCUMENT":
			return {
				document: null,
				error: null,
				isLoading: false,
				success: true,
			};
		case "ERROR":
			return {
				document: null,
				error: payload,
				isLoading: false,
				success: false,
			};

		default:
			return state;
	}
};

export function useFirestore(collectionName) {
	const [response, dispatch] = useReducer(fireStoreReducer, initialState);
	console.log(response);

	const addDocument = async doc => {
		dispatch({ type: "IS_LOADING" });
		try {
			const newDocument = await addDoc(collection(db, collectionName), {
				...doc,
			});
			dispatch({ type: "ADD_DOCUMENT", payload: newDocument });
		} catch (err) {
			dispatch({ type: "ERROR", payload: err.message });
		}
	};

	const updateDocument = async (id, data) => {
		dispatch({ type: "IS_LOADING" });
		try {
			const userDoc = doc(collection(db, collectionName), id);
			const newDocument = data;
			const updatedDocument = await updateDoc(userDoc, newDocument);
			dispatch({ type: "UPDATE_DOCUMENT", payload: updatedDocument });
		} catch (err) {
			dispatch({ type: "ERROR", payload: err.message });
		}
	};

	const deleteDocument = async id => {
		dispatch({ type: "IS_LOADING" });
		try {
			await deleteDoc(doc(db, collectionName, id));
			dispatch({ type: "DELETE_DOCUMENT" });
		} catch (err) {
			dispatch({ type: "ERROR", payload: err.message });
		}
	};
	return { addDocument, updateDocument, deleteDocument, response };
}
