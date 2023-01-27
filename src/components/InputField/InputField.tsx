import React from 'react'
import './style.css'

type Props = {
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}
const InputField = ({todo,setTodo}:Props) => {
  return (
    <form className='form'>
      <input className='input__box' type="text" placeholder='Add to your lists' onChange={(e)=>setTodo(e.target.value)} />
      <button className='submit__btn' type="submit">Add</button>
    </form>
  )
}

export default InputField