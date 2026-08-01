import { useTheme } from './Components/themeComponent'

export default function Card() {
    const { themeMode } = useTheme()
    const dark = themeMode === 'dark'

    return (
        <div style={{
            backgroundColor: dark ? '#1f2937' : '#ffffff',
            borderColor: dark ? '#374151' : '#e5e7eb'
        }} className="w-full border rounded-lg shadow">

            <a href="/">
                <img
                    className="p-8 rounded-t-lg w-full object-cover"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Apple Watch"
                />
            </a>

            <div className="px-5 pb-5">
                <a href="/">
                    <h5 style={{ color: dark ? '#ffffff' : '#111827' }}
                        className="text-xl font-semibold tracking-tight">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>

                <div className="flex items-center mt-2.5 mb-5">
                    {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                    <svg className="w-4 h-4 mr-1" style={{ color: dark ? '#4b5563' : '#e5e7eb' }} fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">
                        4.0
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span style={{ color: dark ? '#ffffff' : '#111827' }}
                          className="text-3xl font-bold">
                        $599
                    </span>
                    <a href="/"
                       style={{ backgroundColor: dark ? '#2563eb' : '#1d4ed8' }}
                       className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:opacity-90">
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    )
}