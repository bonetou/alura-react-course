import { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Timer from '../components/Timer'
import { ITask } from '../types/task'
import style from './App.module.scss'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask | undefined>(undefined)

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask)
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id
    })))
  }
  
  function completTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(oldTask => oldTask.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Timer
        selected={selected}
        completTask={completTask}
      />
    </div>
  )
}

export default App
