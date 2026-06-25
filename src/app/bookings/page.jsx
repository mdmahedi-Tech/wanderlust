
import BookingDelete from '@/components/BookDelete';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { GiConsoleController } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md';

const Bookingspage = async() => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
    
})
const user = session.user;
// console.log(user);

// api call for get data 
const res=await fetch(`http://localhost:5000/bookings/${user?.id}`)
const bookings=await res.json()
console.log('data of bookings persons',bookings)

// api for delete data


    return (
        <div>
           {
            bookings.map(booking=><div key={booking._id}>
               <div className='flex justify-between items-center'>
                 <div>
                    <Image
                src={booking.imageUrl}
                width={500}
                height={500}
                alt='bookings picture'
                >

                </Image>
                <h1>name:{booking.userName}</h1>
                <h1>country:{booking.country}</h1>
                <h1>bookingId:{booking.userId}</h1>
                 </div>
                <div>
                    <button><BookingDelete></BookingDelete></button>
                   
                </div>
               </div>
            </div>)
           }
        </div>
    );
};

export default Bookingspage;