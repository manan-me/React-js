import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Card } from './card'

function App() {
// but it takes name='Manan'
const user={
  name:'Manan',
  age:22
}
const newArr=[1,2,3,4]
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='underline  text-red-500 p-4 bg-amber-200 rounded-4xl mb-4' >Tailwind Check</h1>
 <Card username='Manan' display='card' somobj={user} arr={newArr} btnText='HIT ME'/>
 <Card username='Abdul Manan' btnText='' />
  
  


    </>
  )
}

export default App
