import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Featured = async () => {
     const res=await fetch(`${process.env.NEXT_PUBLIC_URL}/featured`,{cache:'no-store'})
    const featureds=await res.json()
    console.log('from home page',featureds);
    return (
        <div className='flex'>
            {
                featureds.map(featured=><div key={featured._id}>
                 <p>name:{featured.country}</p>

                  <div className="container mx-auto px-4 py-10">
      <div className="grid gap-2">
         <div
           
            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <figure className="relative h-52">
              <Image
                src={featured.imageUrl}
                alt={'pics of all bookman'}
                width={300}
                height={300}
               
              />

              {/* Rating */}
              <div className="absolute top-3 right-3 badge badge-neutral gap-1">
                ⭐ {featured.rating}
              </div>
            </figure>

            <div className="card-body p-4">
              <p className="text-sm text-gray-500 flex items-center gap-1">
                📍 {featured.country}
              </p>

              <h2 className="font-bold text-lg">{featured.title}</h2>

              <p className="text-sm text-gray-500">{featured.location}</p>

              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-xl font-bold text-primary">
                    ${featured.price}
                  </span>
                  <span className="text-gray-500 text-sm"> / Person</span>
                </div>

               <Link href={`/destination/${featured._id}`}><button className='w-full btn bg-cyan-700 text-white'>book now</button></Link>
              </div>
            </div>
          </div>
      </div>
    </div>
                </div>)
            }
        </div>
    );

};

export default Featured;