import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const projectId = import.meta.env.VITE_PROJECT_ID;
const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;





export function AuthPage({ onLogin }) {


  let [auth, setauth ] = useState(true);


  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [nin, setNin] = useState('');
  const [role, setRole] = useState('voter');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data: { session }, error: authError } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });

      if (authError) throw authError;

      if (!session?.access_token) {
        throw new Error('No session token received');
      }

      // Get user profile
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-fefa2b51/user/profile`,
        {
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to get user profile: ${errorText}`);
      }

      const userData = await response.json();
      onLogin(userData);
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate NIN (11 digits for Nigerian NIN)
      if (nin && !/^\d{11}$/.test(nin)) {
        throw new Error('NIN must be 11 digits');
      }

      // Register user via backend
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-fefa2b51/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            email: registerEmail,
            password: registerPassword,
            fullName,
            nin,
            role,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }

      const data = await response.json();

      // Now login
      const { data: { session }, error: authError } = await supabase.auth.signInWithPassword({
        email: registerEmail,
        password: registerPassword,
      });

      if (authError) throw authError;

      if (!session?.access_token) {
        throw new Error('No session token received after registration');
      }

      // Get user profile
      const profileResponse = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-fefa2b51/user/profile`,
        {
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
          },
        }
      );

      if (!profileResponse.ok) {
        throw new Error('Failed to get user profile');
      }

      const userData = await profileResponse.json();
      onLogin(userData);
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || 'Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
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
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
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
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 rounded-md py-1"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
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
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label htmlFor="nin">
                      Employee's ID
                  
                    </label>
                    <div className="relative">
                      <input
                      className="w-full px-2 py-1 rounded-md border border-black/10"
                        id="nin"
                        type="text"
                        placeholder="12345678901"
                        value={nin}
                        onChange={(e) => setNin(e.target.value)}
                        maxLength={11}
                      />
                      {/* <Shield className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-600" /> */}
                    </div>
                    <p className="text-gray-500">11-digit employeeId for enhanced verification</p>
                  </div>

                  <div className=" flex flex-col ">
                    <label htmlFor="register-email">Email</label>
                    <input
                      className="border border-black/10 rounded-md px-2 py-1"
                      id="register-email"
                      type="email"
                      placeholder="your@email.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
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
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                 
                  </div>

             
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 rounded-md py-1"
                    
                  >
                    {loading ? (
                      <>
                        {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
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
            {/* <Shield className="h-4 w-4 text-green-600" /> */}
            Your data is secured with blockchain technology
          </p>
        </div>
      </div>
    </div>
  );
}
