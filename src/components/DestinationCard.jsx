import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DestinationCard = ({destination}) => {
    const {_id,destinationName,country,price,imageUrl}=destination;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
   <Image
   src={imageUrl}
   width={300}
   height={300}
   alt='all pic'
   ></Image>
  </figure>
  <div className="flex justify-between items-center">
    <div>
      <h1>{destinationName}</h1>
      <h1>{country}</h1>
      <h1>{destinationName}</h1>
      <h1>{destinationName}</h1>
    </div>
    
    <div className="card-actions justify-end">
      
      <div className="badge badge-outline">{price}</div>
    </div>
  </div>
  <Link href={`/destination/${_id}`}><button className='w-full btn bg-cyan-700 text-white'>book now</button></Link>
</div>
        </div>
    );
};

export default DestinationCard;