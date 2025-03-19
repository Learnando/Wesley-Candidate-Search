import { useState, useEffect } from "react";
import { CandidateProps } from "../interfaces/CandidateProps.tsx";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<CandidateProps[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(
      localStorage.getItem("candidates") || "[]"
    );
    setSavedCandidates(storedCandidates);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedCandidates.map((candidate) => (
            <div
              key={candidate.login}
              className="bg-white text-black p-4 rounded-lg shadow-md"
            >
              <img
                src={candidate.avatar}
                alt={candidate.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-xl font-bold">{candidate.name}</h2>
              <p>Username: {candidate.username}</p>
              <p>Location: {candidate.location}</p>
              <p>Email: {candidate.email}</p>
              <p>Company: {candidate.company}</p>
              <a
                href={candidate.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No candidates have been saved.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
