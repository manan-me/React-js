import { useContext } from 'react'
import UserContext from '../Context/userContext'

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white rounded-xl shadow-md p-8 text-center'>
                <div className='w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4'>
                    <span className='text-3xl'>👤</span>
                </div>
                <h2 className='text-gray-800 font-medium text-lg mb-1'>Not logged in</h2>
                <p className='text-gray-500 text-sm'>Please login to continue</p>
            </div>
        </div>
    )

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white rounded-xl shadow-md p-8 text-center w-full max-w-sm'>

                <div className='w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4'>
                    <span className='text-2xl font-medium text-blue-600'>
                        {user.username[0].toUpperCase()}
                        {/* ↑ username ka pehla letter — avatar */}
                    </span>
                </div>

                <p className='text-sm text-gray-500 mb-1'>Logged in as</p>
                <h2 className='text-xl font-medium text-gray-800 mb-4'>
                    {user.username}
                </h2>

                <div className='bg-green-50 border border-green-200 rounded-lg px-4 py-2 inline-flex items-center gap-2'>
                    <span className='text-green-500 text-sm'>✓</span>
                    <span className='text-green-700 text-sm'>Welcome back!</span>
                </div>

            </div>
        </div>
    )
}

export default Profile