'use client'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
// const isAuth = false
export default function ButtonRedirect() {
  // hàm redirect, nextjs nói là dùng cho server component thôi
  // nhưng vẫn sẽ dùng được trong client component
  // miễn là không sử dụng trong một hàm event handle
  // if(!isAuth){
  //     redirect('/login')
  // }
    const router = useRouter()
  const handleClick = () => {
    // router.push('/login')
    // trong này là không dùng được
    // redirect('/login')
  }
  return (
    <div>
      {/* dùng useRouter để chuyển hướng  */}
      <button onClick={handleClick}>Chuyển sang trang login</button>
    </div>
  );
}
