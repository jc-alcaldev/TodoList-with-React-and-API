import React, { useState } from "react";
import { TodosList } from "./TodosList.jsx";
import { Input } from "./Input.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	/* const Action = () => {
		const [todos, setTodos] = useState([]);
		return {
			todos,
			addTodo: todoText => {
				setTodos([...todos, todoText]);
			},
			deleteTodo: todoIndex => {
				const newTodos = todos.filter(
					(_, index) => index !== todoIndex
				);

				setTodos(newTodos);
			}
		};
	};
	const { todos, addTodo, deleteTodo } = Action([]); */
	return (
		<div className="d-flex justify-content-center">
			<div className="bodyProject">
				<div className="d-flex justify-content-center">
					<h1>TODOS</h1>
				</div>
				<div className="d-flex justify-content-center">
					<Input />
				</div>
			</div>
		</div>
	);
}
