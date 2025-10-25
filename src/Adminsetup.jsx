import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Adminsetup() {
    let [password, setpassword] =useState({
        password:''
    })

    let [show , setshow]=useState(false)




  return (
    <div className='flex justify-center items-center mt-50'>


        <div className='w-110 '>

        <div className='flex justify-center text-xl text-green-600'>
        <h1>Sign up page</h1>
        </div>



            <div className='my-6 '>



                <div>
                    <div className='hover:bg-black/20 flex justify-center items-center gap-4 border border-black/20 my-2 rounded-lg'>
                {/* <p className='bg-black/20 size-2 rounded-full hover:bg-black'></p> */}
                    <p onClick={()=>setshow(!show)}>Admin user</p>

                    </div>

                    
                       <div className='hover:bg-black/20 flex justify-center items-center border-black/20 gap-4 border rounded-lg'>
                {/* <p className='bg-black/20 size-2 rounded-full hover:bg-black'></p> */}
                     {/* <p>voter </p> */}
                     <Link to='/register'>a voter</Link>

                    </div>
                   
                </div>


{show?
    <form action="" className='py-7'>


            <p>Admin password</p>

            <input 
            type="text"
            placeholder='Admin password'
            value={password.password}
            className='block w-100 border rounded-lg px-1 py-0.5'
            onChange={e => setpassword({...password,password:e.target.value})}
             />

             <button type="submit" className='bg-green-700 w-100 rounded-lg my-2 py-0.5 text-white'><Link to='/dashboard'>submit</Link></button>
        </form>

:

''



}


    

            </div>

        </div>

      
    </div>
  )
}
