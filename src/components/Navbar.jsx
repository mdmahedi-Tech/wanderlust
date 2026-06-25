
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/assets/destinations/Wanderlast.png'

import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
const Navbar = () => {
  

  const { 
        data: session, 
       
    } = authClient.useSession() 
    const user=session?.user;
    // console.log('for image user',user)
// logout btn
const handlelogout = async()=>{
   const a = await authClient.signOut({
  
    onSuccess: () => {
      router.push("/login"); // redirect to login page
    
  },
});
}
    return (
        <div>
         <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     <div className="navbar-center hidden lg:flex">
        <ul className='flex items-center gap-3'>
         <Link href={'/'}><li><button className='btn font-bold'>Home</button></li></Link>
         <Link href={'/destination'}><li><button className='btn font-bold'>destination</button></li></Link>
         <Link href={'/bookings'}><li><button className='btn font-bold'>my bookings</button></li></Link>
         <Link href={'/add-destination'}><li><button className='btn font-bold'>add-destination</button></li></Link>
         <Link href={'/admin'}><li><button className='btn font-bold'>admin</button></li></Link>
        
     </ul>
     </div>
    </div>
    <div className="navbar-center">
      <ul className="menu menu-horizontal px-1">
        
         <Image
         src={logo}
         width={100}
         height={40}
         alt='logo image'
         ></Image>
        {/* <li><button>Item 1</button></li>
        
        <li><button>Item 3</button></li> */}
      </ul>
    </div>
    <div className="navbar-end">
     <ul className='flex items-center gap-3'>

        <Link href={'/profile'}><li><button className='btn font-bold'>profile</button></li></Link>
        { user ? (<div className='flex justify-center items-center gap-2'>
           <Avatar>
        <Avatar.Image alt="John Doe" src={user.image} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
          <button onClick={handlelogout} className='btn'>logout</button>
          
          </div>):<><Link href={'/login'}><li><button className='btn font-bold'>login</button></li></Link>
        <Link href={'/signup'}><li><button className='btn font-bold'>signup</button></li></Link></>}
     </ul>
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
      <Link href={'/'}><li><button>Home</button></li></Link>
         <Link href={'/destination'}><li><button>destination</button></li></Link>
         <Link href={'/bookings'}><li><button>my bookings</button></li></Link>
         <Link href={'/add-destination'}><li><button>add-destination</button></li></Link>
         <Link href={'/admin'}><li><button>admin</button></li></Link>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;