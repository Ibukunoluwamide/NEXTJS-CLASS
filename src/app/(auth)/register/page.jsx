"use client";
import axios from 'axios';
import React, { useState } from 'react'

const register = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: ''
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user)
    axios.post(`api/user/register`, user)
    .then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
    
  }
  return (
    <>
    <div className="">

<form onSubmit={handleSubmit} class="max-w-sm mx-auto shadow-xl p-3">
    <h1 className='font-bold italic text-center text-4xl pb-8'>Register</h1>
  <div className="mb-5">
    <label for="fullname" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
    <input type="text" id="fullname" value={user.fullName} onChange={(e)=>setUser({...user, fullName: e.target.value})} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Smith" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
    <input type="email" id="email" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
    <input type="password" id="password" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
 
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="terms" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit"  className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
</form>

    </div>
    </>
  )
}

export default register