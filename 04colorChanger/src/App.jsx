import { useState } from 'react'

import './App.css'


function App() {

const [color,setColor]=useState("green")

  return (
   <div className='h-screen w-full' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-lime-200 rounded-full' >
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-1 rounded-3xl m-1'>
        <button onClick={()=>setColor("red")} className='outline-none px-3 bg-red-500 py-1 text-white rounded-full  '>Red</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-1 rounded-3xl m-1'>
        <button onClick={()=>setColor("blue")} className='outline-none px-3 bg-blue-500 py-1 text-white rounded-full  '>Blue</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-1 rounded-3xl m-1'>
        <button onClick={()=>setColor("green")} className='outline-none px-3 bg-green-500 py-1 text-white rounded-full  '>Green</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-1 rounded-3xl m-1'>
        <button onClick={()=>setColor("yellow")} className='outline-none px-3 bg-yellow-500 py-1 text-white rounded-full  '>Yellow</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-1 rounded-3xl m-1'>
        <button onClick={()=>setColor("pink")} className='outline-none px-3 bg-pink-500 py-1 text-white rounded-full  '>Pink</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-1 rounded-3xl m-1'>
        <button onClick={()=>setColor("gray")} className='outline-none px-3 bg-gray-500 py-1 text-white rounded-full  '>Gray</button>
      </div>
     
   </div>
   </div>
  )
}

export default App
