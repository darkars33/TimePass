import React from "react";
import axios from "axios"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";

interface logoutProps {
  user: any;
}

const LogOut: React.FC<logoutProps> = ({user}) => {
          const dispatch = useDispatch();
          const navigate = useNavigate();

          const handleLogOut = async () =>{
                    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/user/logout`;
                    try {
                             const res = await axios.post(URL, {}, {withCredentials: true});
                             console.log(res);
                             if(res.data.status){
                                           toast.success(res.data.message);
                                           dispatch(logout());
                                           navigate("/logIn");
                                           localStorage.removeItem("token");
                             } 
                    } catch (error) {
                               console.log(error);
                              toast.error("Something went wrong");
                    }
          }
          console.log(user);
          let avatarName;
          if(user.name){
            const splitName = user?.name.split(" ");
            if(splitName.length > 1){
              avatarName = splitName[0][0] + splitName[1][0];
            }else{
              avatarName = splitName[0][0];
            }
          }

  return (
    <div className="flex justify-center items-center gap-4">
      <div className="w-11 h-11 bg-gray-300 flex justify-center items-center rounded-full">
          <h1 className="uppercase">{avatarName}</h1>
      </div>
      <div>
          <h1 className="text-sm font-semibold uppercase">{user?.name}</h1>
          <button className="underline text-gray-400 hover:text-black" onClick={handleLogOut}>LogOut</button>
      </div>
    </div>
  )
}

export default LogOut
