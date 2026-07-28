import { useState } from 'react'
import './App.css'


function App() {
 
let [Counter,setCounterer]=useState(15)

const addValue=()=>{
  if(Counter ===20) return
  setCounterer(Counter+1)
  console.log(`clciked ${Counter}`);
}
const removeValue=()=>{
  if(Counter === 0) return
  setCounterer(Counter-1)
  console.log(`clciked ${Counter}`);
  // document.getElementById('h33').innerHTML=`Counterer Value : ${Counter}`  


  //in JS we have to select everything to manually update data
}

////We will use react hooks to handle chnages at multiple places seamlessly







  return (<>
<h1>Manan's Product</h1>
<h3 id='h33'>Counter Value : {Counter}</h3>
<button onClick={addValue}>Add Value : {Counter}</button> 
<br />
<button onClick={removeValue}>Remove Value : {Counter}</button>
<p><footer>: {Counter}</footer></p>

</>)
}

export default App
