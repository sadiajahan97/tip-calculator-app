import {useState} from 'react'

const TipInput = ({setTip}) => {
  
  const [click1, setClick1] = useState(false)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)
  const [click4, setClick4] = useState(false)
  const [click5, setClick5] = useState(false)

  function handleClick1 () {
    setTip('5')
    setClick1(true)
    setClick2(false)
    setClick3(false)
    setClick4(false)
    setClick5(false)
  }

  function handleClick2 () {
    setTip('10')
    setClick1(false)
    setClick2(true)
    setClick3(false)
    setClick4(false)
    setClick5(false)
  }

  function handleClick3 () {
    setTip('15')
    setClick1(false)
    setClick2(false)
    setClick3(true)
    setClick4(false)
    setClick5(false)
  }

  function handleClick4 () {
    setTip('25')
    setClick1(false)
    setClick2(false)
    setClick3(false)
    setClick4(true)
    setClick5(false)
  }

  function handleClick5 () {
    setTip('50')
    setClick1(false)
    setClick2(false)
    setClick3(false)
    setClick4(false)
    setClick5(true)
  }

  function handleChange (event) {
    setTip(event.target.value)
    setClick1(false)
    setClick2(false)
    setClick3(false)
    setClick4(false)
    setClick5(false)
  }

  const style = {backgroundColor: 'var(--STRONG_CYAN)', color: 'var(--VERY_DARK_CYAN)'}

  const style1 = click1 ? style : {}
  const style2 = click2 ? style : {}
  const style3 = click3 ? style : {}
  const style4 = click4 ? style : {}
  const style5 = click5 ? style : {}

  return (
    <fieldset>
      <legend>Select Tip %</legend>
      <div className='tipButtons'>
        <button tabIndex='2' className='tip' style={style1} onClick={handleClick1}>5%</button>
        <button tabIndex='3' className='tip' style={style2} onClick={handleClick2}>10%</button>
        <button tabIndex='4' className='tip' style={style3} onClick={handleClick3}>15%</button>
        <button tabIndex='5' className='tip' style={style4} onClick={handleClick4}>25%</button>
        <button tabIndex='6' className='tip' style={style5} onClick={handleClick5}>50%</button>
        <input
          tabIndex='7'
          className='customTip'
          type='number'
          name='custom'
          id='custom'
          placeholder='Custom'
          min='0'
          step='0.01'
          onChange={(event) => handleChange(event)}
        />
      </div>
    </fieldset>
  )
}

export default TipInput