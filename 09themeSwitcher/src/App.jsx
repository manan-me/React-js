import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Components/themeComponent'
import ThemeBtn from './themeBtn'
import Card from './card'

function App() {
  const [themeMode,setThemeMode]=useState('light')

  const themeDark=()=>{
    setThemeMode('dark')
  }
  const themeLight=()=>{
    setThemeMode('light')
  }

  useEffect(()=>{

    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,themeDark,themeLight}} >
  
   <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

                            <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
