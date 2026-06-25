"use client"
import { authClient } from '@/lib/auth-client';
import { DateField } from '@heroui/react';
import { username } from 'better-auth/plugins';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BookingCard = ({details}) => {
     const {_id,destinationName,country,price,imageUrl,departureDate}=details;
      
    //  date change
    const [departure,setdeparture]=useState(null)
    // console.log(departure)

    // user information 
     const { 
            data: session, 
           
        } = authClient.useSession() 
        const user=session?.user;
        // console.log(user)
        
        // get data from user and mongodb about destination
        const handlebooking =async()=>{
         const bookingData={
             userId:user?.id,
            userName:user?.name,
            userImage:user?.image,
            _id,
            destinationName,
            country,
            imageUrl,
            // departureDate
         }  
         console.log('booking datra form card',bookingData)
        //  cll api for post data
        const res=await fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookingData)
        })
        const data=await res.json()
        console.log(data)
        toast.success("bookings successful");
        
        }


    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <div>
        {/* date start */}
      <h1>departure date</h1><br />
      <DateField onChange={setdeparture}>
        <input  type="date" className="input" name='date' />
      </DateField>
      {/* date end */}
      </div>
      <span className="text-xl font-bold">${price}</span>
    </div>
    {/* <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Seamless cloud integration</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Real-time collaboration tools</span>
      </li>
    </ul> */}
    <div className="mt-6">
      <button onClick={handlebooking} className="btn btn-primary btn-block">book now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingCard;