import { useState } from 'react'
import Form from './Components/Form'
import ResultsContainer from './Components/ResultsContainer'



function App() {  
  const [formData, setFormData] = useState({});
  const [monthlyRepayment, setMonthlyRepayment] = useState(0)
  const [totalOverTheTerm, setTotalOverTheTerm] = useState(0)

  return (
    <div className='flex rounded-3xl overflow-hidden bg-white'>
      <Form />
      <ResultsContainer monthlyRepayment={monthlyRepayment} totalOverTheTerm={totalOverTheTerm}/>
    </div>
  )
}

export default App
