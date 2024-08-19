import { useEffect } from "react";
import Filter from "./Filter";
import LogOut from "./LogOut";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
          const navigate = useNavigate();
          const token = localStorage.getItem("token");
          useEffect(() =>{
                    if(!token){
                              navigate("/logIn");
                    }
          },[token])
          const user=  useSelector((state:any) => state?.user);
          console.log(user);
  return (
    <nav className="w-screen fixed top-0 p-5 px-10 shadow-lg flex items-center justify-between z-10">
      <h1 className="text-xl font-semibold">Notes</h1>
      {token && <><Filter />
      <LogOut /></>}
    </nav>
  );
};

export default Navbar;
