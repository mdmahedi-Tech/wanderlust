"use client";

import {AlertDialog, Button} from "@heroui/react";

export  async function BookingDelete() {
    const handleDelete=async ()=>{
        const res=await fetch(`${process.env.NEXT_PUBLIC_URL}/bookings/${user?.id}`,{
        method:'DELETE',
        headers:{
            'content-type':'application/json'
        },
 
    })
    const data= await res.json()
    console.log(data)
    }
  return (
    <AlertDialog>
      <Button  variant="danger">delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
 export default BookingDelete;