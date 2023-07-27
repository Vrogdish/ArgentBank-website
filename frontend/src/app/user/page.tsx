import React from 'react'

const user = {
    firstname : "Tony",
    lastname : "Jarvis"
}



export default function page() {
  return (
    <main className='flex-1 bg-secondary flex flex-col items-center'>
        <h1 className='text-center text-white text-3xl font-bold my-5'>Welcome Back <br /> {user.firstname} {user.lastname}!</h1>
    </main>
  )
}
