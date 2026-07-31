import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/User/user.jsx'
import Git from './components/Github/github.jsx'


// const router=createBrowserRouter(
// [
//   { path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'/About',
//         element:<About />,
//       },
//       {
//         path:'/contact-us',
//         element:<Contact />,
//       }
//     ]

//   }
// ] )       one way of doing or configure router
// anotherway
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} hydrateFallbackElement={<p>Page is Loading</p>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact-us' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route 
      path='/github'
      // loader={gitHubInfoLoader}
      loader={async ()=>{
        const res=await fetch('https://api.github.com/users/manan-me')
        return res.json()
           
      }}
      hydrateFallbackElement={<p>Git is Loading</p>}
      element={<Git />} />

    </Route>
  )


)


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
