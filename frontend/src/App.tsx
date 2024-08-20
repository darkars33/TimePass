import { Routes, Route } from "react-router-dom";
import Notes from "./pages/notes/Notes";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import ChartGraph from "./pages/charts/ChartGraph";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {

  const location = useLocation();
  const isTrue = location.pathname === "/chart";
  
  return (
    <>
      {!isTrue && <Navbar />}
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/chart" element={<ChartGraph />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
