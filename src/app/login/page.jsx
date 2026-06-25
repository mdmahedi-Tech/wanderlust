  "use client"
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';

const SignInpage = () => {

    const onSubmit=async (e)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const user=Object.fromEntries(formData.entries())
        
        const {data,error}=await authClient.signIn.email({
           
            email:user.email,
            password:user.password,
           
        })
        console.log({data,error})
        if(data){
            redirect('/')
        }
        if(error){
            alert("something went wrong")
        }
        console.log({data,error})
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='font-bold'>login the form</h1>
       <form onSubmit={onSubmit}>
         <fieldset className="fieldset">

          

           <label className="label">Email</label>
          <input 
          name='email'
          type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input
          name='password'
          required type="password" className="input" placeholder="Password" />

         
          

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignInpage;