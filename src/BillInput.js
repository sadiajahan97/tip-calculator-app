import {useState} from 'react'
import IconDollar from './images/icon-dollar.svg'

const BillInput = ({setBill}) => {

  const [hover, setHover] = useState(false)
  const [focus, setFocus] = useState(false)

  const outline = (hover || focus) ? 'var(--STRONG_CYAN) solid 2px' : 'none'
  
  return (
    <form>
      <label htmlFor='bill'>Bill</label>
      <div
        className='inputDisplay'
        style={{outline: outline}}
      >
        <img src={IconDollar} alt='icon-dollar' />
        <input
          tabIndex='1'
          className='input'
          type='number'
          name='bill'
          id='bill'
          placeholder='0'
          min='0'
          step='0.01'
          onChange={(event) => setBill(event.target.value)}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </form>
  )
}

export default BillInput