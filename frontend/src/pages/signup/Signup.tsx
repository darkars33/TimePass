import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-screen p-5 mt-36 flex justify-center">
      <div className="w-[20rem] p-5 py-10 shadow-xl flex flex-col gap-4 border">
          <h1 className="text-2xl font-semibold">SignUp</h1>
        <form action="" className="flex flex-col gap-5">
          <div>
            <input type="text" name="name" id="name" placeholder="name" className=" w-full border p-2 px-3 border-gray-300 rounded outline-none" />
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="email" className=" w-full border p-2 px-3 border-gray-300 rounded outline-none"/>
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder="password" className=" w-full border p-2 px-3 border-gray-300 rounded outline-none" />
          </div>
          <button className="p-1 bg-blue-500 rounded-lg">Create Account</button>
        </form>
        <p className="text-center">
          Already have account? <Link to="/logIn" className="text-blue-500">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
