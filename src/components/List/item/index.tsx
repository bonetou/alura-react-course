import { ITask } from '../../../types/task'
import ListStyle from '../List.module.scss'

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}


export default function Item({id, task, time, selected, completed, selectTask}: Props) {
    return (
        <li 
            className={`${ListStyle.item} ${selected ? ListStyle.itemSelected : ''}`}
            onClick={() => selectTask(
                {id, task, time, selected: true, completed}
            )}
        >
            <h3> {task} </h3>
            <span> {time} </span>
        </li>
    )
}