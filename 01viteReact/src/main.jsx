import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'  // ← yeh add karna tha


// const ReactElem={
//     type:'a',
//     props:{
//         href:'https//google.com',
//         target:'manan'
//     },
//     children:'Hey i am hereee'
// }
const nanoo='Mani'
const ReactElem=React.createElement(
    'a',
    {href:"https//google.com",target:"-blank-"},nanoo,
    'Click me to see magic',
    nanoo
)

const NewElem=(
    <a href="https//google.com">Visist Google</a>
)


createRoot(document.getElementById('root')).render(
 
  // ReactElem      // not run cz  render demands exact key values for specific tag 
 //NewElem     //convert that lem into obj and then render
 ReactElem
// {/* <App /> */}
)

  // <StrictMode>         strict can be removed
  //   <App />
  // </StrictMode>,




//   work flow for babel object conversion :
//   JSX code
//     ↓  Babel
// React.createElement() → plain object (NewElem)
//     ↓  getElementById
// <div id="root"> dhundha Real DOM mein
//     ↓  createRoot
// React ne div ki ownership li
//     ↓  .render(NewElem)
// Object ko read kiya → real DOM nodes banaye → div mein inject kiya
//     ↓
// Screen pe visible hua