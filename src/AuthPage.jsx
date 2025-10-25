import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import axios from "axios";

export function AuthPage() {
  let [auth, setauth ] = useState(true);

  let [logindata , setlogindata] = useState({
    username: '',
    password: ''
  });

  let [registerdata , setregisterdata] = useState({
    username: '',
    employeeId: '',
    email: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(logindata, 'this is the login');

    
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(registerdata, 'this is the register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <Link
          to={'/'}
        
          className="mb-6 text-green-600 hover:text-green-700 flex  items-center"
        >
          <FaArrowLeft className="mr-2 h-3 w-3" />
          Back to Home
        </Link>

        <div className="text-center mb-4">
          <div className="h-16 w-16 bg-linear-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mx-auto mb-4">
            < LuLaptopMinimalCheck className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-green-900 mb-2">Welcome to LedgerVote</h1>
          <p className="text-gray-600">Secure, transparent, and decentralized voting</p>
        </div>

        <div className="border-green-100 border rounded-lg px-2 py-2">
          <div>
            <div>Access Your Account</div>
            <div>Login or create a new account to start voting</div>
          </div>
          <div>
            {/* <div value={isLogin ? 'login' : 'register'} onValueChange={(v) => setIsLogin(v === 'login')}> */}
            <div className="flex justify-center items-center my-2">
              <span className=" justify-center gap-7 mb-6 py-0.5 bg-black/20 inline rounded-lg  ">
                <span onClick={()=>setauth(!auth)} className={`${auth?'bg-white px-5 py-0.5 rounded-lg border border-black/20':' px-5'}`}  >Login</span>
                <span onClick={()=>setauth(!auth)} className={`${!auth ? 'bg-white px-5 py-0.5 rounded-lg border border-black/20' :' px-5'}`} >Register</span>
              </span>

            </div>


            {auth ? 
              <div >
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )} */}

                  <div className=" flex flex-col ">
                    <label className=""  htmlFor="login-email">Username</label>
                    <input
                    className="border border-black/10 rounded-md px-2 py-1"
                      id="login-email"
                      type="text"
                      placeholder="John doe "
                      value={logindata.username}
                      onChange={(e) => setlogindata({...logindata , username: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="login-password">Password</label>
                    <input
                    className="border border-black/10 rounded-md px-2 py-1"

                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={logindata.password}
                      onChange={(e) => setlogindata({...logindata , password: e.target.value})}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 rounded-md py-2"
                    // disabled={loading}
                  >
                 
                
                      'Login'
                  
                  </button>
                </form>
              </div>:''
            

          }

            {!auth ? 
             
              <div >
                <form onSubmit={handleRegister} className="space-y-4">
                  {/* {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )} */}

                  <div className=" flex flex-col ">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      className="border border-black/10 rounded-md px-2 py-1"
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={registerdata.username}
                      onChange={(e) => setregisterdata({...registerdata , username: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label htmlFor="nin">
                      employeeId
                     
                    </label>
                    <div className="relative">
                      <input
                      className="w-full px-2 py-1 rounded-md border border-black/10"
                        id="nin"
                        type="text"
                        placeholder="12345678901"
                        value={registerdata.employeeId}
                        onChange={(e) => setregisterdata({...registerdata , employeeId: e.target.value  })}
                        maxLength={11}
                      />
                      {/* <Shield className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-600" /> */}
                    </div>
                    <p className="text-gray-500">11-digit NIN for enhanced verification</p>
                  </div>

                  <div className=" flex flex-col ">
                    <label htmlFor="register-email">Email</label>
                    <input
                      className="border border-black/10 rounded-md px-2 py-1"
                      id="register-email"
                      type="email"
                      placeholder="your@email.com"
                      value={registerdata.email}
                      onChange={(e) => setregisterdata({...registerdata , email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    
                    <label htmlFor="register-password">Password</label>
                    <input
                      className="border border-black/10 rounded-md px-2 py-1"
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerdata.password}
                      onChange={(e) => setregisterdata({...registerdata , password: e.target.value})}
                      required
                      minLength={6}
                    />
                 
                  </div>

             
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 rounded-md py-2"
                    
                  >
                  
                  
                     
                      
                
                      Create Account
                  
                  </button>
                </form>
              </div>
              :''
            }
            {/* </div> */}
          </div>
        </div>

        <div className="mt-6 text-center text-gray-600">
          <p className="flex items-center justify-center gap-2">
          
            Your data is secured with blockchain technology
          </p>
        </div>
      </div>
    </div>
  );
}
