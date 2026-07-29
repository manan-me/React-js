import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  /////Use useRef
  const passwordRef=useRef(null)

const passwordGenerator=useCallback(()=>{
  let pass=''
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numAllowed) str+='1234567890'
  if(charAllowed) str+='{}[]()*&^%$#@!~'
  for (let i = 0; i < length; i++) {
    let charr=Math.floor(Math.random()*str.length)
    pass+=str[charr]
    
  }
  setPassword(pass)
  
},[length,numAllowed,charAllowed])


const copyPaawordToClipBoard=useCallback(()=>{
  passwordRef.current?.select()
passwordRef.current?.setSelectionRange(0, 999)
  window.navigator.clipboard.writeText(password)
},[password])

////////passwordGenerator() // can't use it to call at refresh automaticalyy it cause toomuch re-render
// so sue useEffect HOOk
useEffect(()=>{passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <div className='w-full max-w-md shadow-md mx-auto my-8 px-4 py-2 rounded-lg bg-gray-700 text-orange-500 '>
              <h1 className='text-white my-3 text-center'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
         value={password} 
         className='outline-none bg-white w-full py-1 px-3' 
         placeholder='Password'
          readOnly 
          ref={passwordRef}

          />

        <button
        onClick={copyPaawordToClipBoard}
         className='shadow outline-none hover:bg-blue-700   shrink-0 py-1 px-3 bg-blue-500 text-white'>
          Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(Number(e.target.value))}}
          />
          <label className='py-1'>Length : {length}</label>

        </div>
      

      <div className='flex items-center gap-x-0'>
        <input 
        type="checkbox"
        defaultChecked={numAllowed}
        id='NumberInput'
        onChange={()=>{
          setNumAllowed((prev)=>!prev)
        }}
         />
         <label htmlFor="NumberInput">Numbers</label>
               </div>

      <div className='flex items-center gap-x-0'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='CharAllowed'
        onChange={()=>{
          setCharAllowed(!charAllowed)
        }}
         />
         <label htmlFor="CharAllowed">Characters</label>
               </div>

       </div> 




    </div>
  )
}

export default App
