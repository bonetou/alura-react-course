import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";


class Form extends React.Component {
	render(): React.ReactNode {
		return (
			<form className={style.newTaskForm}>
				<div className={style.inputContainer}>
					<label htmlFor="task">
						Add a new study task
					</label>
					<input
						id="task"
						name="task"
						type="text"
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
						step="1"
						name="time"
						min="00:00:00"
						max="01:30:00"
					/>
				</div>
				<Button />
			</form>
		)
	}
}

export default Form