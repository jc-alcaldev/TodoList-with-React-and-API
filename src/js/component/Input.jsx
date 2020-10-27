import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

export const Input = () => {
	const [tasks, setTasks] = useState([]);
	const [initialValue, setInitialValue] = useState(null);

	let newTask = event => {
		let myInput = document.querySelector("#taskInput");
		let newTask = event.target.value;

		if (event.keyCode == 13) {
			event.preventDefault();
			if (newTask) {
				setTasks(tasks => [...tasks, newTask]);
				myInput.value = "";
			}
		}
	};

	let deleteLine = index => {
		/* console.log(list); */
		const newTodos = [...tasks];
		newTodos.splice(index, 1);
		setTasks(newTodos);
	};

	return (
		<Fragment>
			<form>
				<input
					id="taskInput"
					type="text"
					placeholder="Add Task"
					value={initialValue}
					onKeyPress={() => {
						newTask(event);
					}}
				/>
			</form>
			<div>
				<ul>
					{tasks.map((task, index) => {
						return (
							<li key={index}>
								{task}
								<IconButton
									aria-label="Delete"
									onClick={() => {
										deleteLine(index);
									}}>
									<DeleteIcon />
								</IconButton>
							</li>
						);
					})}
				</ul>
			</div>
		</Fragment>
	);
};

Input.propTypes = {
	saveText: PropTypes.string
};
