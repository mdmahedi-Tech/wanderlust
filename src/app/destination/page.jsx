import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const Destinationpage = async() => {
    const res=await fetch(`${process.env.NEXT_PUBLIC_URL}/destination`,{cache:'no-store'})
    const destinations=await res.json()
    console.log(destinations);

    return (
        <div>
            <h1>this is destination page</h1>
            <div className='grid grid-cols-3 '>
                {
                    destinations.map(destination=><DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
            
        </div>
    );
};

export default Destinationpage;