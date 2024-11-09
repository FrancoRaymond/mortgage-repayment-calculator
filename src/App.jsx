import { useState } from 'react'
import Form from './Components/Form'
import ResultsContainer from './Components/ResultsContainer'


function App() {  
  const [formData, setFormData] = useState({
    amount: '',
    term: '',
    interest: '',
    type: '',
  });

  const [errors, setErrors] = useState({
    amount: false,
    term: false,
    interest: false,
    type: false,
  });

  const [monthlyRepayment, setMonthlyRepayment] = useState(0)
  const [totalOverTheTerm, setTotalOverTheTerm] = useState(0)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'amount' || name === 'term' || name === 'interest') {
      if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      amount: !formData.amount,
      term: !formData.term,
      interest: !formData.interest,
      type: !formData.type,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {

      const monthlyInterestRate = parseFloat(formData.interest) / 100 / 12;
      const totalPayments = parseFloat(formData.term) * 12;
      const monthlyRepayment = parseFloat(
        formData.amount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / 
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
      );
      
      const totalRepayment = monthlyRepayment * totalPayments;
      setMonthlyRepayment(monthlyRepayment.toFixed(2));
      setTotalOverTheTerm(totalRepayment.toFixed(2));
    } 
  };

  return (
    <div className='flex rounded-3xl overflow-hidden bg-white'>
      <Form
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        errors={errors}
        formData={formData}
        setFormData={setFormData}
        setMonthlyRepayment={setMonthlyRepayment}
        setTotalOverTheTerm={setTotalOverTheTerm}
      />
      <ResultsContainer 
        monthlyRepayment={monthlyRepayment} 
        totalOverTheTerm={totalOverTheTerm}
      />
    </div>
  )
}

export default App
