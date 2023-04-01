import style from './Clock.module.scss'
interface Props {
    time: number | undefined
  }
  

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteDec, minuteUnity] = String(minutes).padStart(2, '0');
    const [secondsDec, secondsUnity] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className={style.clockNumber}>{minuteDec}</span>
            <span className={style.clockNumber}>{minuteUnity}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{secondsDec}</span>
            <span className={style.clockNumber}>{secondsUnity}</span>
        </>
    )
}