import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import CandidateSearch from "./pages/CandidateSearch";
import SavedCandidates from "./pages/SavedCandidates";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <CandidateSearch /> }, // ✅ No props passed
        { path: "SavedCandidates", element: <SavedCandidates /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // 🚀 Opt-in to new relative route resolution
    },
  }
);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
