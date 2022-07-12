import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.confiq";

function useCollection(collectionName) {
	let [document, setDocument] = useState([]);
	let [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const ref = collection(db, collectionName);
		setIsLoading(true);

		const getData = onSnapshot(ref, snapshot => {
			let result = [];
			snapshot.forEach(doc => {
				console.log(doc);
				result.push({ ...doc.data(), id: doc.id });
			});

			setDocument(result);
			setIsLoading(false);
		});

		return () => getData();
	}, [collectionName]);

	return { document, isLoading };
}

export default useCollection;
