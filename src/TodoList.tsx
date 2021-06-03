import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToDo, RootState, AppDispatch } from "./todoSlice";
import "./todoCard.css";

const TodoList: FC = () => {
	const todosList = useSelector((state: RootState) => state.todos);
	const dispatch = useDispatch<AppDispatch>();
	const removeHandle = (header: string) => {
		dispatch(removeToDo({ header }));
	};

	const renderTodos = todosList.map((el) => {
		return (
			<div key={el.header} className="task">
				<h3 className="header">{el.header}</h3>
				<p>{el.desc}</p>
				<button onClick={() => removeHandle(el.header)}>remove</button>
			</div>
		);
	});
	return <> {renderTodos && <div className="container">{renderTodos}</div>}</>;
};

export default TodoList;
