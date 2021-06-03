import { FC, useState } from "react";
import { addToDo, RootState, AppDispatch } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

const AddToDO: FC = () => {
	const dispatch = useDispatch();
	const [header, setHeader] = useState("");
	const [body, setBody] = useState("");

	const addTask = () => {
		if (header === "" || body === "") return;
		dispatch(addToDo({ header: header, desc: body }));
		setBody("");
		setHeader("");
	};

	return (
		<div>
			<input
				value={header}
				onChange={(e) => setHeader(e.target.value)}
				type="text"
				placeholder="header"
			/>
			<input
				value={body}
				onChange={(e) => setBody(e.target.value)}
				type="text"
				placeholder="body"
			/>
			<button onClick={addTask}>add</button>
		</div>
	);
};
export default AddToDO;
