import { FaArrowRight } from "react-icons/fa";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { IoShieldHalf, IoShieldCheckmarkOutline, IoBarChartSharp, IoSchoolOutline } from "react-icons/io5";
import { FiCheckCircle, FiUsers } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { GoZap, GoLaw } from "react-icons/go";
import { FaHelicopter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function LandingPage() {

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const staggerContainer = {
    show: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen">
      
      {/* Nav */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-4 md:mx-10 bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center text-white">
              <LuLaptopMinimalCheck />
            </div>
            <span className="text-green-900 font-semibold text-lg">LedgerVote</span>
          </div>

          <Link to="setup/">
            <button className="flex justify-center items-center gap-2 rounded-lg px-5 py-2 text-white bg-green-600 hover:bg-green-700 border border-green-700 text-sm md:text-base">
              Get Started
              <FaArrowRight className="size-3" />
            </button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-green-100 border border-black/20 text-green-700 px-4 py-2 rounded-full mb-6 text-sm"
          >
            <IoShieldHalf />
            <span>Secured by Blockchain Technology</span>
          </motion.div>

          <h1 className="text-green-900 font-bold text-2xl md:text-4xl leading-relaxed mb-6">
            Transparent, Secure, and Decentralized Voting for Nigeria
          </h1>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Empower citizens, organizations, and institutions with a corruption-free voting platform.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }} 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg border border-green-600 text-sm md:text-base"
          >
            <Link to="/register" className="flex items-center gap-2">
              Start Voting Now <FaArrowRight className="size-3" />
            </Link>
          </motion.button>

          {/* Stats */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mt-12 grid grid-cols-3 gap-6 text-center text-sm md:text-base"
          >
            {[ 
              { value: "1,247", label: "Active Polls" },
              { value: "45,892", label: "Verified Voters" },
              { value: "100%", label: "Transparent" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-green-600 font-semibold">{item.value}</div>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-green-900 font-bold text-2xl md:text-3xl mb-4">Why Choose <span className="text-green-600">LedgerVote</span>?</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              Every vote is counted, verified, and immutable.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              {icon: <IoShieldCheckmarkOutline />, title: "Blockchain Secured"},
              {icon: <FiCheckCircle />, title: "NIN Verification"},
              {icon: <FiUsers />, title: "Custom Templates"},
              {icon: <CiLock />, title: "Eligibility Control"},
              {icon: <IoBarChartSharp />, title: "Real-time Results"},
              {icon: <GoZap />, title: "Anti-Cheat System"},
            ].map((f, i)=>(
              <motion.div 
                key={i} 
                variants={fadeUp} 
                whileHover={{ scale: 1.05 }}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 text-green-600 text-xl">
                  {f.icon}
                </div>
                <h3 className="text-green-900 font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 text-center text-white">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Make Your Voice Heard?</h2>
          <p className="text-green-100 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Join thousands of Nigerians using LedgerVote.
          </p>

          <motion.button 
            whileHover={{ scale: 1.08 }}
            className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold"
          >
            Get Started For Free
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm">
        © 2025 LedgerVote Nigeria.
      </footer>
    </div>
  );
}
