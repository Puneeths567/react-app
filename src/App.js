import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import RoasterADD from "./Components/RoasterADD";
import RoasterFetch from "./Components/RoasterFetch";
import Appbar from "./Components/Appbar";

function App() {
  return (
    <>
      <Appbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addRoaster" element={<RoasterADD />} />
        <Route path="/fetchRoaster" element={<RoasterFetch />} />
      </Routes>
    </>
  );
}

export default App;
