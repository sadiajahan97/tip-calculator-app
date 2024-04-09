import {useState} from 'react'
import Header from './Header'
import BillInput from './BillInput'
import TipInput from './TipInput'
import NumberOfPeopleInput from './NumberOfPeopleInput'
import Output from './Output'
import './App.css'

function App() {

  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState('')

  return (
    <div className='body'>
      <Header />
      <main>
        <div className='main'>
          <BillInput setBill={setBill} />
          <TipInput setTip={setTip} />
          <NumberOfPeopleInput
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
          />
        </div>
        <Output
          bill={bill}
          tip={tip}
          numberOfPeople={numberOfPeople}
        />
      </main>
    </div>
  )
}

export default App