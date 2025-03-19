import React from "react";
import { CandidateProps } from "../interfaces/CandidateProps";

interface CandidateCardProps {
  candidate?: CandidateProps; // ✅ Make candidate optional
  onAccept?: () => void; // ✅ Optional event handlers
  onReject?: () => void;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({
  candidate,
  onAccept = () => {},
  onReject = () => {},
}) => {
  if (!candidate) {
    return <p className="text-red-500">⚠️ No candidate data available!</p>;
  }

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-white w-80">
      <img
        src={candidate.avatar || "/default-avatar.png"}
        alt={`${candidate.name || "Unknown"}'s avatar`}
        className="w-32 h-32 rounded-full border-4 border-white mb-4"
      />
      <h2 className="text-xl font-semibold">
        {candidate.name || "Unknown"}{" "}
        <span className="text-gray-400">({candidate.login || "N/A"})</span>
      </h2>
      <p className="text-sm text-gray-300">📍 {candidate.location || "N/A"}</p>
      <p className="text-sm text-gray-300">🏢 {candidate.company || "N/A"}</p>
      <p className="text-sm text-gray-300">💬 {candidate.bio || "N/A"}</p>
      <div className="flex gap-4 mt-4">
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          onClick={onReject}
        >
          ❌ Reject
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          onClick={onAccept}
        >
          ✅ Accept
        </button>
      </div>
    </div>
  );
};
