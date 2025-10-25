import React, { useState } from "react";
import { PlusCircle, Trash2, Save } from "lucide-react";

const CreateElection = ({ isAdmin }) => {
  const [electionTitle, setElectionTitle] = useState("");
  const [description, setDescription] = useState("");
  const [candidates, setCandidates] = useState([
    { name: "", party: "", details: "" },
  ]);
  const [message, setMessage] = useState("");

  // ✅ Protect route - Only admin can access
  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <h2 className="text-2xl font-semibold text-red-600">
          Access Denied ❌ — Admins Only
        </h2>
      </div>
    );
  }

  // Add new candidate field
  const addCandidate = () => {
    setCandidates([...candidates, { name: "", party: "", details: "" }]);
  };

  // Remove a candidate
  const removeCandidate = (index) => {
    const updated = candidates.filter((_, i) => i !== index);
    setCandidates(updated);
  };

  // Handle input change
  const handleCandidateChange = (index, field, value) => {
    const updated = [...candidates];
    updated[index][field] = value;
    setCandidates(updated);
  };

  // Submit election
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!electionTitle.trim()) {
      setMessage("Election title is required.");
      return;
    }

    if (candidates.some((c) => !c.name || !c.party)) {
      setMessage("All candidates must have a name and party.");
      return;
    }

    // Simulate save
    console.log({
      electionTitle,
      description,
      candidates,
    });

    setMessage("✅ Election created successfully!");
    setElectionTitle("");
    setDescription("");
    setCandidates([{ name: "", party: "", details: "" }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
          <PlusCircle className="w-6 h-6" /> Create New Election
        </h2>

        {message && (
          <p
            className={`mb-4 text-sm font-medium ${
              message.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Election Details */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Election Title
            </label>
            <input
              type="text"
              value={electionTitle}
              onChange={(e) => setElectionTitle(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter election title (e.g., Presidential Election)"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter brief election description"
              rows={3}
            ></textarea>
          </div>

          {/* Candidates Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Candidates
            </h3>
            {candidates.map((candidate, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 mb-4 bg-gray-50 relative"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm mb-1">
                      Candidate Name
                    </label>
                    <input
                      type="text"
                      value={candidate.name}
                      onChange={(e) =>
                        handleCandidateChange(index, "name", e.target.value)
                      }
                      className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                      placeholder="Candidate name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-1">
                      Party Name
                    </label>
                    <input
                      type="text"
                      value={candidate.party}
                      onChange={(e) =>
                        handleCandidateChange(index, "party", e.target.value)
                      }
                      className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                      placeholder="Party name"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-gray-700 text-sm mb-1">
                    Candidate Details
                  </label>
                  <textarea
                    value={candidate.details}
                    onChange={(e) =>
                      handleCandidateChange(index, "details", e.target.value)
                    }
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    placeholder="Bio or manifesto"
                    rows={2}
                  ></textarea>
                </div>
                {candidates.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCandidate(index)}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addCandidate}
              className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
            >
              <PlusCircle className="w-5 h-5 mr-1" /> Add Candidate
            </button>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="inline-flex items-center bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <Save className="w-5 h-5 mr-2" /> Save Election
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateElection;

// export default CreateElection;
