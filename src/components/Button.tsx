
type BtnArgs = {
  click: () => void,
  txt: string
}

const Button = ({click, txt}: BtnArgs) => {

  return (
    <div>
        <button tabIndex={0} onClick={click} >{txt}</button>
    </div>
  )
}

export default Button