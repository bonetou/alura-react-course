import { ITask } from '../../types/task'
import Item from './item'
import ListStyle from './List.module.scss'

interface Props {
  tasks: ITask[]
  selectTask: (selectedTask: ITask) => void
}


function List({tasks, selectTask}: Props) {
  return (
    <aside className={ListStyle.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            selectTask={selectTask}
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}


export default List