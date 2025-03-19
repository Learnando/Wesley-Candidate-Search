const searchGithub = async () => {
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // ✅ Read token from .env
  console.log("🔍 GitHub Token from .env:", GITHUB_TOKEN); // ✅ Debugging log
  if (!GITHUB_TOKEN) {
    console.error("❌ GitHub Token is missing! Check your .env file.");
    return [];
  }

  try {
    const response = await fetch(
      "https://api.github.com/users?since=46933415",
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`, // ✅ Use the token
        },
      }
    );

    if (!response.ok) {
      const errorMessage = await response.json();
      console.error("❌ GitHub API Error:", errorMessage);
      throw new Error(
        `GitHub API responded with ${response.status}: ${errorMessage.message}`
      );
    }

    const data = await response.json();
    console.log("✅ GitHub API Response:", data);
    return data;
  } catch (error) {
    console.error("❌ Error fetching from GitHub:", error);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("invalid API response, check the network tab");
    }
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
