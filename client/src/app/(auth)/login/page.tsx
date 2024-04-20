
import { LoginForm } from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div>
      {/* dùng Component Link để chuyển hướng */}
      <LoginForm />
    </div>
  )
}
