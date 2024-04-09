import {useState} from 'react'
import IconPerson from './images/icon-person.svg'

const NumberOfPeopleInput = ({numberOfPeople, setNumberOfPeople}) => {

  const [hover, setHover] = useState(false)
  const [focus, setFocus] = useState(false)

  const outline = (hover || focus) ? 'var(--STRONG_CYAN) solid 2px' : 'none'
  const error = (numberOfPeople === '0') ? "Can't be zero" : ''
  
  return (
    <form>
      <div className='error'>
        <label htmlFor='numberOfPeople'>Number of People</label>
        <p>{error}</p>
      </div>
      <div
        className='inputDisplay'
        style={{outline: outline}}
      >
        <img src={IconPerson} alt='icon-person' />
        <input
          tabIndex='8'
          className='input'
          type='number'
          name='numberOfPeople'
          id='numberOfPeople'
          placeholder='0'
          min='0'
          onChange={(event) => setNumberOfPeople(event.target.value)}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </form>
  )
}

export default NumberOfPeopleInput