import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit3, Trash2, PlusCircle } from "lucide-react";
    
const nigeriaPositions = [
  "President",
  "Vice President",
  "Senate President",
  "Speaker, House of Representatives",
  "Governor",
  "Deputy Governor",
  "Minister of Finance",
  "Minister of Education",
  "Minister of Health",
  "Chief Justice of Nigeria",
  "Local Government Chairman",
  "Senator",
  "House of Representatives Member",
  "State House of Assembly Member",
  "Commissioner for Works",
  "Commissioner for Youth & Sports",
  "Commissioner for Agriculture",
  "Commissioner for Women Affairs",
  "Special Adviser to the Governor",
  "Councillor",
];

const CreateElection = () => {
  const [results, setResults] = useState([
    {
      id: 1,
      position: "President",
      winner: "John Adewale",
      party: "Unity Party",
      votes: 8200000,
    },
    {
      id: 2,
      position: "Governor",
      winner: "Grace Okon",
      party: "Alliance for Progress",
      votes: 312000,
    },
    {
      id: 3,
      position: "Senate President",
      winner: "Mohammed Musa",
      party: "National Front",
      votes: 278000,
    },
  ]);

  const [newResult, setNewResult] = useState({
    position: "",
    winner: "",
    party: "",
    votes: "",
  });

  const [isAdding, setIsAdding] = useState(false);

  const addResult = () => {
    if (!newResult.position || !newResult.winner || !newResult.party) return;
    setResults([
      ...results,
      { id: Date.now(), ...newResult, votes: parseInt(newResult.votes) || 0 },
    ]);
    setNewResult({ position: "", winner: "", party: "", votes: "" });
    setIsAdding(false);
  };

  const deleteResult = (id) => {
    setResults(results.filter((r) => r.id !== id));
  };

  const handleChange = (e) => {
    setNewResult({ ...newResult, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold mb-10 text-center text-indigo-400"
      >
        🇳🇬 Admin Election Results Dashboard
      </motion.h1>

      {/* Add New Result Section */}
      <div className="flex justify-center mb-8">
        {!isAdding ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 bg-indigo-600 px-6 py-3 rounded-full shadow-lg hover:bg-indigo-500 transition"
          >
            <PlusCircle size={20} /> Add New Result
          </motion.button>
        ) : (
          <AnimatePresence>
            <motion.div
              key="form"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg w-full max-w-lg border border-slate-700"
            >
              <h2 className="text-xl font-semibold mb-4 text-indigo-300">
                Post Election Result
              </h2>

              <div className="grid gap-4">
                <select
                  name="position"
                  value={newResult.position}
                  onChange={handleChange}
                  className="px-4 py-2 rounded bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Position</option>
                  {nigeriaPositions.map((pos, i) => (
                    <option key={i} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="winner"
                  placeholder="Winner Name"
                  value={newResult.winner}
                  onChange={handleChange}
                  className="px-4 py-2 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="party"
                  placeholder="Political Party"
                  value={newResult.party}
                  onChange={handleChange}
                  className="px-4 py-2 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="number"
                  name="votes"
                  placeholder="Total Votes"
                  value={newResult.votes}
                  onChange={handleChange}
                  className="px-4 py-2 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <div className="flex justify-between mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={addResult}
                    className="bg-green-600 px-5 py-2 rounded-lg font-semibold hover:bg-green-500"
                  >
                    Post Result
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsAdding(false)}
                    className="bg-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-red-500"
                  >
                    Cancel
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Results Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="overflow-x-auto"
      >
        <table className="w-full border border-slate-700 rounded-xl overflow-hidden">
          <thead className="bg-indigo-700">
            <tr>
              <th className="p-3 text-left">Position</th>
              <th className="p-3 text-left">Winner</th>
              <th className="p-3 text-left">Party</th>
              <th className="p-3 text-left">Votes</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            <AnimatePresence>
              {results.map((r) => (
                <motion.tr
                  key={r.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="hover:bg-slate-800 transition"
                >
                  <td className="p-3 font-semibold text-indigo-300">
                    {r.position}
                  </td>
                  <td className="p-3">{r.winner}</td>
                  <td className="p-3">{r.party}</td>
                  <td className="p-3">{r.votes.toLocaleString()}</td>
                  <td className="p-3 text-center flex justify-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <Edit3 size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => deleteResult(r.id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default CreateElection;

// CreateElection;
