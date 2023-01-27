import React from 'react'
import './style.css'

const InputField = () => {
  return (
    <form className='form'>
      <input className='input__box' type="text" name="" id="" placeholder='Add to your lists' />
      <button className='submit__btn' type="submit">Add</button>
    </form>
  )
}

export default InputField