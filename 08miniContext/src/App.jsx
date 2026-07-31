import { useState } from 'react'
import UserContextProvider from './Context/userContextProvider'
import './App.css'
import Login from './Components/login'
import Profile from './Components/profile'

function App() {

  return (
    <UserContextProvider>
  <div className='min-h-screen bg-gray-100 flex items-center justify-center gap-8 flex-wrap p-8'>
    <Login />
    <Profile />
  </div>
</UserContextProvider>
  )
}

export default App
