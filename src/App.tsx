import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToDo, removeToDo, RootState, AppDispatch } from "./todoSlice";
import TodoList from "./TodoList";
import AddToDo from "./AddToDo";
import "./app.css";
const App = () => {
	return (
		<div>
			<div className="center">
				<h1>TODO</h1>
				<AddToDo />
			</div>
			<TodoList />
		</div>
	);
};

export default App;
