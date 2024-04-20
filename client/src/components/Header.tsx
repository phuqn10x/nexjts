import { MenuUser } from '@/components/MenuUser';
import { ModeToggle } from '@/components/ModeToggle'
import Navbar from '@/components/Navbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import React from 'react'

export default function Header() {
  return (
    <div className="flex p-4  ">
      <div className='flex-1'>
        
        <MenuUser />
      </div >
      <Link href="/" className='font-medium flex-1 text-center'>
        phudepzai.vn
      </Link>
      <div className='flex flex-1 justify-end'>
        <Navbar />
        <div className="px-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
