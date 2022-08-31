
type BtnArgs = {
  fn: () => void,
  txt: string
}

const Button = ({fn, txt}: BtnArgs) => {

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      console.log('User pressed: ', e.code);
      fn()
    }

    if (e.code === 'Escape') {
      console.log('User pressed: ', e.code);
      fn()
    }
  };

  return (
    <div>
        <button onClick={fn} onKeyDown={handleKeyDown} >{txt}</button>
    </div>
  )
}

export default Button