import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="p-4">
        <Outlet /> {/* This will render nested routes */}
      </div>
    </>
  );
}

export default App;
