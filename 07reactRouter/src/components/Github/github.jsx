import React from 'react'
import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom';

function Git() {
const data=useLoaderData()

// const [data,setData]=useState({})
// useEffect(()=>{
//     fetch('https://api.github.com/users/manan-me')
//     .then(response => response.json())
//     .then(res => setData(res))
// },[])





    return ( <div className='text-center m-4 bg-gray-600 p-4 text-white text-3xl'>

Github Folllowers : {data.followers}
<br />
Github Public Repos : {data.public_repos}
<img src={data.avatar_url} alt="User" width={300} /> </div>
     );
}

export default Git;

// export const gitHubInfoLoader=async ()=>{
//         const response= await fetch('https://api.github.com/users/manan-me')
//         return response.json()

// }