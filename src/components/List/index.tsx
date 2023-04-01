import { ITask } from '../../types/task'
import Item from './item'
import ListStyle from './List.module.scss'

function List({tasks}: {tasks: ITask[]}) {
  return (
    <aside className={ListStyle.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}


export default List