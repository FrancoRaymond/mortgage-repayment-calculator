import React from 'react'
import emptyIllustration from '../assets/illustration-empty.svg'

const ResultsContainer = ({monthlyRepayment,totalOverTheTerm}) => {
  return (
    <div className={`bg-slate-900 flex px-2 py-5 md:p-9 md:rounded-bl-[75px] max-w-[450px] ${monthlyRepayment === 0 ? 'items-center' : ''}`}>
      {monthlyRepayment === 0 ? (
        <div className='px-4 md:px-10 text-center flex-col gap-5 flex'>
          <img src={emptyIllustration} alt="" className='mx-auto'/>
          <h2 className='text-white text-2xl font-semibold'>Results shown here</h2>
          <p className='text-slate-500'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
      ) : (
        <div className=' flex flex-col gap-5 text-left '>
          <h2 className='text-white text-2xl font-semibold'>Your results</h2>
          <p className='text-slate-500'>Your results are shown below based on the information you provided. To adjucst the results, edit the form and click "calculate repayments" again.</p>
          <div className='p-7 mt-2 border-t-4 border-[#d9db30] rounded-lg  bg-slate-950'>
            <div className='pb-7 border-b border-slate-500 mt-2'>
              <span className='text-slate-500'>Your monthly repayments</span>
              <h1 className='text-5xl text-[#d9db30] font-bold mt-2'>R{monthlyRepayment.toLocaleString('en-US')}</h1>
            </div>
            <div className='mt-7'>
              <span className='text-slate-500'>Total you'll pay over the term</span>
              <h1 className='text-3xl text-white font-bold mt-2'>R{totalOverTheTerm.toLocaleString('en-US')}</h1>
            </div>
          </div>
        </div> 
      )}      
    </div>
  )
}

export default ResultsContainer
