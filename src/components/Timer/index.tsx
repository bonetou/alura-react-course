import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss'


interface Props {
    selected: ITask | undefined
    completTask: () => void
}


export default function Timer({selected: selectedTask, completTask}: Props) {
    const [time, setTime] = useState<number | undefined>(0);
    useEffect(() => {
        if(selectedTask?.time) {
          setTime(timeToSeconds(selectedTask.time));
        }
      },[selectedTask]);
    
    function regressive(counter: number = 0) {
        console.log(counter);
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            completTask();
        }, 1000)
    }
    return (
        <div className={style.timer}>
            <p className={style.title}> Escolha um card e inicie o cronômetro </p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                Começar!
            </Button>
        </div>
    )
}