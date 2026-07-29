import { useState,useEffect } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {

  const [amount,setAmount]=useState('')
  const [to,setTo]=useState('pkr')
  const [from,setFrom]=useState("usd")
  const [updateCurrenncy,setUpdateCurrency]=useState('')

  const currencyInfo=useCurrencyInfo(from)


  const options=Object.keys(currencyInfo || {}) 

  const swap=()=>{
    setTo(from)
    setFrom(to)
    setUpdateCurrency(amount)
    setAmount(updateCurrenncy)
  }

const convert = () => {
    if(currencyInfo[to]) {
        setUpdateCurrency(Number(amount) * currencyInfo[to])
    }
}
  
 

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: 'url ("https://images.pexels.com/photos/4695995/pexels-photo-4695995.jpeg")',
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(ref)=>setAmount(ref)}
                                onCurrencyChange={(ref)=>setFrom(ref)}
                                currencyOptions={options}
                                selectCurrency={from}
  

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={updateCurrenncy}
                                onCurrencyChange={(ref)=>setTo(ref)}
                                currencyOptions={options}
                                selectCurrency={to} 
                                amountDisable={true}                               
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
  }
export default App
