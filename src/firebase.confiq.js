import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBZ0sHV0NbhW8HYPaplX4qrVkKWbzr2eqI",
	authDomain: "todo-firebase-bd.firebaseapp.com",
	projectId: "todo-firebase-bd",
	storageBucket: "todo-firebase-bd.appspot.com",
	messagingSenderId: "614051313834",
	appId: "1:614051313834:web:2059ebdd0a8566a2d3f8d3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
