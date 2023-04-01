import React from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import FormStyle from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";


class Form extends React.Component<{
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
	state = {
		task: "",
		time: "00:00:00",
	}
	addTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		this.props.setTasks(
			oldTasks => 
			[
				...oldTasks, 
				{
					...this.state,
					selected: false,
					completed: false,
					id: uuidv4(),
				}
			]
		)
		this.setState({task: "", time: "00:00:00"})
	}
	render(): React.ReactNode {
		return (
			<form className={FormStyle.newTaskForm} onSubmit={this.addTask.bind(this)}>
				<div className={FormStyle.inputContainer}>
					<label htmlFor="task">
						Add a new study task
					</label>
					<input
						id="task"
						name="task"
						type="text"
						value={this.state.task}
						onChange={e => this.setState({...this.state, task: e.target.value})}
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
						value={this.state.time}
						onChange={e => this.setState({...this.state, time: e.target.value})}
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
}

export default Form