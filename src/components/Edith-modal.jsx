"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField,Select,FieldError,TextArea,ListBox} from "@heroui/react";
import { redirect } from "next/navigation";
// import {FieldError, Label, ListBox, TextArea, TextField,Select } from '@heroui/react';
import React from 'react';


export function EdithDestination({details}) {

     const {_id,departureDate,destinationName,country,price,imageUrl,description,duration,category}=details;

 const onSubmit=async(e)=>{
        e.preventDefault();
        const formData=new FormData(e.currentTarget)
        const destination=Object.fromEntries(formData.entries());
        console.log(destination)

       const res=await fetch(`${process.env.NEXT_PUBLIC_URL}/destination/${_id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(destination)
       })
       const data=await res.json()
       redirect('/destination')
       console.log(data)
    
    }

  return (
    <Modal>
      <Button variant="secondary">Edith</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                  <form
                             onSubmit={onSubmit}
                            className="p-10 space-y-8"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {/* Destination Name */}
                              <div className="md:col-span-2">
                                <TextField name="destinationName"
                                defaultValue={destinationName}
                                isRequired>
                                  <Label className='text-2xl font-bold'>Destination Name</Label>
                                  <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Country */}
                              <TextField name="country"
                              defaultValue={country}
                              isRequired>
                                <Label>Country</Label>
                                <Input placeholder="Indonesia" className="rounded-2xl" />
                                <FieldError />
                              </TextField>
                
                              {/* Category - Updated Select Component */}
                              <div>
                                <Select
                                  name="category"
                                  isRequired
                                  className="w-full"
                                  placeholder="Select category"
                                  defaultValue={category}
                                >
                                  <Label>Category</Label>
                                  <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                  </Select.Trigger>
                                  <Select.Popover>
                                    <ListBox>
                                      <ListBox.Item id="Beach" textValue="Beach">
                                        Beach
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Mountain" textValue="Mountain">
                                        Mountain
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="City" textValue="City">
                                        City
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Adventure" textValue="Adventure">
                                        Adventure
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Cultural" textValue="Cultural">
                                        Cultural
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Luxury" textValue="Luxury">
                                        Luxury
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                    </ListBox>
                                  </Select.Popover>
                                </Select>
                              </div>
                
                              {/* Price */}
                              <TextField name="price" type="number"
                              defaultValue={price}
                              isRequired>
                                <Label>Price (USD)</Label>
                                <Input
                                  type="number"
                                  placeholder="1299"
                                  className="rounded-2xl"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Duration */}
                              <TextField name="duration"
                              defaultValue={duration}
                              isRequired>
                                <Label>Duration</Label>
                                <Input
                                  placeholder="7 Days / 6 Nights"
                                  className="rounded-2xl"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Departure Date */}
                              <div className="md:col-span-2">
                                <TextField name="departureDate" type="date"
                                defaultValue={departureDate}
                                isRequired>
                                  <Label>Departure Date</Label>
                                  <Input type="date" className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Image URL - Removed preview */}
                              <div className="md:col-span-2">
                                <TextField name="imageUrl" 
                                defaultValue={imageUrl}
                                isRequired>
                                  <Label>Image URL</Label>
                                  <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-2xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Description */}
                              <div className="md:col-span-2">
                                <TextField name="description" 
                                defaultValue={description}
                                isRequired>
                                  <Label>Description</Label>
                                  <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-3xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                            </div>
                
                            {/* Buttons */}
                
                            <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close"type="submit">submit</Button>
                          </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
export default EdithDestination;