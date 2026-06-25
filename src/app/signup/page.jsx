  "use client"
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';

const Signuppage = () => {

    const onSubmit=async (e)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const user=Object.fromEntries(formData.entries())
        
        const {data,error}=await authClient.signUp.email({
            name:user.name,
            email:user.email,
            password:user.password,
            image:user.image
        })
        if(data){
            redirect('/')
        }
        if(error){
            alert("something went wrong")
        }
        // console.log({data,error})
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='font-bold'>filup the form</h1>
       <form onSubmit={onSubmit}>
         <fieldset className="fieldset">

          <label className="label">name</label>
          <input 
          name='name'
          required type="text" className="input" placeholder="name" />

           <label className="label">Email</label>
          <input 
          name='email'
          type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input
          name='password'
          required type="password" className="input" placeholder="Password" />

         
          <label className="label">Image</label>
          <input 
          name='image'
          type="url" className="input" placeholder="image" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">create account</button>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signuppage;