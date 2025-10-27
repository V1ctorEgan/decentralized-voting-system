import { FaArrowRight, FaWallet, FaHelicopter } from "react-icons/fa";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { IoShieldHalf, IoShieldCheckmarkOutline, IoBarChartSharp, IoSchoolOutline } from "react-icons/io5";
import { FiCheckCircle, FiUsers } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { GoZap, GoLaw } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function LandingPage() {
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  // Check if wallet is already connected on component mount
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return;

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask or another Web3 wallet!");
        return;
      }

      setIsConnecting(true);
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAddress(accounts[0]);
      setIsConnecting(false);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setIsConnecting(false);
      alert("Failed to connect wallet. Please try again.");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress("");
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="mx-4 md:mx-10 bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center text-white">
              <LuLaptopMinimalCheck />
            </div>
            <span className="text-green-900 font-semibold text-lg">LedgerVote</span>
          </div>

          {walletAddress ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 font-medium">
                  {formatAddress(walletAddress)}
                </span>
              </div>
              <button
                onClick={disconnectWallet}
                className="text-gray-600 hover:text-gray-800 text-sm underline"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="flex justify-center items-center gap-2 rounded-lg px-5 py-2 text-white bg-green-600 hover:bg-green-700 border border-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <FaWallet className="size-4" />
              {isConnecting ? "Connecting..." : "Connect Wallet"}
            </button>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-black/20 text-green-700 px-4 py-2 rounded-full mb-6 text-sm hover:border-black/40 transition-colors">
            <IoShieldHalf />
            <span>Secured by Blockchain Technology</span>
          </div>

          <h1 className="text-green-900 font-bold text-2xl md:text-4xl leading-relaxed mb-6">
            Transparent, Secure, and Decentralized Voting for Nigeria
          </h1>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Empower citizens, organizations, and institutions with a corruption-free voting platform.
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg border border-green-600 text-sm md:text-base transition-all hover:scale-105">
            <Link to="/register" className="flex items-center gap-2">
              Start Voting Now <FaArrowRight className="size-3" />
            </Link>
          </button>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center text-sm md:text-base">
            {[
              { value: "1,247", label: "Active Polls" },
              { value: "45,892", label: "Verified Voters" },
              { value: "100%", label: "Transparent" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-green-600 font-semibold">{item.value}</div>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-green-900 font-bold text-2xl md:text-3xl mb-4">
              Why Choose <span className="text-green-600">LedgerVote</span>?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              Every vote is counted, verified, and immutable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <IoShieldCheckmarkOutline />, title: "Blockchain Secured", desc: "Every vote is recorded on the blockchain with a unique transaction ID." },
              { icon: <FiCheckCircle />, title: "NIN Verification", desc: "Authenticate voters with National Identification Numbers." },
              { icon: <FiUsers />, title: "Custom Templates", desc: "Create voting templates for any use case you need." },
              { icon: <CiLock />, title: "Eligibility Control", desc: "Define who can vote with granular access controls." },
              { icon: <IoBarChartSharp />, title: "Real-time Results", desc: "View live vote counts with beautiful visualizations." },
              { icon: <GoZap />, title: "Anti-Cheat System", desc: "Multiple layers ensure one person equals one vote." },
            ].map((f, i) => (
              <div
                key={i}
                className="border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 text-green-600 text-xl">
                  {f.icon}
                </div>
                <h3 className="text-green-900 font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-green-900 font-bold text-2xl md:text-3xl mb-4">
              Built for Multiple Use Cases
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              One platform, endless possibilities. From national elections to company board votes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <GoLaw />, title: "Government", desc: "National & local elections", color: "from-green-500 to-green-600" },
              { icon: <FaHelicopter />, title: "Corporate", desc: "Board & shareholder voting", color: "from-blue-500 to-blue-600" },
              { icon: <IoSchoolOutline />, title: "Educational", desc: "Student council elections", color: "from-purple-500 to-purple-600" },
              { icon: <FiCheckCircle />, title: "Community", desc: "Local decision-making", color: "from-orange-500 to-orange-600" },
            ].map((useCase, i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-center border border-green-100 hover:shadow-lg transition-shadow">
                <div className={`h-16 w-16 bg-linear-to-br ${useCase.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white text-2xl">{useCase.icon}</div>
                </div>
                <h3 className="text-green-900 font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-green-600 to-green-700 py-16 text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Make Your Voice Heard?
          </h2>
          <p className="text-green-100 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Join thousands of Nigerians using LedgerVote to participate in transparent, secure, and corruption-free voting.
          </p>

          {walletAddress ? (
            <Link to="/setup">
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all hover:scale-105 inline-flex items-center gap-2">
                Get Started For Free
                <FaArrowRight />
              </button>
            </Link>
          ) : (
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all hover:scale-105 inline-flex items-center gap-2 disabled:opacity-50"
            >
              <FaWallet />
              {isConnecting ? "Connecting..." : "Connect Wallet to Get Started"}
            </button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm border-t border-green-100">
        © 2025 LedgerVote Nigeria. Building a transparent democracy with blockchain technology.
      </footer>
    </div>
  );
}