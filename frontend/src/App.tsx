import { Routes, Route } from "react-router-dom";
import Notes from "./pages/notes/Notes";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useSelector} from "react-redux";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  const user= useSelector((state: any) => state?.user.token)
  const navigate = useNavigate()

  const userMemo = useMemo(() => user, [user]);

  useEffect(() =>{
    if(!userMemo){
      navigate("/logIn");
    }else{
      navigate("/");
    }
    toast("welcome to notes app")
  },[userMemo, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={user && <Notes />} />
        <Route path="/signUp" element={!user && <Signup />} />
        <Route path="/logIn" element={!user && <Login />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
