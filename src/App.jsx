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
      const initialAmount = parseFloat(formData.amount);
      const monthlyInterestRate = parseFloat(formData.interest) / 100 / 12; 
      const totalPayments = parseFloat(formData.term) * 12; 
    
      const monthlyRepayment = initialAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    
      const totalRepayment = monthlyRepayment * totalPayments;
    
      if (formData.type === 'Repayment') {
        setMonthlyRepayment(
          monthlyRepayment.toLocaleString('en-US')
        );
        setTotalOverTheTerm(
          totalRepayment.toLocaleString('en-US')
        );
      }
    
      if (formData.type === 'Interest only') {

        const interestOnlyMonthlyRepayment = initialAmount * monthlyInterestRate;
    
        const totalInterestPaid = interestOnlyMonthlyRepayment * totalPayments;
    
        setMonthlyRepayment(
          interestOnlyMonthlyRepayment.toLocaleString('en-US')
        );
        setTotalOverTheTerm(
          totalInterestPaid.toLocaleString('en-US')
        );
      }
    }
  } 

  return (
    <div className='flex flex-col md:flex-row md:rounded-3xl overflow-hidden bg-white '>
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
