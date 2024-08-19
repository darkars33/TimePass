import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/userSlice";

interface formData {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<String>("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e:any) =>{
          const {name, value} = e.target;
          setFormData({...formData, [name]: value});
  }

  const handleSubmit = async (e:any) =>{
          e.preventDefault();
          e.stopPropagation();
          const URL = `${import.meta.env.VITE_BACKEND_URL}/api/user/signup`;
          try {
                    const res = await axios({
                             method: "POST",
                             url: URL,
                             data: formData,
                             withCredentials: true 
                    })
                    console.log(res);
                    const data = res.data.data;
                    dispatch(setToken(res?.data?.token));
                    localStorage.setItem("token", res?.data?.token);
                    if(res.data.success){
                              toast.success(res?.data?.message);
                              dispatch(setUser(data));
                              navigate("/");
                    }
          } catch (error) {
                  console.log(error);  
          }
  }

  const token = useSelector((state:any) => state?.user?.token);
  console.log(token);

  return (
    <div className="w-screen p-5 mt-36 flex justify-center">
      <div className="w-[20rem] p-5 py-10 shadow-xl flex flex-col gap-4 border">
        <h1 className="text-2xl font-semibold">SignUp</h1>
        <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className=" w-full border p-2 px-3 border-gray-300 rounded outline-none"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className=" w-full border p-2 px-3 border-gray-300 rounded outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="relative flex items-center">
            <input
              type={`${showPassword === "password" ? "password" : "text"}`}
              name="password"
              id="password"
              placeholder="password"
              className=" w-full border p-2 px-3 border-gray-300 rounded outline-none"
              value={formData.password}
              onChange={handleChange}
            />
            {showPassword === "password" ? (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={() => setShowPassword("text")}
              />
            ) : (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer"
                onClick={() => setShowPassword("password")}
              />
            )}
          </div>
          <button type="submit" className="p-1 bg-blue-500 rounded-md text-white">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have account?{" "}
          <Link to="/logIn" className="text-blue-500">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
