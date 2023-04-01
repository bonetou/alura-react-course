import { ITask } from '../../../types/task'
import ListStyle from '../List.module.scss'

export default function Item({ id, task, time, selected, completed }: ITask) {
    return (
        <li className={ListStyle.item}>
            <h3> {task} </h3>
            <span> {time} </span>
        </li>
    )
}