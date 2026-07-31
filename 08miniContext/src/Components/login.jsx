import { useState, useContext } from 'react'
import UserContext from '../Context/userContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)

    const handleClick = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white rounded-xl shadow-md p-8 w-full max-w-sm'>

                <div className='flex items-center gap-3 mb-6'>
                    <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                        <span className='text-blue-600 text-lg'>👤</span>
                    </div>
                    <div>
                        <h2 className='text-base font-medium text-gray-800'>Welcome back</h2>
                        <p className='text-sm text-gray-500'>Login to continue</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <div>
                        <label className='text-sm text-gray-600 mb-1 block'>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter username'
                            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='text-sm text-gray-600 mb-1 block'>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter password'
                            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        />
                    </div>

                    <button
                        onClick={handleClick}
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200 mt-1'
                    >
                        Login
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Login