

type timer = {
    seconds: number,
    minutes: number,
    hours: number,
    qTime: number,
}

const Timer = ({seconds, minutes, hours, qTime}: timer) => {

  return (
    <div className='timer'>
        <h1>Timer</h1>
        <div className='timer-container'>
            <p>{hours > 0 && hours + ':'}{minutes <= 9 ? "0" + minutes : minutes}:{seconds<=9 ? "0" + seconds : seconds}</p>
            <p>{qTime}</p>
        </div>
    </div>
  )
}

export default Timer
