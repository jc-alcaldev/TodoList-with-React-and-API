import React, { useState } from "react";
import { TodosList } from "./TodosList.jsx";
import { Input } from "./Input.jsx";

//create your first component
export function Home() {
	return (
		<div className="d-flex justify-content-center">
			<div className="bodyProject text-center">
				<h1>
					<strong>TODOS</strong>
				</h1>
				<Input />
			</div>
		</div>
	);
}
