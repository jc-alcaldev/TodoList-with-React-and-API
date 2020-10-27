import React, { useState } from "react";
import { TodosList } from "./TodosList.jsx";
import { Input } from "./Input.jsx";

//create your first component
export function Home() {
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
