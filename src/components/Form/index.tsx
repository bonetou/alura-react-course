import React from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import FormStyle from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props) {
	const [task, setTask] = React.useState<string>("");
	const [time, setTime] = React.useState<string>("00:00:00");

	function addTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setTasks(
			(oldTasks) => [
				...oldTasks,
				{
					...{ task, time },
					selected: false,
					completed: false,
					id: uuidv4(),
				},
			]
		);
		setTask("");
		setTime("00:00:00");
	}

	return (
		<form className={FormStyle.newTaskForm} onSubmit={addTask}>
			<div className={FormStyle.inputContainer}>
				<label htmlFor="task">
					Add a new study task
				</label>
				<input
					id="task"
					name="task"
					type="text"
					value={task}
					onChange={e => setTask(e.target.value)}
					placeholder="What do you want to study?"
					required
				/>
			</div>
			<div>
				<label htmlFor="time">
					Time to study
				</label>
				<input
					id="time"
					type="time"
					value={time}
					onChange={e => setTime(e.target.value)}
					step="1"
					name="time"
					min="00:00:00"
					max="01:30:00"
				/>
			</div>
			<Button type="submit">
				Add
			</Button>
		</form>
	)
}

export default Form