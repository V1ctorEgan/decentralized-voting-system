import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Users, BarChart3, Timer } from "lucide-react";

const Results = () => {
  const [results, setResults] = useState([
    {
      position: "President",
      candidates: [
        {
          name: "Amaka Obi",
          party: "Unity Party",
          votes: 7120000,
          image: "/avatars/amaka.jpg",
        },
        {
          name: "John Ade",
          party: "Freedom Party",
          votes: 5450000,
          image: "/avatars/john.jpg",
        },
        {
          name: "Tolu James",
          party: "Reform Party",
          votes: 3240000,
          image: "/avatars/tolu.jpg",
        },
      ],
    },
    {
      position: "Governor - Lagos State",
      candidates: [
        {
          name: "Ifeanyi Cole",
          party: "Freedom Party",
          votes: 2300000,
          image: "/avatars/ifeanyi.jpg",
        },
        {
          name: "Uche Eze",
          party: "Unity Party",
          votes: 1980000,
          image: "/avatars/uche.jpg",
        },
      ],
    },
    {
      position: "Minister of Finance",
      candidates: [
        {
          name: "Tari Johnson",
          party: "Reform Party",
          votes: 1500000,
          image: "/avatars/tari.jpg",
        },
        {
          name: "Faith Danladi",
          party: "Unity Party",
          votes: 1410000,
          image: "/avatars/faith.jpg",
        },
      ],
    },
  ]);

  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [voted, setVoted] = useState(false);

  // Calculate totals and winners
  const processedResults = results.map((item) => {
    const totalVotes = item.candidates.reduce((acc, c) => acc + c.votes, 0);
    const winner = item.candidates.reduce((max, c) =>
      c.votes > max.votes ? c : max
    );
    return { ...item, totalVotes, winner };
  });

  // Handle vote submission
  const handleVote = () => {
    if (!selectedPosition || !selectedCandidate)
      return alert("Please select a position and candidate.");
    const updated = results.map((pos) => {
      if (pos.position === selectedPosition) {
        return {
          ...pos,
          candidates: pos.candidates.map((c) =>
            c.name === selectedCandidate ? { ...c, votes: c.votes + 1 } : c
          ),
        };
      }
      return pos;
    });
    setResults(updated);
    setVoted(true);
    setTimeout(() => setVoted(false), 3000);
    setSelectedCandidate("");
    setSelectedPosition("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-4 md:p-10">
      {/* HEADER */}
      <header className="flex flex-col md:flex-row items-center justify-between mb-8 border-b pb-5">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700">
            2025 National Election Results
          </h1>
          <p className="text-gray-600 mt-1">Federal Republic of Nigeria</p>
        </div>
        <img
          src="https://flagcdn.com/w320/ng.png"
          alt="Nigeria Flag"
          className="w-16 h-10 rounded-md shadow-md mt-4 md:mt-0"
        />
      </header>

      {/* SUMMARY CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <SummaryCard
          icon={<Users />}
          label="Registered Voters"
          value="25,000,000"
          color="text-blue-600"
        />
        <SummaryCard
          icon={<BarChart3 />}
          label="Votes Cast"
          value="18,200,000"
          color="text-green-600"
        />
        <SummaryCard
          icon={<Trophy />}
          label="Turnout Rate"
          value="72.8%"
          color="text-yellow-600"
        />
        <SummaryCard
          icon={<Timer />}
          label="Last Updated"
          value="11:05 AM"
          color="text-purple-600"
        />
      </section>

      {/* VOTING SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6 mb-12"
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          🗳️ Cast Your Vote
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Select Position */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Position
            </label>
            <select
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Choose a Position --</option>
              {results.map((pos, i) => (
                <option key={i} value={pos.position}>
                  {pos.position}
                </option>
              ))}
            </select>
          </div>

          {/* Select Candidate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Candidate
            </label>
            <select
              value={selectedCandidate}
              onChange={(e) => setSelectedCandidate(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={!selectedPosition}
            >
              <option value="">-- Choose a Candidate --</option>
              {selectedPosition &&
                results
                  .find((p) => p.position === selectedPosition)
                  ?.candidates.map((c, i) => (
                    <option key={i} value={c.name}>
                      {c.name} ({c.party})
                    </option>
                  ))}
            </select>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleVote}
          className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Vote
        </motion.button>

        {voted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 font-semibold mt-4 text-center"
          >
            ✅ Vote submitted successfully!
          </motion.p>
        )}
      </motion.section>

      {/* RESULTS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {processedResults.map((result, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {result.position}
              </h2>
              <div className="flex items-center gap-2">
                <Trophy className="text-yellow-500" />
                <span className="text-sm text-gray-600 font-medium">
                  Winner:{" "}
                  <span className="text-blue-700 font-semibold">
                    {result.winner.name}
                  </span>
                </span>
              </div>
            </div>

            <div className="space-y-5">
              {result.candidates.map((c, i) => {
                const percent = ((c.votes / result.totalVotes) * 100).toFixed(
                  1
                );
                const isWinner = c.name === result.winner.name;
                return (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border transition duration-300 ${
                      isWinner
                        ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
                        : "bg-gray-50 border-gray-100 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{c.name}</p>
                        <p className="text-sm text-gray-500">{c.party}</p>
                      </div>
                      <p className="font-semibold text-gray-700">{percent}%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percent}%` }}
                        transition={{ duration: 1.2 }}
                        className={`h-2 rounded-full ${
                          isWinner
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                            : "bg-gray-400"
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 National Electoral Commission • Built with React + Tailwind
      </footer>
    </div>
  );
};

// Summary Card Component
const SummaryCard = ({ icon, label, value, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 flex flex-col items-center justify-center hover:shadow-lg transition-all"
  >
    <div className={`text-3xl mb-3 ${color}`}>{icon}</div>
    <p className="text-gray-500 text-sm">{label}</p>
    <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
  </motion.div>
);

export default Results;
