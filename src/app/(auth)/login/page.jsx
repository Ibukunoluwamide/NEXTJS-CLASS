"use client"
import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user)
    axios.post(`api/user/login`, user)
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
    <h1 className='font-bold italic text-center text-4xl pb-8'>Login</h1>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
    <input type="email" id="email"  value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
    <input type="password" id="password"  value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <button type="submit" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
</form>

    </div>
    </>
  )
}

export default Login