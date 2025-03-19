import { useState, useEffect } from "react";
import { searchGithub } from "../api/API";
import { CandidateCard } from "../components/CandidateCard";
import { CandidateProps } from "../interfaces/CandidateProps";

const CandidateSearch = () => {
  const [candidateV, setCandidateV] = useState<CandidateProps | null>(null);

  const loadNextCandidate = async () => {
    try {
      const candidates = await searchGithub();

      console.log("📡 API Response:", candidates); // 🔹 Check API response

      if (!candidates || candidates.length === 0) {
        console.warn("⚠️ No candidates received from API");
        setCandidateV(null);
        return;
      }

      const selectedCandidate =
        candidates[Math.floor(Math.random() * candidates.length)];

      console.log("🎯 Selected Candidate:", selectedCandidate); // 🔹 Debug candidate selection

      if (!selectedCandidate) {
        console.error("❌ No candidate was selected.");
        return;
      }

      const formattedCandidate: CandidateProps = {
        username: selectedCandidate.login || "Unknown",
        name: selectedCandidate.name?.trim() || selectedCandidate.login,
        html_url: selectedCandidate.html_url || "Placeholder",
        location: selectedCandidate.location || "N/A",
        avatar: selectedCandidate.avatar_url || "",
        login: selectedCandidate.login || "",
        email: selectedCandidate.email?.trim() || "N/A",
        company: selectedCandidate.company?.trim() || "N/A",
        bio: selectedCandidate.bio?.trim() || "N/A",
      };

      console.log("🛠 Formatted Candidate Data:", formattedCandidate); // 🔹 Log formatted candidate

      setCandidateV(formattedCandidate);
    } catch (error) {
      console.error("❌ Error fetching candidates:", error);
      setCandidateV(null);
    }
  };

  const saveCandidate = () => {
    if (candidateV) {
      const savedCandidates = JSON.parse(
        localStorage.getItem("candidates") || "[]"
      );
      if (!savedCandidates.some((c: any) => c.login === candidateV.login)) {
        savedCandidates.push(candidateV);
        localStorage.setItem("candidates", JSON.stringify(savedCandidates));
      }
      console.log("Saved candidates:", savedCandidates);
    }
    loadNextCandidate();
  };

  useEffect(() => {
    loadNextCandidate();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-8">Candidate Search</h1>
      {candidateV ? (
        <CandidateCard
          candidate={candidateV}
          onAccept={saveCandidate}
          onReject={loadNextCandidate}
        />
      ) : (
        <p className="text-lg text-red-400">⚠️ No candidate found!</p>
      )}
    </div>
  );
};

export default CandidateSearch;
