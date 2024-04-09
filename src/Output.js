const Output = ({bill, tip, numberOfPeople}) => {

  let output1 = parseFloat(bill) * parseFloat(tip) / (parseFloat(numberOfPeople) * 100)
  let output2 = output1 + (parseFloat(bill) / parseFloat(numberOfPeople))

  output1 = isFinite(output1) ? output1 : 0
  output2 = isFinite(output2) ? output2 : 0

  const style = (bill === '' && tip === '' && numberOfPeople === '')
    ? {backgroundColor: 'var(--VERY_LIGHT_GRAYISH_CYAN)', opacity: '0.2', cursor: 'default'}
    : {}
    
  return (
    <section>
      <div className='outputDisplay'>
        <p className='outputLabel'>
          <span className='label'>Tip Amount</span>
          <span className='unit'>/ person</span>
        </p>
        <p className='output'>${output1.toFixed(2)}</p>
        <p className='outputLabel'>
          <span className='label'>Total</span>
          <span className='unit'>/ person</span>
        </p>
        <p className='output'>${output2.toFixed(2)}</p>
      </div>
      <button
        tabIndex='9'
        className='reset'
        type='reset'
        style={style}
        onClick={() => {if (bill !== '' || tip !== '' || numberOfPeople !== '') window.location.reload()}}
      >
        RESET
      </button>
    </section>
  )
}

export default Output