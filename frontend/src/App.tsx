import { Routes, Route } from "react-router-dom";
import Notes from "./pages/notes/Notes";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/logIn" element={<Login />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
