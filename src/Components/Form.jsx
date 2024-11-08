import React from 'react'
import calcIcon from '../assets/icon-calculator.svg'

const Form = () => {
  return (
    <form action="" className='bg-white p-9 w-[450px]'>
        <header className='flex justify-between items-baseline mb-6'>
            <h1 className='text-2xl font-semibold text-slate-900'>Mortgage Calculator</h1>
            <span className='text-slate-500 underline font-medium cursor-pointer'>Clear All</span>
        </header>
        <label htmlFor="" className='text-slate-500 font-medium'>Mortage Amount <br/>
            <div className='mt-3 border border-slate-500 overflow-hidden rounded-md'>
                <span className='bg-slate-100 text-slate-500 text-lg font-bold py-3 px-3'>R</span>
                <input 
                    type="number" 
                    className='text-lg text-slate-900 font-semibold px-4 py-2' 
                    required
                />
            </div>       
        </label>
        <div className="flex flex-wrap mt-6 mb-6 w-full justify-between space-y-4 md:space-y-0">
            <label htmlFor="" className="text-slate-500 font-medium w-full md:w-[48%]">
                Mortgage Term<br />
                <div className="mt-3 flex items-center border border-slate-500 overflow-hidden rounded-md">
                <input
                    type="number"
                    className="text-lg text-slate-900 font-semibold px-4 py-2 w-[125px] grow"
                    required
                />
                <span className="bg-slate-100 text-slate-500 text-lg font-bold py-2 px-3 mr-0">Year</span>
                </div>
            </label>

            <label htmlFor="" className="text-slate-500 font-medium w-full md:w-[48%]">
                Interest Rate<br />
                <div className="mt-3 flex items-center border border-slate-500 overflow-hidden rounded-md">
                <input
                    type="number"
                    className="text-lg text-slate-900 font-semibold px-4 py-2 w-[125px] grow"
                    required
                />
                <span className="bg-slate-100 text-slate-500 text-lg font-bold py-2 px-3 mr-0">%</span>
                </div>
            </label>
        </div>
        <label htmlFor="" className='text-slate-500 font-medium'>Mortage Type<br/>
            <div className='mt-3 border border-slate-500 overflow-hidden rounded-md px-3 flex items-center'>
                <input 
                    type="radio" 
                    name='MortgageType' 
                    className='size-5' 
                    required
                />
                <span className='text-lg text-slate-900 font-semibold px-4 py-2'>Repayment</span>  
            </div> 
            <div className='mt-3 border border-slate-500 overflow-hidden rounded-md px-3 flex items-center'>
                <input 
                    type="radio" 
                    name='MortgageType'
                    className='size-5'
                    required
                />
                <span className='text-lg text-slate-900 font-semibold px-4 py-2'>Interest Only</span>   
            </div>      
        </label>
        <button 
            className='bg-lime-400 flex gap-3 px-6 py-3 mt-7 rounded-full items-center'
            type='submit'
        >
            <img src={calcIcon} alt="calculator icon" />
            <span className='text-lg text-slate-900 font-semibold'>Calculate Repayments</span>
        </button>
    </form>
  )
}

export default Form
