import { FaArrowRight } from "react-icons/fa";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { IoShieldHalf } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { IoBarChartSharp } from "react-icons/io5";
import { GoZap } from "react-icons/go";
import { GoLaw } from "react-icons/go";
import { FaHelicopter } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { Link } from "react-router-dom";



export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <nav className="mx-10 bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-linear-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <LuLaptopMinimalCheck />
              
            </div>
            <span className="text-green-900"><span></span>LedgerVote</span>
          </div>
          {/* <Button onClick={onGetStarted} variant="default" className="bg-green-600 hover:bg-green-700"> */}

          <Link to={'register/'}>
          <button className="flex  justify-center items-center gap-2 rounded-lg px-5 py-1 text-white bg-green-600 hover:bg-green-700 border border-green-700 ">
            Get Started
            <FaArrowRight className="size-3" />
          </button>
          
          </Link>
             {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
          {/* </Button> */}
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-black/20 hover:border-black/40 text-green-700 px-4 py-2 rounded-full mb-6">
           <IoShieldHalf />

            <span>Secured by Blockchain Technology</span>
          </div>
          
          <h1 className="text-green-900 mb-6">
            Transparent, Secure, and Decentralized Voting for Nigeria
          </h1>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Empower citizens, organizations, and institutions with a corruption-free voting platform. 
            Create custom voting templates, verify with NIN, and ensure every vote counts on the blockchain.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {/* <Button onClick={onGetStarted} size="lg" className="bg-green-600 hover:bg-green-700"> */}
            <button  className="bg-green-600 hover:bg-green-700 text-md text-white border border-green-600 px-4 rounded-lg py-1 flex justify-center items-center gap-2 ">
              Start Voting Now
            <FaArrowRight className="size-3" />
            </button>
          
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-green-600 mb-2">1,247</div>
              <p className="text-gray-600">Active Polls</p>
            </div>
            <div className="text-center">
              <div className="text-green-600 mb-2">45,892</div>
              <p className="text-gray-600">Verified Voters</p>
            </div>
            <div className="text-center">
              <div className="text-green-600 mb-2">100%</div>
              <p className="text-gray-600">Transparent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 mx-30 ">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-green-900 mb-4">Why Choose <span className="text-green-600">ledgevote</span>?</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for Nigeria, designed for democracy. Our platform ensures every vote is counted, verified, and immutable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-green-100 border rounded-lg px-2 py-2 hover:shadow-lg transition-shadow">
              <div className="pt-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <IoShieldCheckmarkOutline className="h-6 w-6 text-green-600"/>  
                </div>
                <h3 className="text-green-900 mb-2">Blockchain Secured</h3>
                <p className="text-gray-600">
                  Every vote is recorded on the blockchain with a unique transaction ID, ensuring immutability and transparency.
                </p>
              </div>
            </div>

            <div className="border-green-100 border rounded-lg px-2 py-2 hover:shadow-lg transition-shadow">
              <div className="pt-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FiCheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-green-900 mb-2">NIN Verification</h3>
                <p className="text-gray-600">
                  Authenticate voters with National Identification Numbers to prevent fraud and duplicate voting.
                </p>
              </div>
            </div>

            <div className="border-green-100 border rounded-lg px-2 py-2 hover:shadow-lg transition-shadow">
              <div className="pt-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FiUsers className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-green-900 mb-2">Custom Templates</h3>
                <p className="text-gray-600">
                  Create voting templates for any use case - government elections, corporate decisions, or student councils.
                </p>
              </div>
            </div>

            <div className="border-green-100 border rounded-lg px-2 py-2 hover:shadow-lg transition-shadow">
              <div className="pt-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CiLock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-green-900 mb-2">Eligibility Control</h3>
                <p className="text-gray-600">
                  Define who can vote with granular controls - by role, ID, age, or custom criteria you specify.
                </p>
              </div>
            </div>

            <div className="border-green-100 border rounded-lg px-2 py-2 hover:shadow-lg transition-shadow">
              <div className="pt-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <IoBarChartSharp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-green-900 mb-2">Real-time Results</h3>
                <p className="text-gray-600">
                  View live vote counts and results with beautiful visualizations, all verifiable on the blockchain.
                </p>
              </div>
            </div>

            <div className="border-green-100 border rounded-lg px-2 py-2 hover:shadow-lg transition-shadow">
              <div className="pt-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GoZap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-green-900 mb-2">Anti-Cheat System</h3>
                <p className="text-gray-600">
                  Multiple layers of verification ensure one person = one vote, with blockchain proof of authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 mx-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-green-900 mb-4">Built for Multiple Use Cases</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              One platform, endless possibilities. From national elections to company board votes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center border border-green-100">
              <div className="h-16 w-16 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GoLaw className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-green-900 mb-2">Government</h3>
              <p className="text-gray-600">National & local elections</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-green-100">
              <div className="h-16 w-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHelicopter  className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-green-900 mb-2">Corporate</h3>
              <p className="text-gray-600">Board & shareholder voting</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-green-100">
              <div className="h-16 w-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <IoSchoolOutline  className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-green-900 mb-2">Educational</h3>
              <p className="text-gray-600">Student council elections</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-green-100">
              <div className="h-16 w-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-green-900 mb-2">Community</h3>
              <p className="text-gray-600">Local decision-making</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-green-600 to-green-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-white mb-4">Ready to Make Your Voice Heard?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians using LedgeVote to participate in transparent, secure, and corruption-free voting.
          </p>
          {/* <Button onClick={onGetStarted} size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50"> */}
           <p className="flex justify-center items-center">
            <button className="bg-white text-green-600 hover:bg-green-50 flex items-center gap-2 px-4 py-1 rounded-lg ">
            Get Started for Free 

            <FaArrowRight className="" />
            </button>

           </p>
          {/* </Button> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-green-100 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2025 LedgeVote Nigeria. Building a transparent democracy with blockchain technology.</p>
        </div>
      </footer>
    </div>
  );
}
