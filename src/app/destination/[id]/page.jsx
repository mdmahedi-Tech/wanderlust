
import BookingCard from "@/components/BookingCard";
import DeleteAlert from "@/components/Delete-alert";
import EdithDestination from "@/components/Edith-modal";
import Image from "next/image";


const DestinationDetailspage = async({params}) => {
    const {id}=await params;
    // console.log(id,'id of params')
    const res=await fetch(`http://localhost:5000/destination/${id}`);
    const details=await res.json();
    // console.log(details)
    // console.log(id)
    const {_id,destinationName,country,price,imageUrl}=details;
    return (
        <div>
            <div className="flex justify-end gap-4">
                <EdithDestination details={details}></EdithDestination>
                <DeleteAlert details={details}></DeleteAlert>
            </div>
             <div>
            <div className="card bg-base-100 shadow-sm">
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
      
      <div>
        <BookingCard details={details}></BookingCard>
      </div>
    </div>
  </div>
  
</div>
        </div>
        </div>
    );
};

export default DestinationDetailspage;