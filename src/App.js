import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
	return (
		<div className='p-5 bg-dark text-white'>
			<div className='text-center'>
				<h2>To-Do App!</h2>
				<p>Add Now To-Do</p>
			</div>

			<AddTodo />
			<Todos />
		</div>
	);
}

export default App;
