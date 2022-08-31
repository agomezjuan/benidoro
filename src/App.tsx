import { useEffect, useRef, useState } from 'react'
import sound_effect from './sound/sound-effect.mp3'
import './App.css'
import Timer from './components/Timer'
import Button from './components/Button'

function App() {
  const [numPregunta, setNumPregunta] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [qTime, setQTime] = useState(18)
  const intervalRef = useRef<number>()
  
  useEffect(() => {
      intervalRef.current && clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
          setSeconds(sec => sec + 1)
          setQTime(sec => sec - 1)
          if (seconds === 59) {
              setSeconds(0)
              setMinutes(min => min + 1)
          }
          if (minutes === 59) {
              setMinutes(0)
              setHours(hour => hour + 1)
          }
          if (qTime === 1) {
              setQTime(18)
              play()
              nextQuestion()
          }
      }, 1000)

      minutes === 15 && clearInterval(intervalRef.current)

  }, [seconds])
  
  function play() {
      const audio = new Audio(sound_effect)
      audio.play();
  }

  function pause() {
      clearInterval(intervalRef.current)
  }

  const nextQuestion = () => {
    setNumPregunta(numPregunta + 1)
    setQTime(18)
  }

  return (
    <div className="App">
     <Timer 
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        qTime={qTime}
      />
     <Button fn={pause} txt='Pausar'  />
     <Button fn={nextQuestion} txt='Siguiente Pregunta'/>
      <p className='pregunta'>Deberías estar en la pregunta {numPregunta}</p>
    </div>
  )
}

export default App
