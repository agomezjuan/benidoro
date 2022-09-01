import { useEffect, useRef, useState } from 'react'
import sound_effect from './sound/sound-effect.mp3'
import './App.css'
import Timer from './components/Timer'
import Button from './components/Button'

function App() {
  const [numPregunta, setNumPregunta] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [qTime, setQTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<number>()
  
  useEffect(() => {
      intervalRef.current && clearInterval(intervalRef.current)
      if (isRunning) {
        intervalRef.current = setInterval(() => {
          if (numPregunta === 0) setNumPregunta(1)
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
          if (qTime <= 1) {
              setQTime(18)
              play()
              nextQuestion()
          }
      }, 1000)

      minutes === 15 && clearInterval(intervalRef.current)
      }

  }, [seconds, isRunning])
  
  function play() {
      const audio = new Audio(sound_effect)
      audio.play();
  }

  function pause() {
      setIsRunning(!isRunning)
  }

  const nextQuestion = () => {
    setIsRunning(true)
    setNumPregunta(numPregunta + 1)
    setQTime(18)
  }

  const handleKey = (event: {code: string}) => {
    if (event.code === 'Space') {
      nextQuestion()
    }
    if (event.code === 'Escape') {
      pause()
    }
    console.log('User pressed: ', event.code);
  };

  document.addEventListener('keyup', handleKey);

  let mensaje = numPregunta > 0 ? `Deberías estar en la pregunta ${numPregunta}` : 'Presiona espacio para comenzar'
  return (
    <div className="App">
     <Timer 
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        qTime={qTime}
      />
     <Button click={pause} txt={ numPregunta > 0 ? (isRunning ? 'Pausar' : 'Reanudar') : 'Iniciar'}  />
     <Button click={nextQuestion} txt='Siguiente Pregunta'/>
      <p className='pregunta'>{mensaje}</p>
    </div>
  )
}

export default App
