"use client"

import Link from 'next/link'
import {signIn, useSession, signOut} from 'next-auth/react'

 function Navbar() {
    const {data: session}= useSession()
    console.log(session)

  return (
     <nav className='bg-slate-900 h-10 flex justify-between items-center py-10 px-24 text-white'>
        <Link href="/">
            <h1>
                Next Google
            </h1>
        </Link>
        
        {session?.user ? (
            <div className='flex gap-x-2 items-center'>
            <Link href="/dashboard">
                Dashboard
            </Link>
            <p>Hi, {session.user.name}</p>
            <img src={session.user.image} alt=""
            className='w-10 h-10 rounded-full cursor-pointer'
            />
            <button onClick={async () => {
                    await signOut({callbackUrl: '/'})
                    
                    }}
                    className='bg-red-600 px-3 py-2 rounded ml-4'
            >
                Logout
            </button>
        </div>
        ): (
            <button onClick={() => signIn()} 
                    className='bg-sky-400 px-3 py-2 rounded ml-4'>
                Login
            </button>
        )}
     </nav>
  )
}

export default Navbar