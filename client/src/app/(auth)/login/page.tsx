
import { LoginForm } from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div>
      {/* dùng Component Link để chuyển hướng */}
      <h1 className='text-xl font-semibold text-center'>Login</h1>
     
        <LoginForm />
     
      
    </div>
  )
}
