import { useState } from 'react'
import './App.css'


function App() {
 
let [Counter,setCounterer]=useState(15)

const addValue=()=>{
  if(Counter ===20) return
  // setCounterer(Counter+1)
  // setCounterer(Counter+1)
  // setCounterer(Counter+1)
  // setCounterer(Counter+1) // react send update as a  bunch after doing all in setter so in this way setter only using that counter 15 inn each line so so in full nunch each  line only shifting 15 to 16 no 15,16,17,18 okay, so final update as abunch wold be 1 increment , results as counter = 16
//****Solution is that  */
setCounterer(prevCounter => prevCounter+1)
setCounterer(prevCounter => prevCounter+1)
setCounterer(prevCounter => prevCounter+1)
setCounterer(prevCounter => prevCounter+1)


/*   Notes             ---------------------------------
 // -------------------------------------------------------
    // BATCHING CONCEPT:
    // React does not update state immediately on each setter call.
    // It waits for the entire function to finish,
    // then processes all queued updates at once — this is called BATCHING.
    // Only ONE re-render happens after all updates are processed.
    // -------------------------------------------------------

    // ❌ DIRECT VALUE — Wrong way for multiple increments:
    // setCounter(counter + 1)  // queue: [16]
    // setCounter(counter + 1)  // queue: [16, 16]
    // setCounter(counter + 1)  // queue: [16, 16, 16]
    // setCounter(counter + 1)  // queue: [16, 16, 16, 16]
    // counter = 15 in ALL lines — function not finished yet
    // React picks last value from queue → final result: 16
    // REASON: counter is a SNAPSHOT — it does not change
    //         inside the function no matter how many times
    //         setCounter is called

    // ✅ FUNCTION — Right way:
    // setCounter(prev => prev + 1)  // fn(15) → 16
    // setCounter(prev => prev + 1)  // fn(16) → 17
    // setCounter(prev => prev + 1)  // fn(17) → 18
    // setCounter(prev => prev + 1)  // fn(18) → 19
    // React runs each fn one by one — each fn returns new value
    // that value is passed to next fn as prev
    // final result: 19 → ONE re-render

    // NOTE: prev is NOT predefined — it is just a parameter name
    //       React injects latest state value into it automatically
    //       you can name it anything: prev, p, c, manan — same result
*/





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
